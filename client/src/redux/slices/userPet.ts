import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";
import {User} from "./posts";

export interface UserPetType {
    _id?: string
    petName: string
    petBreed: string
    agePet: string
    petGender: string
    petProcedures: []
    user: User
    petAvatarUrl?: string
}

type TypeStateUserPet = {
    userPet: UserPetType[]
    loading: boolean
    errors: any
}

const initialState: TypeStateUserPet = {
    userPet: [],
    loading: false,
    errors: null
}

export const fetchUserPet = createAsyncThunk<UserPetType[]>(
    'petAccount/fetchUserPet',
    async () => {
        const {data} = await axios.get('/petAccount')
        return data
    }
)

/*export const fetchUserPetId = createAsyncThunk(
    'petAccount/fetchUserPetId',
    async (_id:any)=>{
        const {data} = await axios.get(`/petAccount/${_id}`)
        return data
    }
)*/

const userPetSlice = createSlice({
    name: 'userPet',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserPet.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUserPet.fulfilled, (state, action) => {
            state.userPet = action.payload
            state.loading = false
        })
        builder.addCase(fetchUserPet.rejected, (state) => {
            state.loading = true
        })
        /*builder.addCase(fetchUserPetId.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUserPetId.fulfilled, (state, action) => {
            state.userPet = action.payload
            state.loading = false
        })
        builder.addCase(fetchUserPetId.rejected, (state) => {
            state.loading = true
        })*/
    }
})

export const userPetReducer = userPetSlice.reducer