import React from 'react'
import {PRODUCTS} from "../../Products.js";
import {useState, useEffect}  from 'react'
import Product from './Product.jsx';
import './Shop.css'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'



const Shop = () => {

  const [allProducts, setAllProducts] = useState(PRODUCTS);
    const [searchInput, setSearchInput] = useState("");

    
    
    useEffect(() => {
      
      if(searchInput) {
        const filteredProducts = allProducts.filter(product => product.productName.includes(searchInput));
        setAllProducts(filteredProducts);
      } else {
        setAllProducts(PRODUCTS);
      } 
    }, [searchInput, allProducts]) 

    useEffect(() => {
      setAllProducts(PRODUCTS);
    }, [])
  return (
    <div>
    <div className='navbar'>
    <h1 className='logo'>MIRAC</h1>
    <input type='text' placeholder='Enter Product Here.....' value={searchInput} onChange ={e => setSearchInput (e.target.value)} className='search'/>

  <div className="links">
      <Link to="/"  style={{ textDecoration: 'none' }}>Shop</Link>
      <Link to="/cart"  style={{ textDecoration: 'none' }}>Cart <ShoppingCart size={20} /> </Link>

      
     
  </div>
</div>
    <div className='shop'>
        <div className="shopTitle">
       

          <h1>Mirac Shop</h1>
        </div>
        <div className="products">
           {allProducts.map((product) => (
            <Product data={product} />
        ))} 
        </div>
    </div>
    </div>
  )
}

export default Shop

