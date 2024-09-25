import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>At FooDie, we believe in delivering fresh, delicious meals right to your doorstep with just a few clicks. Our mission is to provide a seamless and enjoyable food ordering experience, offering a wide variety of dishes from trusted restaurants.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            {/* <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    
                </ul>
            </div> */}
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94-77-123-456</li>
                    <li>contact@gmail.com</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyrights'>Made By Manoj Foodie.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer;