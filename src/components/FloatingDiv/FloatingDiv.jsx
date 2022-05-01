import React from 'react'
import'./FloatingDiv.css';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const FloatingDiv = ({image,portfoliodataarea}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="floatingdiv">
       <img src={image} alt=''/>
       <span style={{color:darkMode?'black':''}}>
       {portfoliodataarea?portfoliodataarea:""}
           {/* <br/> {txt2} */}
       </span>
   </div>
  )
}

export default FloatingDiv