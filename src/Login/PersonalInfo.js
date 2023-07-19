import React from "react"
import "./userInfo.scss"

const PersonalInfo = ({setCompanyFormData, companyFormData}) => {

    const FirstPart = (e) =>{
        setCompanyFormData((state)=>(
            {...state, [e.target.name] : e.target.value}
        ))
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
              className="form-control input-focus"
              id="firstName"
              placeholder="First Name"
              required
              name="firstName"
              onChange={(e)=> FirstPart(e)}
            />
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
              name="lastName"
              onChange={(e)=> FirstPart(e)}
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
              name="designation"
              onChange={(e)=> FirstPart(e)}
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
              name="businessEmail"
              onChange={(e)=> FirstPart(e)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
