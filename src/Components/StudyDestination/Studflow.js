import React from 'react'
import uni1 from "../../Assets/pics/uni1.png"
import uni2 from "../../Assets/pics/uni2.png"
import uni3 from "../../Assets/pics/uni3.png"
import uni4 from "../../Assets/pics/uni4.png"
import uni5 from "../../Assets/pics/uni5.png"
import uni6 from "../../Assets/pics/uni6.png"
import uni7 from "../../Assets/pics/uni7.png"
import uni8 from "../../Assets/pics/uni1.png"
import uni9 from "../../Assets/pics/uni8.png"
import uni10 from "../../Assets/pics/uni10.png"
import uni11 from "../../Assets/pics/uni11.png"
import uni12 from "../../Assets/pics/uni12.jpg"
import uni13 from "../../Assets/pics/uni13.jpg"
import uni14 from "../../Assets/pics/uni14.png"
import uni15 from "../../Assets/pics/uni15.png"
import "./Studflow.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import {Autoplay} from "swiper";
const Studflow = () => {
  return (
    <div className='studflow'>
      <h4>Top Universities</h4>
            <Swiper
                slidesPerView={3}
                // spaceBetween={40}
                loop={true}
                autoplay={{
                    delay: 600,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {/* <SwiperSlide>
                    <img src={uni1} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni2} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni3} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni4} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni5} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni6} alt='bankimg' />
                </SwiperSlide> */}
                <SwiperSlide>
                    <img src={uni7} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni8} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni9} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni10} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni11} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni12} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni13} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni15} alt='bankimg' />
                </SwiperSlide>

                </Swiper>
                <Swiper
                slidesPerView={3}
                // spaceBetween={40}
                loop={true}
                autoplay={{
                    delay: 600,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={uni1} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni2} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni3} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni4} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni5} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni6} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni14} alt='bankimg' />
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img src={uni7} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni8} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni9} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni10} alt='bankimg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={uni11} alt='bankimg' />
                </SwiperSlide> */}

                </Swiper>
    </div>
  )
}

export default Studflow
