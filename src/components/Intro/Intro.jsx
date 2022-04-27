import React from 'react'
import './Intro.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import Linkedin from '../../img/linkedin.png';

import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Intro = () => {
    const transition = {duration:2, type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?'white':''}}>Hy! I Am</span>
                <span>Yuvaraj Poobalan</span>
                <span>Frontend Developer with
                 high level of experience in web designing
                 and development, producting the quality work</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
            <a href='https://github.com/Yuvaraj-96' target="_blank" rel="noreferrer"> <img src={Github} alt=''></img></a>
                <img src={Instagram} alt=''></img>
                <a href='https://www.linkedin.com/in/yuvaraj-poobalan-796769145/' target="_blank" rel="noreferrer"> <img src={Linkedin} alt=''></img></a>
            </div>
        </div>
        <div className="i-right">        
                <img src={Vector1} alt=''></img>
                <img src={Vector2} alt=''></img>
                <img src={boy} alt=''></img>
                <motion.img 
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}              
                transition={transition}
                src={glassesimoji} alt=''/>
                <motion.div 
                initial={{top:'-4%',left:'74%'}}
                whileInView={{left:'68%'}}
                transition={transition}
                style={{top:'-4%', left:'68%'}}
                className='floating-div'
                >
                    <FloatingDiv image={crown} txt1='web' txt2='Developer'></FloatingDiv>
                </motion.div>
                <motion.div
                initial={{top:'18rem',left:'9rem'}}
                whileInView={{left:'0rem'}}
                transition={transition}
                style={{top:'18rem', left:'2rem'}}
                className='floating-div'
                >
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'></FloatingDiv>
                </motion.div>
                <div className='blur' style={{background:'rgb(238 210 255)'}}></div>
                <div className='blur' style={{background:'#c1f5ff', top:'17rem',width:'21rem', height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro