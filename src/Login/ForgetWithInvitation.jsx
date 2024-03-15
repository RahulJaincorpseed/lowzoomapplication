import React, { useState } from "react"
import "./ForgetPassword.scss"
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()

const ForgetWithInvitation = () => {
  const [passwordData, setPasswordData] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [samePasswordErr, setSamePasswordErr] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const addPathData = location.pathname.split()
  const data = addPathData[0].split("/")
  const userEmailId = data[2]


  const setNewPasswordFun = (e) => {
    e.preventDefault()
    if (newPassword !== repeatPassword) {
      setSamePasswordErr(true)
      return
    }

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
        navigate("/login")
        toast.success("password update succesfully please login")
      } catch (err) {
        console.log("error is ", err)
      }
    }
    newPasswordData()
  }

  // /api/auth/user/reset-password?email=ra%40gmail.com&newPassword=dwdwdw
  return (
    <div className="sign-up container">
      <div className="sign-box">
        <h2>Set Password</h2>
        <p className="label-heading">
          We understand your privecy is important*
        </p>
        <div className="pb-2">
          <label className="label-heading" htmlFor="phone">
            New Password*
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setNewPassword(e.target.value)}
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
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </div>
        {samePasswordErr ? (
          <p className="mb-2 text-danger">Please Enter the Same Password</p>
        ) : (
          ""
        )}
        <div className="sign-btn">
          <div className="remember-text"></div>
          <div>
            <button
              className="first-button"
              onClick={(e) => setNewPasswordFun(e)}
            >
              Submit
            </button>
          </div>
        </div>

        {/* ) : (
            <div>something went wrong please Referesh the page</div>
          )} */}
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
    </div>
  )
}

export default ForgetWithInvitation
