import React from 'react';
import './Card.css';

const Card = ({emoji,heading,detail}) => {
  console.log("heading : "+heading);
  console.log("detail : "+detail);
  return (
    <div className="Card">
        
         <img src={emoji} alt=''/> 
        <span>{heading}</span>
        <span>{detail}</span>
        {console.log("heading : "+heading)}
        {  console.log("detail : "+detail)}
        {/* <button className="c-button">Learn More</button> */}
        
    </div>
  )
}

export default Card