import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext';

// import { useState } from 'react'
const FoodItem = ({id,name,price,description}) => { 
    // const[itemCount,setItemCount]=useState(0);
    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
       // const res =  axios.get(`${url}/api/food/foodphoto/${id}`)
     
  return (
    <div className='food-item'>
    <div className='food-item-img-container'>
        <img className='food-item-image' src={`${url}/api/food/foodphoto/${id}`} alt=""/>
        {
            !cartItems[id] ? <img className='add' onClick={()=>addToCart(id)}src={assets.add_icon_white} alt=""/>
            : <div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)}src={assets.remove_icon_red} alt=""/>
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
            </div>

        }
    </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
           <p>{name}</p> 
            <img  src={assets.rating_starts} alt=""/>
        </div>
        <p classname ='food-item-desc'>
            {description
            }
        </p>
        <p className='food-item-price'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
