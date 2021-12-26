import React from 'react'
import Logo_D from '../assets/s_logo.png' 

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="f1">
                <img src={Logo_D} alt="logo"/>
                    
                    <p>C/o Mahaveer Gandhi, <br/>
                    Station Back Road, <br/>
                    Bijapur, <br/>
                    Karnataka - 586101</p>
                </div>
                <div className="f2">
                <h2>SayF</h2>
                <a href="#/"><p>Home</p></a>
                <p>Calculator</p> 
                <p>FAQs</p>
                <p><a href = "mailto:priyesh@sayf.in?subject = Feedback&body = Message">Contact Us</a></p>
                </div>
                <div className="f3">
                <h2>Legal</h2>
                <a href="#/privacy"> <p>Privacy Policy</p></a>
                <a href="#/terms"> <p>Terms & Conditions</p></a>
                </div>
                {/* <div className="f4">
                <h2>Support</h2>
                </div> */}
            </div>
        </div>
    )
}

export default Footer
