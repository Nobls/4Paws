import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const fetchNews:any = createAsyncThunk('news/fetchNews', async () => {
    const data = await axios.get('/news')
    return data
})
//добавить типизацию санок!!!

export type NewwsAndTAgsType = {
    items: []
    status: string
}

export type InitialStateType = {
    post: NewwsAndTAgsType
    tags: NewwsAndTAgsType
}

const initialState:InitialStateType = {
    post: {
        items: [],
        status: 'loading',
    },
    tags: {
        items: [],
        status: 'loading',
    }
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    /*extraReducers: {
        [fetchNews.pending]: (state) => {
            state.news.items = []
            state.news.status = 'loading'
        },
        [fetchNews.fulfilled]: (state, action) => {
            state.news.items = action.payload
            state.news.status = 'loaded'
        },
        [fetchNews.rejected]: (state) => {
            state.news.items = []
            state.news.status = 'error'
        },
    }*/
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state)=>{
                state.post.items = []
                state.post.status = 'loading'
            })
            .addCase(fetchNews.fulfilled, (state, action)=>{
                state.post.items = action.payload
                state.post.status = 'loaded'
            })
            .addCase(fetchNews.rejected, (state)=>{
                state.post.items = []
                state.post.status = 'error'
            })
    }
})

export const postsReducer = newsSlice.reducer