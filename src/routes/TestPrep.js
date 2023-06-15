import React from 'react'
import Navbar from '../Components/UI/Navbar'
import Footer from '../Components/UI/Footer'
import Testfirst from "../Components/TestPreparation/Testfirst"
import TestSecond from '../Components/TestPreparation/TestSecond'
import Testimonials from '../Components/TestPreparation/TestTestimonial'
const TestPrep = () => {
    const positiono="TestPrep"
  return (
    <div>
      <Navbar />
      <Testfirst />
      <TestSecond />
      <Testimonials />
      <Footer position={positiono} />
    </div>
  )
}

export default TestPrep
