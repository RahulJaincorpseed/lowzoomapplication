import React, { useRef, useState } from "react"
import "./login.scss"
import Glogo from "..//images/google-logo.png"
import { Link, useNavigate } from "react-router-dom"
import Loading from "../common/Loading/Loading"
import { baseUrl } from "../Api/baseUrl"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useDispatch, useSelector } from "react-redux"
import { userRoles, userToken } from "../Redux/Actions/AuthAction"
toast.configure()

const Login = () => {
  const [checkCircle, setCheckCircle] = useState(false)
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  })
  const [inputError, setInputError] = useState(false)
  const [apiError, setApiError] = useState("")
  const navigate = useNavigate()
  const userRef = useRef()
  const passRef = useRef()
  // const authSelector = useSelector((state) => state.authReducer)
  // const dispatch = useDispatch()

  const LoginUserData = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log("user information", userInfo)

  const loginUser = (e) => {
    e.preventDefault()
    if (userRef.current.value === "" || passRef.current.value === "") {
      setInputError(true)
    }

    const userDetails = async () => {
      console.log("i am info", userInfo)
      try {
        const token = await axios.post(`/auth/token`, {
          ...userInfo,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        console.log("api data", token.data)
      } catch (err) {
        console.log("Error", err)
        if (err.response.status === 401) {
          setApiError(err.response.statusText)
        }
      }
    }
    userDetails()
  }

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
        <p className="signin-text">Or Login With Mobile</p>
        <div className="pb-2">
          <label className="label-heading" htmlFor="phone">
            Mobile Number*
          </label>
          <input
            type="tel"
            id="phone"
            ref={userRef}
            name="username"
            placeholder="+91 9999008078"
            required
            onChange={(e) => LoginUserData(e)}
          />
        </div>
        <div className="pb-2">
          <label className="label-heading password-input" htmlFor="password">
            Password*
          </label>
          <input
            className="password-input"
            type="password"
            id="password"
            name="password"
            ref={passRef}
            placeholder="Min. 8 Charecter"
            autoComplete="off"
            onChange={(e) => LoginUserData(e)}
            required
          />
        </div>
        {inputError ? (
          <p className="mb-2 text-danger">
            Username or password filed can't be blank
          </p>
        ) : (
          ""
        )}
        {apiError ? <p className="mb-2 text-danger">{apiError}</p> : ""}

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
              className="btn btn-outline-primary sign-button"
              onClick={(e) => loginUser(e)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
