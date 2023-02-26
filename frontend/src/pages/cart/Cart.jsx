import React from 'react'
import { useContext } from 'react';
// import { PRODUCTS } from '../Products';
import {PRODUCTS} from "../../Products.js";
import { ShopContext } from '../../Contexts/ShopContext';
import { CartItem } from './CartItem.jsx';
import "./Cart.css"
import {ArrowLeft} from 'phosphor-react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const {cartItems, getTotalCartAmount, clearCart} = useContext(ShopContext)

  
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
        <div className='flex'>
        <p className='total'> Subtotal:    ${totalAmount} </p>
        <p className='note'>Taxes and shipping calculated at checkout</p>
        
       <Link to= '/Check'> <button>Checkout</button></Link>
     

        <button className='continueShopping'  onClick={() => navigate("/")} ><ArrowLeft size={16} color="#0b0a0a" />Continue Shopping</button>
        </div>
        <div className='cartAdjust'>
        <button className='clearCart' onClick={() => clearCart()}> Clear Cart </button>

        </div>

      </div>
     
      ) : (
        <h1> Your Cart is Empty</h1>
        )}

    </div>
  )
}

export default Cart