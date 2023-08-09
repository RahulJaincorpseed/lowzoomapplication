import React, { useRef, useState } from "react"
import "./userInfo.scss"
import { cityData, companyData } from "../TestData.js/CityData"

const FormPartTwo = () => {
  const [companyNameErr, setCompanyNameErr] = useState(false)
  const [turnOverErr, setTurnOverErr] = useState(false)
  const [businessActivityErr, setBusinessActivityErr] = useState(false)
  const [permanentEmployeesErr, setPermanentEmployeesErr] = useState(false)
  const [contactEmployeesErr, setContactEmployeesErr] = useState(false)
  const [gstNumberErr, setGstNumberErr] = useState(false)
  const [operatingUnitErr, setOperatingUnitErr] = useState(false)


  const companyNameRef = useRef()
  const turnOverRef = useRef()
  const businessActivityRef = useRef()
  const permanentEmployeesRef = useRef()
  const contactEmployeesRef = useRef()
  const gstNumberRef = useRef()
  const operatingUnitRef = useRef()


  const companyNameFun = () => {
    if (companyNameRef.current.value.length === 0) {
      setTimeout(() => {
        setCompanyNameErr(true)
      }, 1000)
    }
    if (companyNameRef.current.value.length >= 1) {
      setCompanyNameErr(false)
    }
  }

  const turnOverFun = () => {
    if (turnOverRef.current.value.length === 0) {
      setTimeout(() => {
        setTurnOverErr(true)
      }, 1000)
    }
    if (turnOverRef.current.value.length >= 1) {
      setTurnOverErr(false)
    }
  }

  const businessActivityFun = () => {
    if (businessActivityRef.current.value.length === 0) {
      setTimeout(() => {
        setBusinessActivityErr(true)
      }, 1000)
    }
    if (businessActivityRef.current.value.length >= 1) {
      setBusinessActivityErr(false)
    }
  }

  const permanentEmployeesFun = () => {
    if (permanentEmployeesRef.current.value.length === 0) {
      setTimeout(() => {
        setPermanentEmployeesErr(true)
      }, 1000)
    }
    if (permanentEmployeesRef.current.value.length >= 1) {
      setPermanentEmployeesErr(false)
    }
  }

  const contactEmployeesFun = () => {
    if (contactEmployeesRef.current.value.length === 0) {
      setTimeout(() => {
        setContactEmployeesErr(true)
      }, 1000)
    }
    if (contactEmployeesRef.current.value.length >= 1) {
      setContactEmployeesErr(false)
    }
  }

  
  const gstNumberFun = () => {
    if (gstNumberRef.current.value.length === 0) {
      setTimeout(() => {
        setGstNumberErr(true)
      }, 1000)
    }
    if (gstNumberRef.current.value.length >= 1) {
      setGstNumberErr(false)
    }
  }

  
  const operatingUnitFun = () => {
    if (operatingUnitRef.current.value.length === 0) {
      setTimeout(() => {
        setOperatingUnitErr(true)
      }, 1000)
    }
    if (operatingUnitRef.current.value.length >= 1) {
      setOperatingUnitErr(false)
    }
  }



  return (
    <div className="personal-info container">
      <h4 className="info-text">Ok, tell us Your business Activity</h4>
      <div className="first-form form-row">
        <div className="form-group col-md-6">
          <div className="pr-ten">
            <label className="label-heading" htmlFor="sel1">
              Select Type of company*
            </label>
            <select className="form-control input-focus" id="sel1">
              {companyData.map((company, index) => (
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
              ref={companyNameRef}
              onKeyUp={companyNameFun}
              className="form-control input-focus"
              id="companyName"
              placeholder="Company Name"
              required
            />
            {companyNameErr ? (
              <p className="error-change">company Name/CIN can't be Blank</p>
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
            <select className="form-control input-focus" id="sel2">
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
            <select className="form-control input-focus" id="sel3">
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
              ref={turnOverRef}
              onKeyUp={turnOverFun}
              className="form-control input-focus"
              id="turnOver"
              placeholder="Company Turnover"
            />
            {turnOverErr ? (
              <p className="error-change">company Turnover can't be Blank</p>
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
            <select className="form-control input-focus" id="sel4">
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
              ref={businessActivityRef}
              onKeyUp={businessActivityFun}
              className="form-control input-focus"
              id="searchBusiness"
              placeholder="Search"
              required
            />
            {businessActivityErr ? (
              <p className="error-change">Business Activity can't be Blank</p>
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
              ref={permanentEmployeesRef}
              onKeyUp={permanentEmployeesFun}
              className="form-control input-focus"
              id="pemp"
              placeholder="Permanent Employee"
              required
            />
            {permanentEmployeesErr ? (
              <p className="error-change">Permanant Employees can't be Blank</p>
            ) : (
              ""
            )}
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
                ref={contactEmployeesRef}
                onKeyUp={contactEmployeesFun}
             
                className="form-control input-focus"
                id="contractemp"
                placeholder="Contract Employee"
                required
              />
                    {contactEmployeesErr ? (
              <p className="error-change">Contract employees can't be Blank</p>
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
                ref={gstNumberRef}
                onKeyUp={gstNumberFun}
             
                className="form-control input-focus"
                id="gstnumber"
                placeholder="GST Number"
                required
              />
                        {gstNumberErr ? (
              <p className="error-change">GST Number can't be Blank</p>
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
              ref={operatingUnitRef}
              onKeyUp={operatingUnitFun}
              id="opunit"
              name="w3review"
              rows="4"
              cols="50"
              placeholder="Enter here..."
              required
            ></textarea>
                          {operatingUnitErr ? (
              <p className="error-change"> Operating Unit address can't be Blank</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormPartTwo
