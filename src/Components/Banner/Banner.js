import React from 'react'
import './banner.css'
import Slider from 'react-slick/lib/slider'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import banner1 from'./banner1.PNG'
import banner2 from'./banner2.PNG'
import banner3 from './banner3.PNG'

export default function Banner() {
  const settings = {
    dots: false,
    fade: true,// fade effect ko lagi
    infinite: true,
    speed: 1000, //higher => slower transition
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
        <div className='banner-box'>
        <Slider className='slider' {...settings}> {/* ...settings object for slider*/}
          {/* tried making banner dynamic but div stacking results in error.So, Hardcoded banner image for now */}
            <Card
            img = {banner1}
            // description = "Tuddrom Nepal is newly launched brand in Nepal."
            // title = "Good Music is just a plug away"
            />
            <Card 
            img = {banner2}
            // description= "A module to provide a more convenient shopping experience for customers."
            // title = "Miles To Go"
            />
            <Card 
            img = {banner3}
            // description= "A module to provide a more convenient shopping experience for customers."
            // title = "Miles To Go"
            />
        </Slider>
      </div>
  )
}

const Card = (props) =>{
    return(
    <div style={{
    //  display: 'flex',
    //  alignItems: 'center', 
    //  justifyContent: 'center',
     width:'100%'
     }}>
        <img src={props.img} alt='' className= 'banner-image' />
    </div>
    )
} 