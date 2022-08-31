import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
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
