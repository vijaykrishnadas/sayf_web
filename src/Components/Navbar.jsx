import React from 'react'

import Gplay from '../assets/gplay.png' 
import Logo from '../assets/logo.png' 

import './navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
                <img src={Logo} alt="logo" height="40px" width="75px"/>
                <div className="nav-right">
                    <a href="#/login" className='login-link'>Login</a>
                    <div className="btn-download">
                    <span><img src={Gplay} alt="g" /></span>
                    <a href="https://tally.so/r/w27Abn"><div className="download-app">Get Early Access</div></a>
                </div>
                </div>
        </div>
    )
}

export default Navbar
