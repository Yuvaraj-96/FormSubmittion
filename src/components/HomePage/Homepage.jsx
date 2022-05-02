import React ,{useEffect,useState} from 'react';
// import './App.css';
import Contactus from '../Contactus/Contactus';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Works from '../Works/Works';
// import Contactus from '../Contactus/Contactus'
//import {themeContext} from './Context';
import {useContext} from 'react';
import {themeContext} from '../../Context';
import './Homepage.css';
import axios from 'axios';
// import Card from '../Cards/Card'
// import Works from '../Works/Works';



const Homepage = ({cvdetails}) => {

  const pathname = window.location.pathname 
  pathname.slice("/");
  // console.log("pathname : "+pathname);
  // console.log("pathname.slice(/); : "+pathname.split("/"));
  const arryvalue=pathname.split("/");

  let username;
  username=arryvalue[2]||cvdetails.username
  console.log("arryvalue[1]  : "+arryvalue[2]);
  console.log("username[1]  : "+username);

  const [portfoliodata, setPortfoliodata] = useState({username:"",fullname:"",jobdescription:"",area1:"",area2:"",service:"",serviceareatitle1:"",
  serviceareadesc1:"",serviceareatitle2:"",serviceareadesc2:"",serviceareatitle3:"",
  serviceareadesc3:"",gitlink:"",cvlink:"",linkedinlink:"",instalink:"",yearexperiance:"",projectcomplited:"",companies:"",permition:false})


  


  useEffect(() => {
//const loaddata=()=>{
    axios.post("http://localhost:9002/getuserdatas",{username:username}).then(res=>{
      console.log('page is fully loaded');
       console.log(res.data);
        if(res.data.message){
          
          alert(res.data.message);
        }else{

          setPortfoliodata({...res.data.Portfoliodatauser})
          // const{name,fullname,jobdescription,area1,area2,service,serviceareatitle1,
          // serviceareadesc1,serviceareatitle2,serviceareadesc2,serviceareatitle3,
          // serviceareadesc3,gitlink,cvlink,yearexperiance,projectcomplited,companies} = res.data.Portfoliodatauser;
          
          // console.log("Portfoliodatauser setPortfoliodata : "+name,fullname,jobdescription,area1,area2,service,serviceareatitle1,
          // serviceareadesc1,serviceareatitle2,serviceareadesc2,serviceareatitle3,
          // serviceareadesc3,gitlink,cvlink,yearexperiance,projectcomplited,companies);
  
        }
      })
    // }

    //   loaddata();

  },[username]);


  console.log("portfoliodata : "+ portfoliodata.username)
  console.log("portfoliodata jobdescription : "+ portfoliodata.jobdescription)
  console.log("portfoliodata area1 : "+ portfoliodata.area1)
  console.log("portfoliodata area2 : "+ portfoliodata.area2)

  //setPortfoliodata({...res.data.Portfoliodatauser})

  // const onloadfunction = e => {  onLoad={onloadfunction}
  //   e.preventDefault();
  //   console.log('page is fully loaded');
  //    axios.get("http://localhost:9002/getuserdata",{username:name}).then(res=>{

  //      console.log(res.data);
  //       if(res.data.message){
  //         alert(res.data.message);
  //       }else{
  //         //res.data.
  
  //       }
        
       
  //     })
  //};
  

  // const onload=()=>{
    
  //     axios.get("http://localhost:9002/getuserdata",{username:name}).then(res=>{

  //       if(res.data.message){
  //         alert(res.data.message);
  //       }else{

  //       }
        
       
  //     })
    
  // }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
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
       <Testimonials portfoliodata={portfoliodata} />
       <Contactus portfoliodata={portfoliodata} />
       <Footer portfoliodata={portfoliodata}  />
    </div>
  )
}

export default Homepage