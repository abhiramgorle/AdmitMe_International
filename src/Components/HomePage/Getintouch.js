import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Getintouch.css"
import {HiOutlinePhone,HiOutlineLocationMarker} from 'react-icons/hi'
import {TbSend} from 'react-icons/tb'
import {Link} from 'react-router-dom';
const Getintouch = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-up" data-aos-easing="ease-in-out" className='getin'>
        <div className='getinhead'>
            <h2>Get In Touch</h2>
            <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
      <div className='getinrest'>
        <div className='restone'>
            <HiOutlinePhone size={70} style = {{color:'#004fa2',marginRight:'2rem'}} />
            <p>(+91) 8885618111</p>
            <span>Get Support</span>
            <Link to='/LetsTalk' className='getsbtn1'> <p className='getsbtntext1'>Submit Request</p></Link>
        </div>
        <div data-aos="fade-up" data-aos-easing="ease-in-out" className='resttwo'>
            <div className='resttwocontent'>
                <HiOutlineLocationMarker size={70} style = {{color:'#737373',marginRight:'2rem'}} />
                <p>Rama Talkies, Visakhapatnam</p>
                <span>Get Support</span>
                <Link to='/LetsTalk' className='getsbtn2'> <p className='getsbtntext2'>Submit Request</p></Link>

            </div>
        </div>
        <div className='restthree'>
            <TbSend size={70} style = {{color:'#004fa2',marginRight:'2rem'}} />
            <p>uk@admitmeinternational.com</p>
            <span>Get Support</span>
            <Link to='/LetsTalk' className='getsbtn3'> <p className='getsbtntext3'>Submit Request</p></Link>

        </div>

      </div>
    </div>
  )
}

export default Getintouch
