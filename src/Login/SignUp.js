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
  const [checkCircle, setCheckCircle] = useState(false)
  const [error, setError] = useState(false)
  const [onetp, setOnetp] = useState("")
  const navigate = useNavigate()
  const [OtpLoading, setOtpLoading] = useState(false)
  const [otpError, setOtpError] = useState(false)

  const mobileNumber = useRef()
  const OTP = useRef()
  const passowrd = useRef()

  const getOtp = () => {
    if (
      mobileNumber.current.value === "" ||
      mobileNumber.current.value.length <= 9 ||
      mobileNumber.current.value.length > 16
    ) {
      mobileNumber.current.style.border = "1px solid red"
      setError(true)
      return
    } else {
      let value = { mobile: mobileNumber.current.value }
      setOtpLoading(true)
      const getOtpApi = async () => {
        try {
          const data = await axios.post(`${baseUrl}/api/auth/otp`, value)
          setError(false)
          console.log(data.data)
          setOnetp(data.data)
          toast.success("OTP has been Send Succesfully")
          setOtpLoading(false)
        } catch (err) {
          if (err.response.status === 500) {
            console.log("i am error", err, err.message)
            setOtpLoading(false)
          }
        }
      }
      getOtpApi()
    }
  }

  console.log("i am state", onetp, onetp.mobile, onetp.otp)

  const userSignUp = (e) => {
    if (
      mobileNumber.current.value === "" ||
      mobileNumber.current.value.length <= 9 ||
      mobileNumber.current.value.length > 16
    ) {
      mobileNumber.current.style.border = "1px solid red"
      setError(true)
      return
    } else if (OTP.current.value === "") {
      OTP.current.style.border = "1px solid red"
      setOtpError(true)
      return
    } else if (OTP.current.value !== onetp.otp) {
      OTP.current.style.border = "1px solid red"
      setOtpError(true)
      return
    } else if (passowrd.current.value === "") {
      passowrd.current.style.border = "1px solid red"
      setError(true)
      return
    } else {
      e.preventDefault()
      const signUpByuser = async () => {
        try {
          let value = {
            mobile: onetp.mobile,
            otp: OTP.current.value,
            password: passowrd.current.value,
          }
          const userData = await axios.post(`${baseUrl}/api/auth/signup`, value)
          if (userData.data.statusCode === 200) {
            console.log("i am user data", userData)
            toast.success(userData.data.body.message)
            navigate("/login")
          } else {
            console.log("user already", userData.data.message)
          }
        } catch (err) {
          console.log("i am error", err)
          toast.error("Something Went Wrong")
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
        <div className="pb-2">
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
          {error ? (
            <span className="error-text">
              please Enter a Valid Mobile Number
            </span>
          ) : (
            ""
          )}
          <button
            onClick={getOtp}
            className="btn btn-outline-primary sign-button w-100 my-2"
          >
            {OtpLoading ? (
              <Spinner height={"25px"} width={"25px"} />
            ) : (
              "GET OTP"
            )}
          </button>
        </div>
        <div className="pb-2">
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
          {otpError ? (
            <span className="error-text">please Enter a Valid OTP</span>
          ) : (
            ""
          )}
        </div>
        <div className="pb-2">
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
              onClick={(e) => userSignUp(e)}
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
