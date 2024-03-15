import React, { useRef, useState } from "react"
import "./login.scss"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useDispatch } from "react-redux"
import { userData } from "../Redux/Actions/AuthAction"
import LongButton from "../common/Button/LongButton"
import InputErrorComponent from "../components/InputErrorComponent"
import { getCurrentUser } from "../toolkit/Slices/AuthSlice"
toast.configure()

const Login = () => {
  const [checkCircle, setCheckCircle] = useState(false)
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  })
  const [inputError, setInputError] = useState(false)
  const [loginLoading, setLoginLoading] = useState(false)
  const [apiError, setApiError] = useState("")
  const navigate = useNavigate()
  const userRef = useRef()
  const passRef = useRef()

  const dispatch = useDispatch()

  const LoginUserData = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }


  const loginUser = (e) => {
    e.preventDefault()
    if (userRef.current.value === "" || passRef.current.value === "") {
      setInputError(true)
    }
    if (loginLoading === true) {
      return
    }

    const getUser = async () => {
      const data = await dispatch(getCurrentUser(userInfo));
      console.log("auth data", data.payload.body);
      let statusCode = data.payload.statusCode;
      if(statusCode === 200){
        if (data.payload.body.subscribed === true) {
          navigate(`/${data.payload.body.id}/company/dashboard`)
          setLoginLoading(false)
          return
        }

        if (data.payload.body.associated === true) {
          navigate(`/${data.payload.body.id}/company`)
          setLoginLoading(false)
          return
        }
        setLoginLoading(false)
        navigate(`/user/${data.payload.body.id}/userinfo`)
      }else{
        console.log("Error")
        // if (err.response.status === 401) {
        //   setApiError(err.response.statusText)
        //   setLoginLoading(false)
        // }
        // if (err.response.status === 500) {
        //   toast.error("Something Went Wrong")
        //   setLoginLoading(false)
        // }
        setLoginLoading(false)
      }

    }
    getUser()

    const userDetails = async () => {
      setLoginLoading(true)
      try {
        const token = await axios.post(`/api/auth/token`, {
          ...userInfo,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        localStorage.setItem("Access Token", token.data.body.accessToken)
        dispatch(userData(token.data.body))
        // subscribed       
        if (token.data.body.subscribed === true) {
          navigate(`/${token.data.body.id}/company/dashboard`)
          setLoginLoading(false)
          return
        }

        if (token.data.body.associated === true) {
          navigate(`/${token.data.body.id}/company`)
          setLoginLoading(false)
          return
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
    // userDetails()
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
            <InputErrorComponent data="Email or password filed can't be blank" />
          ) : (
            ""
          )}
          {apiError ? (
            <InputErrorComponent data="Please Enter valid Mobile or Password" />
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
                data={loginLoading ? "Loading" : "Sign In"}
                onClick={(e) => loginUser(e)}
              />
              {/* <button className="first-button" onClick={(e) => loginUser(e)}>
               { loginLoading ? "Loading" : "Sign In" }
              </button> */}
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
            <Link to="/forgetpassword">Forget Password ?</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
