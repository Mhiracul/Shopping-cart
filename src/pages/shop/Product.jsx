import React from 'react'
import { useContext, useState } from 'react';
import { ShopContext } from '../../Contexts/ShopContext';
import { Heart } from 'phosphor-react'
import {ShoppingCart} from 'phosphor-react'
import {FacebookLogo} from 'phosphor-react'
import {TwitterLogo} from 'phosphor-react'
import {YoutubeLogo} from 'phosphor-react'
import {Eye} from 'phosphor-react'
export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {addToCart, cartItems, removeFromCart, updateCartItemCount, addToWishlist} = useContext(ShopContext);
    const [showDetails, setShowDetails] = useState(false);

    const cartItemAmount = cartItems[id]
    const openDetails = () => {
      setShowDetails(true);
    };
    const handleRemoveFromCart = () => {
      if (cartItems[id] > 0) {
      removeFromCart(id);
      }
      };
  
  return (
    <div className='contain'>
    <div className='product'>
   
        <img src={productImage} alt= "" />  
        <div style={{display : 'flex'}}>
     
        
        <div className='listtt'>
      <div className="description" style={{color: 'blue'}}>
        <p>
          <b>{productName}</b>
        </p>
        
        <p className='price'> ${price}</p>
        
        
       
      </div>
      
        
            </div>
         
            </div>
           
            <button className='addToCartBttn' onClick={() => addToCart(id)} >
      <ShoppingCart size={20} />  Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</> }  </button>
      <button className='wishbtn' onClick={() => addToWishlist(id)}>
        <Heart size={16} color="red" weight="bold" /> </button>
        <button onClick={openDetails} className='wishbtns'><Eye size={17} color="#443b3b" weight="bold" /></button>
        </div>
        {showDetails && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={() => setShowDetails(false)}>
              X
            </button>
            <div className= 'view-details'>
            <div className= 'view-details-img'>
            <img src={productImage} alt="" />
            </div>
            <div className='details-g'>
            <h2>{productName}</h2>
            <p style={{width: '140%', color: 'black', fontSize: '13px'}}>Shop Mirac.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p>
            <p className='pricer'>${price}</p>
            <div className="countHandler">
            <button className='btn1' onClick={handleRemoveFromCart}> - </button>
                              <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) } />
                 <button className='btn2'  onClick={() => addToCart(id)}> + </button>    
 

            </div>
            <div className='button-name'>
            <button className='addTo' onClick={() => addToCart(id)} >
      <ShoppingCart size={20} />  Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</> }  </button>
      <button className='wish-button' onClick={() => addToWishlist(id)}>
        <Heart size={25} color="black" weight="light" /> </button>
            </div>
            <div className= 'border-line'></div>
            <p style={{color: 'black', fontWeight: 'bold', marginTop: '10px'}}>Share: <FacebookLogo size={19} color="#443b3b" weight="bold" /> <TwitterLogo size={19} color="#443b3b" weight="bold" /> <YoutubeLogo size={19} color="#443b3b" weight="bold" /></p>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default Product


