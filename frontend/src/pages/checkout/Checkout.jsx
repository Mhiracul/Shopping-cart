import React from 'react'
import { Link } from 'react-router-dom'
import { Circle } from 'phosphor-react'
import './checkout.css'
const Checkout = (props) => {

    return(
       <div className='Checkout-page'>
         <section className='Section1'>
        <div className='Content'>Checkout</div>
       <center><div style={{padding: '10px', marginRight: '10px', textDecoration: 'none'}}>
        <Link to='' className='home'>Home</Link>
        <Circle size={6} color="#09090b" weight="fill" />
        <Link to='' className='Wish'>Checkout</Link>
        </div></center> 
       </section>


       <div className='checkout-flex'>
        <div className='class'>
            <div className='line'></div>
          <h2>Biling Details</h2>
          <form action="" style={{width :'1000px'}}>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder='First Name' />
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder='Last Name' />
            <label htmlFor="">Address</label>
            <input type="text" placeholder='Address' />
            <label htmlFor="">Town/ City</label>
            <input type="text" placeholder='Town/ City' />
           
            <label htmlFor="">State/ Country</label>
            <input type="text" placeholder='State/ Country' />
           
            <label htmlFor="">Postcode/ Zip</label>
            <input type="text" placeholder='Postcode/ Zip' />
            
           
            <label htmlFor="">Email Address</label>
            <input type="text" placeholder='Your Email' />
            <label htmlFor="">Phone</label>
            <input type="text" placeholder='Phone Number' />
           
          </form>
        </div>
        <div className='order'>
            <h2>Your Order</h2>
            <div >
                <p>Product</p>
                <p>Total</p>
            </div>
            <div>
                <p></p>
                <p></p>
            </div>
            <div>
                <p>Cart Subtotal</p>
                <p>$</p>
            </div>
            <div>
                <p>sub Total</p>
                <p>$</p>
            </div>
            <div>
                <p>Shipping Cost</p>
                <p>$</p>
            </div>
            <div>
                <p>Discount</p>
                <p>$</p>
            </div>
            <div>
                <p >Total Cost</p>
                <p style={{color: 'red'}}>$</p>
            </div>
            <div>
               <li>Direct Bank transfer</li> 
            </div>
            <div>
              <input style={{border : 'none', fontSize: '15px'}} type="text" placeholder='Card Number' /> 
              <p>MM/ YY CVC</p>
            </div>
            
        </div>
       </div>
       </div>
    )
}

export default Checkout