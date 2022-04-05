import React from 'react'
import { Avatar} from '@mui/material'
import Slider from 'react-slick/lib/slider'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
export default function Testimonials() {
  return (
      <div className='testimonial'>
        <h1 className='testimonial-header'>The <span className='tuddrom-header'>Tuddrum</span> hype!</h1>
        <div style={{maxWidth: '75%'}}>
        <Slider>
            <Card 
            img = "https://www.tuddromnepal.com/wp-content/uploads/2021/09/0a918a92848f6764d65fc0970f8476397d05ffd661cad605c9863287-1.png"
            review = "Tuddrom Nepal is newly launched brand in Nepal, driven by imaginative and enthusiastic youngsters. More likely, they came upon a fresh concept on the market to address the previously major problem of earphones that claimed decent sound quality within lowest range of price but fact is they always deceive us to meet our choice at the end of the day. As a result, this brand arrive to fix the existed problem and to give you with better sound quality of earphones within reasonable price."
            name = "Gadget Nepal"
            />
            <Card 
            img = "https://www.tuddromnepal.com/wp-content/uploads/2022/02/Techsathi.jpg"
            review = "With strong customer relationships Tuddrom Nepal is making progress. Tuddrom Flagship Store is undergoing a business transformation; a module to provide a more convenient shopping experience for customers."
            name = "TechSathi"
            />
        </Slider>
      </div>
      </div>
  )
}

const Card = (props) =>{
    return(
    <div style={{
     display: 'flex',
     alignItems: 'center', 
     flexDirection: 'column', 
     textAlign: 'center',
     }}>
        <p className='testimonial-review'>{props.review}</p>
        <Avatar src={props.img} className="testimonial-brand-logo"/>
        <h2 className='testimonial-brand'>{props.name}</h2>
    </div>
    )
} 