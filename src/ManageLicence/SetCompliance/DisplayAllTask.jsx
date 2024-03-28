import React, {  useState } from "react"
import TaskCreate from "../../common/Model/TaskCreate"
import { useCustomRoute } from "../../Hooks/GetCustomRoute"
import { useParams } from "react-router-dom"
import CompliancesTable from "../../Tables/CompliancesTable"
import CreateTaskComp from "../../components/CreateTaskComp"

const DisplayAllTask = () => {
  const { complienceId } = useParams()

  const [addTaskReminder, setAddTaskReminder] = useState(
    {
      complianceId: complienceId,
      taskId: 0,
      subTaskId: 1,
      reminderDate: "",
      notificationTimelineValue: 1,
      notificationTimelineType: "",
      repeatTimelineValue: '',
      repeatTimelineType: "",
      repeatOnDay: "",
      reminderEndDate: "",
      createdAt: "",
      updatedAt: "",
      enable: true
    }   
  )

  console.log(addTaskReminder);


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
        const id = props.row.id;
        return (
          <div>
            <CreateTaskComp addTaskReminder = {addTaskReminder} setAddTaskReminder = {setAddTaskReminder} reminderData = {id} />
          </div>
        )
      },
    },
    { field: "criticality", headerName: "Criticality", width: 150 },
  ]


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
