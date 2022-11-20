import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";
import {User} from "./posts";

export interface ServicesType {
    _id?: string
    title?: string
    description?: string
    descriptionModal?: string
    user: User
    imageUrl?: string
}

type TypeStateServices = {
    services: ServicesType[]
    loading: boolean
    errors: any
}

const initialState: TypeStateServices = {
    services: [],
    loading: false,
    errors: null

}

export const fetchServices = createAsyncThunk<ServicesType[]>(
    'services/fetchServices',
    async () => {
        const {data} = await axios.get('/services')
        return data
    })


const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchServices.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchServices.fulfilled, (state, action) => {
            state.services = action.payload
            state.loading = false
        })
        builder.addCase(fetchServices.rejected, (state) => {
            state.loading = true
        })
    }
})

export const servicesReducer = servicesSlice.reducer