import React from 'react'
import Navbar from '../Components/UI/Navbar'
import Footer from '../Components/UI/Footer'
import Letsfirst from '../Components/LetsTalk/Letsfirst'
import Letsmain from '../Components/LetsTalk/Letsmain'
const LetsTalk = () => {
  const positiono="Letstalk"
  return (
    <div>
      <Navbar />
      <Letsfirst />
      <Letsmain />
      <Footer position={positiono} />
    </div>
  )
}

export default LetsTalk
