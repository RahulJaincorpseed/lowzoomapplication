import React, { useId } from "react"

const BoxInputField = React.forwardRef(
  (
    {
      type = "",
      name = "",
      label = " ",
      placeholder = "",
      className = "",
      ...props
    },
    ref
  ) => {
    const id = useId()
    return (
      <>
        <label className="label-heading password-input" htmlFor={id}>
          {label}
        </label>
        <input
          className="password-input"
          type={type}
          id={id}
          name={name}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
      </>
    )
  }
)

export default BoxInputField
