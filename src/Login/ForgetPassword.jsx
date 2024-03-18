import React, { useRef, useState } from "react"
import "./ForgetPassword.scss"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LongButton from "../common/Button/LongButton"
toast.configure()

const ForgetPassword = () => {
  const [nextPage, setNextPage] = useState(1)
  const [userEmailId, setUserEmailId] = useState("")
  const [otpData, setOtpData] = useState("")
  const [passwordData, setPasswordData] = useState("")
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [emailIdErr, setEmailIdErr] = useState(false)
  const [samePasswordErr, setSamePasswordErr] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [passwordSetLoading, setPasswordSetLoading] = useState(false);

  const emailIdRef = useRef()
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault()
    setNextPage((prev) => prev + 1)
  }

  const userEmailSubmit = (e) => {
    e.preventDefault()
    if (emailIdRef.current.value === "") {
      setEmailIdErr(true)
      return
    }
    if(emailLoading === true){
      return;
    }
    setEmailLoading(true)

    const emailDataApi = async () => {
      try {
        const apiDataResponse = await axios.post(
          `/api/auth/user/forgot-password?email=${userEmailId}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        setEmailLoading(false)
        setNextPage((prev) => prev + 1)
      } catch (err) {
        console.log(err)
        if(err.response.status === 500){
          toast.error("Something Went Wrong")
          setEmailLoading(false)
        }
        setEmailLoading(false)
      }
    }
    emailDataApi()
  }

  const verifyOtpData = (e) => {
    e.preventDefault()

    if(otpLoading=== true){
      return
    }
    setOtpLoading(true)

    const verifyData = async () => {
      try {
        const otpResponse = await axios.post(
          `/api/auth/user/verify-otp?email=${userEmailId}&otp=${otpData}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        setOtpLoading(false)
        setNextPage((prev) => prev + 1)
      } catch (err) {
        console.log(err)
        if(err.response.status === 500){
          toast.error("Something Went Wrong")
          setOtpLoading(false)
        }
        setOtpLoading(false)
      }
    }
    verifyData()
  }

  const setNewPasswordFun = (e) => {
    e.preventDefault()
    if(newPassword !== repeatPassword){
      setSamePasswordErr(true)
      return
    }

    if(passwordSetLoading === true){
      return
    }

    setPasswordSetLoading(false)

    const newPasswordData = async () => {
      try {
        const setPassword = await axios.put(
          `/api/auth/user/reset-password?email=${userEmailId}&newPassword=${newPassword}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        setPasswordSetLoading(false)
        navigate("/login")
        toast.success("password update succesfully please login")
      } catch (err) {
        console.log("error is ", err)
        if(err.response.status === 500){
          toast.error("Something Went Wrong")
          setPasswordSetLoading(false)
        }
        setPasswordSetLoading(false)
      }
    }
    newPasswordData()
  }


  return (
    <div className="sign-up container">
      <form>
        <div className="sign-box">
          <h2>Forget Password</h2>
          <p className="label-heading">
            We understand your privecy is important*
          </p>
          {/* <Link to={"#"} className="google-sign-btn">
          <img src={Glogo} alt="logo192" />{" "}
          <span className="label-heading fw-700">Sign In with Google</span>
        </Link>
        <p className="signin-text">Or Login With Mobile</p> */}
          {nextPage === 1 ? (
            <>
              <div className="pb-2">
                <label className="label-heading" htmlFor="phone">
                  Email ID*
                </label>
                <input
                  type="email"
                  id="phone"
                  name="username"
                  ref={emailIdRef}
                  placeholder="Enter your Email"
                  required
                  onChange={(e) => setUserEmailId(e.target.value)}
                />
                {emailIdErr ? (
                  <p className="mb-2 text-danger">Email can't be blank</p>
                ) : (
                  ""
                )}
              </div>
              <div className="sign-btn">
                <div className="remember-text"></div>
                <div>
                  <LongButton data={emailLoading ? "Loading..." : "Next"} onClick={(e) => userEmailSubmit(e)} />
                </div>
              </div>
            </>
          ) : nextPage === 2 ? (
            <>
              <div className="pb-2">
                <label className="label-heading" htmlFor="phone">
                  Enter Otp*
                </label>
                <input
                  type="email"
                  id="phone"
                  name="username"
                  placeholder="Enter your Otp"
                  onChange={(e) => setOtpData(e.target.value)}
                  required
                />
              </div>
              <div className="sign-btn">
                <div className="remember-text"></div>
                <div>
                <LongButton data={otpLoading ? "Loading..." : "Submit Otp"} onClick={(e) => verifyOtpData(e)} />
                </div>
              </div>
            </>
          ) : nextPage === 3 ? (
            <>
              <div className="pb-2">
                <label className="label-heading" htmlFor="phone">
                  New Password*
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e)=> setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="pb-2">
                <label className="label-heading" htmlFor="phone">
                  confirm Password*
                </label>
                <input
                  type="password"
                  id="repeatpassword"
                  name="repeatpassword"
                  placeholder="Enter your confirm password"
                  onChange={(e)=> setRepeatPassword(e.target.value)}
                  required
                />
              </div>
              {samePasswordErr ? <p className="mb-2 text-danger">Please Enter the Same Password</p>: ""}
              <div className="sign-btn">
                <div className="remember-text"></div>
                <div>
                <LongButton data={otpLoading ? "Loading..." : "Submit"} onClick={(e) => setNewPasswordFun(e)} />
                </div>
              </div>
            </>
          ) : (
            <div>something went wrong please Referesh the page</div>
          )}
          <p className="label-heading mb-0 move-info">
            Don't have an Account Please
            <Link className="move-page" to="/signup">
              Sign UP
            </Link>
          </p>
          <div className="text-center">
            <span className="mr-2">Back to</span>
            <Link to="/login">login</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ForgetPassword
