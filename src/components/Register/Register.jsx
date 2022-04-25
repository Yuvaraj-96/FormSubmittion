import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className='register'>
    <h1>Register</h1>
    <input type='text' placeholder='Enter your Name'></input>
    <input type='text' placeholder='Enter your Email'></input>
    <input type='password' placeholder='Enter your Email'></input>
    <input type='password' placeholder='Re-enter your Password'></input>
    <div className="button">Register</div>
    <div>Or</div>
    <div className="button">Login</div>
    </div>
  )
}

export default Register