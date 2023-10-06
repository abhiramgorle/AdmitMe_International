import React from 'react'
import {useState} from 'react'
// import axios from 'axios'
// import {Data} from './Data'
import svgo from "../../Assets/Call center-bro (1).png"
import "./Letsmain.css"
import { useForm} from '@formspree/react';
const Letsmain = () => {

    const [name, setName]=useState('');
    const [email, setemail]=useState('');
    const [phoneNumber, setphoneNumber]=useState('');
    const [studyDestination, setstudyDestination]=useState('');
    const [generalInquiry, setgeneralInquiry]=useState(false);
    const [CountrySpecificInquiry, setCountrySpecificInquiry]=useState(false);
    const [BankLoans, setBankLoans]=useState(false);
    const [message, setmessage]=useState('');
    const [DiscountCode, setDiscountCode]=useState('');



    const generalInquiryHandler = () => {
        setgeneralInquiry(!generalInquiry)
      }
    const CountrySpecificInquiryHandler = () => {
        setCountrySpecificInquiry(!CountrySpecificInquiry)
      }
      const BankLoansHandler = () => {
        setBankLoans(!BankLoans)
      }

    //   const [data, setData]=useState([]);

    //   const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(name,email,phoneNumber,studyDestination,generalInquiry,CountrySpecificInquiry,BankLoans,message,DiscountCode);
    
    //     // our object to pass
    //     const data = {
    //       name,email,phoneNumber,studyDestination,generalInquiry,CountrySpecificInquiry,BankLoans,message,DiscountCode
    //     }
    //     axios.post('https://sheet.best/api/sheets/4b037bfc-cc87-492c-b9cf-ed47646c4ea0',data).then(response=>{
    //         console.log(response);
    //       setName('');
    //       setemail('');
    //       setphoneNumber('');
    //       setstudyDestination('');
    //       setgeneralInquiry('');
    //       setCountrySpecificInquiry('');
    //       setBankLoans('');
    //       setmessage('');
    //       setDiscountCode('');
    //     //   return data;
    //     })
    //   }
    // //   const getData=()=>{
    // //     axios.get('https://sheet.best/api/sheets/e7a8bead-e947-4de5-9421-8e17433a3fff').then((response)=>{
    // //       setData(response.data);
    // //     })
    // //   }
    // //   useEffect(()=>{
    // //     getData();
    // //   },[data])


    const [state, handleSubmit] = useForm("mwkjjgey");
  if (state.succeeded) {
      return <p>Thank You, We will Connect with you as soon as possible!</p>;
  }
  
  return (
    <div  className='letsmain'>
        <div className='letsmainhead'>
            <h2>Write to Us</h2>
            {/* <p>Any question or remarks? Just write us a message!</p> */}
        </div>
        <div className='letsdiv'>
            <div  className='letssvg'>
                <img src={svgo} alt='svgImage'></img>
            </div>
            <div className='letsform'>
                <form onSubmit={handleSubmit} className='letstalkfullform' > 
                <div className='nameemail'>
                    <div className='nameonly'>
                        <p>Name<sup>*</sup></p>
                        <label ><input type='text' name='username' id='username' placeholder='Your Name' required onChange={(e)=>setName(e.target.value)}value={name}/></label>   
                    </div>
                    <div className='emailonly'>
                        <p>Email<sup>*</sup></p>
                        <label ><input type='email' name='email' id='email' placeholder='Email Address' onChange={(e)=>setemail(e.target.value)}
          value={email}/></label>   
                    </div>
                </div>
                <div className='phonestudy'>
                    <div className='phoneonly'>
                        <p>Phone Number<sup>*</sup></p>
                        <label ><input type='tel' name='Phoneno' id='Phoneno' required placeholder='Phone Number' onChange={(e)=>setphoneNumber(e.target.value)}
          value={phoneNumber}/></label>
                    </div>
                    <div className='studyonly'>
                        <p>Study Destination</p>
                        <label>
                            {/* <select name="studydestination">
                            <option hidden disabled selected value></option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="Uk">Uk</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Australia">Australia</option>
                            </select> */}
                            <input type='text' name='StudyDestination' id='Studydest' placeholder='Country Choice' onChange={(e)=>setstudyDestination(e.target.value)}
          value={studyDestination}/>
                        </label>
                    </div>
                </div>
                <div className='typeofenquiry'>
                    <input type="checkbox" id="Enquiry" name="Enquiry" value="General Inquiry" checked={generalInquiry} onChange={generalInquiryHandler}/>
                    <label for="vehicle1">General Inquiry</label>
                    <input type="checkbox" id="Enquiry" name="Enquiry" value="Contry Specific Inquiry" checked={CountrySpecificInquiry} onChange={CountrySpecificInquiryHandler}/>
                    <label for="vehicle1"> Country Specific Inquiry</label>
                    <input type="checkbox" id="Enquiry" name="Enquiry" value="Bank Loans" checked={BankLoans} onChange={BankLoansHandler}/>
                    <label for="vehicle1">Bank Loans</label>
                </div>
                <div className='messageonly'>
                    <p>Message</p>
                    {/* <input type='textarea' name='message' id='message' rows="4" cols="50"></input> */}
                    <textarea id="message" name="message" style={{width: "80%", height: "70px"}} onChange={(e)=>setmessage(e.target.value)}value={message}/>
                </div>
                <div className='nameemail'>
                    <div className='nameonly'>
                        <p>Discount Code (if any)</p>
                        <label ><input type='text' name='Discount Code' id='Discount Code' placeholder='Any Discount Code' onChange={(e)=>setDiscountCode(e.target.value)}value={DiscountCode}/></label>   
                    </div>
                    </div>
                <div className='submit'>
                    <button type='submit'><p>Submit</p></button>  
                </div>

                </form>
            </div>

        </div>
        
    </div>
  )
}

export default Letsmain
