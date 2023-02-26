import React from 'react';
import './wishlist.css';
import { useContext } from 'react';
import { ShopContext } from '../../Contexts/ShopContext';

export const WishItem = (props) => {
  const { wishlist, removeFromWishlist,addToWishlist,updateWishItemCount } = useContext(ShopContext);
  const { id, productName, price, productImage } = props.data;

  const handleRemoveFromWishlist = () => {
    if (wishlist[id] > 0) {
    removeFromWishlist(id);
    }
    };

  

  return (
    <div className='wishlist'> 
            
         
            
              <div className='wishlistItem'>
                <img src={productImage} alt='' />
                <div className='flexing'>
                  <div className='description'>
                    <p className='productName'><b>{productName}</b></p>
                    <button
                      className='btn3'
                      onClick={handleRemoveFromWishlist}
                    >
                      Remove
                    </button>
                  </div>
                  <div className='productPrice'>
                    <p className='price'>${price}</p>
                  </div>
                  <div className="countHandler">
            <button className='btn1' onClick={handleRemoveFromWishlist}> - </button>
                              <input value={wishlist[id]} onChange={(e) => updateWishItemCount(Number(e.target.value), id) } />
                 <button className='btn2'  onClick={() => addToWishlist(id)}> + </button>    
 

            </div>
                </div>
              </div>
           
         
      
    </div>
  );
};
export default WishItem