import React from 'react'
import howwedo from "../../Assets/pics/howwedo.png"
import "./Howfirst.css"
const Howfirst = () => {
  return (
    <div className='howwedofirst'>
        <div className='howwedoimg'>
            <img src={howwedo} alt='howwedo Talk'></img>
        </div>
        <div className='howwedoimagecontent'>
            <h2>How We Do</h2>
        </div>
    </div>
  )
}

export default Howfirst
