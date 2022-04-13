import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container d-flex justify-content-center'>
            <div className='form-title'>
                <h1 className='text-primary'>Login</h1>
                <form>
                    <div class="mb-3 ">
                        <label htmlFor='email' class="form-label">Email address</label>
                        <input type="email" name='email' class="form-control" />
                    </div>
                    <div class="mb-3 ">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" />
                        <label class="form-check-label" >Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;