import React, {useState} from 'react'
import './Form.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


//setUrl={setUrl} setLogined={setLogined} setLoginUser={setLoginUser}
const LoginForm = ({url,setLogined,setLoginUser}) => {


//     const pathname = window.location.pathname 
//   //setUrl(pathname);
//   pathname.slice("/");
//   console.log(" in App.js pathname : "+pathname);
//   console.log("pathname.slice(/); : "+pathname.split("/"));
//   const arryvalue=pathname.split("/");
// //   console.log("url ; : "+url);

    


    const [user, setUser] = useState({
        email:"",password:""
      })
      const navigate= useNavigate();
      const loginpost=async()=>{
        const{email,password} = user;
        if(email && password){
          await axios.post("https://portfoliobn.herokuapp.com/login",user).then(res=>{
           // alert(res.data.message); 

           if(res.data.message.includes("User not register already")||res.data.message.includes("Password is incorrect")) {
            alert(res.data.message+". Kindly register yourself to view the resume."); 
            navigate(`/Register`);           
           }else{
            alert(res.data.message); 
            localStorage.setItem('logined',true);
            setLogined(true);
            setLoginUser(res.data.user.name);
            if(url||localStorage.getItem('cvurl')){
            navigate(`${localStorage.getItem('cvurl')}`);
            }else{
                console.log(" write code for the sample CV ");
                // write code for the sample CV
                localStorage.setItem('sampleCV',"yuvaraj");
                navigate(`/user/yuvaraj`);
            }
           }
            
            
             //navigate("/Homepage");
          })
          //setLoginUser(user);
        }else{
          alert("Invalid Input");
        }
        
      }
      const handelChange=e=>{
        const { name, value} = e.target;
        if(name==="email"){
            setUser({...user,[name]: value.toLowerCase()})

        }else{
            setUser({
                ...user,[name]: value
              })
        }
        
      }
     
  return (
      <div className="body1">
   <div className="container" >
       <div className="title">Log In</div>
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
           <div className="f-button">
               <input type="submit" value="Login" onClick={loginpost} />
               {/* <div className='or'>Or</div> */}
               <input type="submit" value="Register" onClick={()=>{navigate("/Register")}} />
           </div>
       </div>
   </div>
   </div>
  )
}

export default LoginForm