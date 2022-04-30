import React from 'react'
// import './App.css';
import Contactus from '../Contactus/Contactus';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Works from '../Works/Works';
// import Contactus from '../Contactus/Contactus'
//import {themeContext} from './Context';
import {useContext} from 'react';
import {themeContext} from '../../Context';
import './Homepage.css';
import axios from 'axios';
// import Card from '../Cards/Card'
// import Works from '../Works/Works';



const Homepage = ({user}) => {
  const name=user;

  console.log("Data got from Login component: " +name);

  const onloadfunction = () => {
    console.log('page is fully loaded');
     axios.get("http://localhost:9002/getuserdata",{username:name}).then(res=>{

  
        if(res.data.message){
          alert(res.data.message);
        }else{
          //res.data.
  
        }
        
       
      })
  };
  

  // const onload=()=>{
    
  //     axios.get("http://localhost:9002/getuserdata",{username:name}).then(res=>{

  //       if(res.data.message){
  //         alert(res.data.message);
  //       }else{

  //       }
        
       
  //     })
    
  // }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Homepage" onLoad={onloadfunction}
    style={{
      background:darkMode?'black':'',
      color:darkMode?'white':'',
  }} 
    >
      <Navbar/>
       <Intro/>
       <Services/>
       <Experience/>
       <Works/>
       <Portfolio/>
       <Testimonials/>
       <Contactus/>
       <Footer/>
    </div>
  )
}

export default Homepage