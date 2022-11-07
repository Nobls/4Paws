import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export interface PostType {
    _id?: string
    title: string
    text: string
    tags: []
    user:User
    imageUrl?: string
    fullPost?: boolean
}

export interface User {
    avatarUrl: string
    fullName:string
}

/*interface Tags {
    tags: string
}*/


type TypeState = {
    post: PostType[]
    tags: []
    loading: boolean;
    errors: any

}

const initialState: TypeState = {
    post: [],
    tags: [],
    loading: false,
    errors: null
}

export const fetchNews = createAsyncThunk<PostType[]>(
    'news/fetchNews',
    async () => {
            const {data} = await axios.get('/news')
            return data
    })

export const fetchTags = createAsyncThunk<[]>(
    'news/fetchTags',
    async () => {
        const {data} = await axios.get('/tags')
        return data
    })


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
        builder.addCase(fetchTags.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.tags = action.payload
            state.loading = false;
        })
        builder.addCase(fetchTags.rejected, (state) => {
            state.loading = false;
        })

    }
})

export const postsReducer = newsSlice.reducer