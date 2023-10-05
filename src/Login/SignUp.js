import React, { useRef, useState } from "react"
import "./login.scss"
import Glogo from "..//images/google-logo.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { postQuery } from "../Api/PostQuery"
toast.configure()

const SignUp = () => {
  const [checkCircle, setCheckCircle] = useState(false)
  const [otpPage, setOtpPage] = useState(false)
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
  })
  const [signUpData, setSignUpData] = useState({
    email: "",
    name: "",
    password: "",
    otp: "",
  })
  const [formError, setFormError] = useState(false)
  const [otpPageError, setOtpPageError] = useState(false)
  const [sameOtpError, setSameOtpError] = useState(false)
  const [validOtpError, setValidOtpError] = useState(false)
  const [responseOtpData, setResponseOtpData] = useState({})
  const navigate = useNavigate()

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const otpRef = useRef()

  const dataForOtp = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setSignUpData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitdataForOtp = (e) => {
    e.preventDefault()
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      passwordRef.current.value === ""
    ) {
      setFormError(true)
      return
    }

    const OtpDataResponse = async () => {
      try {
        const OtpData = await postQuery(`/api/auth/otp/generateOTP`, userData)
        console.log("otp data", OtpData?.data)
        setResponseOtpData(OtpData?.data)
        setOtpPage(true)
      } catch (err) {
        console.log(err)
      }
    }
    OtpDataResponse()
  }

  const submitValidOtp = (e) => {
    e.preventDefault()
    if (otpRef.current.value === "") {
      setOtpPageError(true)
      return
    }
    if (responseOtpData.otp !== signUpData.otp) {
      setSameOtpError(true)
      return
    }

    const UserSignUpResponse = async () => {
      try {
        const userSignupData = await postQuery(`/api/auth/signup`, signUpData)
        console.log("sign up data", userSignupData?.data)
        toast.success("Account Created Succesfully")
        navigate("/login")
      } catch (err) {
        console.log("err", err)
        console.log("error")
      }
    }
    UserSignUpResponse()
  }

  console.log("i am status otp", otpPage)
  console.log(responseOtpData.otp === signUpData.otp)

  return (
    <div className="sign-up container">
      <div className="sign-box">
        <h2>Sign Up</h2>
        <p className="label-heading">
          We understand your privecy is important*
        </p>
        <form className={`${otpPage ? "d-none" : ""}`}>
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
              onChange={(e) => dataForOtp(e)}
              required
            />
          </div>
          <div className="pb-2">
            <label className="label-heading" htmlFor="email">
              Email ID*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              placeholder="+91 9999008078"
              onChange={(e) => dataForOtp(e)}
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
              onChange={(e) => dataForOtp(e)}
              autoComplete="off"
              required
            />
          </div>
          {formError ? (
            <p className="error-show">Please Fill All Mandatory field</p>
          ) : (
            ""
          )}
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
                onClick={(e) => submitdataForOtp(e)}
                className="first-button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className={`otp-form ${otpPage ? "d-block" : "d-none"}`}>
          <form>
            <h2>Please Enter your 6 digit OTP</h2>
            <input
              className="otp-input"
              type="text"
              ref={otpRef}
              placeholder="Enter Your OTP"
              onChange={(e) =>
                setSignUpData((prev) => ({ ...prev, otp: e.target.value }))
              }
            />
            {otpPageError ? (
              <p className="error-show">Otp Can not be blank</p>
            ) : (
              ""
            )}
            {sameOtpError ? (
              <p className="error-show">Please Enter Valid Otp</p>
            ) : (
              ""
            )}
            <div className="flex-end-cl">
              <button
                onClick={(e) => submitValidOtp(e)}
                className="first-button"
              >
                Submit OTP
              </button>
            </div>
          </form>
        </div>
        <p className="label-heading move-info">
          Already have an Account Please
          <Link className="move-page" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
