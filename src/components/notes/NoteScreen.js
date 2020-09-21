import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from './../../hooks/useForm'
import { activeNote } from '../../actions/notes'

export const NoteScreen = () => {
    const dispatch = useDispatch()
    const { active: note } = useSelector( state => state.notes )
    const [formValues, handleInputChange, reset ] = useForm( note )
    const { body, title } = formValues

    const activeId = useRef(note.id)

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note)
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}))
    }, [formValues, dispatch])



    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div
                className="notes__image animate__animated animate__fadeIn animate__faster"
                style={
                    {
                        backgroundImage:
                        `url(${note.url})`
                    }
                }>
            </div>
            <div className="notes__content animate__animated animate__fadeIn animate__faster">
                <input
                    type="text"
                    placeholder="Write an awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                    name="body"
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>
            </div>
        </div>
    )
}
