import React, { useRef, useState } from "react"
import "./userInfo.scss"

const PersonalInfo = ({companyData, setCompanyData}) => {
  // const [firstErr, setFirstErr] = useState(false);
  // const [lastErr, setLastErr] = useState(false);
  // const [designationErr, setDesignationErr] = useState(false);
  // const [businessEmailErr, setBusinessEmailErr] = useState(false);


  // const firstNameRef = useRef();
  // const lastNameRef = useRef();
  // const DesignationRef = useRef();
  // const businessEmailRef = useRef();

  console.log("i am company data", companyData);

  // const firstNameFun = () =>{
  //   if(firstNameRef?.current?.value?.length < 3){
  //     setFirstErr(true);
  //   }
  //   if(firstNameRef?.current?.value?.length > 2){
  //     setFirstErr(false);
   
  //   } 
  //  }
 
  //  const lastNameFun = () =>{
  //   if(lastNameRef?.current?.value?.length < 3){
  //     setLastErr(true);
  //   }
  //   if(lastNameRef?.current?.value?.length > 2){
  //     setLastErr(false);
  //   } 
  //  }

  //  const designationFun = () =>{
  //   console.log("value is ", DesignationRef?.current?.value);
  //   if(DesignationRef?.current?.value?.length === 0){
  //     setDesignationErr(true);
  //   }
  //   if(DesignationRef?.current?.value?.length > 0){
  //     setDesignationErr(false);
  //   } 
  //  }

  //  const BusinessEmailFun = () =>{
  //    if(businessEmailRef?.current?.value?.length === 0){
  //     setBusinessEmailErr(true);
  //   }
  //   if(businessEmailRef?.current?.value?.length > 0){
  //     setBusinessEmailErr(false);
  //   } 
  //  }



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
              // ref={firstNameRef}
              className="form-control input-focus"
              id="firstName"
              placeholder="First Name"
              value={companyData.firstName}
              onChange={(e)=> setCompanyData({...companyData, firstName: e.target.value})}
              required
            />
            {/* {firstErr ? <p className="error-change">Name should be more than 2 digit</p>: ""} */}
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
