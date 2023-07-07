import React, { useState } from "react"
import LoginHeader from "../components/LoginHeader"
import LoginFooter from "../components/LoginFooter"
import PersonalInfo from "./PersonalInfo"
import "./userInfo.scss"

const UserInfo = () => {
  const [step, setStep] = useState(1)

  // increase function
  const increaseFormStep = () => {
    setStep((prev) => prev + 1)
  }

  // decrease function
  const decreaseFormStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1)
    }
  }

  function renderSwitch(step) {
    switch (step) {
      case 1:
        return <PersonalInfo />
      case 2:
        return <h1>second</h1>
      case 3:
        return <h1>Third</h1>
      default:
        return <h1>null</h1>
    }
  }

  console.log("step", step)
  return (
    <div>
      <LoginHeader />
      {renderSwitch(step)}
      {step === 1 ? (
        ""
      ) : (
        <button onClick={() => decreaseFormStep()}>previous</button>
      )}
      {step === 3 ? (
        ""
      ) : (
        <button onClick={() => increaseFormStep()}>next</button>
      )}
      <LoginFooter />
    </div>
  )
}

export default UserInfo
