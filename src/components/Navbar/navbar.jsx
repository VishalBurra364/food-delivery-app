import React, { useState} from "react";
import {Link} from 'react-router-dom'
import "./navbar.css";
import basket from "../../images/basket_icon.png";
import search from "../../images/search_icon.png";
import logo from "../../images/logo_icon.jpg";


function Navbar({setShowlogin}) {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to='/'><img src={logo} height='70px' width='70px' alt="" /></Link>
        </div>
        <div className="navbar-menu">
          <ul className="menu-items">
            <Link to='/' onClick={()=>setMenu('home')}  className={menu==="home"? "active": ""}>home</Link>
            <a   href='#explore-menu' onClick={()=>setMenu('menu')}  className={menu==="menu"? "active": ""}>menu</a>
            <a   href='#footer' onClick={()=>setMenu('contact-us')}  className={menu==="contact-us"? "active": ""}>contact-us</a>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={search} alt="search" />
          <Link to='/cart'><img src={basket} alt="basket" /></Link>
          <button onClick={()=>{setShowlogin(true)}}>sign in</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
