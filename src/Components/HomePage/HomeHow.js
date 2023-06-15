import React from 'react'
import "./HomeHow.css"
import Tilt from "react-parallax-tilt"
import one from "../../Assets/icons/coding.png"
import two from "../../Assets/icons/evaluation 1.png"
import three from "../../Assets/icons/university 1.png"
import four from "../../Assets/icons/two.apng"
import five from "../../Assets/icons/resume 1.png"

import { IoMdRocket,IoIosArrowRoundForward } from "react-icons/io";
import six from "../../Assets/icons/visa (1) 1.png"
const HomeHow = () => {
  return (
    <div className='homehow'>
        <div className='homehowhead'>
            <h2>How We Do</h2>
            <p>Every student is guided from initial college selection all the way up to a successful student visa.</p>
        </div>
        <div className='homehowmain'>
            <Tilt className='homehowbox'>
                <img src={one} alt='first icon'></img>
                <h4>Academic Documents</h4>
                <p>Lorem ipsum dolor sit amet,</p>
            </Tilt>
            <Tilt className='homehowbox'>
                <img src={two} alt='first icon'></img>
                <h4>Profile Evaluation Call</h4>
                <p>Lorem ipsum dolor sit amet,</p>

            </Tilt>
            <Tilt className='homehowbox'>
                <img src={three} alt='first icon'></img>
                <h4>University Shortlisting</h4>
                <p>Lorem ipsum dolor sit amet,</p>

            </Tilt>
            <Tilt className='homehowbox'>
                <img src={four} alt='first icon'></img>
                <h4>Document Preparation</h4>
                <p>Lorem ipsum dolor sit amet,</p>

            </Tilt>
            <Tilt className='homehowbox'>
                <img src={five} alt='first icon'></img>
                <h4>Application Submission</h4>
                <p>Lorem ipsum dolor sit amet,</p>

            </Tilt>
            <Tilt className='homehowbox'>
                <img src={six} alt='first icon'></img>
                <h4>Visa Counselling</h4>
                <p>Lorem ipsum dolor sit amet,</p>

            </Tilt>

        </div>
        <div className='homehowbelow'>
            

    <div className='homehowbelowh4'>
        <span><h4>Get your desired</h4></span>
        <span className='bigiii'><h4>Scores</h4></span>
        <span><h4>With Us!!</h4></span>
    </div>
    <div className='homehowbelowbtn'>
        
        <button className='2024btn'>
        <div className='rocketbtn'><IoMdRocket  size={30} style = {{color:'#004fa2'}} /></div>
        <a href='/TestPrep'><p>Register Now!</p></a>
        <IoIosArrowRoundForward  size={30} style = {{color:'#004fa2'}} /></button>
        
    </div>
</div>
    </div>
  )
}

export default HomeHow
