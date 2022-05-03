import './App.css';
// import Home from './components/Home/Home';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import RegistrationForm from './components/Form/RegistrationForm';
import LoginForm from './components/Form/LoginForm';
import Homepage from './components/HomePage/Homepage';
import Portfolioform from './components/Portfolioform/Portfolioform';
//import {useNavigate} from 'react-router-dom';
// import {useContext} from 'react';
// import {themeContext} from './Context'


function App() {
  let url;
  // const navigate= useNavigate();
   const [user, setLoginUser] = useState("");
   const [logined, setLogined] = useState(false);
  //  const [url, setUrl] = useState("");
   const[cvdetails, setCvetails] = useState({
    name:"",fullname:"",jobdescription:"",area1:"",area2:"",service:"",serviceareatitle1:"",mobile:"",email:"",
    serviceareadesc1:"",serviceareatitle2:"",serviceareadesc2:"",serviceareatitle3:"",workdescription:"",
    serviceareadesc3:"",gitlink:"",cvlink:"",yearexperiance:"",projectcomplited:"",companies:"",permition:false,currentyearexperiance:""
})
   //console.log(user)
   const pathname = window.location.pathname 
  //setUrl(pathname);
  pathname.slice("/");
  console.log(" in App.js pathname : "+pathname);
  console.log("pathname.slice(/); : "+pathname.split("/"));
  //const arryvalue=pathname.split("/");
  console.log("url ; : "+url);

 
  if(pathname.includes('user/')){
    console.log("Include is working");
    localStorage.setItem('cvurl', pathname);
    url=localStorage.getItem('cvurl');
    console.log("localStorage.getItem('cvurl') : "+localStorage.getItem('cvurl'));
  }else{
    console.log(" Include is not working");
    localStorage.removeItem('myData');

  }

  if(localStorage.getItem('logined')){
   // setLogined(true);
  //  const myTimeout = setTimeout(myGreeting, 6000);
  // function myGreeting() {
  //   alert("Time Out is working ");
  // }

 // myTimeout()

  }

  

// // remove
// localStorage.removeItem('myData');
// // remove all
// localStorage.clear();

  //  const theme = useContext(themeContext);
  //  const darkMode = theme.state.darkMode;
  // useEffect(()=>{
  //   setUrl(pathname);
  // },[pathname])
  

   //if(logined){
   // alert("If your new user Kindly register and proceed. ")
  //   navigate(`/`);
   //}
  // else{

  // }
  console.log(" in App.js logined flag : "+logined);
  return (
    <div className="App1">
{/* element={<LoginForm  setLoginUser={setLoginUser}/>} */}
      
        <BrowserRouter>
      <Routes>       
      {/* { logined && logined?<Route path="user/:userID" element={<Homepage user={user}  cvdetails={cvdetails}  />}  />:<Route path="/"  element={<LoginForm setLogined={setLogined} setLoginUser={setLoginUser} />}  />}     */}
        
      <Route path="user/:userID" element={(logined||localStorage.getItem('logined'))?<Homepage setLogined={setLogined} user={user} url={url} cvdetails={cvdetails}  />:<LoginForm url={url} setLogined={setLogined} setLoginUser={setLoginUser}  />}  />   
        <Route path="/" element={<LoginForm url={url} setLogined={setLogined} setLoginUser={setLoginUser}  />} />
        <Route path="Register" element={<RegistrationForm url={url} setLogined={setLogined} setLoginUser={setLoginUser} />} />
        <Route path="Portfolioform" element={<Portfolioform  setCvetails={setCvetails} />} />
        {/* { user && user._id?<Route path="user/:userID" element={<Homepage user={user}  cvdetails={cvdetails}  />}  />:<Route path="/"  element={<LoginForm setLogined={setLogined} setLoginUser={setLoginUser} />}  />} */}
        {/* <Route path="/registration" element={<Register />} /> */}
         {/* <Route path="user/:userID" element={<Homepage cvdetails={cvdetails} />}  /> */}
        {/* <Route path="/" element={<Home />}  /> */}
      </Routes>
    </BrowserRouter> 
      
    </div>
  );
}

export default App;
