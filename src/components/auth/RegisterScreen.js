import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from './../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'
import { setErrorAction, removeError } from '../../actions/ui'
import validator from 'validator'

export const RegisterScreen = () => {

   const dispatch = useDispatch();
   const {msgError} = useSelector( (state) => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = formValues


    const handleRegister = (e) =>{
        e.preventDefault()

        if (isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setErrorAction('Name is required'))
            return false
        } else if (!validator.isEmail(email)){
            dispatch(setErrorAction('Email is not valid'))
            return false
        } else if ( password !== password2 || password.length < 5){
            dispatch(setErrorAction('Password should be at least 6 characters and match each other'))
            return false
        }
        dispatch(removeError())
        return true
    }

    return (
        <>
            <h2 className="auth__title">Sign up</h2>

            <form
                onSubmit={handleRegister}
                className="animate__animated animate__fadeIn animate__faster"
            >
                {
                    msgError &&
                    (<div className="auth__alert-error">
                    { msgError }
                </div>)
                }
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Sign up
                </button>

                <div className="auth__otherOption">
                    <p>
                        Already registered?
                    </p>
                    <Link
                        to="/auth/login"
                        className="link"
                    >
                        Sign in
                    </Link>
                </div>


            </form>
        </>
    )
}
