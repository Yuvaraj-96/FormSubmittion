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
// import {useContext} from 'react';
// import {themeContext} from './Context'


function App() {
   const [user, setLoginUser] = useState("");
   const[cvdetails, setCvetails] = useState({
    name:"",fullname:"",jobdescription:"",area1:"",area2:"",service:"",serviceareatitle1:"",
    serviceareadesc1:"",serviceareatitle2:"",serviceareadesc2:"",serviceareatitle3:"",
    serviceareadesc3:"",gitlink:"",cvlink:"",yearexperiance:"",projectcomplited:"",companies:""
})
   console.log(user)
  //  const theme = useContext(themeContext);
  //  const darkMode = theme.state.darkMode;
  
  return (
    <div className="App1">
{/* element={<LoginForm  setLoginUser={setLoginUser}/>} */}
      
        <BrowserRouter>
      <Routes>       
      { user && user._id?<Route path="user/:userID" element={<Homepage user={user}  cvdetails={cvdetails}  />}  />:<Route path="/"  element={<LoginForm setLoginUser={setLoginUser} />}  />}
      <Route path="user/:userID" element={<Homepage user={user}  cvdetails={cvdetails} />}  />
        {/* <Route path="/" element={<Home />}  /> */}
        <Route path="/" element={<LoginForm />} />
        <Route path="Register" element={<RegistrationForm />} />
        <Route path="Portfolioform" element={<Portfolioform  setCvetails={setCvetails} />} />
        {/* <Route path="/registration" element={<Register />} /> */}
      </Routes>
    </BrowserRouter> 
      
    </div>
  );
}

export default App;
