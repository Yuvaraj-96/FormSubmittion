import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from '../../img/heartemoji.png';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';



const Services = () => {
    const transition = {duration:1, type:'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
   <div className="services" id='Services'>
       <div className="awesome">
           <span style={{color:darkMode?'white':''}}> My Awesome</span>
           <span>services</span>
           <span>Lorem <br/>ispum</span>
           <a href={Resume} download>
           <button className='button s-button'>Download CV</button>
           </a>
          
           <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>

       </div>
       <div className="cards">
           <motion.div 
           initial={{left:'25%'}}
           whileInView={{left:'18rem'}}           
           transition={transition}
        //    style={{left:'18rem'}}
        >
               <Card emoji={HeartEmoji} heading={'Frontend'} detail={"HTML, CSS, ES6, React"}/>                           
           </motion.div>
           <motion.div
           initial={{ left: "-11rem", top: "12rem" }}
           whileInView={{ left: "-4rem" }}
           transition={transition}
          // style={{top:'12rem',left:'-4rem'}}
           >
               <Card emoji={Glasses} heading={'Backend'} detail={"Node.js, Express.js, MongoDB"}/>                           
           </motion.div>
           <motion.div 
           initial={{ top: "19rem", left: "25rem" }}
           whileInView={{ left: "12rem" }}
           transition={transition}
           //style={{top:'19rem',left:'12rem'}}
           >
              <Card emoji={Humble} heading={'Automation & Development Tools'} detail={"Selenium Webdriver, TestNG, GitHub"}/>             
           </motion.div>
           <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
       </div>
   </div>
  )
}

export default Services