import React, { useRef, useState } from "react"
import "./userInfo.scss"

const PersonalInfo = ({ companyData, setCompanyData }) => {
  const [firstNameErr, setFirstNameErr] = useState(false)
  const [lastNameErr, setLastNameErr] = useState(false)
  const [designationErr, setdesignationErr] = useState(false)
  const [businessEmailErr, setBusinessEmailErr] = useState(false)

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const designationRef = useRef()
  const businessEmailRef = useRef()

  const firstNameFun = () => {
    if (firstNameRef.current.value.length === 0) {
      setTimeout(() => {
        setFirstNameErr(true)
      }, 1000)
    }
    if (firstNameRef.current.value.length >= 1) {
      setFirstNameErr(false)
    }
  }

  const lastNameFun = () => {
    if (lastNameRef.current.value.length === 0) {
      setTimeout(() => {
        setLastNameErr(true)
      }, 1000)
    }
    if (lastNameRef.current.value.length >= 1) {
      setLastNameErr(false)
    }
  }

  const designationFun = () => {
    if (designationRef.current.value.length === 0) {
      setTimeout(() => {
        setdesignationErr(true)
      }, 1000)
    }
    if (designationRef.current.value.length >= 1) {
      setdesignationErr(false)
    }
  }

  const businessEmailFun = () => {
    if (businessEmailRef.current.value.length === 0) {
      setTimeout(() => {
        setBusinessEmailErr(true)
      }, 1000)
    }
    if (businessEmailRef.current.value.length >= 1) {
      setBusinessEmailErr(false)
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
              value={companyData.firstName}
              onChange={(e) =>
                setCompanyData({ ...companyData, firstName: e.target.value })
              }
              onKeyUp={firstNameFun}
              required
            />
            {firstNameErr ? (
              <p className="error-change">First Name can 't be Blank</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pl-ten">
            <label className="label-heading" htmlFor="lastName">
              Last Name *
            </label>
            <input
              type="text"
              ref={lastNameRef}
              className="form-control input-focus"
              id="lastName"
              placeholder="last Name"
              value={companyData.lastName}
              onChange={(e) =>
                setCompanyData({ ...companyData, lastName: e.target.value })
              }
              onKeyUp={lastNameFun}
              required
            />
            {lastNameErr ? (
              <p className="error-change">Last Name can't be Blank</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pr-ten">
            <label className="label-heading" htmlFor="designation">
              Designation *
            </label>
            <input
              type="text"
              ref={designationRef}
              onKeyUp={designationFun}
              className="form-control input-focus"
              id="designation"
              placeholder="Designation"
              value={companyData.designation}
              onChange={(e) =>
                setCompanyData({ ...companyData, designation: e.target.value })
              }
              required
            />
            {designationErr ? (
              <p className="error-change">Designation can't be Blank</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="form-group col-md-6">
          <div className="pl-ten">
            <label className="label-heading" htmlFor="bemail">
              Business Email ID *
            </label>
            <input
              type="email"
              ref={businessEmailRef}
              onKeyUp={businessEmailFun}
              className="form-control input-focus"
              id="bemail"
              placeholder="Business Email"
              value={companyData.businessActivityEmail}
              onChange={(e) =>
                setCompanyData({
                  ...companyData,
                  businessActivityEmail: e.target.value,
                })
              }
              required
            />
            {businessEmailErr ? (
              <p className="error-change">Email can't be Blank</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
