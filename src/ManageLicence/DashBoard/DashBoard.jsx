import React from "react"
import "./DashBoard.scss"
import BreadCrum from "../../components/BreadCrum"
import useCustomData from "./useCustomData"
import TableScalaton from "../../common/Scalaton/TableScalaton"

const DashBoard = () => {

  // const url = `/companyServices/company/allCompany`;
  // const {allData: ApiData, error} = useCustomData(url);

  // console.log("all data", ApiData, error);

  return (
    <div>
      <BreadCrum />
      <div>
        <h2 className="heading-primary">DashBoard</h2>
        <TableScalaton />
      </div>
    </div>
  )
}

export default DashBoard
