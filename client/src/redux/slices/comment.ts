import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";
import {User} from "./posts";

export interface CommentsType {
    comment: string
    user: User
}

type TypeStateComments = {
    comments: CommentsType[]
    loading: boolean
    errors: any
}

const initialState: TypeStateComments = {
    comments: [],
    loading: false,
    errors: null
}

export const createComment = createAsyncThunk(
    'comment/createComment',
    async ({ postId, comment }:any) => {
        try {
            const { data } = await axios.post(`/comments/${postId}`, {
                postId,
                comment,
            })
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const getComments = createAsyncThunk(
    'comment/getComments',
    async (postId:any) => {
        try {
            const { data } = await axios.get(`/news/comments/${postId}`)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(createComment.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createComment.fulfilled, (state, action) => {
            state.loading = false
            state.comments.push(action.payload)
        })
        builder.addCase(createComment.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getComments.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.loading = false
            state.comments = action.payload
        })
        builder.addCase(getComments.rejected, (state) => {
            state.loading = true
        })
    }
})

export const commentReducer = commentSlice.reducer