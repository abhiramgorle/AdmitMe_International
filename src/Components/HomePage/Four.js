import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./four.css"
import visa from "../../Assets/icons/visa.png"
import edu from "../../Assets/icons/education.png"
import uni from"../../Assets/icons/graduation.png"
import test from "../../Assets/icons/notes.png"

const Four = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div data-aos="fade-up" data-aos-easing="ease-in-out" className='four'>
        <div className='fourone fourflex'>
            <div className='fouricon'>
            <img src={uni} alt='University Selection'></img>

            </div>
            <div className='fourh3' style={{paddingLeft:"18px",top:"75px"}}>
                <h3>Counselling and University Selection</h3>

            </div>
            <div className='fourp' style={{paddingLeft:"18px",top:"140px"}}>
                <p style={{color:"#737373"}}>Our excellent Admission Advisors assist you in short listing best Universities and Colleges abroad.</p>
            </div>
        </div>
        <div className='fourtwo fourflex'>
            <div className='fouricon'>
            <img src={test} alt='Test Preparation'></img>
            </div>
            <div className='fourh3' >
            <h3 style={{color:"#ffffff"}}>Test Preparation</h3>

            </div>
            <div className='fourp'>
                <p>Our world class services include classroom-based intensive training for GRE, SAT, TOEFL, IELTS, PTE etc,.</p>
            </div>
        </div>
        <div className='fourthree fourflex'>
            <div className='fouricon'>
                <img src={edu} alt='Education loans'></img>

            </div>
            <div className='fourh3'>
            <h3>Educational Loans</h3>

            </div>
            <div className='fourp'>
                <p style={{color:"#737373"}}>Our range of value-added services includes assistance for Education Loan and Scholarships, Travel and Accommodation Assistance.</p>
            </div>

        </div>
        <div className='fourfour fourflex'>
            <div className='fouricon'>
                <img src={visa} alt='viasaicon'></img>

            </div>
            <div className='fourh3'>
                <h3 style={{color:"#ffffff"}}>Visa Processing</h3>
            </div>
            <div className='fourp'>
                <p>Visa-processing is a crucial step once your admission is confirmed. Our experts guide you at length in filling up visa applications</p>
            </div>
        </div>
      </div>
  )
}

export default Four
