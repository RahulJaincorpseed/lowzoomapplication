import React, { useId } from "react"

const ModelDropDownInput = React.forwardRef(
  ({ label, name, left, data, className = "", ...props }, ref) => {
    const id = useId()
    return (
      <div className="form-group col-md-6">
        <div className={left ? "pr-ten" : "pl-ten"}>
          {label && (
            <label className="label-heading" htmlFor={id}>
              {label}
            </label>
          )}
          <select
            className="form-control input-focus"
            name={name}
            id={id}
            ref={ref}
            {...props}
          >
            <option>Please Select</option>
            {data?.map((d, index) => (
              <option key={index} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
)

export default ModelDropDownInput
