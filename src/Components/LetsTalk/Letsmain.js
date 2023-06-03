import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import svgo from "../../Assets/Call center-bro (1).png"
import "./Letsmain.css"
import { useForm,} from '@formspree/react';
const Letsmain = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    const [state, handleSubmit] = useForm("mwkjjgey");
  if (state.succeeded) {
      return <p>Thank You, We will Connect with you as soon as possible!</p>;
  }
  
  return (
    <div  className='letsmain'>
        <div className='letsmainhead'>
            <h2>Contact Us</h2>
            <p>Any question or remarks? Just write us a message!</p>
        </div>
        <div className='letsdiv'>
            <div data-aos="fade-up" data-aos-easing="ease-in-out" className='letssvg'>
                <img src={svgo} alt='svgImage'></img>
                
            </div>
            <div data-aos="fade-up" data-aos-easing="ease-in-out"  className='letsform'>
                <form onSubmit={handleSubmit} > 
                <div className='nameemail'>
                    <div className='nameonly'>
                        <p>Name<sup>*</sup></p>
                        <label ><input type='text' name='username' id='username' /></label>   
                    </div>
                    <div className='emailonly'>
                        <p>Email<sup>*</sup></p>
                        <label ><input type='email' name='email' id='email' /></label>   
                    </div>
                </div>
                <div className='phonestudy'>
                    <div className='phoneonly'>
                        <p>Phone Number<sup>*</sup></p>
                        <label ><input type='tel' name='Phoneno' id='Phoneno' /></label>
                    </div>
                    <div className='studyonly'>
                        <p>Study Destination</p>
                        <label>
                            <select name="studydestination">
                            <option hidden disabled selected value></option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="Uk">Uk</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className='messageonly'>
                    <p>Message</p>
                    <input type='textarea' name='message' id='message'></input>

                </div>
                <div className='submit'>
                    <button type='Submit' disabled={state.submitting}  > <p>Submit</p></button>
                    
                </div>

                </form>
            </div>

        </div>
      
    </div>
  )
}

export default Letsmain
