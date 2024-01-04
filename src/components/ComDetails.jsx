import React from "react"
import "./ComDetails.scss"

const ComDetails = (props) => {
  return (
    <>
      <div className="col-lg-6">
        <div className="brand-collect">
          <div className="col-lg-5 pr-0 padding-zero">
            <h2 className="brand-entity">{props.name ? props.name : "NA"}</h2>
          </div>
          <div className="col-lg-7 pl-0">
            <h3 className="brand-value">{props.value ? props.value : "NA"}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComDetails
