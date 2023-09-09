import React, { useRef, useState } from "react"
import LoginHeader from "../components/LoginHeader"
import LoginFooter from "../components/LoginFooter"
import PersonalInfo from "./PersonalInfo"
import "./userInfo.scss"
import "rsuite/dist/rsuite.min.css"
import { Progress } from "rsuite"
import FormPartTwo from "./FormPartTwo"
import AddPeople from "./AddPeople"
import CompanyInfo from "./CompanyInfo"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { cityData, companyData2 } from "../TestData.js/CityData"

const UserInfo = () => {
  const [step, setStep] = useState(1)
  const [companyData, setCompanyData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    businessActivityEmail: "",
    companyType: "",
    companyName: "",
    companyCity: "",
    companyState: "",
    companyTurnover: "",
    locatedAt: "",
    businessActivity: "",
    permanentEmployee: "",
    contractEmployee: "",
    gstNumber: "",
    operationUnitAddress: "",
  })

  // Errors
  const [firstNameErr, setFirstNameErr] = useState(false)
  const [lastNameErr, setLastNameErr] = useState(false)
  const [designationErr, setDesignationErr] = useState(false)
  const [businessActivityEmailErr, setBusinessActivityEmailErr] =
    useState(false)

  // refs
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const designationRef = useRef()
  const businessActivityEmailRef = useRef()

  // data

  // data

  const currentUserToken = useSelector((state) => state)

  console.log("i am current user info token ", currentUserToken)

  // progress bar

  const [percent, setPercent] = useState(50)

  const status = percent === 100 ? "success" : null
  const color = percent === 100 ? "#2B62F9" : "#2B62F9"

  // progress

  const nameData = (e) => {
    setCompanyData((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  // increase function
  const increaseFormStep = () => {
    if (firstNameRef.current.value === "") {
      setFirstNameErr(true)
      return
    }
    if (lastNameRef.current.value === "") {
      setLastNameErr(true)
      return
    }
    if (designationRef.current.value === "") {
      setDesignationErr(true)
      return
    }
    if (businessActivityEmailRef.current.value === "") {
      setBusinessActivityEmailErr(true)
      return
    }

    setStep((prev) => prev + 1)
    setPercent((prev) => prev + 50)
  }

  // decrease function
  const decreaseFormStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1)
    }
    setPercent((prev) => prev - 50)
  }

  // function renderSwitch(step) {
  //   switch (step) {
  //     case 1:
  //       return (
  //         <PersonalInfo
  //           companyData={companyData}
  //           setCompanyData={setCompanyData}
  //         />
  //       )
  //     case 2:
  //       return (
  //         <FormPartTwo
  //           companyData={companyData}
  //           setCompanyData={setCompanyData}
  //         />
  //       )
  //     // case 3:
  //     //   return <AddPeople />
  //     // case 4:
  //     //   return <CompanyInfo />
  //     default:
  //       return <h1>null</h1>
  //   }
  // }

  const SubmitAllData = (e) => {
    e.preventDefault()
  }

  console.log("i am company data ",companyData)

  return (
    <div>
      <LoginHeader />
      <div className="manage-business py-2">
        {/* header [progress bae] */}
        <div className="container">
          <div className="progressbar">
            <div>
              <Progress.Line
                percent={percent}
                strokeColor={color}
                status={status}
              />
            </div>
          </div>
        </div>
        {/* end progress bar */}

        {/* personal Info */}
        {
          step === 1 ? (
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
                      ref={firstNameRef}
                      value={companyData.firstName}
                      name="firstName"
                      onChange = {(e)=> nameData(e)}
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
                      name="lastName"
                      onChange = {(e)=> nameData(e)}
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
                      className="form-control input-focus"
                      id="designation"
                      placeholder="Designation"
                      value={companyData.designation}
                      name="designation"
                      onChange = {(e)=> nameData(e)}
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
                      ref={businessActivityEmailRef}
                      className="form-control input-focus"
                      id="bemail"
                      placeholder="Business Email"
                      value={companyData.businessActivityEmail}
                      name="businessActivityEmail"
                      onChange = {(e)=> nameData(e)}
                      required
                    />
                    {businessActivityEmailErr ? (
                      <p className="error-change">Email can't be Blank</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // next data
            <div className="personal-info container">
              <h4 className="info-text">Ok, tell us Your business Activity</h4>
              <div className="first-form form-row">
                <div className="form-group col-md-6">
                  <div className="pr-ten">
                    <label className="label-heading" htmlFor="sel1">
                      Select Type of company*
                    </label>
                    <select
                      // value={companyData.companyType}
                      // onChange={(e) =>
                      //   setCompanyData({ ...companyData, companyType: e.target.value })
                      // }
                      className="form-control input-focus"
                      id="sel1"
                    >
                      {companyData2.map((company, index) => (
                        <option key={index} value={company}>
                          {company}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="pl-ten">
                    <label className="label-heading" htmlFor="companyName">
                      Company Name / CIN*
                    </label>
                    <input
                      type="text"
                      // ref={companyNameRef}
                      // onKeyUp={companyNameFun}
                      className="form-control input-focus"
                      id="companyName"
                      placeholder="Company Name"
                      // value={companyData.companyName}
                      // onChange={(e) =>
                      //   setCompanyData({ ...companyData, companyName: e.target.value })
                      // }
                      required
                    />
                    {/* {companyNameErr ? (
              <p className="error-change">company Name/CIN can't be Blank</p>
            ) : (
              ""
            )} */}
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="pr-ten">
                    <label className="label-heading" htmlFor="sel2">
                      City*
                    </label>
                    <select
                      // value={companyData.companyCity}
                      // onChange={(e) =>
                      //   setCompanyData({ ...companyData, companyCity: e.target.value })
                      // }
                      className="form-control input-focus"
                      id="sel2"
                    >
                      {cityData.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="pl-ten">
                    <label className="label-heading" htmlFor="sel3">
                      State*
                    </label>
                    <select
                      // value={companyData.companyState}
                      // onChange={(e) =>
                      //   setCompanyData({ ...companyData, companyState: e.target.value })
                      // }
                      className="form-control input-focus"
                      id="sel3"
                    >
                      {cityData.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="pr-ten">
                    <label className="label-heading" htmlFor="turnOver">
                      Company Turnover
                    </label>
                    <input
                      type="text"
                      // ref={turnOverRef}
                      // onKeyUp={turnOverFun}
                      className="form-control input-focus"
                      id="turnOver"
                      // value={companyData.companyTurnover}
                      // onChange={(e) =>
                      //   setCompanyData({
                      //     ...companyData,
                      //     companyTurnover: e.target.value,
                      //   })
                      // }
                      placeholder="Company Turnover"
                    />
                    {/* {turnOverErr ? (
              <p className="error-change">company Turnover can't be Blank</p>
            ) : (
              ""
            )} */}
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="pl-ten">
                    <label className="label-heading" htmlFor="sel4">
                      Located At*
                    </label>
                    <select
                      // value={companyData.locatedAt}
                      // onChange={(e) =>
                      //   setCompanyData({ ...companyData, locatedAt: e.target.value })
                      // }
                      className="form-control input-focus"
                      id="sel4"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="pr-ten">
                    <label className="label-heading" htmlFor="searchBusiness">
                      Search business Activity*
                    </label>
                    <input
                      type="text"
                      // ref={businessActivityRef}
                      // onKeyUp={businessActivityFun}
                      className="form-control input-focus"
                      id="searchBusiness"
                      placeholder="Search"
                      // value={companyData.businessActivity}
                      // onChange={(e) =>
                      //   setCompanyData({
                      //     ...companyData,
                      //     businessActivity: e.target.value,
                      //   })
                      // }
                      required
                    />
                    {/* {businessActivityErr ? (
              <p className="error-change">Business Activity can't be Blank</p>
            ) : (
              ""
            )} */}
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="pl-ten">
                    <label className="label-heading" htmlFor="pemp">
                      Permanant Employees in the company*
                    </label>
                    <input
                      type="text"
                      // ref={permanentEmployeesRef}
                      // onKeyUp={permanentEmployeesFun}
                      className="form-control input-focus"
                      id="pemp"
                      placeholder="Permanent Employee"
                      // value={companyData.permanentEmployee}
                      // onChange={(e) =>
                      //   setCompanyData({
                      //     ...companyData,
                      //     permanentEmployee: e.target.value,
                      //   })
                      // }
                      required
                    />
                    {/* {permanentEmployeesErr ? (
              <p className="error-change">Permanant Employees can't be Blank</p>
            ) : (
              ""
            )} */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group col-md-12  m-0 p-0 mb-3">
                    <div className="pr-ten">
                      <label className="label-heading" htmlFor="contractemp">
                        Contract employees in the company *
                      </label>
                      <input
                        type="text"
                        // ref={contactEmployeesRef}
                        // onKeyUp={contactEmployeesFun}
                        className="form-control input-focus"
                        id="contractemp"
                        placeholder="Contract Employee"
                        // value={companyData.contractEmployee}
                        // onChange={(e) =>
                        //   setCompanyData({
                        //     ...companyData,
                        //     contractEmployee: e.target.value,
                        //   })
                        // }
                        required
                      />
                      {/* {contactEmployeesErr ? (
                <p className="error-change">
                  Contract employees can't be Blank
                </p>
              ) : (
                ""
              )} */}
                    </div>
                  </div>
                  <div className="form-group col-md-12 m-0 p-0">
                    <div className="pr-ten">
                      <label className="label-heading" htmlFor="gstnumber">
                        GST Number*
                      </label>
                      <input
                        type="text"
                        // ref={gstNumberRef}
                        // onKeyUp={gstNumberFun}
                        // value={companyData.gstNumber}
                        // onChange={(e) =>
                        //   setCompanyData({ ...companyData, gstNumber: e.target.value })
                        // }
                        className="form-control input-focus"
                        id="gstnumber"
                        placeholder="GST Number"
                        required
                      />
                      {/* {gstNumberErr ? (
                <p className="error-change">GST Number can't be Blank</p>
              ) : (
                ""
              )} */}
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-6 text-area-box">
                  <div className="pl-ten d-flex flex-column">
                    <label className="label-heading" htmlFor="opunit">
                      Operating Unit address*
                    </label>
                    <textarea
                      className="form-group input-focus text-a-size w-100"
                      // ref={operatingUnitRef}
                      // onKeyUp={operatingUnitFun}
                      id="opunit"
                      name="w3review"
                      rows="4"
                      cols="50"
                      placeholder="Enter here..."
                      // value={companyData.operationUnitAddress}
                      // onChange={(e) =>
                      //   setCompanyData({
                      //     ...companyData,
                      //     operationUnitAddress: e.target.value,
                      //   })
                      // }
                      required
                    ></textarea>
                    {/* {operatingUnitErr ? (
              <p className="error-change">
                {" "}
                Operating Unit address can't be Blank
              </p>
            ) : (
              ""
            )} */}
                  </div>
                </div>
              </div>
            </div>
          )
          // next data
        }

        {/* personal Info */}

        {/* {renderSwitch(step)} */}
        <div
          className={`btns-box container ${
            step === 1 ? "justify-content-center" : "justify-content-between"
          }`}
        >
          {step === 1 ? (
            ""
          ) : (
            <button
              className="form-next-btn first-button"
              onClick={() => decreaseFormStep()}
            >
              Back
            </button>
          )}
          {step === 2 ? (
            <Link to="/">
              <button
                className="form-next-btn first-button"
                onClick={(e) => SubmitAllData(e)}
              >
                Submit
              </button>
            </Link>
          ) : (
            <button
              className="first-button form-prev-btn"
              onClick={() => increaseFormStep()}
            >
              next
            </button>
          )}
        </div>
      </div>
      <LoginFooter />
    </div>
  )
}

export default UserInfo
