import React, { useEffect } from "react"
import "./LoginForm.scss"
import { Link } from "react-router-dom"

const LoginForm = () => {

  return (
    <div className="home-page-form">
      <form>
        <div className="input-box">
          <input className="input-field" type="text" placeholder="Full Name" />
        </div>
        <div className="input-box">
          <input className="input-field" type="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <input className="input-field" type="text" placeholder="Phone" />
        </div>
        <div className="input-box">
          <input className="input-field" type="password" placeholder="password" />
        </div>
        <div className="input-box">
          <input
            className="input-field"
            type="text"
            placeholder="Company Name"
          />
        </div>
        <button className="home-submit-btn">Submit</button>
        <div className="register">
          <p className="register-text">
            By registering you have read and agree to the
          </p>
          <p className="register-text m-0">
            <Link className="color-dblue mr-1">Terms of Use</Link>&
            <Link className="color-dblue ml-1">Privacy Policy</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
