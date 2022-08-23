import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";

import { NotesAppBar } from './NotesAppBar';
import { useForm } from "../../hooks/useForm";

export const NoteScreen = () => {

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

        </div>
    
    </div>
  )
}
