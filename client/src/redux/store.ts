import {configureStore} from "@reduxjs/toolkit";
import {postsReducer} from "./slices/posts";
import {authReducer} from "./slices/auth";

const store = configureStore({
    reducer: {
        news: postsReducer,
        auth: authReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store