import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import Logo from '../../Assets/admitmelogo.png'

import './Navbarstyles.css'

const Navbar = () => {
    const[click,setClick] = useState(false)
    const handleClick=() =>setClick(!click)
    const styleObj = {
      color:'#d50032',fontSize:14,fontWeight: 'bold'}

    const[color,setColor] = useState(false)
      const changeColor=() =>{
        if(window.scrollY >= 100){
          setColor(true)
        }else{
          setColor(false)
        }
      }
      window.addEventListener('scroll',changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <div className='Logo'>
      <Link to='/'><img src= {Logo} alt="Logo" /></Link>
      </div>
      
      <div className='Collapse'>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
            <Link to="/" style={styleObj}>Home</Link>
        </li>
        <li>
            <Link to="/WhoWeAre">Who We Are</Link>
        </li>
        <li>
            <Link to="/WhatWeDo">What We Do</Link>
        </li>
        <li>
            <Link to="/HowWeDo">How We Do</Link>
        </li>
        <li>
            <Link to="/StudyDest">Study Destination</Link>
        </li>
        <li>
            <Link to="/Eduloans">Educational Loans</Link>
        </li>
        <li>
            <Link to="/Immigrate">Immigration</Link>
        </li>
        <li>
            <Link to="/TestPrep">Test Prep</Link>
        </li>
        <li>
            <Link to="/LetsTalk">Let's Talk</Link>
        </li>
      </ul>
      </div>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:"black"}} />) : (<FaBars size={20} style={{color:"black"}}/>)}   

      </div>
    </div>
  )
}

export default Navbar
