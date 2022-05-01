import React ,{useState}  from 'react';
import './Portfolioform.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Portfolioform = ({setCvetails}) => {
 
    const[details, setDetails] = useState({
        name:"",fullname:"",jobdescription:"",area1:"",area2:"",service:"",serviceareatitle1:"",
        serviceareadesc1:"",serviceareatitle2:"",serviceareadesc2:"",serviceareatitle3:"",
        serviceareadesc3:"",gitlink:"",cvlink:"",yearexperiance:"",projectcomplited:"",companies:""
    })
    const navigate= useNavigate();

    const submitdetails=e=>{
        e.preventDefault();

        setCvetails({...details});
       
        axios.post(`http://localhost:9002/setuserdata`,details).then(res=>{
            alert(res.data.message);
            navigate(`/user/${details.name}`);
           // navigate(`/user/${details.name}`);
          })

    }

    const handelChange=e=>{
       const{name,value}= e.target;
       console.log(`Name : ${name} and Value : ${value}`)
    //    const { name, value} = e.target;

       setDetails({...details,[name]: value.toLowerCase()})

       //console.log(...details);

    }
    // const PortfolioSchema = new mongoose.Schema({
    //     name:String,
    //     fullname:String,
    //     jobdescription:String,
    //     area1:String,
    //     area2:String,
    //     gitlink:String,
    //     services:{
    //         service:String,
    //         servicearea:{
    //             serviceareatitle1:String,
    //             serviceareadesc1:String,
    //             serviceareatitle2:String,
    //             serviceareadesc2:String,
    //             serviceareatitle3:String,
    //             serviceareadesc3:String
    //         }
    //     },
    //     cvlink:String,
    //     yearexperiance:String,
    //     projectcomplited:String,
    //     companies:String,
    // });





  return (
      <div className="body">
    <div className="wrapper">
        <div className="title">Registration Form</div>
        <div className="form">
            <div className="input_field">
                <label htmlFor="">User Name</label>
                <input type="text" className="pd-input" name="name" id="" onChange={handelChange} />
            </div>
            <div className="input_field">
                <label htmlFor="">Full Name</label>
                <input type="text" className="pd-input" name="fullname" id="" onChange={handelChange} />
            </div>
            <div className="input_field">
                <label htmlFor="">Job description</label>
                <textarea name="jobdescription" cols="30" rows="10" className="textarea" onChange={handelChange}></textarea>               
            </div>
            <div className="input_field">
                <label htmlFor="">Field of expertise 1</label>
                <input type="text" className="pd-input" name="area1" id="" onChange={handelChange}/>
            </div>           
            <div className="input_field">
                <label htmlFor="">Field of expertise 2</label>
                <input type="text" className="pd-input" name="area2" id=""onChange={handelChange} />
            </div>
            <div className="input_field">
                <label htmlFor="">Service you will provide </label>
                <textarea name="service" cols="30" rows="10" className="textarea" onChange={handelChange}></textarea>               
            </div>
            <div className="input_field">
                <label htmlFor="">Area of Service 1 </label>
                <input type="text" className="pd-input" name="serviceareatitle1" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Technologies  used</label>
                <input type="text" className="pd-input" name="serviceareadesc1" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Area of Service 2 </label>
                <input type="text" className="pd-input" name="serviceareatitle2" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Technologies  used</label>
                <input type="text" className="pd-input" name="serviceareadesc2" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Area of Service 3 </label>
                <input type="text" className="pd-input" name="serviceareatitle3" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Technologies  used</label>
                <input type="text" className="pd-input" name="serviceareadesc3" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">CV Link</label>
                <input type="text" className="pd-input" name="cvlink" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">GIT Link</label>
                <input type="text" className="pd-input" name="gitlink" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Year of Experience</label>
                <input type="text" className="pd-input" name="yearexperiance" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Project completed </label>
                <input type="text" className="pd-input" name="projectcomplited" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Previously worked Companies </label>
                <input type="text" className="pd-input" name="companies" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Portfolio Link </label>
                <input type="text" className="pd-input" name="" id="" onChange={handelChange}/>
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
            {/* <div className="input_field">
                <label htmlFor="">Address</label>
                <textarea name="" cols="30" rows="10" className="textarea"></textarea>               
            </div> */}
            <div className="input_field terms">
                <label  className='check'>
                    <input type="checkbox"  />
                    <span className="checkmark"></span>
                </label>
                <p>Agree to submit my details and permit to store my date into this site.</p>                
            </div>
            <div className="inputfield">
                <input type="submit" value="Register"  className="btn" onClick={submitdetails}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Portfolioform



// wenElement source=driver.findElement(By.name("q"));
// source.click();
//   Actions actionProvider = new Actions(driver);
//   Action keydown = actionProvider.keyDown(Keys.CONTROL).build();
//   keydown.perform();