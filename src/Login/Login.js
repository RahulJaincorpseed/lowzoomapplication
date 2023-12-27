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
import { userData, userRoles, userToken } from "../Redux/Actions/AuthAction"
toast.configure()

const Login = () => {
  const [checkCircle, setCheckCircle] = useState(false)
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  })
  const [inputError, setInputError] = useState(false)
  const [loginLoading, setLoginLoading] = useState(false);
  const [apiError, setApiError] = useState("")
  const navigate = useNavigate()
  const userRef = useRef()
  const passRef = useRef()

  const dispatch = useDispatch();

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
      setLoginLoading(true)
      try {
        const token = await axios.post(`/api/auth/token`, {
          ...userInfo,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        console.log("api data", token.data.body.associated)

        
        console.log("api data", token.data.body.accessToken)
        localStorage.setItem("Access Token", token.data.body.accessToken)
        dispatch(userData(token.data.body))
        // subscribed
        if(token.data.body.subscribed === true){
          navigate(`/${token.data.body.id}/company/dashboard/dashboard`)
          setLoginLoading(false)
          return;
        } 

        if(token.data.body.associated === true){
          navigate(`/${token.data.body.id}/company`)
          setLoginLoading(false)
          return;
        }
        setLoginLoading(false)
        navigate(`/user/${token.data.body.id}/userinfo`)
      } catch (err) {
        console.log("Error", err)
        if (err.response.status === 401) {
          setApiError(err.response.statusText)
          setLoginLoading(false)
        }
        if (err.response.status === 500) {
          toast.error("Something Went Wrong")
          setLoginLoading(false)
        }
        setLoginLoading(false)
      }
    }
    userDetails()
  }

  return (
    <div className="sign-up container">
      <form>
        <div className="sign-box">
          <h2>Sign In</h2>
          <p className="label-heading">
            We understand your privecy is important*
          </p>
          {/* <Link to={"#"} className="google-sign-btn">
          <img src={Glogo} alt="logo192" />{" "}
          <span className="label-heading fw-700">Sign In with Google</span>
        </Link>
        <p className="signin-text">Or Login With Mobile</p> */}
          <div className="pb-2">
            <label className="label-heading" htmlFor="phone">
              Email ID*
            </label>
            <input
              type="email"
              id="phone"
              ref={userRef}
              name="username"
              placeholder="example@gmail.com"
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
          {apiError ? (
            <p className="error-show">Please Enter valid Mobile or Password</p>
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
              <button className="first-button" onClick={(e) => loginUser(e)}>
               { loginLoading ? "Loading" : "Sign In" }
              </button>
            </div>
          </div>
          <p className="label-heading mb-0 move-info">
            Don't have an Account Please
            <Link className="move-page" to="/signup">
              Sign UP
            </Link>
          </p>

          {/* <button className="nadge-container text-white">
            <div className="nadge-shadow"></div>
            <span>Click me</span>
          </button> */}

          <div className="text-center">
          <Link to="/forgetpassword" >Forget Password ?</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
