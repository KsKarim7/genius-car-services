import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }

    const handleCreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('both of your passwords do not match')
            return;
        }
    }

    return (
        <div className='form-container d-flex justify-content-center'>
            <div className='form-title'>
                <h1 className='text-primary'>Sign Up</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="mb-3 ">
                        <label htmlFor='email' className="form-label" >Email address</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" required />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label" htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" className="form-control" name='password' required />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor='confirm-password' className="form-label">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" className="form-control" name='confirm-password' required />
                    </div>
                    <div className="mb-3 form-check">
                        <input className='mx-2' type="checkbox" />
                        <label className="form-check-label" >Check me out</label>
                    </div>
                    <p className='text-danger' >{error}</p>
                    <input className='form-submit bg-primary ' type="submit" value="Sign Up" />
                </form>
                <p className='d-flex justify-content-end'>
                    Existing User?<Link className='text-primary form-link mx-2' to='/login'>Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;