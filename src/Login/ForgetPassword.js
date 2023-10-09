import React, { useRef, useState } from "react"
import "./ForgetPassword.scss"
import { Link } from "react-router-dom"
import { postQuery } from "../Api/PostQuery";

const ForgetPassword = () => {
    const [nextPage, setNextPage] = useState(1);
    const [userEmailId, setUserEmailId] = useState({});

    const [emailIdErr, setEmailIdErr] = useState(false);

    const emailIdRef = useRef();

    const handleClick = (e) =>{
        e.preventDefault();
        setNextPage((prev)=> (prev+1));
    } 

    const userEmailSubmit = (e) =>{
        e.preventDefault();
        if(emailIdRef.current.value === ""){
            setEmailIdErr(true) 
        }

        const emailDataApi = async () =>{
            try{
                const apiDataResponse = await postQuery(`/api/auth/user/forgot-password?email=rahul.jain%40corpseed.com`)

            }catch(err){
                console.log(err);
            }
        }


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
        { nextPage ===1 ? (
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
            />
            {emailIdErr ? (
            <p className="mb-2 text-danger">
              Email can't be blank
            </p>
          ) : (
            ""
          )}
          </div>
          <div className="sign-btn">
            <div className="remember-text">
            </div>
            <div>
              <button className="first-button" onClick={(e)=> userEmailSubmit(e)} >
                Next
              </button>
            </div>
          </div>
          
          </>
        ): nextPage === 2 ?   <>
        
        <div className="pb-2">
          <label className="label-heading" htmlFor="phone">
            Enter Otp*
          </label>
          <input
            type="email"
            id="phone"
            name="username"
            placeholder="Enter your Otp"
            required
          />
        </div>
        <div className="sign-btn">
          <div className="remember-text">
          </div>
          <div>
            <button className="first-button" onClick={(e)=> handleClick(e)}>
              Submit Otp
            </button>
          </div>
        </div>
        
        </> : nextPage === 3 ? <>
        <div className="pb-2">
          <label className="label-heading" htmlFor="phone">
            New Password*
          </label>
          <input
            type="password"
            id="phone"
            name="username"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="pb-2">
          <label className="label-heading" htmlFor="phone">
            confirm Password*
          </label>
          <input
            type="password"
            id="phone"
            name="username"
            placeholder="Enter your confirm password"
            required
          />
        </div>
        <div className="sign-btn">
          <div className="remember-text">
          </div>
          <div>
            <button className="first-button" onClick={(e)=> handleClick(e)}>
              Submit
            </button>
          </div>
        </div>
        </> : <div>something went wrong please Referesh the page</div>
        }
          <p className="label-heading mb-0 move-info">
            Don't have an Account Please
            <Link className="move-page" to="/signup">
              Sign UP
            </Link>
          </p>
          <div className="text-center">
            <span className="mr-2">Back to</span>
          <Link to="/login" >login</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ForgetPassword
