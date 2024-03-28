import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postQuery } from "../../Api/PostQuery"

export const saveTaskReminder = createAsyncThunk(
  "taskreminder",
  async (data) => {
    console.log("function alll  ")
    console.log(data);
    const taskCreate = await postQuery("/compliance/reminder/save", data)
    console.log(taskCreate)
    return taskCreate
  }
)

export const TaskReminderSlice = createSlice({
  name: "tasks",
  initialState: {
    taskReminder: {},
    saveLoading: false,
    saveError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(saveTaskReminder.pending, (state, action) => {
      state.saveError = false
      state.saveLoading = true
    })
    builder.addCase(saveTaskReminder.fulfilled, (state, action) => {
      state.taskReminder = action.payload
      state.saveError = false
      state.saveLoading = false
    })
    builder.addCase(saveTaskReminder.rejected, (state, action) => {
      state.saveError = action.payload
      state.saveLoading = false
    })
  },
})

export default TaskReminderSlice.reducer
