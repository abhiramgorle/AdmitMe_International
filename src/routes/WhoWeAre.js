import React from 'react'
import Navbar from '../Components/UI/Navbar'
import Footer from '../Components/UI/Footer'
import First from "../Components/WhoWeAre/first"
import Second from "../Components/WhoWeAre/second"
const WhoWeAre = () => {
  const positiono="WhoWeAre"
  return (
    <div>
      <Navbar />
      <First />
      <Second />
      <Footer position={positiono} />
    </div>
  )
}

export default WhoWeAre
