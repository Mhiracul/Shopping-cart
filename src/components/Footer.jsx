import React from 'react';
import './footer.css'
import {FacebookLogo} from 'phosphor-react'
import {InstagramLogo} from 'phosphor-react'
import {YoutubeLogo} from 'phosphor-react'
import {TwitterLogo} from 'phosphor-react'
import {Link} from 'react-router-dom'


const Footer = ()=> {
    return(
       <div>
         <section class="footer">
        <div className="container">
            <div className="footer-parent">
                <div className="first-footer">
                    <div className="logo-wrapper">
                        <div className="logo-footer">
                            
                        </div>
                    </div>
                    <div className="small-content">
                    The home and elements needed to create beautiful products
                    </div>
                    <div>
                        <i><FacebookLogo size={18} color="blue" /></i>
                        <i><InstagramLogo size={18} color="red" /></i>
                        <i ><YoutubeLogo size={18} color="red" /></i>
                        <i ><TwitterLogo size={18} color="blue" /></i>
                        <i class="fab fa-facebook"></i>
                    </div>
                </div>
                <div className="second-footer">
                    <h4>Our Company</h4>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <Link to= '/account'><li>Shop</li></Link>
                           
                        </ul>
                       
                    </div>
                </div>
                <div className="second-footer">
                    <h4>Support</h4>
                    <div>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>FAQ</li>
                            <li>Contact us</li>
                            <li>visit us</li>
                            <Link to='signUp'> <li>Signup</li>  </Link>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
       </div>
    )
}




export default Footer