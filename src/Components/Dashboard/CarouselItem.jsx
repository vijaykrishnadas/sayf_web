import React from 'react'
import img from './dashboard_assets/7.png'

const CarouselItem = (element) => {
    return (
        <div className='carousel-item'>
             <img src={img} className='img' alt="...." />
              <p>Rating</p>
        </div>
    )
}
export default CarouselItem
