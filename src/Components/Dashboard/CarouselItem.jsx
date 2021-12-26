import React from 'react'
import img from './dashboard_assets/7.png'

const CarouselItem = () => {
    return (
        <div className='carousel-item'>
             <img src={img} className='img' alt="image" />
              <p>Rating</p>
        </div>
    )
}
export default CarouselItem
