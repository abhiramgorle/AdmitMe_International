import React,{useEffect} from 'react'
import pic1 from "../../Assets/pics/pic1.jpg"
import pic2 from "../../Assets/pics/pic2.jpg"
import pic3 from "../../Assets/pics/pic3.png"
import pic4 from "../../Assets/pics/pic4.jpg"
import pic5 from "../../Assets/pics/pic5.jpg"
import pic6 from "../../Assets/pics/soplor.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Main.css"
const Main = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='main'>
        <div data-aos="fade-up" data-aos-easing="ease-in-out" className='University'>
            <div className='Content'>
                <h2>Counselling And University Selection</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus ut.</p>
            </div>
            <div  className='pic'>
                <img src={pic1} alt='university'></img>
            </div>

        </div>
        <div  data-aos="fade-up" data-aos-easing="ease-in-out" className='TestPreparation'>
        <div className='Content'>
                <h2>Test Preparation</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus ut.</p>
            </div>
            <div className='pic-reverse'>
                <img src={pic2} alt='university'></img>
            </div>
        </div>
        <div  data-aos="fade-up" data-aos-easing="ease-in-out"  className='soplor'>
        <div className='Content'>
                <h2>SOP | LOR | CV | Admission Essay</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus ut.</p>
            </div>
            <div  className='pic'>
                <img src={pic6} alt='university'></img>
            </div>
        </div>
        <div  data-aos="fade-up" data-aos-easing="ease-in-out" className='educationloans'>
        <div className='Content'>
                <h2>Educational Loans</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus ut.</p>
            </div>
            <div className='pic-reverse'>
                <img src={pic5} alt='university'></img>
            </div>
        </div>
        <div  data-aos="fade-up" data-aos-easing="ease-in-out" className='visaprocess'>
        <div className='Content'>
                <h2>VISA Processing</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus ut.</p>
            </div>
            <div  className='pic'>
                <img src={pic3} alt='university'></img>
            </div>
        </div>
        <div  data-aos="fade-up" data-aos-easing="ease-in-out"  className='foreignlang'>
        <div className='Content'>
                <h2>Foreign Languages</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus ut.</p>
            </div>
            <div className='pic-reverse'>
                <img src={pic4} alt='university'></img>
            </div>
        </div>
    </div>
  )
}

export default Main
