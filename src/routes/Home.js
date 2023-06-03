import React from 'react'
import Navbar from '../Components/UI/Navbar'
import Video from '../Components/HomePage/Video'
import Footer from '../Components/UI/Footer'
import HomeWho from '../Components/HomePage/HomeWho'
import Testimonials from '../Components/HomePage/Testimonials'
import Getintouch from '../Components/HomePage/Getintouch'
import Four from '../Components/HomePage/Four'
import HomeHow from '../Components/HomePage/HomeHow'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Video />
      <Four />
      <HomeWho />
      <HomeHow />
      <Testimonials />
      <Getintouch />
      <Footer />

    </div>
  )
}

export default Home
