import React,{useEffect} from 'react'
import "./HowContent.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic1 from "../../Assets/pics/howone.jpg"
import pic2 from "../../Assets/pics/howtwo.jpg"
import pic3 from "../../Assets/pics/howthree.jpg"
import pic4 from "../../Assets/pics/howfour.jpg"
import pic5 from "../../Assets/pics/howfive.jpg"
import pic6 from "../../Assets/pics/howsix.jpg"
const HowContent = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='howmain'>
        <div data-aos="fade-up" data-aos-easing="ease-in-out" className='University1'>
            <div className='howcontent'>
                <h2>1. Send Academic Documents</h2>
                <p>Our educational counselors play a vital role in your profile analysis and also shortlist the relevant options that suit your profile by taking into consideration your educational background and career objectives. While applying to Universities/Colleges abroad, you need to provide us with a long list of documents which is very cumbersome. We assist you in compiling all of them and ensure their accuracy in order to ensure your admission & visa. </p>
            </div>
            <div  className='howpic'>
                <img src={pic1} alt='university'></img>
            </div>

        </div>
        <div  data-aos="fade-up" data-aos-easing="ease-in-out" className='TestPreparation1'>
        <div className='howcontent'>
                <h2>2. Profile Evaluation call</h2>
                <p>Our counselors thoroughly review your  documents and help you set priorities with the most up-to-date information of the courses and universities offering them. They also guide you as to which admission or language tests you need to take for admission into their universities. They evaluate your profile based on your choice and capabilities and your affordability as well. They provide you with best university options and availability of courses.</p>
            </div>
            <div className='howpic-reverse'>
                <img src={pic2} alt='university'></img>
            </div>
        </div>
        <div  data-aos="fade-up" data-aos-easing="ease-in-out"  className='soplor1'>
        <div className='howcontent'>
                <h2>3. University Shortlist</h2>
                <p>After having understood your preference and your desired schools, the key to short-listing universities is to set your own priorities. Our expert counselors will assist you with searching & shortlisting universities and applying for them. They will assist you in shortlisting based on tuition fee & living expenses, on-campus placements and acceptance rate of international students. </p>
            </div>
            <div  className='howpic'>
                <img src={pic3} alt='university'></img>
            </div>
        </div>
        <div  data-aos="fade-up" data-aos-easing="ease-in-out" className='educationloans1'>
        <div className='howcontent'>
                <h2>4. Document Preparation</h2>
                <p>Universities require a long list of documents to process your application. Our counselors give you complete guidance in applying for universities online, drafting SOP, LOR, Resume, Essays and other essential documents which are crucial for your application to be shortlisted. They give utmost care in preparing your documents to confirm your admission into the university of your choice. </p>
            </div>
            <div className='howpic-reverse'>
                <img src={pic4} alt='university'></img>
            </div>
        </div>
        <div  data-aos="fade-up" data-aos-easing="ease-in-out" className='visaprocess1'>
        <div className='howcontent'>
                <h2>5. Application Submission</h2>
                <p>AdmiteMe International is partnered with some of the premier institutions across the globe. Once your application is submitted to the universities, it takes about 4 – 6 weeks for it to get processed and we will keep track of it every step of the way till you receive your admission confirmation and provide necessary guidance. We ensure that we pay attention to detail with your application to help you keep calm and hope for the best outcome.</p>
            </div>
            <div  className='howpic'>
                <img src={pic5} alt='university'></img>
            </div>
        </div>
        <div  data-aos="fade-up" data-aos-easing="ease-in-out"  className='foreignlang1'>
        <div className='howcontent'>
                <h2>6. Visa Counselling</h2>
                <p>Our counselors will begin your visa application once you receive your confirmation of admission from the university of your choice. We guide you step-by-step with the visa processing right from filling in the online application forms to getting other necessary documents ready. We also conduct mock visa interviews to prepare you better and keep you fully informed on the latest visa requirements and conditions. </p>
            </div>
            <div className='howpic-reverse'>
                <img src={pic6} alt='university'></img>
            </div>
        </div>
    </div>
  )
}

export default HowContent
