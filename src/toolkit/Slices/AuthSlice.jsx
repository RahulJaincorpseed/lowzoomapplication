import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postQuery } from "../../Api/PostQuery"

export const getCurrentUser = createAsyncThunk("auth/user", async (data) => {
  const currentUserData = await postQuery(`/api/auth/token`, data)
  return currentUserData.data
})

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
    loading: false,
    error: false,
    isAuth: false, 
  },
  reducers: {
    logoutAction : (state, action) => {
      state.isAuth = false
      state.currentUser = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.pending, (state, action) => {
      state.error = false
      state.loading = true
    })
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.currentUser = action.payload
      state.loading = false
      state.error = false
      state.isAuth = true
    })
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.error = true
      state.loading = false
    })
  },
})

export const { logoutAction } = AuthSlice.actions
export default AuthSlice.reducer
