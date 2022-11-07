import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export type StateType = {
    data: {  } | null
    loading: boolean
    errors: any
}

const initialState:StateType = {
    data: null,
    loading: false,
    errors: null,

}

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params:any)=>{
    const {data} = await axios.post('/auth/login',params )
    return data
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async ()=>{
    const {data} = await axios.get('auth/me')
    return data
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state)=>{
            state.data = null
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchAuth.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchAuth.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false;
        })
        builder.addCase(fetchAuth.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(fetchAuthMe.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false;
        })
        builder.addCase(fetchAuthMe.rejected, (state) => {
            state.loading = false;
        })
    }
})

export const selectedIsAuth = (state:any) => Boolean(state.auth.data)

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions