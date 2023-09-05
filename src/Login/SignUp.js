import React, { useRef, useState } from "react"
import "./login.scss"
import Glogo from "..//images/google-logo.png"
import { Link, useNavigate } from "react-router-dom"
import { baseUrl } from "../Api/baseUrl"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Spinner from "../common/Toaster/Spinner"
toast.configure()

const SignUp = () => {
  const [checkCircle, setCheckCircle] = useState(false);
  const [userData, setUserData] = useState({
    mobile: "",
    name: "",
    password: ""
  });
  const [formError, setFormError] = useState(false);

  const nameRef = useRef();
  const mobileRef = useRef();
  const passwordRef = useRef();
  


  const dataForOtp = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log("i am user Dtaa", userData);

  const submitdataForOtp = (e) =>{
    e.preventDefault();
    if(nameRef.current.value === "" || mobileRef.current.value === "" || passwordRef.current.value === ""){
      setFormError(true)
      return;
    }

    const OtpDataResponse = async () => {
      const OtpData = await axios.post(`/auth/otp`,{
        ...userData,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      console.log("otp data", OtpData)
    }
    OtpDataResponse();
  }


  return (
    <div className="sign-up container">
      <div className="sign-box">
        <h2>Sign Up</h2>
        <p className="label-heading">
          We understand your privecy is important*
        </p>
        <Link to={"#"} className="google-sign-btn">
          <img src={Glogo} alt="logo192" />{" "}
          <span className="label-heading fw-700">Sign Up with Google</span>
        </Link>
        <p className="signin-text">Or Sign In With Email</p>
        <form>
          <div className="pb-2">
            <label className="label-heading" htmlFor="name">
              Name *
            </label>
            <input
              type="text"
              id="otp"
              placeholder="Enter your Name"
              name="name"
              ref={nameRef}
              onChange={(e)=> dataForOtp(e)}
              required
            />
          </div>
          <div className="pb-2">
            <label className="label-heading" htmlFor="phone">
              Mobile Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="mobile"
              ref={mobileRef}
              placeholder="+91 9999008078"
              onChange={(e)=> dataForOtp(e)}
              required
            />
          </div>

          <div className="pb-2">
            <label className="label-heading password-input" htmlFor="password">
              Set Password
            </label>
            <input
              className="password-input"
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              placeholder="Min. 8 Charecter"
              onChange={(e)=> dataForOtp(e)}
              autoComplete="off"
              required
            />
          </div>
          {formError ?  <p className="text-danger">Please Fill All Mandatory field</p>: ""}
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
           
              <button
               
                onClick={(e)=> submitdataForOtp(e)}
                className="btn btn-outline-primary sign-button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
