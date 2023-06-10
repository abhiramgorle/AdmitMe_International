import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./second.css"
import whopic from "../../Assets/pics/WhoWeAre.png"
const Second = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='secondp' >
      <div data-aos="fade-up" data-aos-easing="ease-in-out" className='Whowearemain'>
        <div className='whowepic'>
            <img src={whopic} alt='WhoWeArePic'></img>
        </div>
        <div className='picbg'>

        </div>
        <div className='WhoWeContent'>
            <h2>About Us</h2>
            <p>AdmitMe International is one of the Best Leading Educational Consultants in India and USA. The principal activity lies in supporting students for opting right study destination. We provide you complete information about higher education in various countries of world like USA, Canada, New Zealand, France, Germany, Ireland. Our excellent collaboration with Universities helps us to deliver the best service to our students. AdmitMe International is solution oriented consultancy with straight mind approach in moulding career paths as per suitable individual profiles.</p>
            <br></br>
            <p>We are proud to say that it is one of the most sought after overseas education consultants in India representing premier universities/colleges. The Head office of AdmitMe International is in California, USA. We provide end to end services in visa assistance, travel assistance and admissions at the undergraduate and postgraduate levels along with tutorial services for GRE/IELTS/PTE/SAT.</p>
            <br></br>
            <p>Colleges decide Careers. Identifying the right college and the right program for your Graduate programs is the most critical step in your career. At AdmitMe we offer a holistic guidance for choosing a right program for your profile. Our counselors are based out of USA and have enormous experience with counseling international students from various countries. We bring enormous knowledge coupled with on the ground information to provide realistic guidance to the students. Our counseling service helps to bring the best out of students and identify the right programs that suit their profile. Our SOP service enhances the student’s profile by creating a compelling portrayal to suit the college’s requirements.</p>
        </div>

      </div>
      <div data-aos="fade-up" data-aos-easing="ease-in-out" className='marker'>
        <div className='mapmarker'>
            <h2>Find Us At</h2>

        </div>
<iframe 
title="mapMarker"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3346574666402!2d83.30881067483855!3d17.728863883217716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943ed16c558c3%3A0x59b583635ce67a4d!2sAdmitMe%20International!5e0!3m2!1sen!2sin!4v1685463756133!5m2!1sen!2sin" 
width="100%" 
height="400"
allowfullscreen / >

      </div>
    </div>
  )
}

export default Second
