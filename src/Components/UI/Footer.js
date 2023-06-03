import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import "./FooterStyles.css"
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
import {AiFillFacebook,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'

const Footer = ({ position }) => {
    
    const footerStyle ={position: "absolute", width: "100%",height: "390px",top:"3670px"}
    if (position === 'Letstalk') {
        footerStyle.top = "1190px";
    }
    if(position=== 'WhoWeAre'){
        footerStyle.top = "2006px";
    }
    if(position==='WhatWeDo'){
        footerStyle.top = "3106px";
    }
    if(position==='HowWeDo'){
        footerStyle.top = "3645px";
    }
    if(position==='StudyDest'){
        footerStyle.top = "3845px";
    }
  return (
    <div  className='footer' style={footerStyle}>
        <div className='footer-first'>
            <Container className='Containero'>
                <Row className='Rowo'>
                    <Col md = {6} className='col1'>
                        <h3>
                        Let's Talk about your study abroad plans
                        </h3>
                    </Col>
                    <Col md = {6} className='col2'>
                    <Link to='/LetsTalk' className='btn'> <p className='btntext'>Contact Us</p></Link>
                    </Col>
                </Row>
            </Container>

        </div>
        <div className='sb_footer_section_padding'>
        <div className='sb_footer-links'>
            <div className='sb_footer-links_div1'>
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
            </div>

            <div className='sb_footer-links_div'>
                <h4>Head Office</h4>
                <p>2001 Gateway Place, Suite 710,San Jose,
                    CA-95110 USA</p>
                <span><a href='mailto:`info@admitmeinternational.com'>info@admitmeinternational.com</a></span>


            </div>
            <div className='sb_footer-links_div'>
                <h4>Overseas Branch Office</h4>
                <p>29 Bedford StreetCardiff, 
                    CF24 3BZWALES, UK</p>
                <span><a href='mailto:`uk@admitmeinternational.com'>uk@admitmeinternational.com</a></span>

            </div>
            <div className='sb_footer-links_div3'>
                <h4>Branches</h4>
                <p>Bangalore</p>
                <p>Hyderabad</p>
                <p>United Kingdom</p>
            </div>
            <div className='sb_footer-links_div4'>
                <h4>Regional Office</h4>
                <div className='Phone'>
                    <div className='phonesvg'><FaPhoneAlt size={20} style = {{color:'#004FA2',marginRight:'2rem'}} /></div>
                    <div className='phoneo'>
                    <FaPhoneAlt size={20} style = {{color:'#e0263c',marginRight:'2rem'}} />
                    <div>
                        <p></p>
                        <a href="tel:+918885618111">(+91) 8885618111</a>
                    </div>
                    <div className='svgloc'><FaLocationArrow size={20} style = {{color:'#004FA2',marginRight:'2rem'}} /></div>
                    </div>
                    <div className='Location'>
                    <FaLocationArrow size={20} style = {{color:'#e0263c',marginRight:'2rem'}} />
                    <div>
                        <p>Day & Night Hospital Road,Rama Talkies, Visakhapatnam – 530016,Andhra Pradesh (INDIA)</p>
                    </div>
                </div>
                </div>
            </div>
                

        </div>
      
    </div>
    <div className='sb_footer-below'>
        <div className='sb_footer-made'>
            <p>AdmitMe International @ {new Date().getFullYear()}. All Right Reserved </p>
        </div>
        <div className='sb_footer-below-icons'>
            <a href='https://www.facebook.com/AdmitMeInternational/'><AiFillFacebook size = {25} style = {{color:'#335bf5',marginRight:'1rem'}}/></a>
            <a href='https://www.linkedin.com/company/admitme-international'><AiFillLinkedin size = {25} style = {{color:'#0077b5',marginRight:'1rem'}}/></a>
            <a href='https://www.instagram.com/admitmeinternational/'><AiFillInstagram size = {25} style = {{color:'#E61F5A',marginRight:'1rem'}}/></a>

        </div>

    </div>
    </div>
  )
}

export default Footer
