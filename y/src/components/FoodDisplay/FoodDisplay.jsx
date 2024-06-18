import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

 const  url ="https://food-order-website-kappa.vercel.app"
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return ( 
    
      <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
       <div className='food-display-list'>
          {
            food_list&&food_list.map((item,index)=>{
              if(category==="ALL"||category===item.category)
              {
                  
              
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price}   />
                {/* <img src={`${url}/api/food/foodphoto/${item._id}`}  alt=""/> */}
              }
            })
          }
       </div> 
      </div>
    
  )
}

export default FoodDisplay
