import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { PRODUCTS } from '../Products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlist, setWishlist] = useState(getDefaultCart());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popup, setPopup] = useState(false);


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price
      }
    }

    return totalAmount;
  };
  
  const getTotalWishAmount = () => {
    let totalAmount = 0;
    for (const item in wishlist) {
      if (wishlist[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += wishlist[item] * itemInfo.price
      }
    }

    return totalAmount;
  };



  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1 }));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1 }));
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 2000);
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
    };

    const removeItemFromCart = (itemId) => {
      setCartItems((prev) => {
      let newCart = { ...prev };
      delete newCart[itemId];
      return newCart;
      });
      };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}));
  }
  const updateWishItemCount = (newAmount, itemId) => {
    setWishlist((prev) => ({...prev, [itemId]: newAmount}));
  }

  const addToWishlist = (itemId) => {
    setWishlist((prev) => ({...prev, [itemId] : prev[itemId] + 1 }));
  };

  const removeFromWishlist = (itemId) => {
    setWishlist((prev) => ({...prev, [itemId] : prev[itemId] - 1 }));
  };

  const quantity = (newAmount, itemId) => {
    setWishlist((prev) => {
      const index = prev.findIndex((item) => item.id === itemId);
      const updatedItem = { ...prev[index], quantity: newAmount };
      return [...prev.slice(0, index), updatedItem, ...prev.slice(index + 1)];
    });
  };
  


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    removeItemFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    getTotalWishAmount,
    updateWishItemCount,
    isAuthenticated,
    setIsAuthenticated,
    showPopup,
    popup,
    quantity
  };

  return <ShopContext.Provider value={contextValue} > {props.children} </ShopContext.Provider>;
};

