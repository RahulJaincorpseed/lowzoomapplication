import React from "react";

const InputFieldComponent = () => {
  return (
    <input
    className="input-field"
    // ref={fullNameRef}
    type="text"
    placeholder="Full Name*"
    name="fullName"
    // onChange={(e) => submitEnqData(e)}
  />
  )
};

export default InputFieldComponent;
