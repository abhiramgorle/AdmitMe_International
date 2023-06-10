import React from 'react'
import { Link } from 'react-router-dom'
import './first.css'
import earthvideo from '../../Assets/WhoWeAreVideo2.mp4'

const First = () => {
  return (
    <div className='heroo'>
      <video autoPlay loop muted id = 'videooo'>
        <source src = {earthvideo} type = 'video/mp4' />
      </video>
      <div className='contento'>
        <h1>WHO <br /><span>WE</span> ARE<br /></h1>
      
      <div className='btnhomeo'>
        <Link to='/contact' className='btno'> <p className='btntexto'>Contact Now</p></Link>
        <Link to='/WhoWeAre' className='btn-lighto'><p className='btntexto'>Learn More</p></Link>
      </div>
      </div>
    </div>
  )
}

export default First
