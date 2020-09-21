import React from 'react'
import { JournalEntries } from './JournalEntries'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from './../../actions/auth';
import { startNewNote } from './../../actions/notes';

export const Sidebar = () => {
    const { name } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout())
    }

    const handleAddNewEntry = () => {
        dispatch(startNewNote())
    }

    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">
                <h3>
                    <span> Hello, { name }!  👋</span>
                </h3>

                <button
                    className="btn btn-white"
                    onClick={ handleLogout }
                    >
                     <span>Sign out  </span>  <i className="fas fa-sign-out-alt"> </i>
                </button>
            </div>

            <div
            className="journal__new-entry"
            onClick={ handleAddNewEntry }
            >
                <i className="fas fa-plus fa-2x"></i>
                <p className="mt-2">
                    Create new entry
                </p>
            </div>

            <JournalEntries />

        </aside>
    )
}
