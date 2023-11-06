import React from "react";
import "./ForgetPassword.scss"
import { Link } from "react-router-dom";

const ForgetWithInvitation = () => {
  return (
    
             <div className="sign-up container">
                   <div className="sign-box">
              <div className="pb-2">
                <label className="label-heading" htmlFor="phone">
                  New Password*
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                //   onChange={(e)=> setNewPassword(e.target.value)}
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
                //   onChange={(e)=> setRepeatPassword(e.target.value)}
                  required
                />
              </div>
              {/* {samePasswordErr ? <p className="mb-2 text-danger">Please Enter the Same Password</p>: ""} */}
              <div className="sign-btn">
                <div className="remember-text"></div>
                <div>
                  <button
                    className="first-button"
                    // onClick={(e) => setNewPasswordFun(e)}
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
};

export default ForgetWithInvitation;
