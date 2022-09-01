import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { NotesAppBar } from './NotesAppBar';
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeletingNote } from '../../actions/notes';

export const NoteScreen = () => {

  const dispatch = useDispatch();
  const { active: note } = useSelector( state => state.notes );
  const [ formValues, handleInputChange, reset ] = useForm( note );
  const { body, title, url } = formValues;

  const activeId = useRef( note.id );

  useEffect(() => {
      
      if( note.id !== activeId.current ){
        reset(note);
        activeId.current = note.id;
      }

  }, [ note, reset ])

  useEffect(() => {
    
    dispatch( activeNote( formValues.id, {...formValues} ) );

  }, [formValues])

  const handleDelete = () => {
    dispatch( startDeletingNote() );
  }

  return (
    <div className='notes__main-content'>

        <NotesAppBar />

        <div className='notes__content'>

          <input 
            type="text"
            name="title"
            placeholder="Some awesone title"
            className="notes__title-input"  
            value={ title }
            onChange={ handleInputChange }
          />

          <textarea 
            name="body"
            placeholder='What happenend today'
            className='notes__textarea'
            value={ body }
            onChange={ handleInputChange }
          >
          </textarea>

          {
            (note.url) &&
              (
                <div className='notes__image'>
                  <img 
                    src={ note.url }
                    alt="imagen"
                  />
                </div>
              )
          }

          <button
            className='btn btn-danger'
            onClick={ handleDelete }>
            Delete
          </button>

        </div>
    
    </div>
  )
}
