import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import earthvideo from '../../Assets/earth1.mp4'
import Type from "./Type.js";
const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id = 'video'>
        <source src = {earthvideo} type = 'video/mp4' />
      </video>
      <div className='content'>
        <h1>BEGIN YOUR <Type />WITH US</h1>
        
      
      <div className='btnhome'>
        <Link to='/contact' className='btn'> <p className='btntext'>Contact Now</p></Link>
        <Link to='/Who We Are' className='btn-light'><p className='btntext'>Learn More</p></Link>
      </div>
      </div>
    </div>
  )
}

export default Video
