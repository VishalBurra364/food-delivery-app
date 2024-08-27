import React from "react";
import "./footer.css";
import { assets } from "../../images/assets";
function Footer() {
  return (
    <div className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <h3>Contact-us</h3>
          <p>+91 7438409384</p>
          <p>foodpay@gmail.com</p>
        </div>

        <div className="footer-content-middle">
          <h3 >COMPANY</h3>
          <ul>
            <a className='alinks' href='#header'>Home</a><br></br>
            <a className='alinks' href='#explore-menu'>Menu</a><br></br>
            <a className='alinks' href='#footer'>About-us</a><br></br>
            <a className='alinks' href='#cart'>Delivery</a>
          </ul>
        </div>

        <div className="footer-content-right">
          <img src={assets.logo} alt="" />
          <p>
            This is an online food delivery app, 
            here you can order the dish what you want 
            and it will be delivered to your location within a less time.
            You are allowed to give any suggestions or ratings based on your experience.
            <br></br>
            <br></br>
            <h4>Thank you,  Eat Healthy Be Healthy</h4>
          </p>
          <div className="footer-socialmedia-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
