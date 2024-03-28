import React, { useState } from "react"
import "./CreateTaskComp.scss"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import ModelInput from "../common/Inputs/ModelInput"
import { saveTaskReminder } from "../toolkit/Slices/TaskReminderSlice"
import { useDispatch, useSelector } from "react-redux"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  overflow: "hidden",
}



const CreateTaskComp = ({ addTaskReminder, setAddTaskReminder, reminderData }) => {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  const taskDataS = useSelector((auth) => auth)
  console.log("slice data",taskDataS);





  const handleOpen = () => {
    console.log("open Data", reminderData)
    setAddTaskReminder((prev) => ({ ...prev, taskId: reminderData }))
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const submitTaskData = async (e) =>{
    e.preventDefault();
    console.log('submit data')
   const taskCreateResponse = await dispatch(saveTaskReminder(addTaskReminder));
   console.log("task data", taskCreateResponse);
   
} 

  return (
    <div>
      <Button onClick={() => handleOpen()}>
        <i className="fa-regular fa-calendar-days mr-2"></i> Set Reminder
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4 className="info-text">Add Task Reminder</h4>
          <div>
            <label className="label-heading mb-1" htmlFor="resources">
              Enter Reminder Date & Time*
            </label>
            <input className="form-control input-focus" onChange={(e)=> setAddTaskReminder((prev) => ({ ...prev, reminderDate: e.target.value }))} type="datetime-local" />
            <button onClick={(e) => submitTaskData(e)} className="first-button mt-2 w-100">Add Reminder</button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default CreateTaskComp
