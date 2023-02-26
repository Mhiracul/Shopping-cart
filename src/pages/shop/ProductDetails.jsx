import React from "react";
import Product from './Product.jsx';

export const ProductDetails = ({product}) => {

  return (
    <div>
       <Product data={product} />
      <img src={product.productImage} alt={product.productName} />
      <h2>{product.productName}</h2>
      <p>{product.price}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetails;
