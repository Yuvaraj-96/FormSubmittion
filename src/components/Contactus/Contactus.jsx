//import React from 'react';
import './Contactus.css';
//import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { themeContext } from '../../Context';


const Contactus = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone]= useState(false);


    const sendEmail=(e)=>{
        e.preventDefault();
        console.log(form.current);
        emailjs.sendForm('service_c7uxv5r','template_1zo36v1',form.current,'q8zJJn0it7JdOK9FU').then((result)=>{
            console.log(result.text);
            setDone(true);
        },(error)=>{console.log(error.text);});
    };
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Get in touch</span>
                <span>Contact Me</span>
                <div className="blur s-blur" style={{background:'#abf1ff94'}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input name="user_name" type='text'  className='user' placeholder='Name'/>
                <input  name="user_email" type='email' className='user' placeholder='Email'/>
                <textarea name='message' className='user' placeholder='Message'/>
                <input type='submit' value='Send' className='button'/>
                <span>{done&&"Thank you for contacting me."}</span>
                <div className="blur c-blur1"  style={{background:'var(--purple)'}}></div>
            </form>
        </div>




    </div>
  )
}

export default Contactus