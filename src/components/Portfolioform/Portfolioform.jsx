import React from 'react';
import './Portfolioform.css';

const Portfolioform = () => {
  return (
      <div className="body">
    <div className="wrapper">
        <div className="title">Registration Form</div>
        <div className="form">
            <div className="input_field">
                <label htmlFor="">First Name</label>
                <input type="text" className="pd-input" name="" id="" />
            </div>
            <div className="input_field">
                <label htmlFor="">Last Name</label>
                <input type="text" className="pd-input" name="" id="" />
            </div>
            <div className="input_field">
                <label htmlFor="">First Name</label>
                <input type="text" className="pd-input" name="" id="" />
            </div>
            <div className="input_field">
                <label htmlFor="">First Name</label>
                <input type="text" className="pd-input" name="" id="" />
            </div>
            <div className="input_field">
                <label htmlFor="">Gender</label>
                <div className="custom_select">
                    <select>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>               
            </div>
            <div className="input_field">
                <label htmlFor="">Address</label>
                <textarea name="" cols="30" rows="10" className="textarea"></textarea>               
            </div>
            <div className="input_field terms">
                <label  className='check'>
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                </label>
                <p>Agree to submit my details and permit to store the my date into this site.</p>                
            </div>
            <div className="inputfield">
                <input type="submit" value="Register"  className="btn"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Portfolioform