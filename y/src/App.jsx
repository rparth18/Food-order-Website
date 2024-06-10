import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import PLaceOrder from './pages/PlaceOrder/PLaceOrder'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import MyOrders from './pages/MyOrders/MyOrders'
import Verify from './pages/Verify/Verify'
const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
<div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path ='/cart' element ={<Cart/>}/>
        <Route path ='/order' element={<PLaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
      
    </div>
    <Footer/>
    </>
    

  )
}

export default App
