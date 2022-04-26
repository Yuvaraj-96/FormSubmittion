import React,{useState} from 'react';
import './Register.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';





const Register = () => {
  const [user, setUser] = useState({
    name:"",email:"",password:"",reEnterPassword:""
  });

  const navigate= useNavigate();
  const registerpost=()=>{
    const{name,email,password,reEnterPassword} = user;
    if(name && email && password && (password===reEnterPassword)){
      axios.post("http://localhost:9002/register",user).then(res=>{
        alert(res.data.message);
        navigate("/login");
      })
    }else{
      alert("Invalid Input");
    }
    
  }

  const handelChange=e=>{
    const { name, value} = e.target;
    setUser({
      ...user,[name]: value
    })   

  }


  return (
    <div className='register'>
    <h1>Register</h1>
    <input name='name' value={user.name} type='text' placeholder='Enter your Name' onChange={handelChange}></input>
    <input name='email' value={user.email}  type='text' placeholder='Enter your Email' onChange={handelChange}></input>
    <input name='password' value={user.password}  type='password' placeholder='Enter your Password'onChange={handelChange}></input>
    <input name='reEnterPassword' value={user.reEnterPassword}  type='password' placeholder='Re-enter your Password' onChange={handelChange}></input>
    <div className="button" onClick={registerpost}>Register</div>
    <div>Or</div>
    <div className="button" onClick={()=>{navigate("/login")}}>Login</div>
    </div>
  )
}

export default Register