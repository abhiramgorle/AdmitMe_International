import React from 'react'
import testprep1 from "../../Assets/pics/testprep1.png"
import testprep2 from "../../Assets/pics/testprep2.png"
import testprep3 from "../../Assets/pics/testprep3.png"
import testprep4 from "../../Assets/pics/testprep4.png"
import testprep5 from "../../Assets/pics/testprep5.png"
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
                <img src={testprep1} alt='TestPreparation'/>
            </div>
        </div>
      
    </div>
  )
}

export default TestSecond
