import React from 'react'
import "./Studyfirst.css"
import study from "../../Assets/pics/flag2.jpg"
const StudyFirst = () => {
  return (
    <div className='studyfirst'>
        <div className='studyimg'>
            <img src={study} alt='study Talk'></img>
        </div>
        <div className='studyimagecontent'>
            <h2>Study Destinations</h2>
        </div>
    </div>
  )
}

export default StudyFirst
