import React from 'react';
import './CartItem.css'
import { useContext} from 'react';
import { ShopContext } from '../../Contexts/ShopContext';




export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart,cartItems, removeFromCart, updateCartItemCount,showPopup,popup} =useContext(ShopContext);

   
    
  

    const handleRemoveFromCart = () => {
        if (cartItems[id] > 0) {
        removeFromCart(id);
        }
        };
        
        const handleClearItemFromCart = () => {
        if (cartItems[id] > 0) {
        updateCartItemCount(0, id);
        }
        };
        
        
    return(
        <div className='cartt'>
        {showPopup && <div className="popup">Product added to cart!</div>}
        {popup && <div className="popup">Product removed from cart!</div>}

        <div className='cartItem'>
            
                    <img src={productImage} alt="" />
            <div className='flexing'>
            <div className="description">
                <p className='productName'><b> {productName} </b></p>
                <button className='btn3' onClick={handleClearItemFromCart}> Remove </button>        

            </div>
            <div className='productPrice'>
                <p className="price">${price}</p>
            </div>

            <div className="countHandler">
            <button className='btn1' onClick={handleRemoveFromCart}> - </button>
                              <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) } />
                 <button className='btn2'  onClick={() => addToCart(id)}> + </button>    
 

            </div>
        </div>
        </div>
        </div>
    )
}


