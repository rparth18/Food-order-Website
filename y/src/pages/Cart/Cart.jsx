import React, { useContext } from 'react'
import './Cart.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../components/context/StoreContext'
const Cart = () => {
  const navigate =useNavigate();
  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext)
  return (
    <div className='cart'>
    <div className='cart-items'>
      <div className='cart-items-title'>
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Qunatity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br/>
      <hr/>
      {food_list.map((item,index)=>{
        if(cartItems[item._id]>0)
        {
          return (
            <div className='cart-items-title cart-items-item'>
            <img src={`${url}/api/food/foodphoto/${item._id}`} alt=""/>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{cartItems[item._id]}</p>
            <p>{item.price*cartItems[item._id]}</p>
            <p onClick={()=>{removeFromCart(item._id)} }>X</p>
            </div>
          )
        }
      })}
    </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
           <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}</p>
           </div>
           <hr/>
           <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>{getTotalCartAmount()>0?<b>{2}</b>:<b>{0}</b>}</p>
           </div>
           <hr/>
           <div className='cart-total-details'>
            <b>Total</b>

            {
              getTotalCartAmount()>0?<b>{getTotalCartAmount()+2}</b>:<b>{0}</b>
              }
            

           </div>
          
          </div>
         
           <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
      </div>
      <div className='cart-promocode'>
        <div>
          <p>If you have a promo code, Enter it here</p>
          <div className='cart-promocode-input'>
            <input type='text' placeholder='promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cart
