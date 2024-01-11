import React, { useState } from "react"
import "./AccordianTable.scss"
import AddNewTaskModel from "../common/Model/AddNewTaskModel"
import { Link, useParams } from "react-router-dom"
import { useCustomRoute } from "../Hooks/GetCustomRoute"
import TableScalaton from "../common/Scalaton/TableScalaton"

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
              <th>Created date</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {complienceLoading ? (
              <tr>
                <td><TableScalaton /></td>
              </tr>
            ) : (
              allComplience.map((complience, index) => (
                <tr key={index} className="border-one">
                  <td>{complience?.id}</td>
                  <td>
                    <Link to={`complience/${complience?.id}`}>{complience?.name}</Link>
                  </td>
                  <td>{`${complience?.description.slice(0,30)}...`}</td>
                  <td>{new Date(complience?.createdAt).toLocaleDateString()}</td>
                  <td>{complience?.startDate}</td>
                  <td>{complience?.completedDate}</td>
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
