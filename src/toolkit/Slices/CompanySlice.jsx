import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQuery } from "../../Api/getQuery";


export const getListOfCompany = createAsyncThunk('', async (id) => {
    const allCompany = await getQuery(`/companyServices/company/getAllCompany?userId=${id}`);
    return allCompany.data;
})

export const companySlice = createSlice({
    name: "company",
    initialState: {
        listOfCompany: [],
        singleCompany: {},
        companyErr: false,
        companyLoading: true,
    },
    extraReducers: (builder) => {
        builder.addCase(getListOfCompany.pending, (state, action) => {
            state.companyLoading = true
        })
        builder.addCase(getListOfCompany.fulfilled, (state, action) => {
            state.companyLoading = false
            state.listOfCompany = action.payload
        })
        builder.addCase(getListOfCompany.rejected, (state, action) => {
            state.companyLoading = false
            state.companyErr = true
        })
    }
})

export default companySlice.reducer