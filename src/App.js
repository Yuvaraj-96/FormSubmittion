import './App.css';
// import Home from './components/Home/Home';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import RegistrationForm from './components/Form/RegistrationForm';
import LoginForm from './components/Form/LoginForm';
import Homepage from './components/HomePage/Homepage';


function App() {
   const [user, setLoginUser] = useState()
   console.log(user)
 
  
  return (
    <div className="App">

      
        <BrowserRouter>
      <Routes>       
      { user && user._id?<Route path="/" element={<Homepage />}  />:<Route path="/" element={<LoginForm  setLoginUser={setLoginUser}/>} />}
        {/* <Route path="/" element={<Home />}  /> */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<RegistrationForm />} />
        {/* <Route path="/registration" element={<Register />} /> */}
      </Routes>
    </BrowserRouter> 
      
    </div>
  );
}

export default App;
