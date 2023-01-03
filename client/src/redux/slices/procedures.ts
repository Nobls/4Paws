import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export interface PetProceduresType {
    _id?: any
    typeVaccination: string
    dateVaccination: any
    nameOfVaccine: string
    dateProcedure: any
    nameOfProcedure: string
    nameClinic: string
}

type StatePetProceduresType = {
    petProcedures: PetProceduresType[]
    loading: boolean
    errors: any
}

const initialState: StatePetProceduresType = {
    petProcedures: [],
    loading: false,
    errors: null
}

export const fetchCreateProcedures = createAsyncThunk(
    'procedures/fetchCreateProcedures',
    async ({userPetId, procedures}: any) => {
        try {
            const {data} = await axios.post(`/procedures/${userPetId}`, procedures)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const fetchPetProcedures = createAsyncThunk(
    'procedures/fetchPetProcedures',
    async (userPetId: any) => {
        try {
            const {data} = await axios.get(`/petAccount/procedures/${userPetId}`)
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
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
            state.loading = false
            state.petProcedures = action.payload
        })
        builder.addCase(fetchPetProcedures.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCreateProcedures.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCreateProcedures.fulfilled, (state, action) => {
            state.loading = false
            //state.procedures.push(action.payload)
            console.log(action.payload)
            state.petProcedures = action.payload
        })
        builder.addCase(fetchCreateProcedures.rejected, (state) => {
            state.loading = true
        })
    }
})

export const petProceduresReducer = petProceduresSlice.reducer