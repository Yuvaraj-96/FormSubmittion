import React from 'react'
// import './App.css';
// import Contactus from './components/Contactus/Contactus';
// import Experience from './components/Experience/Experience';
// import Footer from './components/Footer/Footer';
// import Intro from './components/Intro/Intro';
 //import Navbar from './components/Navbar/Navbar';
 //import Navbar from 'src\components\Navbar\Navbar'
// import Portfolio from './components/Portfolio/Portfolio';
// import Services from './components/Services/Services';
// import Testimonials from './components/Testimonials/Testimonials';
// import Works from './components/Works/Works';
// import Contactus from 'src/components/Contactus/Contactus'
// import {themeContext} from './Context';
// import {useContext} from 'react';
import Card from '../Cards/Card'
import Works from '../Works/Works';

const Homepage = () => {
  //   const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
    style={{
      // background:darkMode?'black':'',
      // color:darkMode?'white':'',
  }}

    >
       {/* <Navbar/> */}
       {/* <Intro/>
       <Services/>
       <Experience/>
       
       <Portfolio/>
       <Testimonials/>
       <Contactus/>
       <Footer/> */}
       <Works/>
       <Card/>
    </div>
  )
}

export default Homepage