import React, {useState} from 'react'
import './Form.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const LoginForm = ({setLoginUser}) => {
    const [user, setUser] = useState({
        email:"",password:""
      })
      const navigate= useNavigate();
      const loginpost=()=>{
        const{fullname,name,email,phoneNumber,password,reEnterPassword} = user;
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
   <div className="container">
       <div className="title">Registarion</div>
       <div className="form">
           <div className="user-details">
               {/* <div className="input-box">
                   <span className="details">Full Name</span>
                   <input name='fullname' type="text" value={user.fullname} placeholder="Enter your Name" required  onChange={handelChange} />
               </div> */}
               {/* <div className="input-box">
                   <span className="details">Username</span>
                   <input name='name' type="text"  value={user.name} placeholder="Enter your Username" required onChange={handelChange} />
               </div> */}
               <div className="input-box">
                   <span className="details">Email</span>
                   <input name='email' type="text" value={user.email}  placeholder="Enter your Email" required onChange={handelChange} />
               </div>
               {/* <div className="input-box">
                   <span className="details">Phone Number</span>
                   <input name='phoneNumber'type="text" value={user.phoneNumber} placeholder="Enter your Number" required onChange={handelChange} />
               </div> */}
               <div className="input-box">
                   <span className="details">Password</span>
                   <input name='password' type="password" value={user.password}  placeholder="Enter your Password" required  onChange={handelChange} />
               </div>
               {/* <div className="input-box">
                   <span className="details">Confirm Password</span>
                   <input name='reEnterPassword' type="password" value={user.reEnterPassword} placeholder="Enter your Password" required onChange={handelChange}  />
               </div> */}
           </div>
           {/* <div className="gender-details">
               <input type="radio" name="gender" id="dot-1" />
               <input type="radio" name="gender" id="dot-2" />
               <input type="radio" name="gender" id="dot-3" />
               <span className="gender-title">Gender</span>
               <div className="category">
                   <label htmlFor="dot-1">
                       <span className="dot one" name="gender" value='Male' onClick={setUser({...user,gender: 'Male'}) } ></span>
                       <span className="gender" name="gender" value='Male' onClick={setUser({...user,gender: 'Male'}) } >Male</span>
                   </label>
                   <label htmlFor="dot-2">
                       <span className="dot two" name="gender" value='Male' onClick={setUser({...user,gender: 'Male'}) } ></span>
                       <span className="gender" name="gender" value='Male' onClick={setUser({...user,gender: 'Male'}) } >Female</span>
                   </label>
                   <label htmlFor="dot-3">
                       <span className="dot three" name="gender" value='Male' onClick={setUser({...user,gender: 'Male'}) } ></span>
                       <span className="gender" name="gender" value='Male' onClick={setUser({...user,gender:'Male'}) } >Others</span>
                   </label>
               </div>
           </div> */}
           <div className="button">
               <input type="submit" value="Login"  onClick={()=>{navigate("/Register")}}/>
               {/* <div className='or'>Or</div> */}
               <input type="submit" value="Register"onClick={loginpost} />
           </div>
       </div>
   </div>
  )
}

export default LoginForm