import React, { useRef, useState } from "react"
import "./userInfo.scss"

const PersonalInfo = ({companyData, setCompanyData}) => {
  const [err, setErr] = useState(false); 
  const firstNameRef = useRef();
  
  console.log("i am company data", companyData);

  const firstNameFun = () =>{
    console.log("i am calling", firstNameRef.current.value.length );
    if(firstNameRef.current.value.length < 2){
      setErr(true);
    }
    if(firstNameRef.current.value.length > 2){
      setErr(false);
    }
  }

  // if(companyData.firstName.length < 2){
  //   setFirstNameErr(true)
  // }

 

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
              value={companyData.firstName}
              onChange={(e)=> setCompanyData({...companyData, firstName: e.target.value})}
              onKeyUp={firstNameFun}
              required
            />
            {err ? <p className="error-change">Name should be more than 2 digit</p>: ""}
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pl-ten">
            <label className="label-heading" htmlFor="lastName">
              Last Name *
            </label>
            <input
              type="text"
              // ref={lastNameRef}
              className="form-control input-focus"
              id="lastName"
              placeholder="last Name"
              value={companyData.lastName}
              onChange={(e)=> setCompanyData({...companyData, lastName: e.target.value})}
              // onChange={lastNameFun}
              required
            />
            {/* {lastErr ? <p className="error-change">Last name should be more than 2 digit</p>: ""} */}
        
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pr-ten">
            <label className="label-heading" htmlFor="designation">
              Designation *
            </label>
            <input
              type="text"
              // ref={DesignationRef}
              className="form-control input-focus"
              id="designation"
              placeholder="Designation"
              // onChange={designationFun}
              required
            />
              {/* {designationErr ? <p className="error-change">Can't be blank</p>: ""} */}
        
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pl-ten">
            <label className="label-heading" htmlFor="bemail">
              Business Email ID *
            </label>
            <input
              type="email"
              // ref={businessEmailRef}
              className="form-control input-focus"
              id="bemail"
              placeholder="Business Email"
              // onChange={BusinessEmailFun}
              required
            />
          {/* {businessEmailErr ? <p className="error-change">Can't be blank</p>: ""} */}
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
