import React from 'react'
import pic1 from "../../Assets/pics/pic1.jpg"
import pic2 from "../../Assets/pics/pic2.jpg"
import pic3 from "../../Assets/pics/pic3.webp"
// import pic4 from "../../Assets/pics/pic4.jpg"
import pic5 from "../../Assets/pics/pic5.jpg"
import pic6 from "../../Assets/pics/soplor.jpg"
import "./Main.css"
const Main = () => {
    
  return (
    <div className='main'>
        <div className='University'>
            <div className='Content'>
                <h2>COUNSELLING AND UNIVERSITY SELECTION</h2>
                <p>Our experienced Admission Officers work closely with you to gain a deep understanding
                    of your goals, preferences, and educational background. Through this personalized
                    approach, they assist you in shortlisting the finest universities and colleges abroad that
                    align perfectly with your aspirations and academic profile. They provide comprehensive
                    guidance on program selection, course details, costs, and also help you explore
                    scholarships that match your eligibility. Additionally, based on your preferences and
                    desired institutions, our team equips you with valuable information regarding tuition
                    fees, living expenses, on-campus placements, and acceptance rates, empowering you
                    to make well-informed decisions about your educational journey.</p>
            </div>
            <div  className='pic'>
                <img src={pic1} alt='university'></img>
            </div>

        </div>
        <div  className='TestPreparation'>
        <div className='Content reverse'>
                <h2>COMPREHENSIVE TEST PREPARATION</h2>
                <p>We offer comprehensive coaching programs for various standardized tests required for
                    international education, such as GRE, SAT, TOEFL, IELTS, PTE, and more. Our
                    student-centric approach ensures that each student receives personalized attention and
                    tailored instruction. With high-quality study materials, rigorous practice sessions, and
                    simulated exams, we equip students with the skills and confidence needed to excel in
                    their exams.
                </p>
            </div>
            <div className='pic-reverse'>
                <img src={pic2} alt='university'></img>
            </div>
        </div>
        <div   className='soplor'>
        <div className='Content'>
                <h2>FINANCIAL SERVICES AND SCHOLARSHIP ASSISTANCE</h2>
                <p>At AdmitMe International, we are committed to helping you navigate the complex world
                    of educational financing. We understand that funding your education abroad can be a
                    significant concern, and that&#39;s why we offer comprehensive support with education
                    loans and scholarships to make your dream of studying abroad a reality.Our platform provides the best financial assistance options for your foreign education
                    plans. Our Education Loan Advisors provide support in exploring scholarships and
                    financial aid opportunities to ease the financial burden of studying abroad. They
                    organize funding options for hassle-free loans, financial aid, scholarships, and
                    systematic assistance for the overseas education loan process. We also help with
                    showing &quot;proof of funds&quot; to universities and offer additional services like foreign
                    exchange, global cards, SIM cards, and overseas travel insurance.</p>
            </div>
            <div  className='pic space'>
                <img src={pic5} alt='university'></img>
            </div>
        </div>
        <div  className='educationloans'>
        <div className='Content reverse'>
                <h2>SOP | LOR | CV | Admission Essay</h2>
                <p>At AdmitMe International, we specialize in assisting aspiring students like you in
                    creating outstanding application materials that will maximize your chances of being
                    accepted into your dream study abroad program. We understand that applying to
                    international universities can be a daunting process, which is why we offer our
                    expertise to help you create top-notch Statement of Purpose (SOP), Letter of
                    Recommendation (LOR), Curriculum Vitae (CV), and Admission Essays.
                    </p>
            </div>
            <div className='pic-reverse'>
                <img src={pic6} alt='university'></img>
            </div>
        </div>
        <div  className='visaprocess'>
        <div className='Content'>
                <h2>VISA ASSISTANCE</h2>
                <p>
                        Visa processing is a critical step once your admission into your desired course is
                        confirmed. Once you receive confirmation of admission from your chosen university, our
                        committed counselors provide continuous guidance and support throughout the visa
                        application process to ensure accurate completion of visa applications. Our dedicated
                        team will assist you in navigating the documentation requirements, like, document
                        preparation, application completion, and timely submission, ensuring that all necessary
                        paperwork is in order as per documentation requirements and procedures of various
                        countries. They offer you valuable insights to maximize your chances of visa success.
                        Our goal is to ensure that you are well-prepared and up-to-date with the latest visa
                        requirements and conditions, allowing you to approach the process with confidence and
                        peace of mind.
                </p>
            </div>
            <div  className='pic'>
                <img src={pic3} alt='university'></img>
            </div>
        </div>
        {/* <div   className='foreignlang'>
        <div className='Content'>
                <h2>Foreign Languages</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus ut.</p>
            </div>
            <div className='pic-reverse'>
                <img src={pic4} alt='university'></img>
            </div>
        </div> */}
    </div>
  )
}

export default Main
