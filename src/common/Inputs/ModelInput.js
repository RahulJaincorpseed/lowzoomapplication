import React, { useId } from "react"

const ModelInput = React.forwardRef(
  ({
    type = "",
    label = " ",
    placeholder = "",
    className = "",
    left,
    ...props
  }) => {
    const id = useId();
    return (
      <div className="form-group col-md-6">
        <div className={left ? "pl-ten" : "pr-ten"}>
          {label && (
            <label className="label-heading" htmlFor={id}>
              {label}
            </label>
          )}
          <input
            type={type}
            className="form-control input-focus"
            id={id}
            placeholder={placeholder}
            {...props}
          />
        </div>
      </div>
    )
  }
)

export default ModelInput
