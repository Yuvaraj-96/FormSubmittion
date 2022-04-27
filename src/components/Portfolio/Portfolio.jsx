import React from 'react';
import './Portfolio.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/reciepefinder.png';
import Ecommerce from '../../img/Clock.png';
import HOC from '../../img/Books.png';
//import MusicApp from '../../img/musicapp.png';
import 'swiper/css';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
   <div className="portfolio" id='Portfolio'>
       <span style={{color:darkMode?'white':''}}>Recent Projects</span>
       <span>Portfolio</span>
       <Swiper spaceBetween={30} slidesPerView={2} grabCursor={true} className='portfolio-slider'>
           <SwiperSlide>
           <a href='https://reciepefinder.netlify.app/' target="_blank" rel="noreferrer"><img src={Sidebar} alt=''/></a>
           </SwiperSlide>
           <SwiperSlide>
           <a href='https://jscsshtmlanalogclock.netlify.app' target="_blank" rel="noreferrer"><img src={Ecommerce} alt=''/></a>
           </SwiperSlide>
           <SwiperSlide>
           <a href='https://sharp-leakey-08e599.netlify.app/' target="_blank" rel="noreferrer"><img src={HOC} alt=''/></a>
           </SwiperSlide>
           {/* <SwiperSlide>
               <img src={MusicApp} alt=''/>
           </SwiperSlide> */}
       </Swiper>
   </div>
  )
}

export default Portfolio