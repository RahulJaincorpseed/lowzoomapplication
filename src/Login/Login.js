import React, { useRef, useState } from "react"
import "./login.scss"
import Glogo from "..//images/google-logo.png"
import { Link, useNavigate } from "react-router-dom"
import Loading from "../common/Loading/Loading"
import { baseUrl } from "../Api/baseUrl"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()


const Login = () => {
  const [checkCircle, setCheckCircle] = useState(false)
  const navigate = useNavigate();
  const userRef = useRef();
  const passRef =  useRef();


  const LoginUser = (e) =>{ 
    e.preventDefault();
    const userDetails = async  () => {
      try{
       const token = await axios.post(`${baseUrl}/api/auth/token`,{
          password: passRef.current.value,
          username: userRef.current.value
        });
        if(token.data.statusCode === 200){
        console.log(token.data.body.accessToken, "i am",token);
        localStorage.setItem("access Token", token.data.body.accessToken)
        navigate('/')
        }
        // userDetails();
        }
        catch(err){
        console.log("i am err", err);
        }
      }
      userDetails();
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
              className="btn btn-outline-primary sign-button" onClick={(e) => LoginUser(e)}
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
