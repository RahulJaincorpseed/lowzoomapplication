import React, { useId } from "react"

const ModelDropDownInput = React.forwardRef(
  ({label, data, className = "", ...props }) => {
    console.log("i am", data)
    const id = useId();
    return (
      <div className="form-group col-md-6">
        <div className="pl-ten">
          {label && (
            <label className="label-heading" htmlFor={id}>
              {label}
            </label>
          )}
          <select
            className="form-control input-focus"
            name="priority"
            id={id}
            {...props}
          >
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
