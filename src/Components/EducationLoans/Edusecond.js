import React from 'react'
import "./Edusecond.css"
import lproc1 from "../../Assets/pics/lproc1.png"
import lproc2 from "../../Assets/pics/lproc2.png"
import lproc3 from "../../Assets/pics/lproc3.png"
import lproc4 from "../../Assets/pics/lproc4.png"
import bnk1 from "../../Assets/pics/bnk1.png"
import bnk2 from "../../Assets/pics/bnk2.png"
import bnk3 from "../../Assets/pics/bnk3.png"
import bnk4 from "../../Assets/pics/bnk4.png"
import bnk5 from "../../Assets/pics/bnk5.png"
import bnk6 from "../../Assets/pics/bnk6.png"
import bnk7 from "../../Assets/pics/bnk7.png"
import bnk8 from "../../Assets/pics/bnk8.png"
import bnk9 from "../../Assets/pics/bnk9.png"
import bnk10 from "../../Assets/pics/bnk10.png"
import bnk11 from "../../Assets/pics/bnk11.png"
import bnk12 from "../../Assets/pics/bnk12.png"
import bnk13 from "../../Assets/pics/bnk13.png"
import bnk14 from "../../Assets/pics/bnk14.png"
import bnk15 from "../../Assets/pics/bnk15.png"

const Edusecond = () => {
  return (
    <div className='edusecond'>
      <div className='edumaincontent'>
        <h4>Our Loan Process</h4>
      
      <div className='loanprocessgrid'>
        <div className='lprocess'>
            <img src={lproc1} alt='lproc'/>
            <span className='lproccircle' >1</span>
            <p>Approach Us In Person or Online</p>
        </div>
        <div className='lprocess'>
            <img src={lproc2} alt='lproc'/>
            <span className='lproccircle' >2</span>
            <p>Create Your Profile and Know Your Eligibility</p>
        </div>
        <div className='lprocess'>
            <img src={lproc3} alt='lproc'/>
            <span className='lproccircle' >3</span>
            <p>Proceed With Documentation<br /> & Application</p>
        </div>
        <div className='lprocess'>
            <img src={lproc4} alt='lproc'/>
            <span className='lproccircle' >4</span>
            <p>Get your loan Sanctioned and Disbursed !</p>
        </div>
      </div>
      <p className='lprocmainp'>Our experienced Overseas Education Loan Advisors will not only assist you in selecting the right 
        financial institution but also guide you step by step as to how to get education loan for studying abroad.</p>
      </div>
      <div className='eduswiper'>
        <h4>Banking Partners</h4>
        <div className='bankgrid'>
                <div>
                    <img src={bnk1} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk2} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk3} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk4} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk5} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk6} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk7} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk8} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk9} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk10} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk11} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk12} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk13} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk14} alt='bankimg' />
                </div>
                <div>
                    <img src={bnk15} alt='bankimg' />
                </div>

        </div>
      </div>
    </div>
  )
}

export default Edusecond
