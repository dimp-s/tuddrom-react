import React from 'react'
import './footer.css'
import logo from '../Navbar/TLogo.PNG'
import NepalCanMove from './nepalCanMove.png'
import {FaFacebookSquare, FaInstagramSquare,
FaYoutube } from 'react-icons/fa'
import cod from './icons/cod.PNG'
import esewa from './icons/esewa.PNG'
import imepay from './icons/imepay.PNG'
import masterCard from './icons/masterCard.PNG'
import visa from './icons/visa.PNG'

export default function Footer() {
  //form form processing
const [currentForm, setCurrentForm] = React.useState({
    name: "",
    dob: "",
    email: ""
})

function handleChange(event){
  const {name, value} = event.target
  setCurrentForm(prevForm => {
      return({
          ...prevForm,
          [name] : value
      })
  })
}

// const FooterForm = () => {
//   return(

//   )
// }
console.log(currentForm)
return (
  <>
    <div className='footer-container'>
        <div className='footer-about'>
          <h2>About Tuddrom Nepal</h2>
          <p style={{color: 'white'}}>
            Tuddrom Nepal is a small team of dedicated
            and energetic young and fun loving people who 
            are highly passionate about music and are determined 
            to solve the problem faced by every music listener on a daily basis.
          </p>
        </div>
        <div className='footer-links'>
          <h2>Useful Links</h2>
          <ul>
            <li><a href='asd'>About us</a></li>
            <li><a href='asd'>Your Bags</a></li>
            <li><a href='asd'>Our Blogs</a></li>
            <li><a href='asd'>Your Wishlist</a></li>
            <li><a href='asd'>Work with us</a></li>
          </ul>
        </div>
        <div className='footer-links'>
          <h2>For Customers</h2>
            <ul>
              <li><a href='asd'>Support</a></li>
              <li><a href='asd'>FAQs</a></li>
              <li><a href='asd'>Request for Warranty</a></li>
              <li><a href='asd'>Return and Refund Policy</a></li>
              <li><a href='asd'>Tuddrum flagship stores</a></li>
            </ul>
        </div>
        <div className='footer-form'>
          <h2>Lets Keep in Touch!</h2>
          <div className='form'>
            <label className='form-label'>
              FullName:
                <input 
                  type="text" 
                  name="name" 
                  className='form-input'
                  onChange={handleChange}
                  value = {currentForm.name}
                />
                </label >
                <label className='form-label'>
                    DoB:
                    <input 
                        type="date" 
                        name="dob" 
                        className='form-input'
                        onChange={handleChange}
                        value = {currentForm.dob}
                        />
                </label>
                <label className='form-label'>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        className='form-input'
                        onChange={handleChange}
                        value = {currentForm.email}
                        />
                </label>
                <button className='form-button'>Subscribe</button>   
                <div className='form-icons-box'>
                    <FaFacebookSquare className='form-icons'/>
                    <FaInstagramSquare className='form-icons'/>
                    <FaYoutube className='form-icons'/>
            </div>
        </div>
        </div>
        <div className='footer-logo'>
          <img src={logo} className='footer-logo-tuddrom' alt=''/>
        </div>
        <div className='footer-delivery'>
        <h2>Our Delivery Partners</h2>
          <img src={NepalCanMove} alt='' className='footer-delivery-image'/>
        </div>
    </div>
    <footer>
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
          <div className='accepted-payments-list'>
            <span>We accept:</span>
            <ul>
              <li><a href='s'><img src={cod} alt='' className='footer-icons'/></a></li>
              <li><a href='s'><img src={esewa} alt='' className='footer-icons'/></a></li>
              <li><a href='s'><img src={imepay} alt='' className='footer-icons'/></a></li>
              <li><a href='s'><img src={masterCard} alt='' className='footer-icons'/></a></li>
              <li><a href='s'><img src={visa} alt='' className='footer-icons'/></a></li>
            </ul>
          </div>
          <span>Copyright © 2021 Tuddrom Nepal</span>
        </footer>
  </>
  )
}