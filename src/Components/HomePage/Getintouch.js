import React from 'react'
//  
import "./Getintouch.css"
import {HiOutlinePhone,HiOutlineLocationMarker,HiOutlineChatAlt} from 'react-icons/hi'
import {TbSend} from 'react-icons/tb'
import {Link} from 'react-router-dom';
const Getintouch = () => {
 
  return (
    <div  className='getin'>
        <div className='getinhead'>
            <h2>Get In Touch</h2>
            {/* <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p> */}
        </div>
      <div className='getinrest'>
        <div className='restone'>
        <a href="tel:+918885618111"><HiOutlinePhone size={70} style = {{color:'#004fa2',marginRight:'2rem'}} /></a>
            <a href="tel:+918885618111"><p>(+91) 8885618111</p></a>
            {/* <span>Get Support</span> */}
            <Link to='/LetsTalk' className='getsbtn1'> <p className='getsbtntext1'>Call Now</p></Link>
        </div>
        <div  className='resttwo'>
            <div className='resttwocontent'>
                <Link to="/WhoWeAre/#googlemaps"><HiOutlineLocationMarker size={70} style = {{color:'#737373',marginRight:'2rem'}} /></Link>
                <p>Rama Talkies, Visakhapatnam</p>
                {/* <span>Get Support</span> */}
                <Link to='/LetsTalk' className='getsbtn2'> <p className='getsbtntext2'>Meet Us</p></Link>

            </div>
        </div>
        <div className='restthree'>
        <a href='mailto:`info@admitmeinternational.com'><TbSend size={70} style = {{color:'#004fa2',marginRight:'2rem'}} /></a>
            <p className='emailtextt'>info@admitmeinternational.com</p>
            {/* <span>Get Support</span> */}
            <Link to='/LetsTalk' className='getsbtn3'> <p className='getsbtntext3'>Send Mail</p></Link>

        </div>
        <div  className='resttwo'>
            <div className='resttwocontent'>
                <Link to="/WhoWeAre/#googlemaps"><HiOutlineChatAlt size={70} style = {{color:'#737373',marginRight:'2rem'}} /></Link>
                <p>Drop in a Quick Message</p>
                {/* <span>Get Support</span> */}
                <Link to='/LetsTalk' className='getsbtn2'> <p className='getsbtntext2'>Send Text</p></Link>

            </div>
        </div>

      </div>
    </div>
  )
}

export default Getintouch
