import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>

        <NotesAppBar />

        <div className='notes__content'>

          <input 
            type="text"
            placeholder="Some awesone title"
            className="notes__title-input"  
          />

          <textarea 
            placeholder='What happenend today'
            className='notes__textarea'
          />

          <div className='notes__image'>
            <img 
              src="https://th.bing.com/th/id/OIP.7hf8IOtnSKYT0GKTGji3ZwHaEK?pid=ImgDet&rs=1"
              alt="imagen"
            />
          </div>

        </div>
    
    </div>
  )
}
