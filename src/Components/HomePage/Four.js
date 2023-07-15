import React from 'react'
import "./four.css"
import visa from "../../Assets/icons/visa.png"
import edu from "../../Assets/icons/education.png"
import uni from"../../Assets/icons/graduation.png"
import test from "../../Assets/icons/notes.png"
import { IoMdRocket,IoIosArrowRoundForward } from "react-icons/io";
import Sparkle from 'react-sparkle'
import damaka from "../../Assets/pics/whoweare.png"

const Four = () => {

  return (
    <div className='fourmain'>
        <div  className='four'>
        <div className='fourone fourflex'>
            <div className='fouricon'>
            <img src={uni} alt='University Selection'></img>

            </div>
            <div className='h3special fourh3 '>
                <h3>Counselling and University Selection</h3>

            </div>
            <div className='fourpspec fourp' >
                <p style={{color:"#000000"}}>Expert Assistance in Selecting the Best Universities and Colleges Abroad.</p>
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
                <p>Elevate Your Test Scores with our world-class Test preparation services for GRE, SAT, TOEFL, IELTS, PTE, and More.</p>
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
                <p style={{color:"#000000"}}>Empowering Your Dreams through Educational Loans, Scholarships, and Travel Assistance for a Seamless Educational Journey.</p>
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
                <p>Expert Guidance for smooth and streamlined Visa Applications once your admission is confirmed</p>
            </div>
        </div>
        </div>
        <div className="sidefourbelow">
            <img src={damaka} alt='firstimage'></img>

        </div>
        <div className='fourbelow'>
        <Sparkle minSize={10} maxSize={10}flicker={true}/>
            <div className='fourbelowh4'>
                <span><h4>Apply for </h4></span>
                <span className='bigiii'><h4>2024</h4></span>
                <span><h4>Intakes!!</h4></span>
                {/* <div className='mastersphd'>
                <h6>
                    Bachelor's Degree | Master's Degree | Ph.D
                </h6>

            </div> */}
            </div>
            <div className='fourbelowbtn'>
                {/* <Link to='/contact' className='btn'> <p className='btntext'>Contact Now</p></Link> */}
                <button className='2024btn'>
                <div className='rocketbtn'><IoMdRocket  size={30} style = {{color:'#004fa2'}} /></div>
                <a href='https://forms.gle/C3es4MK1wJf23dbH7' target="_blank" rel="noreferrer"><p>Apply Now!</p></a>
                <IoIosArrowRoundForward  size={30} style = {{color:'#004fa2'}} /></button>
                {/* <Link to='/Who We Are' className='btn'><p className='btntext'>Learn More</p></Link> */}
                
            </div>
        </div>
        <div className='belowmatter'>
            <h5> Bachelor's Degree | Masters Degree | Ph.D</h5>

        </div>
      </div>
  )
}

export default Four
