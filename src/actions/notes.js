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