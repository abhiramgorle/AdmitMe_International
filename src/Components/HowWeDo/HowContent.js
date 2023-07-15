import React from 'react'
import "./HowContent.css"
import pic1 from "../../Assets/pics/howone.jpg"
import pic2 from "../../Assets/pics/howtwo.webp"
import pic3 from "../../Assets/pics/howthree.jpg"
// import pic4 from "../../Assets/pics/howfour.jpg"
import pic5 from "../../Assets/pics/howfive.jpg"
import pic6 from "../../Assets/pics/howsix.jpg"
const HowContent = () => {
    
  return (
    <div className='howmain'>
        <div className='University1 nogap'>
            <div className='howcontent'>
                <h2>Academic Documents</h2>
                <p>First step of the process is for you to submit your academic records and/or work experiences if any. Our
educational counselors play a crucial role in analyzing your profile and carefully selecting the
most suitable options that align with your educational background and career objectives. When
it comes to applying to universities/colleges abroad, the process can be burdensome, requiring
a lengthy list of documents. However, we understand the challenges involved and are here to
assist you every step of the way. Our dedicated team will help you compile all the necessary
documents, ensuring their accuracy and ultimately increasing your chances of securing
admission and obtaining a visa. </p>
            </div>
            <div  className='howpic'>
                <img src={pic1} alt='university'></img>
            </div>

        </div>
        <div  className='TestPreparation1 marbot'>
        <div className='howcontent '>
                <h2> Profile Evaluation call</h2>
                <p>Our counselors conduct a comprehensive review of your documents, providing you with the
most up-to-date information on courses and universities that offer them. They also offer
guidance on which admission or language tests are required for entry into these universities. By
evaluating your profile, taking into account your preferences, capabilities, and affordability, they
provide you with the best university options and available courses.</p>
            </div>
            <div className='howpic-reverse spacee'>
                <img src={pic2} alt='university'></img>
            </div>
        </div>
        <div   className='soplor1'>
        <div className='howcontent'>
                <h2> University Shortlist</h2>
                <p>Further, you are guided through a series of process that includes Document preparation,
Application submission, and guidance through the Visa process – application to preparation for
the interview. As mentioned in What We Do section, our team of experts guides you and assists
you with all financial processes. Furthermore, you will be guided through a series of processes that include document
preparation, application submission, assistance with all financial processes and assistance with
the visa process, from application to interview preparation. As mentioned in What We Do section, our team of experts will provide comprehensive guidance throughout the
entire process, from the time you reach out to us till you reach your study destination abroad. </p>
            </div>
            <div  className='howpic gapppp'>
                <img src={pic3} alt='university'></img>
            </div>
        </div>
        {/* <div  className='educationloans1'>
        {/* <div className='howcontent'>
                {/* <h2>4. Document Preparation</h2> */}
                {/* <p>Furthermore, you will be guided through a series of processes that include document
preparation, application submission, assistance with all financial processes and assistance with
the visa process, from application to interview preparation. As mentioned in What We Do section, our team of experts will provide comprehensive guidance throughout the
entire process, from the time you reach out to us till you reach your study destination abroad. </p> */}
            {/* </div> */}
            {/* <div className='howpic-reverse'>
                <img src={pic4} alt='university'></img>
            </div> */}
        {/* </div>  */}

        <div   className='foreignlang1'>
        <div className='howcontent'>
                <h2> Visa Counselling</h2>
                <p>Our counselors will begin your visa application once you receive your confirmation of admission from the university of your choice. We guide you step-by-step with the visa processing right from filling in the online application forms to getting other necessary documents ready. We also conduct mock visa interviews to prepare you better and keep you fully informed on the latest visa requirements and conditions. </p>
            </div>
            <div className='howpic-reverse'>
                <img src={pic6} alt='university'></img>
            </div>
        </div>
        <div  className='visaprocess1'>
        <div className='howcontent'>
                <h2> Application Submission</h2>
                <p>AdmiteMe International is partnered with some of the premier institutions across the globe. Once your application is submitted to the universities, it takes about 4 – 6 weeks for it to get processed and we will keep track of it every step of the way till you receive your admission confirmation and provide necessary guidance. We ensure that we pay attention to detail with your application to help you keep calm and hope for the best outcome.</p>
            </div>
            <div  className='howpic gapppp'>
                <img src={pic5} alt='university'></img>
            </div>
        </div>
        
    </div>
  )
}

export default HowContent
