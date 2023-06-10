import React from 'react'
import Navbar from '../Components/UI/Navbar'
import Footer from '../Components/UI/Footer'
import StudyFirst from '../Components/StudyDestination/StudyFirst'
import Studymain from '../Components/StudyDestination/Studymain'
import Studflow from '../Components/StudyDestination/Studflow'
const StudyDest = () => {
    const positiono="StudyDest"
  return (
    <div>
      <Navbar />
      <StudyFirst />
      <Studymain />
      <Studflow />
      <Footer position={positiono} />
    </div>
  )
}

export default StudyDest
