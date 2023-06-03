import React from 'react'
import down from "../../Assets/icons/down.gif"
import {BsArrowRight,BsArrowLeft} from "react-icons/bs"
import "./Howflow.css"
import howone from "../../Assets/icons/howoneone.png"
import flow2 from "../../Assets/icons/flow2.png"
import flow3 from "../../Assets/icons/flow3.png"
import flow4 from "../../Assets/icons/flow4.png"
import flow5 from "../../Assets/icons/flow5.png"
import flow6 from "../../Assets/icons/flow6.png"
import flow7 from "../../Assets/icons/flow7.png"
import flow8 from "../../Assets/icons/flow8.png"
import flow9 from "../../Assets/icons/flow9.png"
const Howflow = () => {
  return (
    <div className='howflow'>
        <div className='howhead'>
            <h2>Our Service Flow</h2>

        </div>
        <div className='mainflow'>
            <div className='howone'>
                <div className='oneone'>
                    <img src={howone} alt='icon'/>
                    <p>Select a Country of your destination</p>
                </div>
                <div className='aiout'><BsArrowRight size = {55} /></div>
                <div className='oneone'>
                    <img src={flow2} alt='icon'/>
                    <p>Choose a University of your choice</p>
                </div>
                <div className='aiout'><BsArrowRight size = {55}/></div>
                <div className='oneone'>
                    <img src={flow3} alt='icon'/>
                    <p>SOP | LOR | CV | Admission Essay</p></div>
            </div>

            <div className='howdown1'>
                <img src={down} alt='arrow'></img>
            </div>
            <div className='howthree'>
                <div className='oneone'>
                    <img src={flow4} alt='icon'/>
                    <p>Education Loans and Financial Services</p></div>
                <div className='aiout'><BsArrowLeft size = {55} /></div>
                <div className='oneone'>
                    <img src={flow5} alt='icon'/>
                    <p>Get Admited into the University</p></div>
                <div className='aiout'><BsArrowLeft size = {55}/></div>
                <div className='oneone'>
                    <img src={flow6} alt='icon'/>
                    <p>Submit Application to the University</p></div>
            </div>
            <div className='howdown2'>
            <img src={down} alt='arrow'></img>

            </div>
            <div className='howfive'>
                <div className='oneone'>
                    <img src={flow7} alt='icon'/>
                    <p>Visa Slot Booking</p></div>
                <div className='aiout'><BsArrowRight size = {55} /></div>
                <div className='oneone'>
                    <img src={flow8} alt='icon'/>
                    <p>Visa Interview Preparation</p></div>
                <div className='aiout'><BsArrowRight size = {55}/></div>
                <div className='oneone'>
                    <img src={flow9} alt='icon'/>
                    <p>Flight Tickets Booking</p></div>

            </div>

        </div>
      
    </div>
  )
}

export default Howflow
