import Gplay from './assets/gplay.png' 
import Logo from './assets/logo.png' 
import Logo_D from './assets/logo_d.png' 
import Screen from './assets/screen.png' 
import UD from './assets/underline.png' 
import Activate from './assets/activate.png' 
import Initiate from './assets/initiate.png' 
import Adidas from './assets/adidas.png' 
import Amazon from './assets/amazon.png'
import Sayf from './assets/Svid.gif'
import Mcd from './assets/mcd.png'
import Paytm from './assets/paytm.png'
import Icici from './assets/icici.png'
import Augmont from './assets/Augmont.png'
import a from './assets/1.png'
import b from './assets/2.png'
// import c from './assets/3.png'
import d from './assets/4.png'
import e from './assets/5.png'
import f from './assets/6.png'
import g from './assets/7.png'
import h from './assets/8.png'
// import i from './assets/8.png'
// import j from './assets/9.png'
import k from './assets/10.png'
import l from './assets/11.png'
import m from './assets/12.png'
import PartnerStore from './assets/stores.png'
import AutoInvest from './assets/dailyinvestment.png'
import Roundups from './assets/roundups.png'
import Lenovo from './assets/lenovo.png' 
import Forget from './assets/forget.gif' 
import Sayf_News from './assets/sayf_news.svg';
import Video from './assets/landing.mp4'
import React, {useState} from 'react'



function App() {
  const [avgMS, setMS] = useState(6000)
  const [dS, setdS] = useState(20)
  const [l, setl] = useState(7)
  const [rad1, setRad1] = useState(true);
  const [rad2, setRad2] = useState(true);
  const [checked1, setchecked1] = useState(true);
  const [checked2, setchecked2] = useState(true);
  var y;

  function handleChange1(val){
    setMS(val.target.value)
  }
  function handleChange2(val){
    setdS(val.target.value)
  }
  function handleChange3(val){
    setl(val.target.value)
  }

  const data5 =
  rad2 * ((avgMS / 25) * (Math.pow(1.0075, 12 * l) - 1) * 1.0075) / (9 / 1200) + 
  (dS * (Math.pow(1.00025, 365 * l) - 1)) / 0.00025 + 
  rad1 * (600 * (Math.pow(1.0075, 12 * l) - 1) * 1.0075) / (9 / 1200) 
  // : (dS * (Math.pow(1.00025, 365 * l) - 1)) / 0.00025;


  const data6 = ((avgMS / 25) * (Math.pow(1.0075, 12 * l) - 1) * 1.0075) / (9 / 1200)
  const data7 = (600 * (Math.pow(1.0075, 12 * l) - 1) * 1.0075) / (9 / 1200)

  
  var faq = document.getElementsByClassName("faq-page");
  var i;
  for (i = 0; i < faq.length; i++) {
      faq[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var body = this.nextElementSibling;
          if (body.style.display === "block") {
              body.style.display = "none";
          } else {
              body.style.display = "block";
          }
      });
  }

  const data4 = data5.toFixed(2)

  return (
    // <ScriptTag isHydrating={true} type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />

    // <script src= "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" type="text/javascript" />
    <div className="landing-page">
   <div className="full-body">
     <div className="navbar">
       <img src={Logo} alt="logo" height="40px" width="75px"/>
       <div className="btn-download">
         <span><img src={Gplay} alt="g" /></span>
         <div className="download-app">Download App</div>
       </div>
     </div>
     <div className="hero-section ">
       <div className="hero-left">
          <h1>
            Every Spending <br />
            counts. Invest it.
          </h1>
          <p>
          A personal finance app that helps you save,<br /> invest and optimize your spending for a better future
          </p>
          
       </div>
       <div className="hero-right">
       <img src={Sayf} />
       </div>
     </div>
     <div className="partner-stores">
       <div className="mover">
        <img src={a} alt="Natural" />
        <img src={b} alt="Natural" />
        {/* <img src={c} alt="Natural" /> */}
        <img src={d} alt="Natural" />
        <img src={e} alt="Natural" />
        <img src={f} alt="Natural" />
        <img src={h} alt="Natural" />
        <img src={g} alt="Natural" />
        {/* <img src={i} alt="Natural" /> */}
        {/* <img src={j} alt="Natural" /> */}
        <img src={k} alt="Natural" />
        <img src={l} alt="Natural" />
        <img src={m} alt="Natural" />
        <img src={a} alt="Natural" />
        <img src={b} alt="Natural" />
        {/* <img src={c} alt="Natural" /> */}
        <img src={d} alt="Natural" />
        <img src={e} alt="Natural" />
        <img src={f} alt="Natural" />
        <img src={g} alt="Natural" />
        <img src={h} alt="Natural" />
        {/* <img src={i} alt="Natural" /> */}
        {/* <img src={j} alt="Natural" /> */}
        <img src={k} alt="Natural" />
        <img src={l} alt="Natural" />
        <img src={m} alt="Natural" />
       </div>
     </div>
     <div className="third-section">
       <h1>Build your FUTURE with SayF <br /> Try it for Yourself!</h1>
       <div className="cards">
         <div className="card">
           
           <div className="card-content-left">
             <img src={PartnerStore} width="20%" height="auto"/>
             <h3>Partner store</h3>
             <p>Earn upto 25% worth of <br/>gold while spending at our<br />300+ partner stores.</p>
           </div>
         </div>
         <div className="card">
            <div className="calculator">
              <span className="one">Average Monthly Spending</span>
              <span className="two"><b>₹{avgMS}</b></span>
              <input className="range" type="range" min='4000' max='100000' step="2000"  defaultValue={6000}  onChange={handleChange1}/>
              <span className="one">Daily Savings</span>
              <span className="two"><b>₹{dS}</b></span>
              <input className="range" type="range" min='10' max='500' step="10"  onChange={handleChange2}/>
              <span className="one">Time Period</span>
              <span className="two"><b>{l} {l==1? y = "year" : y="years"}</b></span>
              <input className="range" type="range" min='1' max='30' defaultValue={7}  onChange={handleChange3}/>
              <span className="one1">Roundup your spare change</span>
              <span className="two"><input checked={checked1} type="checkbox" onChange={(e)=> {setRad1(e.target.checked); setchecked1(!checked1)}}/></span>  
              <span className="one1"><br/>Partner store savings</span>
              <span className="two"><input checked={checked2} type="checkbox" onChange={(e)=> {setRad2(e.target.checked); setchecked2(!checked2)}}/></span>
              <div className="calculator-bottom">
                <p>Your total value</p>
                <h2>₹ {data4}</h2>
              </div>
           </div>
         </div>
         <div className="card">
          <div className="card-content">
             <img src={AutoInvest} width="16%" height="auto"/>
             <h3>Auto-Invest</h3>
             <p>Take investing off your to do list. <br /> Schedule how much and how often <br />you want to save.</p>
           </div>
           <div className="card-content">
             <img src={Roundups} width="16%" height="auto"/>
             <h3>Roundups</h3>
             <p>We round-up your <br />everyday spendings to the next <br />tens and automatically invest.</p>
           </div>
         </div>
       </div>
     </div>


      <div className="fourth-section">
        <div className="tp-heading">
          Our trusted Partners and Affilations
        </div>
        <div className="trusted-partners">
          <div className="tp-photos" padding-top="10px">
            <img src={Paytm} width="100%" height="auto"/>
          </div>
        <div className="tp-photos">
            <img src={Icici} width="100%" height="auto" />
        </div>
          <div className="tp-photos">
            <img src={Augmont} width="100%" height="auto" />
          </div>
        </div>
      </div>

      {/* <h1 className="faq-heading">FAQ'S</h1>
        <div className="faq-container">
            <div className="faq-one">
                <h1 className="faq-page">Question</h1>
                <div className="faq-body">
                    <p>111</p>
                </div>
            </div>
            <hr className="hr-line" />
            <div className="faq-two">
                <h1 className="faq-page">Question</h1>
                <div className="faq-body">
                    <p>222</p>
                </div>
            </div>
            <hr className="hr-line"/>
            <div className="faq-three">
                <h1 className="faq-page">Question</h1>
                <div className="faq-body">
                    <p>333</p>
                </div>
            </div>
        </div> */}

     < div className="fifth-section">
       <div className="left">
         <h1>Never miss an update</h1>
          <p>Sign up for our monthly financial advice <br />newsletter and exclusive updates. We never <br />share your email with third parties.</p>
          <div className="text-field">
            <input type="text" />
            <button className="btn-subscribe">Subscribe</button>
          </div>

       </div>
        <div className="right">
          <img src={Sayf_News} alt="" />
        </div>
     </div>
   </div>
   <div className="footer">
    <div className="f1">
    <img src={Logo_D} alt="logo" height="70px" width="45px"/>
        
        <p>C/o Mahaveer Gandhi, <br/>
        Station Back Road, <br/>
        Bijapur, <br/>
        Karnataka - 586101</p>
    </div>
    <div className="f2">
      <h2>SayF</h2>
      <p>Home</p>
      <p>Calculator</p> 
      <p>FAQs</p><br />
      <a href = "mailto:priyesh@sayf.in?subject = Feedback&body = Message">Contact Us</a>
    </div>
    <div className="f3">
      <h2>Legal</h2>
      <a href="#/privacy"> <p>Privacy Policy</p></a>
      <a href="#/terms"> <p>Terms & Conditions</p></a>
    </div>
    {/* <div className="f4">
      <h2>Support</h2>
    </div> */}
  <div className="bottom"></div>
  </div>
  </div>
  );
}

export default App;
