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
  const [error, setError] = useState(false);
  const navigate = useNavigate()
  const userRef = useRef()
  const passRef = useRef()
  const authSelector = useSelector((state) => state.authReducer)
  const dispatch = useDispatch();
  
  console.log("i am auth", 
  authSelector);

  const LoginUser = (e) => {
    e.preventDefault()
    if(userRef.current.value === ""){
      setError(true)
    }
    if(passRef.current.value === ""){
      setError(true)
    }



    const userDetails = async () => {
      try {
        const token = await axios.post(`${baseUrl}/api/auth/token`, {
          password: passRef.current.value,
          username: userRef.current.value,
        })
        if (token.data.statusCode === 200) {
          console.log("i ma data", token.data.body.username)
          console.log("i ma data", token.data.body.accessToken)
          console.log("i ma data", token.data.body.roles)
          dispatch(userToken(token.data.body.accessToken))
          dispatch(userRoles(token.data.body.roles))
          localStorage.setItem("access Token", token.data.body.accessToken)
          navigate("/")
        }
        // userDetails();
      } catch (err) {
        setError(err?.data?.message);
      }
    }
    userDetails()
  }

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
        <p className="signin-text">Or Login With Mobile</p>
        <div className="pb-2">
          <label className="label-heading" htmlFor="phone">
            User ID *
          </label>
          <input
            type="tel"
            id="phone"
            ref={userRef}
            name="phone"
            placeholder="+91 9999008078"
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
            ref={passRef}
            id="password"
            name="password"
            placeholder="Min. 8 Charecter"
            autoComplete="off"
            required
          />
        </div>
        {error ? <p className="mb-2 text-danger">Username or password dfled can't blank</p>: ""}
           
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
              onClick={(e) => LoginUser(e)}
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
