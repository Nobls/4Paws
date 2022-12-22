import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export interface PetProceduresType {
    _id?:any
    typeVaccination: string
    dateVaccination: any
    nameOfVaccine: string
    dateProcedure: any
    nameOfProcedure: string
    nameClinic: string
}

type StatePetProceduresType = {
    procedures: PetProceduresType[]
    loading: boolean
    errors: any
}

const initialState: StatePetProceduresType = {
    procedures: [],
    loading: false,
    errors: null
}

export const fetchPetProcedures = createAsyncThunk(
    'procedures/fetchPetProcedures',
    async (id:any) => {
        const {data} = await axios.get(`/petAccount/${id}/procedures`)
        return data
    }
)

export const fetchCreateProcedures = createAsyncThunk(
    'procedures/fetchCreateProcedures',
    async () => {

    }
)

const petProceduresSlice = createSlice({
    name: 'petProcedures',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPetProcedures.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchPetProcedures.fulfilled, (state, action) => {
            state.procedures = action.payload
            state.loading = false
        })
        builder.addCase(fetchPetProcedures.rejected, (state) => {
            state.loading = true
        })
    }
})

export const petProceduresReducer = petProceduresSlice.reducer