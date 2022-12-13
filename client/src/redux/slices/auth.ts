import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

/*export type StateType = {
    data: {} | null
    loading: boolean
    errors: any
}*/
//поменять на data на user
export type StateType = {
    data: {} | null
    token: string | null
    status: any
    loading: boolean
    errors: any
}

export interface DataType  {
    fullName?: string
    email?: string
    password?: string
}


const initialState: StateType = {
    data: null,
    token: null,
    status: null,
    loading: false,
    errors: null,

}

/*export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params: any) => {
    const {data} = await axios.post('/auth/login', params)
    return data
})*/

export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async ({email, password}:DataType) => {
    try {
        const {data} = await axios.post('/auth/login',{
            email,
            password,
        })
        if (data.token){
            window.localStorage.setItem('token', data.token)
        }

        return data
    } catch(error){
        console.log(error)
    }
})

/*export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params:any)=>{
    const {data} = await axios.post('/auth/registration',params )
    return data
})*/

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    async ({fullName, email, password}:DataType) => {
        try {
            const {data} = await axios.post('/auth/registration', {
                fullName,
                password,
                email,
            })

            if (data.token){
                window.localStorage.setItem('token', data.token)
            }

            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    const {data} = await axios.get('auth/user')
    return data
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        }
    },
    extraReducers: (builder) => {
        //Login user
        builder.addCase(fetchLogin.pending, (state) => {
            state.loading = true;
            state.status = null
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.status = action.payload.message
            state.data = action.payload
            state.token = action.payload.token
        })
        builder.addCase(fetchLogin.rejected, (state,action:any) => {
            state.status = action.payload.message
            state.loading = false;
        })
        //Fetch authMe
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
        //Register user
        builder.addCase(fetchRegister.pending, (state) => {
            state.loading = true;
            state.status = null
        })
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false;
        })
        builder.addCase(fetchRegister.rejected, (state) => {
            state.loading = false;
        })
    }
})

export const selectedIsAuth = (state: any) => Boolean(state.auth.data)

export const {logout} = authSlice.actions

export const authReducer = authSlice.reducer
