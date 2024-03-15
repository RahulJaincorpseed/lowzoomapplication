import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postQuery } from "../../Api/PostQuery";


export const getCurrentUser = createAsyncThunk('auth/user', async (data) => {
    const currentUserData = await postQuery(`/api/auth/token`, data) 
    return currentUserData.data
})


export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: {},
        loading: false,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(getCurrentUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
            state.loading = false
        })
        builder.addCase(getCurrentUser.rejected, (state, action) => {
            state.error = true
            state.loading = false
        })
    }

})

export default AuthSlice.reducer

