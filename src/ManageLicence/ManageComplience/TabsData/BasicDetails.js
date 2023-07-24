import React from "react"
import "./BasicDetails.scss"

const BasicDetails = () => {
  return (
    <div className="basic-details-tab">
      <div>
        <h4 className="register-text">
          <i class="fa-solid fa-list-check mr-2"></i>Register and other records
          to be maintained by the contractor
        </h4>
      </div>
      <div className="detail-description">
        <p className="desc-text">Description</p>
        <textarea className="text-area-box"></textarea>
      </div>
    </div>
  )
}

export default BasicDetails
