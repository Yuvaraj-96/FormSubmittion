import React,{useState}from 'react';
import './Login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



 const Login = ({setLoginUser}) => { 
  //
  const [user, setUser] = useState({
    email:"",password:""
  })
  const navigate= useNavigate();
  const loginpost=()=>{
    const{name,email,password,reEnterPassword} = user;
    if(email && password){
      axios.post("http://localhost:9002/login",user).then(res=>{
        alert(res.data.message); 
        setLoginUser(res.data.user);
         navigate("/");
      })
      setLoginUser(user);
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
   <div className="login">
     {console.log(("User : "+user.email))}
     <h1>Login</h1>
     <input name='email' value={user.email} type='text' placeholder='Enter your Email' onChange={handelChange}></input>
     <input name='password' value={user.password} type='password' placeholder='Enter your Password' onChange={handelChange}></input>
     <div className="button" onClick={loginpost}>Login</div>
     <div>Or</div>
     <div className="button" onClick={()=>{navigate("/registration")}}>Register</div>
   </div>
  )
}

export default Login