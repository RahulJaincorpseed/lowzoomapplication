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
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()

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
    companyRegistrationNumber: "",
    companyRegistrationDate: "",
    companyRemarks: "",
  })

  // Errors
  const [firstNameErr, setFirstNameErr] = useState(false)
  const [lastNameErr, setLastNameErr] = useState(false)
  const [designationErr, setDesignationErr] = useState(false)
  const [businessActivityEmailErr, setBusinessActivityEmailErr] =
    useState(false)
  const [companyTypeErr, setCompanyTypeErr] = useState(false)

  const [companyNameErr, setCompanyNameErr] = useState(false)
  const [companyCityErr, setCompanyCityErr] = useState(false)
  const [companyStateErr, setCompanyStateErr] = useState(false)
  const [companyTurnoverErr, setCompanyTurnoverErr] = useState(false)
  const [locatedAtErr, setLocatedAtErr] = useState(false)
  const [businessActivityErr, setBusinessActivityErr] = useState(false)
  const [permanentEmployeeErr, setPermanentEmployeeErr] = useState(false)
  const [contractEmployeeErr, setContractEmployeeErr] = useState(false)
  const [gstNumberErr, setGstNumberErr] = useState(false)
  const [operationUnitAddressErr, setOperationUnitAddressErr] = useState(false)
  const [companyRegistrationNumberErr, setCompanyRegistrationNumberErr] =
    useState(false)
  const [companyRegistrationDateErr, setCompanyRegistrationDateErr] =
    useState(false)
  const [companyRemarksErr, setCompanyRemarksErr] = useState(false)
  const [companyPincodeErr, setCompanyPincodeErr] = useState(false)
 
  // refs
  const firstNameRef = React.createRef();
  const lastNameRef = React.createRef();
  const designationRef = React.createRef();
  const businessActivityEmailRef = React.createRef();
  const companyTypeRef = React.createRef();
  const companyNameRef =  React.createRef();
  const companyCityRef = React.createRef();

  const companyStateRef =  React.createRef();
  const companyTurnoverRef =  React.createRef();
  const locatedAtRef =  React.createRef();
  const businessActivityRef =  React.createRef();
  const permanentEmployeeRef = React.createRef();
  const contractEmployeeRef = React.createRef();
  const gstNumberRef =  React.createRef();
  const operationUnitAddressRef =  React.createRef();
  const companyRegistrationNumberRef =  React.createRef();
  const companyRegistrationDateRef =  React.createRef();
  const companyRemarksRef = React.createRef();
  const companyPincodeRef =  React.createRef();

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
    setCompanyData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    console.log("company data")
  }

  // increase function
  const increaseFormStep = () => {
    if (firstNameRef.current.value === "") {
      setFirstNameErr(true)
      firstNameRef.current.style.border = "1px solid #DC3545"
    }
    if (lastNameRef.current.value === "") {
      setLastNameErr(true)
      lastNameRef.current.style.border = "1px solid #DC3545"
    }
    if (designationRef.current.value === "") {
      setDesignationErr(true)
      designationRef.current.style.border = "1px solid #DC3545"
    }
    if (businessActivityEmailRef.current.value === "") {
      setBusinessActivityEmailErr(true)
      businessActivityEmailRef.current.style.border = "1px solid #DC3545"
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
React.createRef();
  const SubmitAllData = (e) => {
    e.preventDefault()
    console.log("value is ", companyTypeRef.current.value)
    if (companyData.companyType === "") {
      setCompanyTypeErr(true)
      companyTypeRef.current.style.border = "1px solid #DC3545"
    }

     if (companyNameRef.current.value === "") {
      setCompanyNameErr(true)
      companyNameRef.current.style.border = "1px solid #DC3545"
    }

    if (companyData.companyCity === "") {
      setCompanyCityErr(true)
      companyCityRef.current.style.border = "1px solid #DC3545"
    }
    
    if (companyData.companyState === "") {
      setCompanyStateErr(true)
      companyStateRef.current.style.border = "1px solid #DC3545"
    }

    if (companyTurnoverRef.current.value === "") {
      setCompanyTurnoverErr(true)
      companyTurnoverRef.current.style.border = "1px solid #DC3545"
    }
    
    
    if (companyData.locatedAt === "") {
      setLocatedAtErr(true)
      locatedAtRef.current.style.border = "1px solid #DC3545"
    }

    if (businessActivityRef.current.value === "") {
      setBusinessActivityErr(true)
      businessActivityRef.current.style.border = "1px solid #DC3545"
    }

    if (permanentEmployeeRef.current.value === "") {
      setPermanentEmployeeErr(true)
      permanentEmployeeRef.current.style.border = "1px solid #DC3545"
    }

    if (companyRegistrationNumberRef.current.value === "") {
      setCompanyRegistrationNumberErr(true)
      companyRegistrationNumberRef.current.style.border = "1px solid #DC3545"
    }

    
    if (companyPincodeRef.current.value === "") {
      setCompanyPincodeErr(true)
      companyPincodeRef.current.style.border = "1px solid #DC3545"
    }

    if (companyRemarksRef.current.value === "") {
      setCompanyRemarksErr(true)
      companyRemarksRef.current.style.border = "1px solid #DC3545"
    }

    if (gstNumberRef.current.value === "") {
      setGstNumberErr(true)
      gstNumberRef.current.style.border = "1px solid #DC3545"
    }

    if (operationUnitAddressRef.current.value === "") {
      setOperationUnitAddressErr(true)
      operationUnitAddressRef.current.style.border = "1px solid #DC3545"
    }

    if (contractEmployeeRef.current.value === "") {
      setContractEmployeeErr(true)
      contractEmployeeRef.current.style.border = "1px solid #DC3545"
    }



    const createCompanyData = async () => {
      try {
        const companysubmitData = await axios.post(`/company`, {
          ...companyData,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        console.log("all company data api", companysubmitData.data)
      } catch (err) {
        if(err.response.data)
        if(err.response.status === 500){
          console.log(err.response.statusText)
          toast.error(err.response.statusText)
        }
        console.log("response data",  err.response.status)
      }
      // console.log("submit data")
    }
    createCompanyData()
  }

  // if (companyTypeRef.current.value === "") {
  //   setCompanyTypeErr(true)
  //   return
  // }

  console.log("i am company data ", companyData)

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
                      placeholder="Enter First Name"
                      ref={firstNameRef}
                      value={companyData.firstName || ""}
                      name="firstName"
                      onChange={(e) => nameData(e)}
                      required
                    />
                    {firstNameErr ? (
                      <p className="error-show">First Name can 't be Blank</p>
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
                      placeholder="Enter last Name"
                      value={companyData.lastName || ""}
                      name="lastName"
                      onChange={(e) => nameData(e)}
                      required
                    />
                    {lastNameErr ? (
                      <p className="error-show">Last Name can't be Blank</p>
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
                      placeholder="Enter Designation"
                      value={companyData.designation || ""}
                      name="designation"
                      onChange={(e) => nameData(e)}
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
                      placeholder="Enter Business Email"
                      value={companyData.businessActivityEmail || ""}
                      name="businessActivityEmail"
                      onChange={(e) => nameData(e)}
                      required
                    />
                    {businessActivityEmailErr ? (
                      <p className="error-show">Email can't be Blank</p>
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
                      ref={companyTypeRef}
                      value={companyData.companyType || ""}
                      name="companyType"
                      onChange={(e) => nameData(e)}
                      className="form-control input-focus"
                      id="sel1"
                    >
                      {companyData2.map((company, index) => (
                        <option key={index} value={company}>
                          {company}
                        </option>
                      ))}
                    </select>
                    {companyTypeErr ? (
                      <p className="error-show">
                        company Type/CIN can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
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
                      className="form-control input-focus"
                      id="companyName"
                      placeholder="Company Name"
                      value={companyData.companyName || ""}
                      name="companyName"
                      ref={companyNameRef}
                      onChange={(e) => nameData(e)}
                      required
                    />
                    {companyNameErr ? (
                      <p className="error-change">
                        company Name/CIN can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="pr-ten">
                    <label className="label-heading" htmlFor="sel2">
                      City*
                    </label>
                    <select
                      value={companyData.companyCity || ""}
                      name="companyCity"
                      onChange={(e) => nameData(e)}
                      className="form-control input-focus"
                      ref={companyCityRef}
                      id="sel2"
                    >
                      {cityData.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {companyCityErr ? (
                      <p className="error-show">company City can't be Blank</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="pl-ten">
                    <label className="label-heading" htmlFor="sel3">
                      State*
                    </label>
                    <select
                      value={companyData.companyState || ""}
                      name="companyState"
                      ref={companyStateRef}
                      onChange={(e) => nameData(e)}
                      className="form-control input-focus"
                      id="sel3"
                    >
                      {cityData.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {companyStateErr ? (
                      <p className="error-show">
                        company state can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
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
                      className="form-control input-focus"
                      id="turnOver"
                      value={companyData.companyTurnover || ""}
                      name="companyTurnover"
                      onChange={(e) => nameData(e)}
                      ref={companyTurnoverRef}
                      placeholder="Company Turnover"
                    />
                     {companyTurnoverErr ? (
                      <p className="error-show">
                       company Turnover can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="pl-ten">
                    <label className="label-heading" htmlFor="sel4">
                      Located At*
                    </label>
                    <select
                      value={companyData.locatedAt || ""}
                      name="locatedAt"
                      ref={locatedAtRef}
                      onChange={(e) => nameData(e)}
                      className="form-control input-focus"
                      id="sel4"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    {locatedAtErr ? (
                      <p className="error-show">
                      Located at can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="pr-ten">
                    <label className="label-heading" htmlFor="searchBusiness">
                      Search business Activity*
                    </label>
                    <input
                      type="text"
                      value={companyData.businessActivity || ""}
                      name="businessActivity"
                      onChange={(e) => nameData(e)}
                      className="form-control input-focus"
                      id="searchBusiness"
                      placeholder="Search"
                      ref={businessActivityRef}
                      required
                    />
                    {businessActivityErr ? (
                      <p className="error-show">
                      Business Activity can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="pl-ten">
                    <label className="label-heading" htmlFor="pemp">
                      Permanant Employees in the company*
                    </label>
                    <input
                      type="text"
                      className="form-control input-focus"
                      id="pemp"
                      placeholder="Permanent Employee"
                      value={companyData.permanentEmployee || ""}
                      name="permanentEmployee"
                      onChange={(e) => nameData(e)}
                      ref={permanentEmployeeRef}
                      required
                    />
                   {permanentEmployeeErr ? (
                      <p className="error-show">
                      Permanent Employee can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {/* registation number  */}

                <div className="form-group col-md-6">
                  <div className="pr-ten">
                    <label className="label-heading" htmlFor="pemp1">
                      company Registration Number*
                    </label>
                    <input
                      type="text"
                      className="form-control input-focus"
                      id="pemp1"
                      placeholder="company Registration Number"
                      value={companyData.companyRegistrationNumber || ""}
                      name="companyRegistrationNumber"
                      onChange={(e) => nameData(e)}
                      ref={companyRegistrationNumberRef}
                      required
                    />
                     {companyRegistrationNumberErr ? (
                      <p className="error-show">
                      company Registration Number can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <div className="pl-ten">
                    <label className="label-heading" htmlFor="regisNum">
                      Company Pincode*
                    </label>
                    <input
                      type="text"
                      className="form-control input-focus"
                      id="regisNum"
                      placeholder="company Registration Number"
                      value={companyData.companyPinCode || ""}
                      name="companyPinCode"
                      onChange={(e) => nameData(e)}
                      ref={companyPincodeRef}
                      required
                    />
                     {companyPincodeErr ? (
                      <p className="error-show">
                      company pincode Number can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <div className="pr-ten">
                    <label className="label-heading" htmlFor="regisDate">
                      Company Registraion Date*
                    </label>
                    <input
                      type="date"
                      className="form-control input-focus"
                      id="regisDate"
                      placeholder="company Registration Date"
                      value={companyData.companyRegistrationDate || ""}
                      name="companyRegistrationDate"
                      onChange={(e) => nameData(e)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <div className="pl-ten">
                    <label className="label-heading" htmlFor="Signature">
                      Signature*
                    </label>
                    <input
                      type="text"
                      className="form-control input-focus"
                      id="Signature"
                      placeholder="Signature"
                      value={companyData.companyRemarks || ""}
                      name="companyRemarks"
                      onChange={(e) => nameData(e)}
                      ref={companyRemarksRef}
                      required
                    />
                     {companyRemarksErr ? (
                      <p className="error-show">
                      Signature can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {/* end */}

                <div className="col-md-6">
                  <div className="form-group col-md-12  m-0 p-0 mb-3">
                    <div className="pr-ten">
                      <label className="label-heading" htmlFor="contractemp">
                        Contract employees in the company *
                      </label>
                      <input
                        type="text"
                        className="form-control input-focus"
                        id="contractemp"
                        placeholder="Contract Employee"
                        value={companyData.contractEmployee || ""}
                        name="contractEmployee"
                        onChange={(e) => nameData(e)}
                        ref={contractEmployeeRef}
                        required
                      />
                      {contractEmployeeErr ? (
                      <p className="error-show">
                       Contract employees can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
                    </div>
                  </div>
                  <div className="form-group col-md-12 m-0 p-0">
                    <div className="pr-ten">
                      <label className="label-heading" htmlFor="gstnumber">
                        GST Number*
                      </label>
                      <input
                        type="text"
                        className="form-control input-focus"
                        id="gstnumber"
                        placeholder="GST Number"
                        value={companyData.gstNumber || ""}
                        name="gstNumber"
                        ref={gstNumberRef}
                        onChange={(e) => nameData(e)}
                        required
                      />
                    {gstNumberErr ? (
                      <p className="error-show">
                      GST Number can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
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
                  
                      id="opunit"
                      rows="4"
                      cols="50"
                      placeholder="Enter here..."
                      value={companyData.operationUnitAddress || ""}
                      name="operationUnitAddress"
                      onChange={(e) => nameData(e)}
                      ref={operationUnitAddressRef}
                      required
                    ></textarea>
                    {operationUnitAddressErr ? (
                      <p className="error-show">
                      Operation Unit address can't be Blank
                      </p>
                    ) : (
                      ""
                    )}
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
