import React from "react";
import "./OtpPage.scss"
import { Link } from "react-router-dom";

const OtpPage = () => {
  return (
    <div className="otp-page">
        <div className="otp-content">
        <h3 className="enter-code">Enter confirmation code</h3>
        <p className="code-send">A 4-digit code was sent to
               <br /> +91 9999008018</p>
        <div className="otp-fields">
            <input type="text" className="single-field"  maxlength="1" />
            <input type="text" className="single-field"  maxlength="1" />
            <input type="text" className="single-field"  maxlength="1" />
            <input type="text" className="single-field"  maxlength="1" />
        </div>
               <p className="code-send"><Link className="resend">Resend code</Link></p>
        <Link className="opt-button">Continue<span className="ml-3"><i className="fa-solid fa-arrow-right"></i></span></Link>
        </div>
    </div>
  )
};

export default OtpPage;
