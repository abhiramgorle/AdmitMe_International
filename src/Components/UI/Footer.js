import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useLocation} from 'react-router-dom';
import "./FooterStyles.css"
import {  FaPhoneAlt } from 'react-icons/fa'
// import {MdEmail} from 'react-icons/md'
import {AiFillFacebook,AiFillLinkedin,AiFillInstagram,AiOutlineMail} from 'react-icons/ai'
import ftext from "../../Assets/pics/footertext.png"

const Footer = ({ position }) => {
    const location = useLocation();
    const footerletsstyle = {display:"flex"};
    if (location.pathname === '/LetsTalk') {
        footerletsstyle.display = "none";
    }
    let texxt = "Let's Talk about your study abroad plans"
    if (location.pathname === '/') {
        footerletsstyle.display = "none";
        document.body.style.height = "763vh";
    }
    const footerStyle ={position: "relative", width: "100%",height: "320px",top:"680px"}
    
    if (position === 'Letstalk') {
        footerStyle.top = "140px";
        document.body.style.height = "217vh";
    }
    if(position=== 'WhoWeAre'){
        footerStyle.top = "186px";
        document.body.style.height = "377vh";
    }
    if(position==='WhatWeDo'){
        footerStyle.top = "156px";
        document.body.style.height = "377vh";
    }
    if(position==='HowWeDo'){
        footerStyle.top = "175px";
        document.body.style.height = "377vh";
    }
    if(position==='StudyDest'){
        footerStyle.top = "345px";
        document.body.style.height = "377vh";
    }
    if(position==='EduLoans'){
        footerStyle.top = "395px";
        document.body.style.height = "397vh";
    }
    if(position==='Immigrate'){
        footerStyle.top = "215px";
        document.body.style.height = "333vh";
    }
    if(position==='TestPrep'){
        footerStyle.top = "295px";
        document.body.style.height = "377vh";
    }
   
  return (
    <div  className='footer' style={footerStyle}>
        <div className='footer-first'>
            <Container className='Containero'>
                <Row className='Rowo' style={footerletsstyle}>
                    <Col md = {6} className='col1'>
                        <h3>
                        {texxt}
                        </h3>
                    </Col>
                    <Col md = {6} className='col2'>
                    <Link to='/LetsTalk' className='footbtn'> <p className='footbtntext'>Contact Us</p></Link>
                    </Col>
                </Row>
            </Container>

        </div>
        <div className='sb_footer_section_padding'>
        <div className='sb_footer-links'>
            {/* <div className='sb_footer-links_div1'>
                <h4>Company Info</h4>
                <a href='/WhoWeAre' >
                    <p>Who We Are</p>
                </a>
                <a href='/WhatWeDo' >
                    <p>What We Do</p>
                </a>
                <a href='/HowWeDo' >
                    <p>How We Do</p>
                </a>
                <a href='/StudyDes' >
                    <p>Study Destinations</p>
                </a>
                <a href='/TestPrep' >
                    <p>Test Prep</p>
                </a>
            </div> */}

            <div className='sb_footer-links_div'>
                <h4>Head Office</h4>
                <p>2001 Gateway Place, Suite 710,San Jose,
                    CA-95110 USA</p>
                {/* <span><a href='mailto:`info@admitmeinternational.com'>info@admitmeinternational.com</a></span> */}


            </div>
            <div className='sb_footer-links_div'>
                <h4>Regional Office</h4>
                <p>Subhavasista Enclave, 4th Floor, Day & Night Hospital Road,Rama Talkies, Visakhapatnam</p>
                {/* <span><a href="tel:+918885618111">(+91)-888 5618 111</a></span> */}

            </div>
            <div className='sb_footer-links_div3'>
                <h4>Contact Us</h4>
                {/* <FaPhoneAlt size={0} style = {{color:'#ffffff',marginRight:'2rem'}} /> */}
                <div className='phoneandmailfooter'>
                <FaPhoneAlt size = {20} style = {{color:'#ffffff',marginRight:'1rem'}}/>
                    <p>+91 8885618111</p>
                </div>
                <div className='phoneandmailfooter'>
                    <AiOutlineMail size = {25} style = {{color:'#ffffff',marginRight:'1rem'}}/>
                    <p className='footeremailtext'>info@admitmeinternational.com</p>
                </div>
            </div>
            <div className='sb_footer-links_div_image'>
                <img src={ftext} alt='Fotter text' className='footertext'></img>

            </div>
            {/* <div className='sb_footer-links_div4'>
                <h4>Regional Office</h4>
                <div className='Phone'>
                    <div className='phonesvg'><FaPhoneAlt size={20} style = {{color:'#004FA2',marginRight:'2rem'}} /></div>
                    <div className='phoneo'>
                        <FaPhoneAlt size={0} style = {{color:'#d50032',marginRight:'2rem'}} />
                        <div>
                            <p></p>
                            <a href="tel:+918885618111">(+91) 8885618111</a>
                        </div>
                    <div className='svgloc'><FaLocationArrow size={20} style = {{color:'#004FA2',marginRight:'2rem'}} /></div>
                    </div>
                    <div className='Location'>
                    <FaLocationArrow size={0} style = {{color:'#d50032',marginRight:'2rem'}} />
                    <div>
                        <p>Day & Night Hospital Road,Rama Talkies, Visakhapatnam – 530016,Andhra Pradesh (INDIA)</p>
                    </div>
                </div>
                </div>
            </div> */}
                

        </div>
        <div className='sb_footer-below'>
        <div className='sb_footer-made'>
            <p>AdmitMe International @ {new Date().getFullYear()}. All Right Reserved </p>
        </div>
        <div className='sb_footer-below-icons'>
            <a href='https://www.facebook.com/AdmitMeInternational/'><AiFillFacebook size = {25} style = {{color:'#ffffff',marginRight:'1rem'}}/></a>
            <a href='https://www.linkedin.com/company/admitme-international'><AiFillLinkedin size = {25} style = {{color:'#ffffff',marginRight:'1rem'}}/></a>
            <a href='https://www.instagram.com/admitmeinternational/'><AiFillInstagram size = {25} style = {{color:'#ffffff',marginRight:'1rem'}}/></a>

        </div>

    </div>
    </div>
    
    </div>
  )
}

export default Footer
