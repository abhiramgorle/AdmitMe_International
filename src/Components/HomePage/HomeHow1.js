import React from 'react'
import "./HomeHow1.css"
import Sparkle from 'react-sparkle'
import homwhow from "../../Assets/icons/homehowww.png"
import homwhow1 from "../../Assets/icons/homehowww1.png"
import homwhow2 from "../../Assets/icons/homehowww2.png"
import homwhow3 from "../../Assets/icons/homehowww3.png"
import { IoMdRocket,IoIosArrowRoundForward } from "react-icons/io";
import {FaGlobeAmericas,FaUniversity} from "react-icons/fa";
import {MdOutlineFlight,MdCurrencyExchange} from "react-icons/md"
import {GiPassport} from "react-icons/gi"
const HomeHow1 = () => {
  return (
    <div className='homehow'>
        <div className='parallax'>
        <div className='homehowhead'>
                    <h2>How We Do</h2>
                    <p>Every student is guided from initial college selection all the way up to a successful student visa.</p>
                </div>
            <div className='parallax-content'>
                
                <div className='homehowmain'>
                    <div className='homehowbox'>
                        <div className='homehowicon'>
                            <FaGlobeAmericas size={100} style={{color:'#ffffff'}} />
                        </div>
                        <h4>Choose Your Dream Country</h4>
                    </div>
                    <div className='homehowbox'>
                        <div className='homehowicon'>
                            <FaUniversity size={100} style={{color:'#ffffff'}} />
                        </div>
                        <h4>Profile Evaluation, Counselling and  University Selection</h4>
                    </div>
                    <div className='homehowbox elsebox'>
                        <div className='homehowicon elseimg'>
                            <img src={homwhow} alt='imagery'></img>
                        </div>
                        <h4>Test Preparation (IELTS,TOEFL,GRE)</h4>
                    </div>
                    <div className='homehowbox sep4 '>
                    <div className='homehowicon elseimg1'>
                            <img src={homwhow1} alt='imagery'></img>
                        </div>
                        <h4 >LOR/SOP/CV/ Admission Essay, Application submission</h4>
                    </div>
                    <div className='homehowbox elsebox2'>
                    <div className='homehowicon elseimg2'>
                            <img src={homwhow2} alt='imagery'></img>
                        </div>
                        <h4>Scholarship Assistance</h4>
                    </div>
                    <div className='homehowbox '>
                    <div className='homehowicon elseimg3'>
                            <img src={homwhow3} alt='imagery'></img>
                        </div>
                        <h4>Educational Loans and Financial Services</h4>
                    </div>
                    <div className='homehowbox'>
                        <div className='homehowicon'>
                            <GiPassport size={100} style={{color:'#ffffff'}} />
                        </div>
                        <h4>Visa Process and Visa Interview Prep</h4>
                    </div>
                    <div className='homehowbox'>
                        <div className='homehowicon'>
                            <MdOutlineFlight size={100} style={{color:'#ffffff'}} />
                        </div>
                        <h4>Flight ticket Booking</h4>
                    </div>
                    <div className='homehowbox'>
                        <div className='homehowicon'>
                            <MdCurrencyExchange size={100} style={{color:'#ffffff'}} />
                        </div>
                        <h4>Remittance, Forex and Accommodation</h4>
                    </div>

                </div>
            </div>
        </div>
        <div className='homehowbelow'>
            <Sparkle  color={'#fff'} minSize={10} maxSize={10}flicker={true}/>
            <div className='homehowbelowh4'>
                <span><h4>Get </h4></span>
                <span className='bigiii'><h4>7+ Band</h4></span>
                <span><h4>IELTS Score With Us!!</h4></span>
            </div>
            <div className='homehowbelowbtn'>
                
                <button className='2024btn'>
                <div className='rocketbtn'><IoMdRocket size={30} style = {{color:'#004fa2'}} /></div>
                <a href='/TestPrep'><p>Register Now!</p></a>
                <IoIosArrowRoundForward  size={30} style = {{color:'#004fa2'}} /></button>
                
            </div>
        </div>
    </div>
  )
}

export default HomeHow1
