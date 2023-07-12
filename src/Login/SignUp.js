import React, { useRef, useState } from "react"
import "./login.scss"
import Glogo from "..//images/google-logo.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const SignUp = () => {
  const [checkCircle, setCheckCircle] = useState(false);
  const [error, setError] = useState(false);
  const [onetp, setOnetp] = useState(""); 
  const navigate = useNavigate();
  

  const mobileNumber = useRef();
  const OTP = useRef();
  const passowrd = useRef();

  const getOtp = () =>{
    console.log(mobileNumber.current.value);
    if(mobileNumber.current.value === ""){
      mobileNumber.current.style.border = "1px solid red";
      setError(true);
      return
    }
    else{
    let value = {"mobile": mobileNumber.current.value}
    const getOtpApi = async () =>{
      try{
      const data = await axios.post("http://localhost:8080/api/auth/otp", value);
      console.log(data.data);
      setOnetp(data.data)
      }
      catch(err){
        setError(err.message)
      }
    }
    getOtpApi();
  }
  }

  console.log("i am state", onetp, onetp.mobile, onetp.otp);


  const userSignUp = () =>{
    if(mobileNumber.current.value === ""){
      mobileNumber.current.style.border = "1px solid red";
      setError(true);
      return
    }
    else if(OTP.current.value === ""){
      OTP.current.style.border = "1px solid red";
      setError(true);
      return
    }
    else if(passowrd.current.value === ""){
      passowrd.current.style.border = "1px solid red";
      setError(true);
      return
    }
    else{
    const signUpByuser = async () =>{
      try{
      let value = {"mobile": onetp.mobile, "otp": onetp.otp, password: passowrd.current.value};
      const userData =  await axios.post("http://localhost:8080/api/auth/signup", value)
      if(userData.data.statusCode === 200){
        console.log("i am user data", userData);
      }
      else{
        console.log("user already", userData)
      }
      }
      catch(err){
        console.log(err);
      }
    }
    signUpByuser()
  }

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
        <div>
          <label className="label-heading" htmlFor="phone">
            Mobile Number*
          </label>
          <input
            type="tel"
            id="phone"
            ref={mobileNumber}
            name="phone"
            placeholder="+91 9999008078"
            required
          />
          {error ? <span>Mobile Number can not be blank</span>: ""}
           <button
              onClick={getOtp}
              className="btn btn-outline-primary sign-button w-100 my-3"
            >
              GET OTP
            </button>
        </div>
        <div>
          <label className="label-heading" htmlFor="otp">
            OTP *
          </label>
          <input
            type="text"
            ref={OTP}
            id="otp"
            name="otp"
            placeholder="Enter your OTP"
            required
          />
        </div>
        <div>
          <label className="label-heading password-input" htmlFor="password">
            Set Password
          </label>
          <input
            className="password-input"
            ref={passowrd}
            type="password"
            id="password"
            name="password"
            placeholder="Min. 8 Charecter"
            autoComplete="off"
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
            <button
              to={`/userinfo`}
              onClick={userSignUp}
              className="btn btn-outline-primary sign-button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp