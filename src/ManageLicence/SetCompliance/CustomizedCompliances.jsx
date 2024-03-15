import React, { useState } from "react"
import AddNewComplienceModel from "../../common/Model/AddNewComplienceModel"
import AccordianTable from "../../components/AccordianTable"
import "./CustomizedCompliences.scss"
import { Link, useParams } from "react-router-dom"
import { useCustomRoute } from "../../Hooks/GetCustomRoute"
import TableScalaton from "../../common/Scalaton/TableScalaton"
import CompliancesTable from "../../Tables/CompliancesTable"

const CustomizedCompliances = () => {
  const [collpaseState, setCollapseState] = useState(false)

  const { companyid, userId, businessUnitId } = useParams()

  const columns = [
    { field: "id", headerName: "id", width: 60 },
    { field: "name", headerName: "Compliance Name", width: 150, renderCell: (props) => {
     return ( <Link to={`complience/${props?.row?.id}`}>
      {props?.row?.name}
    </Link>
     )
     } },

    { field: "description", headerName: "Description", width: 150 },
    {
      field: "createdAt",
      headerName: "Created Date",
      width: 150,
      renderCell: (props) => {
        ;<p className="mb-0">
          {new Date(props?.createdAt).toLocaleDateString()}
        </p>
      },
    },
    {
      field: "startDate",
      headerName: "Start Date",
      width: 150,
      renderCell: (props) => {
        <p className="mb-0">{props?.startDate}</p>
      },
    },
    {
      field: "completedDate",
      headerName: "End Date",
      width: 150,
      renderCell: (props) => {
        ;<p className="mb-0">{props?.completedDate}</p>
      },
    },
  ]

  const allcomplienceUrl = `/compliance/company/showAllCompliance?companyId=${companyid}&businessId=${businessUnitId}`
  const allComplienceDep = []

  const { productData: allComplience, loading: complienceLoading } =
    useCustomRoute(allcomplienceUrl, allComplienceDep)

  return (
    <div>
      <h2 className="heading-primary">Customized Compliances</h2>
      <div className="add-new-company mb-3">
        <AddNewComplienceModel />
      </div>
      <h2 className="heading-primary text-center">
        Mandatory Licence and permission
      </h2>
      
      <div className="mt-3">
        <CompliancesTable rows={allComplience} columns={columns} />
      </div>
    </div>
  )
}

export default CustomizedCompliances
