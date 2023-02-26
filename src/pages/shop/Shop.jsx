import React from 'react'
import {PRODUCTS} from "../../Products.js";
import {useState, useEffect}  from 'react'
import Product from './Product.jsx';
import './Shop.css'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import HashLoader from "react-spinners/HashLoader";
import { CSSProperties } from 'react'
import Home from '../../components/Home.jsx';

const override: CSSProperties = {
  display:"block",
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: "red",
  margin: "190px auto",
}


const Shop = () => {

  const [allProducts, setAllProducts] = useState(PRODUCTS);
    const [searchInput, setSearchInput] = useState("");
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const categories = [
      { name: "Electronics", url: "/electronics" },
      { name: "Clothing", url: "/clothing" },
      { name: "Beauty", url: "/beauty" },
      { name: "Home & Garden", url: "/home-garden" },
      { name: "Toys & Games", url: "/toys-games" }
    ];

    
    useEffect(() => {
      // Set loading to true before fetching products
      setLoading(true);
  
      // Simulate a delay of 2 seconds before fetching products
      const delay = setTimeout(() => {
        setAllProducts(PRODUCTS);
        setLoading(false);
      }, 5000);
  
      // Clear the delay if the component is unmounted before it's finished
      return () => clearTimeout(delay);
    }, []);
    
    
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
   
    <div >
      {
        loading? (
        <HashLoader
        color={'rgb(85, 147, 246)'}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        ) : (
      <div>
    <div className='navbar'>
    
    <h1 className='logo'>MIRAC</h1>
    <input className='search' style={{width :"40%", marginLeft: '-50px'}}type='text' placeholder='Enter Product Here.....' value={searchInput} onChange ={e => setSearchInput (e.target.value)} />
    

  <div className="links">
      <Link to="/"  style={{ textDecoration: 'none' }}>Shop</Link>
      <Link to="/cart"  style={{ textDecoration: 'none' }}>Cart <ShoppingCart size={20} /> </Link>

      
     
  </div>
</div>

<div className='Categories'>

  <div>
    <select className='option' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
    
  <option value="">All Categories</option>
  {categories.map((category) => (
    <option key={category.name} value={category.name}>
      <a href={category.url}>{category.name}</a>
    </option>
  ))}
</select>
</div>

 <div className="accoun-dropdown">
<Link to=""  className='Pages' style={{ textDecoration: 'none' }} onClick={() => setIsOpen(!isOpen)}>Pages </Link>
        {isOpen && (
          <div className="accoun-dropdown-content">
            
            <Link to= "/privacy" style={{ textDecoration: 'none'}}>Privacy Policy</Link>
            <Link to= "" style={{ textDecoration: 'none' }}>Terms and Condition</Link>
            <Link to= "" style={{ textDecoration: 'none' }}>FAQ</Link> 
           <Link to= "/" style={{ textDecoration: 'none' }}>Shop List View</Link> 
            </div>
        )}
          </div>
          <div className="categories-list">

          <Link to= "/">Shop</Link>
          <Link to= "">About</Link>
          <Link to= "">Contact</Link>
          </div>
</div>
          
<div>
  <div>
  
  </div>
  <Home />

</div>
    <div className='shop'>
        <div className="shopTitle">
       

          <h1>Mirac Shop</h1>
        </div>
        <div className="products">
       
           {allProducts.map((product) => 
            <Product data={product} />
        )} 
        </div>
    </div>
    </div>
           
  )
}
</div>

   );
}
    export default Shop

