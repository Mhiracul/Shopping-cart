import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbars.css'
//import Search from './Search'



const Nav = () => {
  
  return (
    <div className='navbar'>
      <h1 className='logo'>MIRAC</h1>
      
    <div className="links">
        <Link to="/"  style={{ textDecoration: 'none' }}>Shop</Link>
        <Link to="/cart"  style={{ textDecoration: 'none' }}>Cart <ShoppingCart size={20} /> </Link>

        
       
    </div>
</div>
  )
}

export default Nav


