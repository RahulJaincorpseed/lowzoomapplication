import React, { useId } from "react"
import AddNewComplienceModel from "../../common/Model/AddNewComplienceModel"
import TaskCreate from "../../common/Model/TaskCreate"
import { useCustomRoute } from "../../Hooks/GetCustomRoute"
import { useParams } from "react-router-dom"
import TableScalaton from "../../common/Scalaton/TableScalaton"
import CompliancesTable from "../../Tables/CompliancesTable"
import CreateTaskComp from "../../components/CreateTaskComp"

const DisplayAllTask = () => {
  const { complienceId } = useParams()

  console.log("is id here ====", complienceId)

  const getAllTask = `/compliance/task/getAllComplianceTask?complianceId=${complienceId}`
  const TaskDep = []

  const { productData: allTaskData, loading: taskLoading } = useCustomRoute(
    getAllTask,
    TaskDep
  )

  const getAllUserUrl = `/companyServices/company/team/members/getAllTeamMembersWithIdAndTeamName?companyId=1`
  const allUserDep = []

  const { productData: allUser, loading: userLoading } = useCustomRoute(
    getAllUserUrl,
    allUserDep
  )

  const columns = [
    { field: "id", headerName: "id", width: 60 },
    { field: "taskName", headerName: "Task Name", width: 150 },
    { field: "description", headerName: "Task Description", width: 200 },
    { field: "completedDate", headerName: "Completed date", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "taskReminedr",
      headerName: "Task Reminder",
      width: 150,
      renderCell: (props) => {
        return (
          <div>
            <CreateTaskComp />
          </div>
        )
      },
    },
    { field: "criticality", headerName: "Criticality", width: 150 },
  ]

  console.log("all r=task data", allTaskData)

  return (
    <div>
      <div>
        <h2 className="heading-primary">Compliances Task</h2>
        <div className="add-new-company mb-3">
          <TaskCreate />
        </div>
        <h2 className="heading-primary text-center">All Task</h2>

        <div className="mt-3">
          <CompliancesTable rows={allTaskData} columns={columns} />
        </div>
      </div>
    </div>
  )
}

export default DisplayAllTask
