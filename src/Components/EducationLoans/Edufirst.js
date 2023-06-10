import React from 'react'
import "./Edufirst.css"
import edu from "../../Assets/pics/eloans.png"
import eser1 from "../../Assets/pics/eservice1.jpg"
import eser2 from "../../Assets/pics/eservice2.png"
import eser3 from "../../Assets/pics/eservice3.jpg"
import eser4 from "../../Assets/pics/eservice4.jpeg"
const StudyFirst = () => {
  return (
    <div className='edufirst'>
        <div className='eduimg'>
            <img src={edu} alt='Eduloans'></img>
        </div>
        <div className='eduimagecontent'>
            <h2> International Study<br />Loans</h2>
            <p>One Stop Solution for Foreign Eduaction Loans</p>
        </div>
        <div className='eloanservices'>
          <div className='eservice serblue'>
            <img src={eser1} alt='eservice'/>
            <p>100% Funding</p>
          </div>
          <div className='eservice serred'>
            <img src={eser2} alt='eservice'/>
            <p>Pre-Admission Loan</p>
          </div>
          <div className='eservice serblue'>
            <img src={eser3} alt='eservice'/>
            <p>Quick Loan Sanction</p>
          </div>
          <div className='eservice serred'>
            <img src={eser4} alt='eservice'/>
            <p>Secured / Unsecured Loans</p>
          </div>

        </div>
    </div>
  )
}

export default StudyFirst
