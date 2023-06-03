import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Testimonials.css"
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "../../Assets/crop_photo-min.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay,Pagination} from "swiper";
import { Container, Row } from 'react-bootstrap';

const Testimonials = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div data-aos="fade-up" data-aos-easing="ease-in-out"  className='test'>
        <Container  className='cont'>
            <Row className='head'>
                <h2>Testimonial</h2>
                <p>Don’t Believe us...Then Hear it from our Students..</p>
            </Row>
        </Container>
      <Swiper style={{
  "--swiper-pagination-color": "#e0263c",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "7px",
  "--swiper-pagination-bullet-horizontal-gap": "4px"
}}
        slidesPerView={2}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="swiper-client-msg">
                <h3>" The best counselling i ever recieved "</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
                </p>
                <div className='swiper-client-data'>
                <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure>
                <div className='client-data-details'>
                    <p className='testname'>Abhiram Gorle</p>
                    <p>Software Developer</p>

                </div>
            </div>
            </div>
            
        
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg">
                <h3>" The best counselling i ever recieved "</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
                </p>
                <div className='swiper-client-data'>
                <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure>
                <div className='client-data-details'>
                    <p className='testname'>Abhiram Gorle</p>
                    <p>Software Developer</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg">
                <h3>" The best counselling i ever recieved "</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
                </p>
                <div className='swiper-client-data'>
                <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure>
                <div className='client-data-details'>
                    <p className='testname'>Abhiram Gorle</p>
                    <p>Software Developer</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg">
                <h3>" The best counselling i ever recieved "</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
                </p>
                <div className='swiper-client-data'>
                <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure>
                <div className='client-data-details'>
                    <p className='testname'>Abhiram Gorle</p>
                    <p>Software Developer</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg">
                <h3>" The best counselling i ever recieved "</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
                </p>
                <div className='swiper-client-data'>
                <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure>
                <div className='client-data-details'>
                    <p className='testname'>Abhiram Gorle</p>
                    <p>Software Developer</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg">
                <h3>" The best counselling i ever recieved "</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
                </p>
                <div className='swiper-client-data'>
                <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure>
                <div className='client-data-details'>
                    <p className='testname'>Abhiram Gorle</p>
                    <p>Software Developer</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg">
                <h3>" The best counselling i ever recieved "</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
                </p>
                <div className='swiper-client-data'>
                <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure>
                <div className='client-data-details'>
                    <p className='testname'>Abhiram Gorle</p>
                    <p>Software Developer</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg">
                <h3>" The best counselling i ever recieved "</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
                </p>
                <div className='swiper-client-data'>
                <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure>
                <div className='client-data-details'>
                    <p className='testname'>Abhiram Gorle</p>
                    <p>Software Developer</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-client-msg">
                <h3>" The best counselling i ever recieved "</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident
                </p>
                <div className='swiper-client-data'>
                <figure>
                    <img src={Logo} alt='imagete'></img>
                </figure>
                <div className='client-data-details'>
                    <p className='testname'>Abhiram Gorle</p>
                    <p>Software Developer</p>

                </div>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonials
