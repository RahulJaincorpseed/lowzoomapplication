import React, { useRef, useState } from "react"
import "./login.scss"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import BoxInputField from "../common/Inputs/BoxInputField"
import "react-toastify/dist/ReactToastify.css"
import { postQuery } from "../Api/PostQuery"
import InputErrorComponent from "../components/InputErrorComponent"
import LongButton from "../common/Button/LongButton"
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
    roleList: [
      "SUPER_ADMIN"
    ]
  })
  const [formError, setFormError] = useState(false)
  const [otpLoading, setOtpLoading] = useState(false)
  const [otpPageError, setOtpPageError] = useState(false)
  const [sameOtpError, setSameOtpError] = useState(false)
  const [validOtpError, setValidOtpError] = useState(false)
  const [otpTwoLoading, setOtpTwoLoading] = useState(false)
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
      if (otpLoading === true) {
        return
      }
      setOtpLoading(true)
      try {
        const OtpData = await postQuery(`/api/auth/otp/generateOTP`, userData)
        setResponseOtpData(OtpData?.data)
        setOtpLoading(false)
        setOtpPage(true)
      } catch (err) {
        console.log(err)
        if (err.response.status === 500) {
          toast.error("Something Went Wrong")
          setOtpLoading(false)
        }
        setOtpLoading(false)
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
      if(otpTwoLoading === true){
        return
      }
      setOtpTwoLoading(true)
      try {
        const userSignupData = await postQuery(`/api/auth/signup`, signUpData)
        toast.success("Account Created Succesfully")
        setOtpTwoLoading(false)
        navigate("/login")
      } catch (err) {
        console.log("err", err)
        console.log("error")
        setOtpTwoLoading(false)
        if (err.response.status === 500) {
          toast.error("Something Went Wrong")
          setOtpTwoLoading(false)
        }
      }
    }
    UserSignUpResponse()
  }


  return (
    <div className="sign-up container">
      <div className="sign-box">
        <h2>Sign Up</h2>
        <p className="label-heading">
          We understand your privecy is important*
        </p>
        <form className={`${otpPage ? "d-none" : ""}`}>
          <div className="pb-2">
            <BoxInputField
              type="text"
              name="name"
              label="Name*"
              ref={nameRef}
              placeholder="Enter your Name"
              onChange={(e) => dataForOtp(e)}
              required
            />
          </div>
          <div className="pb-2">
            <BoxInputField
              type="email"
              name="email"
              label="Email ID*"
              ref={emailRef}
              placeholder="user@gmail.com"
              onChange={(e) => dataForOtp(e)}
              required
            />
          </div>
          <div className="pb-2">
            <BoxInputField
              type="password"
              name="password"
              label="Set Password"
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
              <LongButton
                data={otpLoading ? "Loading..." : "Sign Up"}
                onClick={(e) => submitdataForOtp(e)}
              />
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
              <InputErrorComponent data="Otp Can not be blank" />
            ) : (
              ""
            )}
            {sameOtpError ? (
              <InputErrorComponent data="Please Enter Valid Otp" />
            ) : (
              ""
            )}
            <div className="flex-end-cl">
              <LongButton
                data={otpTwoLoading ? "Loading..." : "Submit OTP"}
                onClick={(e) => submitValidOtp(e)}
              />
              {/* <button
                onClick={(e) => submitValidOtp(e)}
                className="first-button"
              >
                Submit OTP
              </button> */}
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
