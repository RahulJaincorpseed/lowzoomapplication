import React, { useState } from "react"
import "./login.scss"
import Glogo from "..//images/google-logo.png"
import { Link } from "react-router-dom"
import Loading from "../common/Loading/Loading"

const Login = () => {
  const [checkCircle, setCheckCircle] = useState(false)
  console.log(checkCircle)
  return (
    <div className="sign-up container">
      <div className="sign-box">
        <h2>Sign In</h2>
        <p className="label-heading">
          We understand your privecy is important*
        </p>
        <Link to={"#"} className="google-sign-btn">
          <img src={Glogo} alt="logo192" />{" "}
          <span className="label-heading fw-700">Sign In with Google</span>
        </Link>
        <p className="signin-text">Or Login With Email</p>
        <div>
          <label className="label-heading" htmlFor="phone">
            User ID *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+91 9999008078"
            required
          />
        </div>
        <div>
          <label className="label-heading password-input" htmlFor="password">
            Set Password
          </label>
          <input
            className="password-input"
            type="password"
            id="password"
            name="password"
            placeholder="Min. 8 Charecter"
            autocomplete="off"
            required
          />
        </div>
        <div className="sign-btn">
          <div className="remember-text">
            <i
              onClick={() => setCheckCircle((prev) => !prev)}
              className={`fa-regular fa-circle-check ${
                checkCircle ? "checkCircle" : ""
              }`}
            ></i>
            <p className="label-heading">Remember me</p>
          </div>
          <div>
            <Link
              to={`/userinfo`}
              className="btn btn-outline-primary sign-button"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
