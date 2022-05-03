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



const Services = ({portfoliodata}) => {
    const transition = {duration:1, type:'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
   <div className="services" id='Services'>
       <div className="awesome">
           <span style={{color:darkMode?'white':''}}> My Awesome</span>
           <span>services</span>
           <span className='s-wrap'>{portfoliodata.service?portfoliodata.service:" "}</span>
           <a href={portfoliodata.cvlink?portfoliodata.cvlink:Resume} download>
           <button className='button s-button p-button'>Download CV</button>
           </a>
          
           <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>

       </div>
       <div className="cards">
           <motion.div 
           initial={{left:'25%'}}
           whileInView={{left:'18rem'}}           
           transition={transition}
        //    style={{left:'18rem'}}portfoliodata.linkedinlink?portfoliodata.linkedinlink:
        >
               <Card emoji={HeartEmoji} heading={portfoliodata.serviceareatitle1} detail={portfoliodata.serviceareadesc1?portfoliodata.serviceareadesc1:"HTML, CSS, ES6, React"}/>                           
           </motion.div>
           <motion.div
           initial={{ left: "-11rem", top: "12rem" }}
           whileInView={{ left: "-4rem" }}
           transition={transition}
          // style={{top:'12rem',left:'-4rem'}}
           >
               <Card emoji={Glasses} heading={portfoliodata.serviceareatitle2?portfoliodata.serviceareatitle2:'Backend'} detail={portfoliodata.serviceareadesc2?portfoliodata.serviceareadesc2:"Node.js, Express.js, MongoDB"}/>                           
           </motion.div>
           <motion.div 
           initial={{ top: "19rem", left: "25rem" }}
           whileInView={{ left: "12rem" }}
           transition={transition}
           //style={{top:'19rem',left:'12rem'}}
           >
              <Card emoji={Humble} heading={portfoliodata.serviceareatitle3?portfoliodata.serviceareatitle3:'Automation & Development Tools'} detail={portfoliodata.serviceareadesc3?portfoliodata.serviceareadesc3:"Selenium Webdriver, TestNG, GitHub"}/>             
           </motion.div>
           <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
       </div>
   </div>
  )
}

export default Services