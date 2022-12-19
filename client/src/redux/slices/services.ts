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

export const fetchCreateServices = createAsyncThunk(
    'services/fetchCreateServices',
    async (params: any) => {
        try {
            const {data} = await axios.post('/services', params)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const fetchRemoveServices = createAsyncThunk(
    'services/fetchRemoveServices',
    async (_id: any) => {
        const {data} = await axios.delete(`/services/${_id}`, _id)
        return data
    }
)

export const fetchUpdateServices = createAsyncThunk(
    'services/fetchUpdateServices',
    async (updateServicesFields: any) => {
        try {
            const {data} = await axios.patch(`/services/${updateServicesFields._id}`, updateServicesFields)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)


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
        builder.addCase(fetchCreateServices.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchCreateServices.fulfilled, (state, action) => {
            state.loading = false;
            state.services.push(action.payload)
        })
        builder.addCase(fetchCreateServices.rejected, (state) => {
            state.loading = false;
        })

        /*builder.addCase(fetchRemoveServices.pending, (state, action) => {
            state.services = state.services.filter(f => f._id !== action.meta.arg);
        })*/
        builder.addCase(fetchRemoveServices.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRemoveServices.fulfilled, (state, action) => {
            state.loading = false;
            state.services = state.services.filter((services) => services._id !== action.payload._id)
        })
        builder.addCase(fetchRemoveServices.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(fetchUpdateServices.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchUpdateServices.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.services.findIndex(
                (services) => services._id === action.payload._id,
            )
            state.services[index] = action.payload
        })
        builder.addCase(fetchUpdateServices.rejected, (state) => {
            state.loading = false;
        })
    }
})

export const servicesReducer = servicesSlice.reducer