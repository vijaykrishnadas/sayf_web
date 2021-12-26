import { useState, React } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './login.css'
import Logo_D from '../assets/logo_d.png' 
import contact from './login_assets/contact.png'

const Login = () => {

    const [enterNumber, setEnterNumber] = useState(true)
    const [number, setNumber] = useState(null);
    const [otp, setOtp] = useState(false);

    const history = useHistory();

    function getNumber(val){
        setNumber(val.target.value);
    }

    function displayNumber(){
        console.log(number);
        setOtp(true);
        setEnterNumber(false);
    }

    function verifyOtp(){
        console.log(otp);
        history.push('/dashboard')
    }
    return (
        <div className='login-body'>
          
                        {
                            enterNumber? 
                            <form onSubmit={displayNumber}>
                                <div className="login">
                                        <img className='login-img' src={Logo_D} alt="sayf_logo" />
                                        <h3>Login </h3>
                                <div className="number-container">
                                    <div className="login-text">
                                        <img className='contact-logo' src={contact} alt="contact" />Enter Contact Number
                                    </div>
                                    <input required placeholder='987....' type="text" onChange={getNumber}/> <br />
                                    <button type='submit' className='otp-btn'>Get OTP</button> <br />
                                </div>
                                </div>
                            </form>
                            :
                            <></>
                        }
                        {
                            otp? 
                            <form onSubmit={verifyOtp}>
                                <div className="login">
                                        <img className='login-img' src={Logo_D} alt="sayf_logo" />
                                        <h3>Login </h3>
                                <div className="otp-container">
                                    <p>OTP sent to {number}</p>
                                    <input required placeholder='Enter OTP here...' type="text"/> <br />
                                    <button className='otp-btn'>Verify</button> <br />
                                </div>
                                </div>
                            </form>
                            :
                            <></>
                        }
                    </div>
    )
}

export default Login
