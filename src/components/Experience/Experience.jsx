import React from 'react';
import './Experience.css';

const Experience = ({portfoliodata}) => {
  return (
   <div className="experience" id='Experience'>
       <div className="achievement">
           <div className="circle">{portfoliodata.yearexperiance?portfoliodata.yearexperiance:"3+"}</div> 
           <span>Total Years</span>
           <span>Experience</span>
       </div>
       <div className="achievement">
           <div className="circle">{portfoliodata.projectcomplited?portfoliodata.projectcomplited:"10+"}</div> 
           <span>Completed</span>
           <span>Projects</span>
       </div>
       <div className="achievement">
           <div className="circle">{portfoliodata.currentyearexperiance?portfoliodata.currentyearexperiance:"2+"}</div> 
           <span>Current position</span>
           <span>Experience</span>
       </div>
   </div>
  )
}

export default Experience