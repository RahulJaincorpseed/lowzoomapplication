import React, { useEffect, useRef, useState } from "react"
import "./LoginForm.scss"
import { Link } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useDispatch, useSelector } from "react-redux"
import { SubmitEnquiry } from "../Redux/Actions/SignUpAction"
import InputErrorComponent from "./InputErrorComponent"
import InputFieldComponent from "./InputFieldComponent"
import { postQuery } from "../Api/PostQuery"
toast.configure()

const LoginForm = () => {
  const [enquiryData, setEnquiryData] = useState({
    fullName: "",
    mobile: "",
    companyName: "",
    designation: "",
  })
  const [fullNameErr, setFullNameErr] = useState(false)
  const [mobileErr, setMobileErr] = useState(false)
  const [companyNameErr, setCompanyNameErr] = useState(false)
  const [designationErr, setDesignationErr] = useState(false)
  const [loading, setLoading] = useState(false)

  const EnquiryData = useSelector((prev) => prev.SignUpReducer)
  const dispatch = useDispatch()

  console.log("enq data", EnquiryData)

  const fullNameRef = useRef()
  const designationRef = useRef()
  const mobileRef = useRef()
  const companyNameRef = useRef()
  let count = 0;
  const submitEnqData = (e) => {
      setEnquiryData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
      if (fullNameRef.current.value !== "") {
        fullNameRef.current.style.borderBottom = "1px solid rgba(51, 51, 51, 0.6)";
        setFullNameErr(false)
      }
      if (designationRef.current.value !== "") {
        designationRef.current.style.borderBottom = "1px solid rgba(51, 51, 51, 0.6)";
        setDesignationErr(false)
      }
      if (mobileRef.current.value !== "") {
        mobileRef.current.style.borderBottom = "1px solid rgba(51, 51, 51, 0.6)";
        setMobileErr(false)
      }
      if (companyNameRef.current.value !== "") {
        companyNameRef.current.style.borderBottom = "1px solid rgba(51, 51, 51, 0.6)";
        setCompanyNameErr(false)
      }
  }

  const SubmitEnquiryData = (e) => {
    e.preventDefault()
    const EnquiryDataFunction = async () => {
      if (fullNameRef.current.value === "") {
        fullNameRef.current.style.borderBottom = "1px solid red";
        setFullNameErr(true)
      }
      if (designationRef.current.value === "") {
        designationRef.current.style.borderBottom = "1px solid red";
        setDesignationErr(true)
      }
      if (mobileRef.current.value === "") {
        mobileRef.current.style.borderBottom = "1px solid red";
        setMobileErr(true)
      }
      if (companyNameRef.current.value === "") {
        companyNameRef.current.style.borderBottom = "1px solid red";
        setCompanyNameErr(true)
        return
      }
      setLoading(true)
      try {
        const EnquiryApi = await postQuery("/api/auth/createEnquiry", enquiryData)
        setFullNameErr(false)
        setMobileErr(false)
        setCompanyNameErr(false)
        setDesignationErr(false)
        setLoading(false)
        dispatch(SubmitEnquiry(EnquiryApi.data))
        toast.success("Data Submit Successfully")
        fullNameRef.current.value = ""
        designationRef.current.value = ""
        mobileRef.current.value = ""
        companyNameRef.current.value = ""
      } catch (err) {
        setFullNameErr(false)
        setMobileErr(false)
        setCompanyNameErr(false)
        setDesignationErr(false)
        console.log("Error in Enquiry Form ", err)
        setLoading(false)
        toast.error("Something Went Wrong")
      }
    }
    EnquiryDataFunction()
  }

  return (
    <div className="home-page-form">
      <form>
        <div className="input-box">
        
          <input
            className="input-field"
            ref={fullNameRef}
            type="text"
            placeholder="Full Name*"
            name="fullName"
            onChange={(e) => submitEnqData(e)}
          />
          {fullNameErr ? (
              <InputErrorComponent data="Name Can't be Blank" />
          ) : (
            ""
          )}
        </div>
        <div className="input-box">
          <input
            className="input-field"
            ref={designationRef}
            type="text"
            placeholder="Designation*"
            name="designation"
            onChange={(e) => submitEnqData(e)}
          />
          {designationErr ? (
             <InputErrorComponent data="designation Can't be Blank" />
          ) : (
            ""
          )}
        </div>
        <div className="input-box">
          <input
            className="input-field"
            ref={mobileRef}
            type="text"
            placeholder="Phone*"
            name="mobile"
            onChange={(e) => submitEnqData(e)}
          />
          {mobileErr ? (
            <InputErrorComponent data="mobile Can't be Blank" />
            // <p className="error-show">mobile Can't be Blank</p>
          ) : (
            ""
          )}
        </div>
        <div className="input-box">
          <input
            className="input-field"
            type="text"
            ref={companyNameRef}
            placeholder="Company Name*"
            name="companyName"
            onChange={(e) => submitEnqData(e)}
          />
          {companyNameErr ? (
              <InputErrorComponent data="company Name Can't be Blank" />
          ) : (
            ""
          )}
        </div>
        <button
          onClick={(e) => SubmitEnquiryData(e)}
          className="home-submit-btn"
        >
          {loading ? "Loading" : "Submit"}
        </button>
        <div className="register">
          <p className="register-text">
            By registering you have read and agree to the
          </p>
          <p className="register-text m-0">
            <Link className="color-dblue mr-1">Terms of Use</Link>&
            <Link className="color-dblue ml-1">Privacy Policy</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
