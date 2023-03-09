import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export interface PostType {
    _id?: string
    title?: string
    text: string
    tags?: []
    user: User
    imageUrl?: string
    timestamps: string
}

export interface User {
    _id?: string
    avatarUrl: string
    fullName: string
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
    async (_id: any) => {
        const {data} = await axios.delete(`/news/${_id}`, _id)
        return data
    })

export const fetchUpdatePost = createAsyncThunk(
    'news/fetchUpdatePost',
    async (updateFields:any) => {
        try {
            const {data} = await axios.patch(`/news/${updateFields.id}`,updateFields)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const fetchCreatePost = createAsyncThunk(
    'news/fetchCreatePost',
    async (params:any) => {
        try {
            const {data} = await axios.post('/news', params)
            console.log(data)
            return data
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
        // get all news
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
        //get all tags
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
        // create news
        builder.addCase(fetchCreatePost.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchCreatePost.fulfilled, (state, action) => {
            state.loading = false;
            state.post.push(action.payload)
        })
        builder.addCase(fetchCreatePost.rejected, (state) => {
            state.loading = false;
        })
        // remove news
        builder.addCase(fetchRemoveNews.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRemoveNews.fulfilled, (state, action) => {
            state.loading = false;
            state.post = state.post.filter((post)=> post._id !== action.payload._id)
        })
        builder.addCase(fetchRemoveNews.rejected, (state) => {
            state.loading = false;
        })
        // update news
        builder.addCase(fetchUpdatePost.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchUpdatePost.fulfilled, (state, action) => {
            state.loading = false;
            //state.post.push(action.payload)
            const index = state.post.findIndex(
                (post) => post._id === action.payload._id,
            )
            state.post[index] = action.payload
        })
        builder.addCase(fetchUpdatePost.rejected, (state) => {
            state.loading = false;
        })
    }
})

export const postsReducer = newsSlice.reducer