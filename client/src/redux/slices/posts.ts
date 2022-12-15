import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export interface PostType {
    _id?: string
    title?: string
    text: string
    tags?: []
    user:User
    imageUrl?: string
}

export interface User {
    _id?: string
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

export const fetchRemoveNews = createAsyncThunk(
    'news/fetchRemoveNews',
    async (_id:any) => {
        const {data} = await axios.delete(`/news/${_id}`, _id)
        return data
    })

export const fetchUpdatePost = createAsyncThunk(
    'news/fetchUpdatePost',
    async (updatePost:any)=>{
        try {
            const {data} = await axios.put(`/news/${updatePost.id}`, updatePost)

        } catch(error){
            console.log(error)
        }
    }
)


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


        builder.addCase(fetchRemoveNews.pending, (state, action) => {
            state.post = state.post.filter(f=> f._id !== action.meta.arg);
        })

    }
})

export const postsReducer = newsSlice.reducer