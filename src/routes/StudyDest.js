import React from 'react'
import Navbar from '../Components/UI/Navbar'
import Footer from '../Components/UI/Footer'
import StudyFirst from '../Components/StudyDestination/StudyFirst'
import Studymain from '../Components/StudyDestination/Studymain'
const StudyDest = () => {
    const positiono="StudyDest"
  return (
    <div>
      <Navbar />
      <StudyFirst />
      <Studymain />
      <Footer position={positiono} />
    </div>
  )
}

export default StudyDest
