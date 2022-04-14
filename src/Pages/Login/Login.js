import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/home';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    if (user) {
        navigate(from, { replace: true })

    }

    const handleUserLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)

    }

    return (
        <div className='form-container d-flex justify-content-center'>
            <div className='form-title'>
                <h1 className='text-primary'>Login</h1>
                <form onSubmit={handleUserLogin}>
                    <div className="mb-3 ">
                        <label htmlFor='email' className="form-label">Email address</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" required />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label" htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" className="form-control" required />
                    </div>
                    <div className="mb-3 form-check">
                        <input className='mx-2' type="checkbox" required />
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <p className='text-danger'>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit bg-primary ' type="submit" value="Login" required />
                </form>
                <p className='d-flex justify-content-end'>
                    Already a user?  <Link className='text-primary form-link mx-2' to='/signup'>Create an account!</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;