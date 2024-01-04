import React from "react"
import AddNewComplienceModel from "../../common/Model/AddNewComplienceModel"
import AccordianTable from "../../components/AccordianTable"
import "./CustomizedCompliences.scss"

const CustomizedCompliances = () => {
  return (
    <div>
      <h2 className="heading-primary">Customized Compliances</h2>
      <div className="add-new-company mb-3">
        <AddNewComplienceModel />
      </div>
      <h2 className="heading-primary text-center">
        Mandatory Licence and permission
      </h2>
      <div className="complience-table">
        <AccordianTable />
      </div>
    </div>
  )
}

export default CustomizedCompliances
