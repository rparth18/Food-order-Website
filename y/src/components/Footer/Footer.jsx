import React from 'react'
import './Footer.css'

import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id = 'footer'>
    <div className='footer-content'>
        <div className='footer-content-left'>
        <img src={assets.food_logo} alt=""/>
        <p>© 2024 All rights reserved</p>
        <div className='footer-social-icons'>
          <a href='https://www.facebook.com'>
            <img src={assets.facebook_icon} alt=""/>
          </a>
            <a href='https://x.com/?lang=en'>
               <img src={assets.twitter_icon} alt=""/>
            </a>
           <a href='https://www.linkedin.com'>
               <img src={assets.linkedin_icon} alt=""/>
           </a>
          
        </div>
        </div>
        <div className='footer-content-center'>
        <h2>COMPANY</h2>
        <ul>
          <a href='#header'>
             <li>Home</li>
            
          </a>
          
       
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
        </ul>
        </div>
        <div className='footer-content-right'>
       <h2>GET IN TOUCH</h2>
       <ul>
        <l1>+91- 6265788084</l1>
        <li>parthrajput031@gmail.com</li>
       </ul>
        </div>
    </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 ©  All rights reserved</p>
    </div>
  )
}

export default Footer
