import React, { useEffect, useRef, useState } from "react"
import "./LoginForm.scss"
import { Link } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()

const LoginForm = () => {
  const [enquiryData, setEnquiryData] = useState({
    fullName: "",
    mobile: "",
    companyName: "",
    designation: "",
  })
  const [enqError, setEnqError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fullNameRef = useRef()
  const designationRef = useRef()
  const mobileRef = useRef()
  const companyNameRef = useRef()

  const submitEnqData = (e) => {
    setEnquiryData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const SubmitEnquiryData = (e) => {
    e.preventDefault()
    const EnquiryDataFunction = async () => {
      if (
        fullNameRef.current.value === "" ||
        designationRef.current.value === "" ||
        mobileRef.current.value === "" ||
        companyNameRef.current.value === ""
      ) {
        setEnqError(true)
        return
      }
      setLoading(true)

      try {
        const EnquiryApi = await axios.post("/creaeEnquiry", {
          ...enquiryData,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        setEnqError(false)
        console.log("api data", EnquiryApi.data)
        setLoading(false)

        toast.success("Data Submit Successfully")

        fullNameRef.current.value = ""
        designationRef.current.value = ""
        mobileRef.current.value = ""
        companyNameRef.current.value = ""
      } catch (err) {
        setEnqError(false)
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
        </div>
        {enqError ? (
          <p className="text-danger">Please Fill All Mandatory field</p>
        ) : (
          ""
        )}
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
