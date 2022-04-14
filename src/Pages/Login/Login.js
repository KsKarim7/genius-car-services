import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container d-flex justify-content-center'>
            <div className='form-title'>
                <h1 className='text-primary'>Login</h1>
                <form>
                    <div className="mb-3 ">
                        <label htmlFor='email' className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" required />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label" htmlFor='password'>Password</label>
                        <input type="password" className="form-control" required />
                    </div>
                    <div className="mb-3 form-check">
                        <input className='mx-2' type="checkbox" required />
                        <label className="form-check-label" >Check me out</label>
                    </div>
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