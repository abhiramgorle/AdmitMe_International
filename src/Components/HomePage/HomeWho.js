import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import whowe from "../../Assets/study-abroad-animate.svg"
import "./HomeWho.css"
import icon1 from "../../Assets/icons/homewho1.png"
import icon2 from "../../Assets/icons/homewho2.png"
const HomeWho = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <Container data-aos="fade-up" data-aos-easing="ease-in-out" className='whoweare'>
        <Row className='row1'>
            <div className='maincontent'>
                <h2>Who We Are</h2>
                <p>Welcome to AdmitMe International<br/>A True Mentor for your International Career</p>
            </div>
        </Row>
        <Row className='row2'>
            <Col md={8} className='colo1'>
            <img data-aos="fade-up" data-aos-easing="ease-in-out"
                src={whowe}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "650px"}}
              />
            </Col>
            <Col md={4} className='colo2'>
                <div className='text'>
                    <h3>Most trusted in our field</h3>
                    <p>AdmitMe International is solution oriented consultancy with straight mind approach in moulding career paths as per suitable individual profiles.</p>
                </div>
                <div className='firstcard'>
                    <img src={icon1} className='icon1' alt="home pic"></img>
                    <div className='cardtext'>
                        <h5>Best Leading Educational Consultants in India</h5>
                    </div>
                </div>
                <div className='secondcard'>
                <img src={icon2} className='icon2' alt="home pic"></img>
                    <div className='cardtext2'>
                        <h5>One of the most sought after overseas education consultants in India</h5>
                    </div>
                </div>
            </Col>

        </Row>

    </Container>
  )
}

export default HomeWho
