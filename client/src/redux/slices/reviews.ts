import {User} from "./posts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";


export interface ReviewsType {
    review: string
    user: User
    dateReview: any
}

type TypeStateReviews = {
    reviews: ReviewsType[]
    loading: boolean
    errors: any
}

const initialState: TypeStateReviews = {
    reviews: [],
    loading: false,
    errors: null
}

export const createReview = createAsyncThunk(
    'review/createReview',
    async ({userId, review}: any) => {
        try {
            const {data} = await axios.post(`/reviews/${userId}`, {
                userId,
                review,
            })
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const fetchReviews = createAsyncThunk(
    'review/fetchReviews',
    async () => {
        const {data} = await axios.get('/reviews')
        return data
    }
)

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createReview.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createReview.fulfilled, (state, action) => {
            state.loading = false
            state.reviews.push(action.payload)
        })
        builder.addCase(createReview.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(fetchReviews.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            state.reviews = action.payload
            state.loading = false;
        })
        builder.addCase(fetchReviews.rejected, (state) => {
            state.loading = false;
        })
    }
})

export const reviewsReducer = reviewsSlice.reducer