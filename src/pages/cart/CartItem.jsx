import React from 'react';
import './CartItem.css'
import { useContext } from 'react';
import { ShopContext } from '../../Contexts/ShopContext';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} =useContext(ShopContext);
    return(
       
       
        <div className='cartItem'>
            
                    <img src={productImage} alt="" />
            <div className='flexing'>
            <div className="description">
                <p className='productName'><b> {productName} </b></p>
            </div>
            <div className='productPrice'>
                <p className="price">${price}</p>
            </div>
            <div className="countHandler">
                <button  onClick={() => removeFromCart(id) }>  - </button>
                              <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) } />
                 <button onClick={() => addToCart(id)}> + </button>             

            </div>
        </div>
        </div>
    )
}


