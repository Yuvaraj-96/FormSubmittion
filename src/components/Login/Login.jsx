import React,{useState}from 'react';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState({
    email:"",password:""
  })
  const handelChange=(e)=>{
    const { name, value} = e.traget;
    setUser({
      ...user,[name]: value
    })
  }
  return (
   <div className="login">
     {console.log(("User : "+user))}
     <h1>Login</h1>
     <input name='email' value={user.email} type='text' placeholder='Enter your Email' onChange={handelChange}></input>
     <input name='password' value={user.password} type='password' placeholder='Enter your Password' onChange={handelChange}></input>
     <div className="button">Login</div>
     <div>Or</div>
     <div className="button">Register</div>
   </div>
  )
}

export default Login