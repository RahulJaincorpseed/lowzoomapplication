import React, { Suspense, useEffect, useState } from "react"
import BreadCrum from "../../components/BreadCrum"
import "./SetComplience.scss"
import AddNewComplienceModel from "../../common/Model/AddNewComplienceModel"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getQuery } from "../../Api/getQuery"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useCustomRoute } from "../../Hooks/GetCustomRoute"
import TableScalaton from "../../common/Scalaton/TableScalaton"
toast.configure()

const CompliancesTable = React.lazy(() =>
  import("../../Tables/CompliancesTable")
)

const SetCompliance = () => {
  const [allComplienses, setAllCompliences] = useState([])
  const [companyComplience, setCompanyComplience] = useState([])

  const navigate = useNavigate()

  const { userId, companyid } = useParams()

  useEffect(() => {
    complianceData()
  }, [])

  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "approvalState", headerName: "State", width: 150 },
    { field: "applicableZone", headerName: "City", width: 150 },
    { field: "startDate", headerName: "Start Date", width: 150 },
    { field: "completedDate", headerName: "completed Date", width: 150 },
    { field: "description", headerName: "Description", width: 150 },
  ]

  const columnsTwo = [
    { field: "businessUnitId", headerName: "id", width: 150 },
    { field: "companyName", headerName: "Company Name", width: 150 },
    { field: "businessUnitAddress", headerName: "Business Unit", width: 150 },
    { field: "businessActivityName", headerName: "Activity", width: 150 },
    {
      field: "totalCompliance",
      headerName: "Count",
      width: 150,
      renderCell: (props) => {
        const dataNew = props.row.totalCompliance[0]?.totalCompliance
        return (
          <Link
            to={`${props.row.companyId}/businessUnit/${props.row.businessUnitId}`}
          >
            {dataNew !== undefined ? dataNew : "0"}
          </Link>
        )
      },
    },
  ]

  const columns2 = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ]

  const allCompliancesData = async () => {
    try {
      const allCompliencesResponse = await getQuery(
        `/compliance/company/showAllCompliance?companyId=${companyid}`
      )
      setAllCompliences(allCompliencesResponse.data)
    } catch (err) {
      console.log("err", err)
      if (err.response.status === 500) {
        toast.error("Something Went Wrong")
      }
    }
  }

  const companyComplianceUrl = `/companyServices/company/getCompanyUnitComplianceDetails?userId=${userId}`
  const complianceDep = []

  const { productData: companyComplienceData, loading: comComplienceLoad } =
    useCustomRoute(companyComplianceUrl, complianceDep)

  const complianceData = async () => {
    try {
      const ComplienceResponse = await getQuery(
        `/companyServices/company/getCompanyUnitComplianceDetails?userId=${userId}`
      )
      setCompanyComplience(ComplienceResponse.data)
    } catch (err) {
      console.log("err", err)
      if (err.response.status === 500) {
        toast.error("Something Went Wrong")
      }
    }
  }


  return (
    <div>
      <BreadCrum />
      <div className="set-compliance">
        <h2 className="heading-primary">Approve Applicable Compliances</h2>
        <div className="mt-5">
          <div className="row">
            <div className="col-lg-4">
              <div>
                <select className="form-control input-focus" id="sel7">
                  <option>Choose company</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <select className="form-control input-focus" id="sel6">
                  <option>Choose by State</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <select className="form-control input-focus" id="sel5">
                  <option>Choose by operational unit</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            {/* second line  */}
            <div className="col-lg-5 mt-4">
              <div className="p-relative">
                <input
                  className="form-control input-focus"
                  type="text"
                  placeholder="Search by license name"
                />
                <i className="fa-solid fa-magnifying-glass search-icon-btn"></i>
              </div>
            </div>
            <div className="col-lg-5 mt-4">
              <div className="p-relative">
                <input
                  className="form-control input-focus"
                  type="text"
                  placeholder="Sort by department / Autho.. "
                />
                <i className="fa-solid fa-magnifying-glass search-icon-btn"></i>
              </div>
            </div>
            <div className="col-lg-2 mt-4">
              <div className="all-task">
                <div className="form-check mr-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label check-text"
                    htmlFor="exampleCheck1"
                  >
                    All Tasks
                  </label>
                </div>
                <i className="fa-solid fa-sliders"></i>
              </div>
            </div>

            <div className="my-4 w-100">
              <Suspense fallback={<TableScalaton />}>
                <CompliancesTable
                  rows={companyComplienceData}
                  getRowId={(row) => row.businessUnitId}
                  columns={columnsTwo}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetCompliance
