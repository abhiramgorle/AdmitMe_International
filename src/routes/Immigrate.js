import React from 'react'
import Navbar from '../Components/UI/Navbar'
import Footer from '../Components/UI/Footer'
import Immican from '../Components/ImmigrationCan/Immican';
function Immigrate() {
    const positiono="Immigrate";
  return (
    <div>
      <Navbar />
      <Immican />
      <Footer position={positiono} />
    </div>
  )
}

export default Immigrate
