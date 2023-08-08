import React, { useRef, useState } from "react"
import "./userInfo.scss"

const PersonalInfo = () => {
  const [firstErr, setFirstErr] = useState(false);
  const firstNameRef = useRef();

  
  const inputHandler = () =>{
    if(firstNameRef?.current?.value?.length < 3){
      setFirstErr(true);
    }
    if(firstNameRef?.current?.value?.length > 2){
      setFirstErr(false);
    } 
   }
 

  return (
    <div className="personal-info container">
      <h4 className="info-text">Ok give us your information</h4>
      <div className="first-form form-row">
        <div className="form-group col-md-6">
          <div className="pr-ten">
            <label className="label-heading" htmlFor="firstName">
              First Name *
            </label>
            <input
              type="text"
              ref={firstNameRef}
              className="form-control input-focus"
              id="firstName"
              placeholder="First Name"
              required
              onChange={inputHandler}
            />
            {firstErr ? <span className="text-danger">Name should be more than 2 digit</span>: ""}
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pl-ten">
            <label className="label-heading" htmlFor="lastName">
              Last Name *
            </label>
            <input
              type="text"
              className="form-control input-focus"
              id="lastName"
              placeholder="last Name"
              required
            />
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pr-ten">
            <label className="label-heading" htmlFor="designation">
              Designation *
            </label>
            <input
              type="text"
              className="form-control input-focus"
              id="designation"
              placeholder="Designation"
              required
            />
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pl-ten">
            <label className="label-heading" htmlFor="bemail">
              Business Email ID *
            </label>
            <input
              type="email"
              className="form-control input-focus"
              id="bemail"
              placeholder="Business Email"
              required
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
