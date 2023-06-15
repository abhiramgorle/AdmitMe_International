import React from 'react'
import testprep1 from "../../Assets/pics/testprep1.png"
import testprep2 from "../../Assets/pics/testprep2.png"
import testprep3 from "../../Assets/pics/testprep3.png"
import testprep4 from "../../Assets/pics/testprep4.png"
import testprep5 from "../../Assets/pics/testprep5.png"
import testprep6 from "../../Assets/pics/testprep6.jpg"

import imi1 from "../../Assets/pics/testadv1.jpg"
import imi2 from "../../Assets/pics/testadv2.jpg"
import imi3 from "../../Assets/pics/testadv3.jpg"
import imi4 from "../../Assets/pics/testadv4.jpg"
import "./Testsecond.css"
const TestSecond = () => {
  return (
    <div className='TestSecond'>
        <div className='Testsecondhead'>
            <h4>Exam Preparations we provide</h4>
        </div>
        <div className='Testsecondgrid'>
            <div className='testsecondimg'>
                <img src={testprep1} alt='TestPreparation'/>
            </div>
            <div className='testsecondimg'>
                <img src={testprep2} alt='TestPreparation'/>
            </div>
            <div className='testsecondimg'>
                <img src={testprep3} alt='TestPreparation'/>
            </div>
            <div className='testsecondimg'>
                <img src={testprep4} alt='TestPreparation'/>
            </div>
            <div className='testsecondimg'>
                <img src={testprep5} alt='TestPreparation'/>
            </div>
            <div className='testsecondimg'>
                <img src={testprep6} alt='TestPreparation'/>
            </div>
        </div>
        <div className='testabout'>

        </div>
        <div className='testser'>
        <div className='testserhead'>
            <div className='sername'>
            <span className='serhead'><h2>AdmitMe  </h2></span>
            <span className='serheadred'><h2 style={{color:"#e0263c"}}>Advantage</h2></span>
            </div>
        </div>
        <div className='testsermain'>
            <div className='testservice'>
                <img src={imi1} alt='service'></img>
                <h3>Comprehensive and Exhaustive Study Material</h3></div>
            <div className='testservice'>
            <img src={imi2} alt='service'></img>
                <h3>90 Hour Intensive Classroom Training Programs</h3></div>
            <div className='testservice'>
            <img src={imi3} alt='service'></img>
                <h3>Well Designed Verbal, Quantitative and Analytical Training Sessions</h3></div>
            <div className='testservice'>
            <img src={imi4} alt='service'></img>
                <h3>Well Structured Training Sessions by Internationally Experienced Faculty</h3></div>

        </div>

      </div>
      
    </div>
  )
}

export default TestSecond
