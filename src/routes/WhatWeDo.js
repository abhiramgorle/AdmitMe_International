import React from 'react'
import Navbar from '../Components/UI/Navbar'
import Footer from '../Components/UI/Footer'
import Hero from '../Components/WhatWeDo/Hero'
import Main from '../Components/WhatWeDo/Main'
const WhatWeDo = () => {
  const positiono="WhatWeDo"
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Footer position={positiono} />
    </div>
  )
}

export default WhatWeDo
