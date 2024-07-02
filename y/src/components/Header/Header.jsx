import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
    <div className='header-contents'>
        <h2>Order your favorite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and delicious meal at a time</p>
     
       <a href='#explore-menu'>
         <button> View menu</button>
       </a>
    </div>
    </div>
  )
}

export default Header
