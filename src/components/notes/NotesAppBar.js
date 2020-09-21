import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'
import moment from 'moment'

export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const { active } = useSelector( state => state.notes );

    const handleSave = () => {
        dispatch(startSaveNote(active))
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if ( file ) {
            dispatch(startUploading( file ))
        }
    }

    return (
        <div className="notes__appbar animate__animated animate__fadeIn animate__faster">
            <span> { moment(active.date).format('dddd MMM Do') }</span>

            <input
                id="fileSelector"
                type="file"
                style={{ display: 'none' }}
                name="File"
                onChange={ handleFileChange }
            />
            <div>
                <button
                    className="btn btn-white"
                    onClick={ handlePictureClick }
                >
                    Set header image
                </button>

                <button
                    className="btn btn-white ml-2"
                    onClick={ handleSave }
                >
                    <span>Save </span><i className="far fa-check-circle"> </i>
                </button>
            </div>
        </div>
    )
}
