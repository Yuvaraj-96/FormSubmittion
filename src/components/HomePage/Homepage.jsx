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



const Homepage = ({user},{cvdetails}) => {

  const [portfoliodata, setPortfoliodata] = useState({name:"",fullname:"",jobdescription:"",area1:"",area2:"",service:"",serviceareatitle1:"",
  serviceareadesc1:"",serviceareatitle2:"",serviceareadesc2:"",serviceareatitle3:"",
  serviceareadesc3:"",gitlink:"",cvlink:"",yearexperiance:"",projectcomplited:"",companies:""})


  let name=user;
  name='yuvaraj'

  //console.log("Data got from Login component: " +name.name);
  //console.log("Data got from Login component: " +user.name);
  //console.log("Data got from Login component:cvdetails: " +cvdetails.fullname);

  useEffect(() => {
    axios.post("http://localhost:9002/getuserdatas",{username:name}).then(res=>{
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

          
          // const{name,fullname,jobdescription,area1,area2,service,serviceareatitle1,
          // serviceareadesc1,serviceareatitle2,serviceareadesc2,serviceareatitle3,
          // serviceareadesc3,gitlink,cvlink,yearexperiance,projectcomplited,companies} = res.data.Portfoliodatauser;

          // console.log("Portfoliodatauser setPortfoliodata : "+name,fullname,jobdescription,area1,area2,service,serviceareatitle1,
          // serviceareadesc1,serviceareatitle2,serviceareadesc2,serviceareatitle3,
          // serviceareadesc3,gitlink,cvlink,yearexperiance,projectcomplited,companies);
          //res.data.
  
        }
        
       
      })
      //console.log("Data got from Login component:cvdetails: " +cvdetails.fullname);
  },[]);


  console.log("portfoliodata : "+ portfoliodata.name)
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