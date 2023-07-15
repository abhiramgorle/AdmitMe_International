import React from 'react'
import "./second.css"
import whopic from "../../Assets/pics/ABOUT US.png"
const Second = () => {
  
  return (
    <div className='secondp' >
      <div className='Whowearemain'>
        <div className='whowepic'>
            <img src={whopic} alt='WhoWeArePic'></img>
        </div>

        
        <div className='WhoWeContent'>
            <h2>Who We Are</h2>
            <p>AdmitMe International stands as a prominent educational consultancy in India, with its
headquarters situated in the United States. Our primary objective is to empower
students in achieving their academic and career goals by providing comprehensive
guidance for higher education across various countries worldwide, including the USA,
the UK, Canada, Australia, New Zealand, France, Germany, Ireland, and more. We
believe in guiding students not only towards their desired academic destinations but
also in helping them realize their long-term career aspirations.</p>
            <br></br>
            <p>With our extensive network of reputable universities in the aforementioned countries, we
are well-equipped to connect our students with the right colleges that align with their
unique profiles. Our approach to student engagement is holistic, taking into
consideration their aspirations, current trends, and the market outlook.</p>
            <br></br>
            <p>Our assistance to students begins at the fundamental level, starting with guiding them in
choosing the appropriate majors and universities. We provide tailored tutoring to cater
to individual needs for standardized tests such as GRE, SAT, IELTS, PTE, TOEFL, and
more. Additionally, we offer coaching to enhance visibility in their applications, support
them with their banking requirements, provide travel and visa assistance, and extend
our guidance even during and after their study abroad experiences. Our alumni maintain
a strong connection with us, sharing their practical insights and counseling subsequent
batches of students throughout the entire process.</p>
        </div>

      </div>
      <div className='whychooseus'>
      <h2>Why Choose Us</h2>
            <p><b>Customized Approach: &nbsp;</b>  We understand that each student is unique, and we tailor our
services to meet your specific requirements and goals.</p>
            <br></br>
            <p><b>Expert Writers: &nbsp;</b>  Our team comprises experienced writers who possess in-depth
knowledge of the study abroad application process.</p>
            <br></br>
            <p><b>Attention to Detail: &nbsp;</b>  We pay meticulous attention to every aspect of your application
materials to ensure they are error-free and compelling.</p>
            <br></br>
            <p><b>Timely Delivery:&nbsp;</b> We respect deadlines and strive to deliver your completed application
materials promptly.</p>
            <br></br>
            <p>Let us assist you in creating exceptional application materials that will set you apart
from the competition and help you secure admission to your desired study abroad
program. Contact us today to get started on your journey towards a successful
international education!</p>

      </div>
      <div  className='marker' >
        <div className='mapmarker'>
            <h2>Find Us At</h2>

        </div>
<iframe 
id = "googlemaps"
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
