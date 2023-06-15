import React from 'react'
import "./Letsfirst.css"
import lets from "../../Assets/pics/lets1.jpg"
const Letsfirst = () => {
  return (
    <div className='letsfirst'>
        <div className='letsimg'>
            <img src={lets} alt='Lets Talk'></img>
        </div>
        <div className='letsimagecontent'>
            <h2>We Will Help You Every Step Of The Way</h2>
        </div>
    </div>
  )
}

export default Letsfirst
