import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

interface Post {
    _id?: string
    title: string
    text: string
    tags: []
    user:User
    imageUrl: string
}

interface User {
    avatarUrl: string
    fullName:string
}


type TypeState = {
    post: Post[]
    loading: boolean;
    errors: any

}

const initialState: TypeState = {
    post: [],
    loading: false,
    errors: null
}

export const fetchNews = createAsyncThunk<Post[]>(
    'news/fetchNews',
    async () => {
            const response = await axios.get('/news')
            return response.data
    })
//добавить типизацию санок!!!

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.post = action.payload
            state.loading = false;
        })
        builder.addCase(fetchNews.rejected, (state) => {
            state.loading = false;
        })

    }
})

export const postsReducer = newsSlice.reducer