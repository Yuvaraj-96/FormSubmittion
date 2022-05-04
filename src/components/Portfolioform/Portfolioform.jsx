import React ,{useState}  from 'react';
import './Portfolioform.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Portfolioform = ({setCvetails}) => {
    
    const today = new Date(Date.now());
    const todaydate=today.toUTCString();
    const[details, setDetails] = useState({
        username:"",fullname:"",jobdescription:"",area1:"",area2:"",service:"",serviceareatitle1:"",date:todaydate,
        serviceareadesc1:"",serviceareatitle2:"",serviceareadesc2:"",serviceareatitle3:"",workdescription:"",
        serviceareadesc3:"",gitlink:"",cvlink:"",linkedinlink:"",instalink:"",yearexperiance:"",projectcomplited:"",companies:"", permition:false,currentyearexperiance:""
    })
    const navigate= useNavigate();

    const submitdetails=e=>{
        e.preventDefault();

        if(!(details.username && details.fullname && details.permition)){

            setCvetails({...details});
       
            axios.post(`https://portfoliobn.herokuapp.com/setuserdata`,details).then(res=>{
                alert(res.data.message);
                navigate(`/user/${details.username}`);
               // navigate(`/user/${details.name}`);
              })             

        }else{

            alert("Kindly Enter The Reqired Field to Proceed Further");           
          
        }
        // return false

    }

    const handelChange=e=>{
       const{name,value}= e.target;
       console.log(`Name : ${name} and Value : ${value}`)
    //    const { name, value} = e.target;
    if(name==='permition')
    {
       console.log("permition : " +e.currentTarget.checked) ;
       setDetails({...details,[name]: e.currentTarget.checked})
    }

       setDetails({...details,[name]: value})

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
    // <form action="#">
      <div className="body">
          <button class='special-button' onClick={()=>window.history.go(-1)}>&#8592;</button>
      <div className="wrapper">
        <div className="title">Registration Form</div>
        
        <div className="form">
        {/* <form action="#"> */}
            <div className="input_field">
                <label htmlFor="">User Name</label>
                <input name="username" type="text" className="pd-input" placeholder="User Name" required onChange={handelChange}  />
            </div>
            <div className="input_field">
                <label htmlFor="">Full Name</label>
                <input name="fullname"type="text" className="pd-input" placeholder="Full Name"  required onChange={handelChange} />
            </div>
            <div className="input_field">
                <label htmlFor="">Mobile Number</label>
                <input name="mobile"type="text" className="pd-input" placeholder="Mobile Number"  required onChange={handelChange} />
            </div>
            <div className="input_field">
                <label htmlFor="">Email ID</label>
                <input name="email"type="text" className="pd-input" placeholder="Email ID"  required onChange={handelChange} />
            </div>
            <div className="input_field">
                <label htmlFor="">Job description</label>
                <textarea name="jobdescription" cols="30" rows="10" placeholder=' Like I am working as a frontend web developer' className="textarea" onChange={handelChange}></textarea>               
            </div>
            <div className="input_field">
                <label htmlFor="">Field of expertise 1</label>
                <input type="text" className="pd-input" name="area1" placeholder=" Like Web development" id="" onChange={handelChange}/>
            </div>           
            <div className="input_field">
                <label htmlFor="">Field of expertise 2</label>
                <input type="text" className="pd-input" name="area2" placeholder="Like web desgin" id=""onChange={handelChange} />
            </div>
            <div className="input_field">
                <label htmlFor="">Service you will provide </label>
                <textarea name="service" cols="30" rows="10" className="textarea" placeholder=" Like i will provide services like creating Web application " onChange={handelChange}></textarea>               
            </div>
            <div className="input_field">
                <label htmlFor="">Area of Service 1 </label>
                <input type="text" className="pd-input" name="serviceareatitle1" placeholder="Like Frontend development" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Technologies  used</label>
                <input type="text" className="pd-input" name="serviceareadesc1" placeholder="HTML, CSS, ES6" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Area of Service 2 </label>
                <input type="text" className="pd-input" name="serviceareatitle2" placeholder="Selenium Automation" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Technologies  used</label>
                <input type="text" className="pd-input" name="serviceareadesc2" placeholder="Java, testNG, Maven" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Area of Service 3 </label>
                <input type="text" className="pd-input" name="serviceareatitle3" placeholder="DB" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Technologies  used</label>
                <input type="text" className="pd-input" name="serviceareadesc3" placeholder="mongodb" id="" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">CV Link</label>
                <input type="text" className="pd-input" name="cvlink" id="" placeholder="Resume Link" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">GIT Link</label>
                <input type="text" className="pd-input" name="gitlink" id="" placeholder="GIT Link" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Instagram Link</label>
                <input type="text" className="pd-input" name="instalink" id="" placeholder="Instagram Profile Link" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">LinkedIn Link</label>
                <input type="text" className="pd-input" name="linkedinlink" id="" placeholder="LinkedIn Profile Link" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Total Years of Experience</label>
                <input type="text" className="pd-input" name="yearexperiance" id="" placeholder="Total Years of Experience" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Current Position Years of Experience</label>
                <input type="text" className="pd-input" name="currentyearexperiance" id="" placeholder="Current Position Years of Experience" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Project completed </label>
                <input type="text" className="pd-input" name="projectcomplited" id="" placeholder="Project completed" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Previously worked Companies </label>
                <input type="text" className="pd-input" name="companies" id="" placeholder="Previously worked Companies" onChange={handelChange}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Work Experiance Description</label>
                <textarea name="workdescription" cols="30" rows="10" placeholder=' Like I have worked in 3 React Project with Redux' className="textarea" onChange={handelChange}></textarea>               
            </div>
            <div className="input_field">
                <label htmlFor="">Portfolio Link </label>
                <input type="text" className="pd-input" name="" id="" placeholder="Portfolio Link" onChange={handelChange}/>
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


