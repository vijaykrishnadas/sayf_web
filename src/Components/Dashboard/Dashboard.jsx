import React from 'react'
import './dashboard.css'
import DashNav from './DashNav'


import { Carousel } from '@trendyol-js/react-carousel';
import CarouselItem from './CarouselItem';
import ProgressBar from './ProgressBar';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

import img from './dashboard_assets/7.png'
import Chrome from './dashboard_assets/chrome.png'

const Dashboard = () => {
    // const user = useParams();
    return (
        <>
        <DashNav/>
        <div className='dashboard'>
        
            <div className="hero-section">
                <h1>Welcome to Sayf, Rachit</h1>
            </div>
            <div className="cards">
                <div className="card">
                <div className="im">
                            <img src={img} className='img' alt="image" />    
                </div>
                <h4>Dummy Data</h4>
                <button>Yes</button>
                </div>
                <div className="card">
                <div className="im">
                            <img src={img} className='img' alt="image" />    
                </div>
                <h4>Dummy Data</h4>
                <button>Yes</button>
                </div>
                <div className="card">
                <div className="im">
                            <img src={img} className='img' alt="image" />    
                </div>
                <h4>Dummy Data</h4>
                <button>Yes</button>
                </div>
                <div className="card">
                <div className="im">
                            <img src={img} className='img' alt="image" />    
                </div>
                <h4>Dummy Data</h4>
                <button>Yes</button>
                </div>
            </div>
            <div className="section-three">
                <div className="left">
                    <div className="card">
                        <Carousel rightArrow='→' className='carousel' leftArrow={()=>{
                        }} show={3.5} slide={3} swiping={true}>     
                           <CarouselItem/>
                           <CarouselItem/>
                           <CarouselItem/>
                           <CarouselItem/>
                           <CarouselItem/>                        
                        </Carousel>
                    </div>
                    <div className="card">
                    <div className="perks-section">
                        <p>The 2021 Sayf Path to $1,000,000 has ended. Explore your milestones, and we will announce the winner in the New Year!</p>
                        <div className="progressBar">
                            <ProgressBar done='20'/>
                             <label For="progress"><h4>20/150 Entries earned</h4> <br /></label>
                             <div className="progress-content">
                                 <p>Milestones</p>
                                 <p>🏷️ 1/26</p>
                             </div>
                             <div className="progress-content">
                                 <p>Milestones</p>
                                 <p>🏷️ 1/26</p>
                             </div>
                             <div className="progress-content">
                                 <p>Milestones</p>
                                 <p>🏷️ 1/26</p>
                             </div>
                        </div>
                    </div>
                    </div>
                    <div className="card deposit">
                        <h3>You have ₹0 in scheduled deposits every month</h3>
                        <p>Nearly 40% of Indians don't have emergency savings ! <br /> Start saving and investing for a great day.</p>
                        <button>Get Started</button>
                        <p>* dummy text couldnt read</p>
                    </div>
                </div>
                <div className="right">
                    <div className="card">
                        <p>Earn rewards from 1200+ stores with Sayf Chrome Extension! <br /><img className='chrome' src={Chrome} alt="c" />  <span>Coming Soon... </span></p>
                    </div>
                    <div className="card">
                        <p>You invested <span>₹0.00</span> in the last 30 days.</p>
                    </div>
                    <div className="card">
                        <div className="grow-list">
                            <div className="list-item">
                                <p>How much should you invest?</p>
                            </div>
                            <div className="list-item">
                                <p>How much should you invest?</p>
                            </div>
                            <div className="list-item">
                                <p>How much should you invest?</p>
                            </div>
                            <div className="list-item">
                                <p>How much should you invest?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard
