import React from 'react'
import Navbar from '../Components/UI/Navbar'
import Footer from '../Components/UI/Footer'
import Howfirst from '../Components/HowWeDo/Howfirst'
// import Howflow from '../Components/HowWeDo/Howflow'
import HowContent from '../Components/HowWeDo/HowContent'
const HowWeDo = () => {
  const positiono="HowWeDo"
  return (
    <div>
      <Navbar />
      <Howfirst />
      {/* <Howflow /> */}
      <HowContent />
      <Footer position={positiono} />
    </div>
  )
}

export default HowWeDo
