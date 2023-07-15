import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import earthvideo from '../../Assets/earth4.mp4'
const Hero = () => {
  return (
    <div className='heroooo'>
      <video autoPlay loop muted id = 'videoo'>
        <source src = {earthvideo} type = 'video/mp4' />
      </video>
      <div className='contento'>
        <h1>WHAT <br /><span>WE</span> DO<br /></h1>
      
      <div className='btnhomeo'>
        <Link to='/LetsTalk' className='btno'> <p className='btntexto'>Contact Now</p></Link>
        <Link to='/HowWeDo' className='btn-lighto'><p className='btntexto'>Learn More</p></Link>
      </div>
      </div>
    </div>
  )
}

export default Hero
