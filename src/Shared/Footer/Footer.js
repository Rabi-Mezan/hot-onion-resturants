import React from 'react';
import logo2 from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='footer mt-5'>
                <div>
                    <img className='w-25' src={logo2} alt="" />
                </div>
                <div>
                    <ul>
                        <li> <small>About Online Food</small></li>
                        <li> <small>Read Our Blog</small>
                        </li>
                        <li> <small>Sign Up To Delliver</small></li>
                        <li> <small>Add Your Resturant</small></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>  <small>Get Helps</small></li>
                        <li> <small>Read FAQs</small></li>
                        <li> <small>View All Cities</small></li>
                        <li> <small>Resturants Near me</small></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Footer;