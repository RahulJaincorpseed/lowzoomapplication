import React, { useEffect, useState } from "react"
import "./LoginForm.scss"
import { Link } from "react-router-dom"
import axios from "axios";

const LoginForm = () => {

  const [enquiryData, setEnquiryData] = useState({
    fullName: "",
    mobile:"",
    companyName: "",
    designation: ""
  }); 

    const submitEnqData = (e) =>{
      setEnquiryData((prev)=> ({...prev, [e.target.name]: e.target.value}) )
    }

    console.log("data", enquiryData)


    const SubmitEnquiryData = (e) => {
      e.preventDefault();
      console.log("data submit")

      const EnquiryDataFunction = async () => {
        try{
          const EnquiryApi  = await axios.post("http://localhost:8080/api/createEnquiry", {enquiryData,
           } 
          );
          console.log("api data", EnquiryApi);
        }
        catch(err){
          console.log("Error in Enquiry Form ", err)
        }
      }
      EnquiryDataFunction();
    }



  return (
    <div className="home-page-form">
      <form>
        <div className="input-box">
          <input className="input-field" type="text" placeholder="Full Name" name="fullName" onChange={(e)=> submitEnqData(e)} />
        </div>
        <div className="input-box">
          <input className="input-field" type="text" placeholder="Designation" name="designation" onChange={(e)=> submitEnqData(e)} />
        </div>
        <div className="input-box">
          <input className="input-field" type="text" placeholder="Phone" name="mobile" onChange={(e)=> submitEnqData(e)} />
        </div>
        <div className="input-box">
          <input
            className="input-field"
            type="text"
            placeholder="Company Name"
            name="companyName"
            onChange={(e)=> submitEnqData(e)}
          />
        </div>
        <button onClick={(e) => SubmitEnquiryData(e)} className="home-submit-btn">Submit</button>
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
