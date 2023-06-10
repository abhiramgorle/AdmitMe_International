import React from 'react'
import "./Testfirst.css"
import edu from "../../Assets/pics/testprepban.jpg"
const StudyFirst = () => {
  return (
    <div className='testfirst'>
        <div className='testimg'>
            <img src={edu} alt='Eduloans'></img>
        </div>
        <div className='testimagecontent'>
            <h2> Score More With Us</h2>
            <p>Test Preparation Made Easy</p>
        </div>
    </div>
  )
}
export default StudyFirst
