import React ,{useEffect,useState} from 'react';
// import './App.css';
import Contactus from '../Contactus/Contactus';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
//import Testimonials from '../Testimonials/Testimonials';
import Works from '../Works/Works';
// import Contactus from '../Contactus/Contactus'
//import {themeContext} from './Context';
import {useContext} from 'react';
import {themeContext} from '../../Context';
import './Homepage.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import Card from '../Cards/Card'
// import Works from '../Works/Works';



const Homepage = ({setLogined,cvdetails}) => {

  const pathname = window.location.pathname 
  pathname.slice("/");
  const arryvalue=pathname.split("/");

  let username;
  username=arryvalue[2]||cvdetails.username
  console.log("arryvalue[1]  : "+arryvalue[2]);
  console.log("username[1]  : "+username);
  

  const [portfoliodata, setPortfoliodata] = useState({username:"",fullname:"",jobdescription:"",area1:"",area2:"",service:"",serviceareatitle1:"",
  serviceareadesc1:"",serviceareatitle2:"",serviceareadesc2:"",serviceareatitle3:"",workdescription:"",mobile:"",email:"",
  serviceareadesc3:"",gitlink:"",cvlink:"",linkedinlink:"",instalink:"",yearexperiance:"",projectcomplited:"",companies:"",permition:false,currentyearexperiance:""})

  setLogined(true);
  const navigate= useNavigate();

  useEffect(() => {
    axios.post("https://portfoliobn.herokuapp.com/getuserdatas",{username:username}).then(res=>{
      console.log('page is fully loaded');
       console.log(res.data);
        if(res.data.message){
          
          alert(res.data.message);
          if(res.data.message.includes("User not Register. Kindly Fill the Form and Check"))
          {
            navigate(`/Portfolioform`);
          }
        }else{

          setPortfoliodata({...res.data.Portfoliodatauser,...res.data.Portfoliodatauser.services,...res.data.Portfoliodatauser.services.servicearea})
          
        }
      })

  },[username,navigate]);


  // console.log("portfoliodata : "+ portfoliodata.username)
  // console.log("portfoliodata jobdescription : "+ portfoliodata.jobdescription)
  // console.log("portfoliodata area1 : "+ portfoliodata.area1)
  // console.log("portfoliodata area2 : "+ portfoliodata.area2)
  // console.log("portfoliodata serviceareatitle1 : "+ portfoliodata.serviceareatitle1)
  // console.log("req.params.portfoliodata : "+JSON.stringify(portfoliodata))
  // console.log("portfoliodata service : "+ portfoliodata.service)
  // console.log("portfoliodata area2 : "+ portfoliodata.area2)
  // console.log("portfoliodata area2 : "+ portfoliodata.area2)
  // console.log("portfoliodata area2 : "+ portfoliodata.area2)
  // console.log("portfoliodata area2 : "+ portfoliodata.area2)


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  //setLogined(true);
  return (
    <div className="Homepage" 
    style={{
      background:darkMode?'black':'',
      color:darkMode?'white':'',
  }} 
    >
      <Navbar portfoliodata={portfoliodata} />
       <Intro portfoliodata={portfoliodata} />
       <Services portfoliodata={portfoliodata} />
       <Experience portfoliodata={portfoliodata} />
       <Works portfoliodata={portfoliodata} />
       <Portfolio portfoliodata={portfoliodata} />
       {/* <Testimonials portfoliodata={portfoliodata} /> */}
       <Contactus portfoliodata={portfoliodata} />
       <Footer portfoliodata={portfoliodata}  />
    </div>
  )
}

export default Homepage