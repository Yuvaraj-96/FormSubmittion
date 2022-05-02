import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import {Link} from 'react-scroll';
import {useNavigate} from 'react-router-dom';

const  Navbar=({portfoliodata})=> {
    const navigate= useNavigate();
    const registerroute=e=>{
        e.preventDefault();
        navigate(`/Portfolioform`);

    }
  return (
   <div className="n-wrapper" id='Navbar'>
       <div className='n-left'>
       <div className="n-name">{portfoliodata.username?portfoliodata.username:"Yuvaraj Poobalan"}</div>
       <Toggle/>
       </div>
       
       <div className='n-right'>
           <div className="n-list">
               <ul style={{listStyleType:'none'}}>
                   <Link spy={true} to='Navbar' smooth={true} >
                   <li>Home</li>
                   </Link>
                   <Link spy={true} to='Services' smooth={true} >
                   <li>Services</li>
                   </Link>
                   <Link spy={true} to='Experience' smooth={true} >
                   <li>Experience</li>
                   </Link>
                   <Link spy={true} to='Portfolio' smooth={true} >
                   <li>Portfolio</li>
                   </Link>
                   <Link spy={true} to='Testimonials' smooth={true}>
                   <li>Testimonials</li>
                   </Link>
                   
               </ul>
           </div>
           <button className="button n-button" onClick={registerroute} >Get Own CV</button>
       </div>

   </div>
   
  )};
//   onClick={()=>registerroute}
export default Navbar