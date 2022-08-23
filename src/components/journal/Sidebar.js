import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { startLogout } from '../../actions/auth'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
  
    const dispatch = useDispatch();
    const { name: displayName } = useSelector( state => state.auth )


    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar'>
                <h3 className='mt-5'>
                    <i className='far fa-moon'></i>
                    <span> { displayName } </span>
                </h3>

                <button 
                    className='btn'
                    onClick={ handleLogout }
                >
                    Logout
                </button>
            </div>

            <div className='journal__new-entry'>
                <i className='far fa-calendar-plus fa-5x'></i>
                <p>
                    New Entry
                </p>
            </div>

            <JournalEntries />
        </aside>
    )
}
