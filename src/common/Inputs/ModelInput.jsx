import React, { useId } from "react"
import InputErrorComponent from "../../components/InputErrorComponent"

const ModelInput = React.forwardRef(
  (
    {
      type = "",
      label = " ",
      placeholder = "",
      className = "",
      left,
      err,
      errData,
      ...props
    },
    ref
  ) => {
    const id = useId()
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
            ref={ref}
            placeholder={placeholder}
            {...props}
          />
        </div>
        {err && <InputErrorComponent data={errData} />}
      </div>
    )
  }
)

export default ModelInput
