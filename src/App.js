import './App.css';
// import Home from './components/Home/Home';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import RegistrationForm from './components/Form/RegistrationForm';
import LoginForm from './components/Form/LoginForm';
import Homepage from './components/HomePage/Homepage';
import Portfolioform from './components/Portfolioform/Portfolioform';
//import {useNavigate} from 'react-router-dom';
// import {useContext} from 'react';
// import {themeContext} from './Context'


function App() {
  // const navigate= useNavigate();
   const [user, setLoginUser] = useState("");
   const [logined, setLogined] = useState(false);
   const [url, setUrl] = useState("");
   const[cvdetails, setCvetails] = useState({
    name:"",fullname:"",jobdescription:"",area1:"",area2:"",service:"",serviceareatitle1:"",
    serviceareadesc1:"",serviceareatitle2:"",serviceareadesc2:"",serviceareatitle3:"",
    serviceareadesc3:"",gitlink:"",cvlink:"",yearexperiance:"",projectcomplited:"",companies:"",permition:false
})
   console.log(user)
   const pathname = window.location.pathname 
  //setUrl(pathname);
  pathname.slice("/");
  console.log(" in App.js pathname : "+pathname);
  console.log("pathname.slice(/); : "+pathname.split("/"));
  const arryvalue=pathname.split("/");
  console.log("arryvalue ; : "+arryvalue);
  //  const theme = useContext(themeContext);
  //  const darkMode = theme.state.darkMode;
  useEffect(()=>{
    setUrl(pathname);
  },[pathname])
  

   if(logined){
    alert("If your new user Kindly register and proceed. ")
  //   navigate(`/`);
   }
  // else{

  // }
  
  return (
    <div className="App1">
{/* element={<LoginForm  setLoginUser={setLoginUser}/>} */}
      
        <BrowserRouter>
      <Routes>       
      {/* { logined && logined?<Route path="user/:userID" element={<Homepage user={user}  cvdetails={cvdetails}  />}  />:<Route path="/"  element={<LoginForm setLogined={setLogined} setLoginUser={setLoginUser} />}  />}     */}
        
      <Route path="user/:userID" element={logined && logined?<Homepage user={user} url={url} cvdetails={cvdetails}  />:<LoginForm setUrl={setUrl} setLogined={setLogined} setLoginUser={setLoginUser} /> }  />   
        <Route path="/" element={<LoginForm />} />
        <Route path="Register" element={<RegistrationForm setUrl={setUrl} setLogined={setLogined} setLoginUser={setLoginUser} />} />
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
