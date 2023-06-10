import React from 'react'
import Navbar from '../Components/UI/Navbar'
import Footer from '../Components/UI/Footer'
import Testfirst from "../Components/TestPreparation/Testfirst"
import TestSecond from '../Components/TestPreparation/TestSecond'
const TestPrep = () => {
    const positiono="StudyDest"
  return (
    <div>
      <Navbar />
      <Testfirst />
      <TestSecond />
      <Footer position={positiono} />
    </div>
  )
}

export default TestPrep
