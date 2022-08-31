import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { startSaveNote } from '../../actions/notes';
import moment from 'moment';

export const NotesAppBar = () => {

  const dispatch = useDispatch();
  const { active: note } = useSelector( state => state.notes );
  const date = moment(note.date);

  const handleSaveNote = () => {

    dispatch( startSaveNote( note ) )

  }

  return (
    <div className='notes__appbar'>
        <span>{ date.format('MMMM Do YYYY') }</span>
        
        <div>
            <button className='btn'>
                Picture
            </button>

            <button 
              className='btn'
              onClick={ handleSaveNote }>
                Save
            </button>
        </div>
    </div>
  )
}
