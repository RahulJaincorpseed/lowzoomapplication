import React, { useState } from "react"
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


const UserInfo = () => {
  const [step, setStep] = useState(1)

  const currentUserToken = useSelector((state) => state)

  console.log("i am current user info token " , currentUserToken);


  // progress bar

  const [percent, setPercent] = useState(25)

  const status = percent === 100 ? "success" : null
  const color = percent === 100 ? "#2B62F9" : "#2B62F9"

  // progress

  // increase function
  const increaseFormStep = () => {
    setStep((prev) => prev + 1)
    setPercent((prev) => prev + 25)
  }

  // decrease function
  const decreaseFormStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1)
    }
    setPercent((prev) => prev - 25)
  }

  function renderSwitch(step) {
    switch (step) {
      case 1:
        return <PersonalInfo />
      case 2:
        return <FormPartTwo />
      case 3:
        return <AddPeople />
      case 4:
        return <CompanyInfo />
      default:
        return <h1>null</h1>
    }
  }


  const SubmitAllData = (e) =>{
    e.preventDefault();


  }



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
        {renderSwitch(step)}
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
          {step === 4 ? (
            <Link to="/">
              <button className="form-next-btn first-button" onClick={(e) => SubmitAllData(e)}>Submit</button>
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
