import React from 'react'
import "../index.css"
import logo from "../Assets/TLogo.PNG"
import {FaSistrix , FaGratipay, FaShopify} from "react-icons/fa"

export default function Navbar() {
    const [isHeartFilled , setIsHeartFilled] = React.useState(false)
    function changeHeart(){
      setIsHeartFilled(prevHeart => !prevHeart)
    }
    return (
      <div>
          <nav className='navbar'>
              <img alt='' src={logo} className="logo"/>
              <div className='searchBar'>
                  <input type='text' className='searchbox' placeholder='SEARCH...'/>
                  <FaSistrix className='search-icon'/>
              </div>
              <FaGratipay className={`${isHeartFilled ? `heart-icon-filled` : `heart-icon`}`} onClick={changeHeart} size="2x"/>
              <FaShopify className='shop-icon' size="2x"/>
          </nav>
      </div>  
    )
}
