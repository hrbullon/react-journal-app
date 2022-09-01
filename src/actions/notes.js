import Swal from "sweetalert2";

import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { parseSnapShot } from "../helpers/loadData";
import { types } from "../types/types";

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${ uid }/journal/notes`).add( newNote );
        
        dispatch( addNote( docRef.id, newNote ) );
        dispatch( activeNote( docRef.id, newNote ) );
    }
}

export const startLoadNotes = () => {

    return async (dispatch, getState ) =>{

        const { uid } = getState().auth;

        const snapShot = await db.collection(`${ uid }/journal/notes`).get();
        const notes = parseSnapShot( snapShot );

        dispatch( setNotes( notes ) );
    }
}

export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload:{
        id,
        ...note
    }
})

export const addNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload:{
        id,
        ...note
    }
})

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNote = ( note ) => {
    return async ( dispatch, getState ) => {
        
        const { uid } = getState().auth;

        if( !note.url){
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore )
        .then( () =>{

            Swal.fire("Saved", note.title, "success");
            dispatch( refreshNote(note.id, noteToFirestore) );
        
        }).catch( () => {
            console.log("Hubo un error, intente mas tarde!");
        });


    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})

export const startUploading = ( file ) => {
    return async ( dispatch, getState ) => {

        const { active: activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showLoaderOnConfirm: true,
        });

        const fileUrl = await fileUpload( file );
        activeNote.url = fileUrl;

        dispatch( startSaveNote( activeNote ) );
        dispatch( activeNote( activeNote ) );

        Swal.close();

    }
}

export const startDeletingNote = ( ) => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { active: note } = getState().notes;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).delete()
        .then( () =>{

            Swal.fire("Saved", note.title, "success");
            
            dispatch( deleteNote(note.id) );
        
        }).catch( () => {
            console.log("Hubo un error, intente mas tarde!");
        });

    }
}

export const deleteNote = ( id ) => ({
    type: types.notesDelete,
    payload: id
})

export const notesLogout = () => ({
    type: types.notesLogoutCleaning
})