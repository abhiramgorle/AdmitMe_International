import React from 'react'
import Navbar from '../Components/UI/Navbar'
import Footer from '../Components/UI/Footer'
import Edufirst from "../Components/EducationLoans/Edufirst"
import Edusecond from '../Components/EducationLoans/Edusecond'
const Eduloans = () => {
    const positiono="EduLoans";
  return (
    <div>
      <Navbar />
      <Edufirst />
      <Edusecond />
      <Footer position={positiono} />
    </div>
  )
}

export default Eduloans
