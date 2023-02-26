import React from 'react'
import { useContext } from 'react';
// import { PRODUCTS } from '../Products';
import {PRODUCTS} from "../../Products.js";
import { ShopContext } from '../../Contexts/ShopContext';
import { CartItem } from './CartItem.jsx';
import "./Cart.css"


import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
 
  
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  
    
  
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
          else {
            return null;
          }
})}
      </div>

      {totalAmount > 0 ? (

      <div className="checkout">
        <p className='total'> Subtotal: ${totalAmount} </p>
        <button className='continueShopping' onClick={() => navigate("/")}> Shop More</button>
        <button> Checkout </button>
      </div>
      ) : (
        <h1> Your Cart is Empty</h1>
        )}

    </div>
  )
}

export default Cart