import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes'

export const JournalEntry = ({ id, date, title, body, url}) => {
    const dispatch = useDispatch();

    const noteDate = moment(date)
    const handleEntryClick = () => {
        dispatch(activeNote(
            id, {
                    date, title, body, url
                }
            ))
    }
    const handleDelete = () => {
        dispatch(startDeleting(id))
   }

    return (
        <div
        className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
        onClick={ handleEntryClick }
        >
            {
                url &&
                <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
                }}
                ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { (title.length > 15) ? `${title.slice(0, 15)}...` : title }
                </p>
                <p className="journal__entry-content">
                    { (body.length > 30) ? `${body.slice(0, 25)}...` : body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('Do')}</h4>
            </div>
            <button
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                <i className="far fa-trash-alt"></i>
            </button>

        </div>
    )
}
