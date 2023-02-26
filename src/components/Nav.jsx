import React from 'react'
import {Link} from 'react-router-dom'
import './navbars.css'
import {Heart} from 'phosphor-react'
import {User} from 'phosphor-react'
//import {List} from 'phosphor-react'
import { useState } from 'react'
import { useEffect } from 'react'

const Nav = ({user, setUser}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  
  
    
 useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);
  return ()=> {
    window.removeEventListener("resize", handleResize);
  }
 }, []);
  
  
  return (
    <div className='navbar_me'>
      {width <= 960 ? (
        <p>Please login to continue</p>
      ) : (
    <></>
      )}
     <div></div>
    <div className="links_me">
        <Link to="/"  style={{ textDecoration: 'none' }}>Shop</Link>

        <div className="account-dropdown">
        <button  style={{ textDecoration: 'none' }} onClick={() => setIsOpen(!isOpen)}>Account  <User size={20}  /></button>
        {isOpen && (
          <div className="account-dropdown-content">
            
           <li> <Link to= "/account" style={{ textDecoration: 'none' }}>Login</Link></li>
           <li> <Link to= "/signUp" style={{ textDecoration: 'none' }}>Sign Up</Link></li>
          <li>  <Link to= "/Payment" style={{ textDecoration: 'none' }}>Payment</Link> </li>
            

            
            
          
                
              
           

          </div>
        )}
        </div>
       
        <Link to="/wish"  style={{ textDecoration: 'none' }}>wishlist <Heart size={19}  /></Link>

        
       
    </div>
</div>
  )
}




export default Nav


