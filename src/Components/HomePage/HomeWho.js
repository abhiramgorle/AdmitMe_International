import React from 'react'
 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import whowe from "../../Assets/study-abroad-animate (1).svg"
import "./HomeWho.css"
// import icon1 from "../../Assets/icons/homewho1.png"
// import icon2 from "../../Assets/icons/homewho2.png"
// import Sparkle from 'react-sparkle'
// import { IoMdRocket,IoIosArrowRoundForward } from "react-icons/io";
const HomeWho = () => {
  return (
    <div className='homewhomain'>
        
        <Container  className='whoweare'>
        <Row className='row1'>
            <div className='maincontent'>
                <h2>Who We Are</h2>
                <p>AdmitMe International, headquartered in the United States, is a prominent educational consultancy in India.
                     Our primary objective is to assist students in achieving their academic and career aspirations by providing comprehensive guidance for higher education in countries such as the USA, the UK, Canada, Australia, New Zealand, France, Germany, Ireland, and more.
                    Our dedicated team not only supports students in reaching their academic goals but also helps them fulfill their career ambitions.
                     At AdmitMe International, we pride ourselves on being the most trusted experts in study visa guidance.
                     </p>
                     </div>
        </Row>
        <Row className='row2'>
            <Col md={8} className='colo1'>
            
            <img 
                src={whowe}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "650px"}}
              />
            </Col>
            <Col md={4} className='colo2'  >
                <div className='text'>
                    <h3>Most Trusted <br /> Study Visa Experts</h3>
                    {/* <p>AdmitMe International is solution oriented consultancy with straight mind approach in moulding career paths as per suitable individual profiles.</p> */}
                </div>
                <div className='firstcard'>
                    {/* <img src={icon1} className='icon1' alt="home pic"></img> */}
                    <div className='cardtext'>
                    <ul >
                            <li><h5>Free Profile Evaluation</h5></li>
                            <li><h5>Free Consultation </h5></li>
                            <li><h5>Comprehensive Support </h5></li>
                            <li><h5>Customized Approach</h5></li>
                            <li><h5>Attention to Detail</h5></li>
                            <li><h5>Timely Delivery</h5></li>
                </ul>
                        
                    </div>
                </div>
                {/* <div className='firstcard'>
                    {/* <img src={icon1} className='icon1' alt="home pic"></img> */}
                    {/* <div className='cardtext'>
                    <ul style={{ listStyle: 'disc' }}>
                            <li><h5>Free Consultation </h5></li>
                </ul>
                        
                    </div>
                </div> */} 
                {/* <div className='secondcard'>
                {/* <img src={icon2} className='icon2' alt="home pic"></img> */}
                    {/* <div className='cardtext2'>
                        
                        
                    </div>
                </div> */} 
            </Col>

        </Row>
        

    </Container>
    {/* <div className='whobelow'>
    <Sparkle minSize={10} maxSize={10}flicker={true}/>

    <div className='whobelowh4'>
        <span><h4>Get Secured/UnSecured </h4></span>
        <span className='bigiii'><h4>Study Loans</h4></span>
        <span><h4>Instantly!!</h4></span>
    </div>
    <div className='whobelowbtn'>
        
        <button className='2024btn'>
        <div className='rocketbtn'><IoMdRocket  size={30} style = {{color:'#004fa2'}} /></div>
        <a href='/EduLoans'><p>Apply Now!</p></a>
        <IoIosArrowRoundForward  size={30} style = {{color:'#004fa2'}} /></button>
        
    </div>
</div> */}
    </div>
  )
}

export default HomeWho
