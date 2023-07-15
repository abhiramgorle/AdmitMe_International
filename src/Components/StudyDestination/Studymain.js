import React from 'react'
import pic1 from "../../Assets/pics/stud1.jpg"
import pic2 from "../../Assets/pics/studcan.webp"
import pic3 from "../../Assets/pics/studuk.jpg"
import pic4 from "../../Assets/pics/studire.jpg"
import pic5 from "../../Assets/pics/stud5.jpg"
import pic6 from "../../Assets/pics/studger.webp"
import pic7 from "../../Assets/pics/stud7.webp"
import pic8 from "../../Assets/pics/studaus.jpg"
import "./Studymain.css"
const Studymain = () => {
    
  return (
    <div className='studymain'>
        <div className='University3'>
            <div className='studycontent'>
                <h2>Why study in USA?</h2>
                <p> America is a land of world class learning institutions with endless study choices and offers wide range of Degrees with opportunity to change majors or opt for multiple specializations. Their universities enjoy worldwide recognition with advanced scientific and technological research.<br />US education system offers a kind of flexibility in terms of the courses that are offered, which enables students to select the choice of subject from a variety of topics.<br />Excellent programs in numerous fields of study and cutting-edge teaching technologies are few reasons why USA is a favorite study abroad destination for many Indian students.</p>
                
            </div>
            <div  className='studypic'>
                <img src={pic1} alt='university'></img>
            </div>

        </div>
        <div  className='TestPreparation3'>
        <div className='studycontent'>
                <h2>Why study in Canada?</h2>
                <p>Canada’s universities are amongst the top international ranking universities and maintain high standards of academic excellence with tuition fees being the lowest. The United Nations ranked Canada as one of the best places in the world to live. Students in Canada opt to work after graduation and make Canada permanent home by applying for permanent residency. Canada is multicultural with over 90 languages spoken in larger cities. Canadian Universities are diversified and have variety of programmes (certificates, diplomas, associate degrees, degrees, masters, doctorate, etc.)<br />Canadian government has subsidized tuition fees and is relatively affordable when compared to US, UK and Australian Universities.</p>
            </div>
            <div className='studypic-reverse'>
                <img src={pic2} alt='university'></img>
            </div>
        </div>
        <div   className='soplor3'>
        <div className='studycontent'>
                <h2>Why study in UK?</h2>
                <p>As a study destination, UK offers a world-class education. Four of the top six universities in the world are in the UK and qualifications are internationally valued and recognized. It is one of the most exciting and productive places in the world for research, creativity and innovation. If one is passionate for learning and wants to be at the forefront of his subject, this is the place to be.<br />Undergraduate and postgraduate courses in the UK tend to be shorter compared to other countries which can help to keep the cost of tuition fees and living expenses low. International students are allowed to work for up to 20 hours a week during the term and full-time during holiday. A student can develop a range of skills needed in today’s global workforce, including refining his English language.</p>
            </div>
            <div  className='studypic gap'>
                <img src={pic3} alt='university'></img>
            </div>
        </div>
        <div  className='educationloans3'>
        <div className='studycontent'>
                <h2>Why study in Ireland?</h2>
                <p>Ireland, one of Europe’s growing entrepreneurial nations, is growing to become one of the favorite study abroad destinations for students from India. Education in Ireland is valued because of the short nature of courses and intensive study patterns.<br />Ireland is ideal for IT, Pharma and Finance related fields of study. The cost of education in Ireland varies from 25,000 to 50,000 Euros for under-graduate and post-graduate courses per annum.<br />Ireland is an independent sovereign state with spectacular landscapes and is known for its old world charm, tradition and hospitality. It has become an international hub of quality due to the importance it gives to its education sector.</p>
            </div>
            <div className='studypic-reverse'>
                <img src={pic4} alt='university'></img>
            </div>
        </div>
        <div  className='visaprocess3'>
        <div className='studycontent'>
                <h2>Why study in France?</h2>
                <p>France has been consistently ranking among the top international student destinations for its quality education and great lifestyle.<br />France has strong industrial ties with many European countries which would benefit their students for international placements. With low fees and part-time job opportunities, France has been voted as the 3rd leading host country for higher education. Work permit opportunities are provided after internships.<br />France also has low transportation and living costs and government also provides many free French language courses for its international students. Students studying in France will enjoy the benefits of gaining a European Union visa that allows them to travel across many European countries.</p>
            </div>
            <div  className='studypic gap'>
                <img src={pic5} alt='university'></img>
            </div>
        </div>
        <div   className='foreignlang3'>
        <div className='studycontent'>
                <h2>Why study in Germany?</h2>
                <p>German universities are recognized the world over and offer world-class education. It is also inexpensive when compared to many other study destinations around the world. Their technical universities are more research oriented and offer Bachelors to PhD.<br />Most of the courses are funded by the state and universities charge nominal fees. As a technological super power of Europe, Germany offers a platform for students to prove their skills around the world.</p>
            </div>
            <div className='studypic-reverse'>
                <img src={pic6} alt='university'></img>
            </div>
        </div>
        <div  className='visaprocess4'>
        <div className='studycontent'>
                <h2>Why study in Singapore?</h2>
                <p>Singapore is popularly known as the IT and business hub of Asia. It has grown to be a premier destination with world –class educational institutions. The country’s two most leading universities, the University of Singapore and the Nanyang Technological University, are ranked among the World’s Top 20.<br />Singapore’s universities offer bachelor’s as well as Masters Degree in all disciplines with top notch teaching infrastructure and high quality teaching methodology. Degree from a Singapore University has worldwide recognition and provides a plethora of job opportunities around the world.<br />Singapore is also famous for Transfer Programs with other prominent universities in countries like US, UK and Australia.</p>
            </div>
            <div  className='studypic'>
                <img src={pic7} alt='university'></img>
            </div>
        </div>
        <div   className='foreignlang4'>
        <div className='studycontent'>
                <h2>Why study in Australia?</h2>
                <p>Australia is becoming a favorite study abroad destination to many Indian students for its world-class education, post-study work opportunities, excellent quality of living, unbeatable academic excellence and support system for international students. If you opt to study in Australia, you get to choose from 22,000 courses available in 1,100 universities and institutions. According to statistics, 35 Australian Universities are among the world’s best-ranked universities.<br />Australia was consistently ranked in the world’s top 10 most livable countries. Australian Universities are recognized worldwide for the quality of their research and post study employment opportunities. Students can work part time for 20 hours while pursuing education.<br />The average cost of study in Australia is between A$ 24000-A$ 36000 for under-graduate or post-graduate studies.</p>
            </div>
            <div className='studypic-reverse'>
                <img src={pic8} alt='university'></img>
            </div>
        </div>
    </div>
  )
}

export default Studymain
