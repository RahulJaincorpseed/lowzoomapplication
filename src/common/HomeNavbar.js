import React from "react";
import logoImage from "../images/lowZoom.png";
import "./Homenavbar.scss"
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <div className="container">
    <div className="home-nav">
        <div className="main-logo">
            <img src={logoImage} />
        </div>
        <div className="home-links">
            <div className="link-box">
            <Link to="/services" className="link-itemsss">Services<i className="fa-solid ml-1 fa-chevron-down"></i></Link>
            <div className="link-item">
                <h1>item 1</h1>
                <p>lorem2kns sdklfmsd lksdcns 
                </p>
            </div>
            </div>
            <div className="link-box">
            <Link to="/services" className="link-itemsss">Partner<i className="fa-solid ml-1 fa-chevron-down"></i></Link>
            <div className="link-item">
                <h1>item 2</h1>
                <p>lorem2kns sdklfmsd lksdcns 
                </p>
            </div>
            </div>
            <div className="link-box">
            <Link to="/services" className="link-itemsss">Company<i className="fa-solid ml-1 fa-chevron-down"></i></Link>
            <div className="link-item">
                <h1>item 3</h1>
                <p>lorem2kns sdklfmsd lksdcns 
                </p>
            </div>
            </div>
            <div className="link-box">
            <Link to="/login" className="link-itemsss fw-600">Login</Link>
            
            </div>
        </div>
    </div>
    </div>
  )
};

export default HomeNavbar;
