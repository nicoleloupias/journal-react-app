import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from './../../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin } from './../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch()
    const {loading} = useSelector( (state) => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(startLoginEmailPassword(email,password))
    }

    const handleGoogleLogin = () =>{
        dispatch(startGoogleLogin())
    }
    return (
        <>
            <h2 className="auth__title">Sign in</h2>

            <form
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={handleLogin}
            >

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


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                    Sign in
                </button>

                <p className="or-divider mt-2"> -- or --</p>
                <div className="auth__social-networks">
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>

                        <p className="btn-text">
                            Sign in with Google
                        </p>
                    </div>
                </div>
               <div className="auth__otherOption">
                <p>
                    Don't have an account?
                </p>
                <Link
                    to="/auth/register"
                    className="link"
                >
                     Sign up
                </Link>
               </div>

            </form>
        </>
    )
}
