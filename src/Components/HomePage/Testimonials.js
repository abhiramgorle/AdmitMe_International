import React from 'react'
import "./Testimonials.css"
import { Swiper, SwiperSlide } from "swiper/react";
// import Logo from "../../Assets/crop_photo-min.png"
// import Sparkle from 'react-sparkle'
import { IoIosArrowRoundForward } from "react-icons/io";
import {MdFlightTakeoff} from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay,Pagination} from "swiper";
import { Container, Row } from 'react-bootstrap';
import bao from "../../Assets/icons/ballons.png"

const Testimonials = () => {
  return (
    <div  className='test'>
        <Container  className='cont'>
            <Row className='head'>
                <img src={bao} alt='baloon logo' className='balopng'/>
                <h2>Our Happy Students</h2>
                <img src={bao} alt='baloon logo' className='balopng'/>
                {/* <p>Don’t Believe us...Then Hear it from our Students..</p> */}
            </Row>
        </Container>
      <Swiper style={{
  "--swiper-pagination-color": "#d50032",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "7px",
  "--swiper-pagination-bullet-horizontal-gap": "4px"
}}
        slidesPerView={1}
        spaceBetween={40}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
    900: {
      slidesPerView: 2,
      spaceBetween:70,
    },
  }}
        modules={[Autoplay,Pagination]}
        className="mySwiper1"
      >
        <SwiperSlide>
            <div className="swiper-client-msg1">
                <h3>"Thank you AdmitMe for all the help and guidance I have received."</h3>
                <p>I am incredibly grateful to them for their invaluable assistance during the college application process. Their personalized approach made all the difference. 
                </p>
                <div className='swiper-client-data'>
                {/* <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure> */}
                <div className='client-data-details'>
                    <p className='testname'>Akash Vijay D</p>
                    <p> University of Windsor, Canada</p>

                </div>
            </div>
            </div>
            
        
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg1">
                <h3>"Thanks to them for helping me get into Arizona University."</h3>
                <p>AdmitMe International provided comprehensive guidance and support throughout the college application journey. Their expertise in shortlisting universities that aligned with my goals was remarkable. 
                </p>
                <div className='swiper-client-data'>
                {/* <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure> */}
                <div className='client-data-details'>
                    <p className='testname'>Mohidddeen Vilak </p>
                    <p>Arizona State University, USA</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg1">
                <h3>"Thanks to AdmiteMe, I got myself into my dream university."</h3>
                <p>I am extremely grateful to the AdmiteMe International for guiding me through the college application process. Thanks to their expertise, I secured admission into my dream university.</p>
                <div className='swiper-client-data'>
                {/* <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure> */}
                <div className='client-data-details'>
                    <p className='testname'>Meghana A</p>
                    <p>Arizona State University, USA</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg1">
                <h3>" They have increasing my chances of acceptance." "</h3>
                <p>AdmiteMe International helped me to receive admission offers from multiple renowned universities, and I owe it all to the consultancy's exceptional assistance.
                </p>
                <div className='swiper-client-data'>
                {/* <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure> */}
                <div className='client-data-details'>
                    <p className='testname'>Nithin N A</p>
                    <p>Arizona State University, USA</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg1">
                <h3>" The best counselling i ever recieved "</h3>
                <p>Their professionalism and commitment are commendable. I am elated to be accepted into a prestigious university, and I owe it all to the consultancy
                </p>
                <div className='swiper-client-data'>
                {/* <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure> */}
                <div className='client-data-details'>
                    <p className='testname'>Srilekha Amujure</p>
                    <p>Arizona State University, USA</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg1">
                <h3>"I am very thankful to them for all the push and support I received from them"</h3>
                <p> They transformed the overwhelming college application process into a smooth and manageable experience.
                </p>
                <div className='swiper-client-data'>
                {/* <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure> */}
                <div className='client-data-details'>
                    <p className='testname'>Sri Harsha Babu L</p>
                    <p>University of Cincinati, USA</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide> 
        <div className="swiper-client-msg1">
                <h3>" The best counselling i ever recieved "</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
                </p>
                <div className='swiper-client-data'>
                {/* <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure> */}
                {/* <div className='client-data-details'>
                    <p className='testname'>Dr. Rakesh K</p>
                    <p>Dublin Business School, Ireland</p>

                </div>
            </div>
            </div>
        </SwiperSlide> */}
        {/* // <SwiperSlide>
        // <div className="swiper-client-msg1">
        //         <h3>" The best counselling i ever recieved "</h3>
        //         <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
        //         </p>
        //         <div className='swiper-client-data'>
        //         {/* <figure>
        //             <img src={Logo} alt='imagete'></img>
        //         </figure> */}
        {/* //         <div className='client-data-details'>
        //             <p className='testname'>Nayana Priya S</p>
        //             <p>Dublin Business School, Ireland</p>

        //         </div>
        //     </div>
        //     </div> */}
        {/* // </SwiperSlide> */} 
        {/* <SwiperSlide>
        <div className="swiper-client-msg1">
                <h3>" The best counselling i ever recieved "</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
                </p>
                <div className='swiper-client-data'>
                {/* <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure> */}
                {/* <div className='client-data-details'>
                    <p className='testname'>Akash Vijay D</p>
                    <p>Software Developer</p>

                </div>
            </div>
            </div>
        </SwiperSlide> */} 
      </Swiper>
      <div className='testimbelow'>
      {/* <Sparkle minSize={10} maxSize={10}flicker={true}/> */}
            <div className='testimbelow1h4'>
                <span><h4>Immigration To </h4></span>
                <span className='bigiii'><h4>CANADA </h4></span>
                <p>Request a Call Back from our Immigration Expert Team</p>
            </div>
            <div className='testimbelowbtn'>
                
                <button className='2024btn'>
                <div className='rocketbtn'><MdFlightTakeoff  size={30} style = {{color:'#004fa2'}} /></div>
                <a href='/Immigrate'><p>Request a<br/> Call Back</p></a>
                <IoIosArrowRoundForward  size={30} style = {{color:'#004fa2'}} /></button>
                
            </div>
        </div>
    </div>
  )
}

export default Testimonials
