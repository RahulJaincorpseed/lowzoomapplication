import React, { useState } from "react"
import LoginHeader from "../components/LoginHeader"
import LoginFooter from "../components/LoginFooter"
import PersonalInfo from "./PersonalInfo"
import "./userInfo.scss"
import "rsuite/dist/rsuite.min.css"
import { Progress } from "rsuite"
import FormPartTwo from "./FormPartTwo"
import AddPeople from "./AddPeople"

const UserInfo = () => {
  const [step, setStep] = useState(1)

  // progress bar

  const [percent, setPercent] = useState(33)

  const status = percent === 100 ? "success" : null
  const color = percent === 100 ? "#2B62F9" : "#2B62F9"

  // progress

  // increase function
  const increaseFormStep = () => {
    setStep((prev) => prev + 1)
    if (step === 2) {
      setPercent((prev) => prev + 1)
    }
    setPercent((prev) => prev + 33)
  }

  // decrease function
  const decreaseFormStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1)
    }
    if (step === 3) {
      setPercent((prev) => prev - 1)
    }
    setPercent((prev) => prev - 33)
  }

  function renderSwitch(step) {
    switch (step) {
      case 1:
        return <PersonalInfo />
      case 2:
        return <FormPartTwo />
      case 3:
        return <AddPeople />
      default:
        return <h1>null</h1>
    }
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
            step === 2 ? "justify-content-between" : "justify-content-center"
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
          {step === 3 ? (
            ""
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



// b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
// QyNTUxOQAAACBnTRDIQ+hY1hKfae4uvMeQ9yCbMqOzdX/TwSemI2D6ywAAAJi0JwSwtCcE
// sAAAAAtzc2gtZWQyNTUxOQAAACBnTRDIQ+hY1hKfae4uvMeQ9yCbMqOzdX/TwSemI2D6yw
// AAAED/+4qEi0dcEfrxtryJV4RSlByd91emmCY5yDnJJgqOGGdNEMhD6FjWEp9p7i68x5D3
// IJsyo7N1f9PBJ6YjYPrLAAAAFHJhaHVsLmphaW5AZ21haWwuY29tAQ==