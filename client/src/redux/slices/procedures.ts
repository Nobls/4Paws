import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export interface PetProceduresType {
    _id?: any
    dateProcedure: any
    nameOfProcedure: string
    nameClinic: string
}

export interface PetVaccinesType {
    _id?: any
    typeVaccination: string
    dateVaccination: any
    nameOfVaccine: string
    nameClinic: string
}

type StatePetProceduresType = {
    petProcedures: PetProceduresType[]
    petVaccines: PetVaccinesType[]
    loading: boolean
    errors: any
}

const initialState: StatePetProceduresType = {
    petProcedures: [],
    petVaccines: [],
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

export const fetchCreateVaccines = createAsyncThunk(
    'procedures/fetchCreateVaccines',
    async ({userPetId, vaccines}: any) => {
        try {
            const {data} = await axios.post(`/vaccines/${userPetId}`, vaccines)
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
export const fetchPetVaccines = createAsyncThunk(
    'procedures/fetchPetVaccines',
    async (userPetId: any) => {
        try {
            const {data} = await axios.get(`/petAccount/vaccines/${userPetId}`)
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const fetchRemoveProcedures = createAsyncThunk(
    'news/fetchRemoveNews',
    async (_id: any) => {
        const {data} = await axios.delete(`/news/${_id}`, _id)
        return data
    })

export const fetchRemoveVaccines = createAsyncThunk(
    'news/fetchRemoveNews',
    async (_id: any) => {
        const {data} = await axios.delete(`/news/${_id}`, _id)
        return data
    })

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
        builder.addCase(fetchPetVaccines.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchPetVaccines.fulfilled, (state, action) => {
            state.loading = false
            state.petVaccines = action.payload
        })
        builder.addCase(fetchPetVaccines.rejected, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchCreateProcedures.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCreateProcedures.fulfilled, (state, action) => {
            state.loading = false
            //state.petProcedures = action.payload
            state.petProcedures.push(action.payload)
        })
        builder.addCase(fetchCreateProcedures.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCreateVaccines.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCreateVaccines.fulfilled, (state, action) => {
            state.loading = false
            //state.petVaccines = action.payload
            state.petVaccines.push(action.payload)
        })
        builder.addCase(fetchCreateVaccines.rejected, (state) => {
            state.loading = true
        })
    }
})

//export const selectedIsProcedures = (state: any) => Boolean(state.petProcedures.petProcedures)

export const petProceduresReducer = petProceduresSlice.reducer