import React from 'react'
import "./Immican.css"
import img1 from "../../Assets/pics/canada1.webp"
import imi1 from "../../Assets/pics/imi1.jpg"
import imi2 from "../../Assets/pics/imi2.jpg"
import imi3 from "../../Assets/pics/imi3.jpg"
import imi4 from "../../Assets/pics/imi4.jpg"
import imi5 from "../../Assets/pics/imi5.jpg"
import imi6 from "../../Assets/pics/imi6.jpg"
import { Link } from 'react-router-dom'
const Immican = () => {
  return (
    <div className='immican'>
      <div className='immihead'>
        <div className='immiheadname'>
            <span className='head1'><h4>Want to Settle in Canada ?</h4></span>
            <h2>
                Immigration 
            </h2><h2 style={{color:'#e0263c'}}>Made easy</h2>
            <span className='head2'><h4>We assist you in settling in Canada seamlessly, with Highest Success Rate. </h4></span>
            <div className='imgbtnhome'>
                <Link to='/LetsTalk' className='imgbtn'> <p className='imgbtntext'>Contact Now</p></Link>
                <Link to='/Who We Are' className='imgbtn-light'><p className='imgbtntext'>Learn More</p></Link>
            </div>
        </div>
        <div className='immiheadimg'>
            <img src={img1} alt='canda' />
        </div>

      </div>
      <div className='immiser'>
        <div className='immiserhead'>
            <div className='sername'>
            <span className='serheadred'><h2 style={{color:"#e0263c"}}> Our Services</h2></span>
            </div>
            <p className='serp'>We provide all types of services related to immigration to canada.</p>
        </div>
        <div className='immisermain'>
            <div className='immiservice'>
                <img src={imi1} alt='service'></img>
                <h3>Temporary Foreign Worker Program</h3>
                <p>Apply for an LMIA to conclude whether you can enlist a new expert to fill work or capacity lacks for a fleeting reason.</p>
            </div>
            <div className='immiservice'>
            <img src={imi2} alt='service'></img>
                <h3>PR: Express Entry, PNP</h3>
                <p>PNPs offer a pathway to a Canadian long-lasting home for people who are keen on moving to a particular Canadian region or domain.</p>
            </div>
            <div className='immiservice'>
            <img src={imi3} alt='service'></img>
                <h3>Restoration</h3>
                <p>Restoration of your expired temporary resident/ work or Study status within 90 days of the expiration date on your permit.</p>

            </div>
            <div className='immiservice'>
            <img src={imi4} alt='service'></img>
                <h3>Visitor Visa</h3>
                <p>A visitor Visa is an Official document, attached to your passport, shows that you meet the prerequisites expected to enter Canada.</p>

            </div>
            <div className='immiservice'>
            <img src={imi5} alt='service'></img>
                <h3>Spousal Open Work Permit</h3>
                <p>If your spouse is currently working or studying in Canada, or willing to relocate to Canada with you then your partner might be eligible for Open Work Permit</p>

            </div>
            <div className='immiservice'>
            <img src={imi6} alt='service'></img>
                <h3>Self Employed</h3>
                <p>The self-employed person Program permits you to immigrate to Canada, as a self-employed person, having relevant experience in cultural activities or athletics.</p>

            </div>

        </div>

      </div>
    </div>
  )
}

export default Immican
