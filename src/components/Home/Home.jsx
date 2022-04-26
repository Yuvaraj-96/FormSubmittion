import React from 'react';
import './Home.css';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  // const logout=()=>{

  // }
  const navigate= useNavigate();
  return (
    <div className='homepage'>
        <h1>Home Page</h1>
        <div className="button" onClick={()=>{navigate("/login")}}>Logout</div>
    </div>
  )
}

export default Home