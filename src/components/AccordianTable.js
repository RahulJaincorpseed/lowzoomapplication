import React, { useState } from "react"
import "./AccordianTable.scss"
import AddNewTaskModel from "../common/Model/AddNewTaskModel"
import { Link, useParams } from "react-router-dom"
import { useCustomRoute } from "../Hooks/GetCustomRoute"

const AccordianTable = () => {
  const [collpaseState, setCollapseState] = useState(false)

  const { companyid, userId, businessUnitId } = useParams()

  const allcomplienceUrl = `/compliance/company/showAllCompliance?companyId=${companyid}&businessId=${businessUnitId}`
  const allComplienceDep = []

  const { productData: allComplience, loading: complienceLoading } =
    useCustomRoute(allcomplienceUrl, allComplienceDep)

  console.log("all compliences data", allComplience)

  return (
    <div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="border-one">
              <th>S. No.</th>
              <th>Name</th>
              <th>Description</th>
              <th>Applied</th>
              <th>Already Done</th>
              <th>Not Applicable</th>
            </tr>
          </thead>
          <tbody>
            {complienceLoading ? (
              <tr>
                <td>Loading...</td>
              </tr>
            ) : (
              allComplience.map((complience, index) => (
                <tr key={index} className="border-one">
                  <td>{complience?.id}</td>
                  <td>
                    <Link to={`complience/${complience?.id}`}>{complience?.name}</Link>
                  </td>
                  <td>{complience?.description}</td>
                  <td>Applied</td>
                  <td>Already Done</td>
                  <td>Not Applicable</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AccordianTable
