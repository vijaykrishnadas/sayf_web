import Gplay from './assets/g-play.svg' 
import Logo from './assets/logo.png' 
import Logo_D from './assets/logo_d.png' 
import Screen from './assets/screen.png' 
import UD from './assets/underline.png' 
import Activate from './assets/activate.png' 
import Initiate from './assets/initiate.png' 
import Adidas from './assets/adidas.png' 
import Amazon from './assets/amazon.png'
import Mcd from './assets/mcd.png'  
import Lenovo from './assets/lenovo.png' 
import Forget from './assets/forget.gif' 
import Sayf from './assets/Sayf.gif' 

import React, {useState} from 'react'


function App() {
 
  const [data1, setData1] = useState(1000)
  const [data2, setData2] = useState(10)
  const [data3, setData3] = useState(10)

  function handleChange1(val){
    setData1(val.target.value)
  }
  function handleChange2(val){
    setData2(val.target.value)
  }
  function handleChange3(val){
    setData3(val.target.value)
  }

  return (
   <div>
     <div className="navbar">
       <img src={Logo} alt="logo" />
       <button className="btn-get-started">Get Started</button>
     </div>
     <div className="hero-section ">
       <div className="hero-left">
          <h1>
            Every Spending <br />
            counts. Invest it.
          </h1>
          <p>
            By keeping your money in SayF, you could <br />
            increase your wealth by up to 50% every ten <br />
            years.
          </p>
          <div className="btn-download"><span><img src={Gplay} alt="g" /></span><span>Download App</span></div>
       </div>
       <div className="hero-right">
          <img src={Sayf} alt="hero-right" />
       </div>
     </div>
     <div className="second-section">
       <div className="second-section-left">
          <img src={Screen} alt="" />
       </div>
       <div className="second-section-right">
      
       <div className="second-section-right-inside">
          <img src={Activate} alt="act" />
          <div>
            <h2>Activate</h2>
            <img src={UD} alt="ud" />
            <p>Download the app and link your bank <br /> account within 180 seconds.</p>
          </div>
       </div>
       <div className="second-section-right-inside">
          <img src={Initiate} alt="int"/>
          <div>
            <h2>Initiate</h2>
            <img src={UD} alt="ud" />
            <p>Start with Rs. 100 and then save as little <br /> as Re.1 thereafter.</p>
          </div>
       </div>
       <div className="second-section-right-inside">
          <img src={Forget} alt="act" />
          <div>
            <h2>Forget</h2>
            <img src={UD} alt="ud"/>
            <p>We invest your roundups automatically <br /> into diverse portfolios.</p>
          </div>
       </div>
       </div>
     </div>
     <div className="third-section">
       <h1>Build your FUTURE with SayF <br /> Try it for Yourself!</h1>
       <div className="cards">
         <div className="card">
           <div className="card-content">
             <h3>Partner's store</h3>
             <p>Whether it's ₹10, ₹1000 or more, <br /> choose your initial investment to <br />get started</p>
           </div>
           <div className="card-content">
             <h3>Length</h3>
             <p>Watch our 5% interest go to work <br /> for you by choosing a length of <br />time to hold your investment.</p>
           </div>
         </div>
         <div className="card">
           <div className="calculator">
             <p>Average Monthly Spending</p>
             <p><b>₹{data1}</b></p>
             <input className="range" type="range" min='1000' max='100000'  onChange={handleChange1}/>
             <div className="ranges">
             <p>₹1000</p>
             <p>₹100000+</p>
             </div>
             <p>Daily Savings</p>
             <p><b>₹{data2}</b></p>
             <input className="range" type="range" min='1' max='1000'  onChange={handleChange2}/>
             <div className="ranges">
             <p>₹0</p>
             <p>₹1000</p>
             </div>
             <p>Length</p>
             <p><b>{data3} years</b></p>
             <input className="range" type="range" min='1' max='10'  onChange={handleChange3}/>
             <div className="ranges">
             <p>1 year</p>
             <p>10 years</p>
             </div>
             <pre>Roundup your spare change</pre>
             <pre>Partner store savings</pre>
             <div className="calculator-bottom">
               <p>Your total value</p>
               <h2>₹ 279873.63</h2>
               <button>Buy Bonds Now</button>
             </div>
           </div>
         </div>
         <div className="card">
         <div className="card-content">
             <h3>Auto purchase</h3>
             <p>Take investing off your to do list. <br /> Schedule how much and how often <br />you want to purchase bonds and <br />let us do the rest.</p>
           </div>
           <div className="card-content">
             <h3>Roundups</h3>
             <p>Make the most of your "spare change".<br />we can round-up your <br />everday purchases to the next <br />whole rupee and automatically <br />invest this "spare change" in a ₹10 bond.</p>
           </div>
         </div>
       </div>
     </div>
     <div className="fourth-section">
        <h1>Earn more money when you shop</h1>
        <h3>Earn more money from 350+ top brands that invest in you.</h3>
        <div className="brands">
          <img src={Adidas} alt="adidas" />
          <img src={Amazon} alt="amazon" />
          <img src={Mcd} alt="Mcd" />
          <img src={Lenovo} alt="lenovo" />
        </div>
        <div className="brands">
          <img src={Adidas} alt="adidas" />
          <img src={Amazon} alt="amazon" />
          <img src={Mcd} alt="Mcd" />
          <img src={Lenovo} alt="lenovo" />
        </div>
        <div className="brands">
          <img src={Adidas} alt="adidas" />
          <img src={Amazon} alt="amazon" />
          <img src={Mcd} alt="Mcd" />
          <img src={Lenovo} alt="lenovo" />
        </div>
        <div className="brands">
          <img src={Adidas} alt="adidas" />
          <img src={Amazon} alt="amazon" />
          <img src={Mcd} alt="Mcd" />
          <img src={Lenovo} alt="lenovo" />
        </div>
     </div>
     <div className="fifth-section">
       <div className="left">
         <h1>Never miss an update</h1>
          <p>Sign up for our monthly financial advice <br />newsletter and exclusive updates. We never <br />share your email with third parties.</p>
          <div className="text-field">
            <input type="text" />
            <button className="btn-subscribe">Subscribe</button>
          </div>

       </div>
        <div className="right"></div>
     </div>
     <div className="footer">
           <div>
              <img src={Logo_D} alt="" />
              <h2>Location: <br /> Bangalore, India</h2>
           </div>
            <h1><u>support@sayf.in</u></h1>
       <div className="bottom"></div>
     </div>
   </div>
  );
}

export default App;
