import React from 'react'
import { useContext } from 'react';
// import { PRODUCTS } from '../Products';
import {PRODUCTS} from "../../Products.js";
import { ShopContext } from '../../Contexts/ShopContext';
import { WishItem } from './WishItem';
import {ArrowLeft} from 'phosphor-react'
import {Circle} from 'phosphor-react'
import './wishlist.css';
import {Link} from 'react-router-dom'



import { useNavigate } from 'react-router-dom';


const Wish = () => {
  const {wishlist,getTotalWishAmount,} = useContext(ShopContext);
 


  const navigate = useNavigate();

  const totalAmount= getTotalWishAmount()
    
  
  return (

    
    <div className='wishh'>
       <section className='Section1'>
        <div className='Content'>My Wishlist</div>
       <center><div style={{padding: '10px', marginRight: '10px', textDecoration: 'none'}}>
        <Link to='' className='home'>Home</Link>
        <Circle size={6} color="#09090b" weight="fill" />
        <Link to='' className='Wish'>Wishlist</Link>
        </div></center> 
       </section>
     
      <div className="cartItem">
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (wishlist[product.id] !== 0) {
            return <WishItem data={product} />
          }
          else {
            return null;
          }
})}
      </div>
     
      {totalAmount > 0 ? (

      <div className='Wish-cont'>
        <div className='flex'>
        <p className='total'> Subtotal:    ${totalAmount} </p>
        <p className='note'>Taxes and shipping calculated at checkout</p>
        
        <button className='continueShopping'  onClick={() => navigate("/")} ><ArrowLeft size={16} color="#0b0a0a" />Go to Shop</button>
        </div>
        <div className='cartAdjust'>

        </div>

      </div>
      ) : (
       <center> <div className='wishlist-img'>
        
        <center><img src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fempty-cart.373610ed.png&w=640&q=75" alt="" /></center>
        <h1> Your Cart is Empty</h1>
        <button  onClick={() => navigate("/shop")} >Go to Shop</button>

</div> </center>
      )}
    </div>
    </div>
  )
}

export default Wish