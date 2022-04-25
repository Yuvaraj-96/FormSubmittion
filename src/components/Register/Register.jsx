import React,{useState} from 'react';
import './Register.css';

const Register = () => {
  const [user, setUser] = useState({
    name:"",email:"",password:"",reEnterPassword:""
  })
  const handelChange=(e)=>{
    const { name, value} = e.traget;
    setUser({
      ...user,[name]: value
    })

  }
  return (
    <div className='register'>
    <h1>Register</h1>
    <input name='name' value={user.name} type='text' placeholder='Enter your Name' onChange={handelChange}></input>
    <input name='email' value={user.email}  type='text' placeholder='Enter your Email' onChange={handelChange}></input>
    <input name='password' value={user.password}  type='password' placeholder='Enter your Email'onChange={handelChange}></input>
    <input name='reEnterPassword' value={user.reEnterPassword}  type='password' placeholder='Re-enter your Password' onChange={handelChange}></input>
    <div className="button">Register</div>
    <div>Or</div>
    <div className="button">Login</div>
    </div>
  )
}

export default Register