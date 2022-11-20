import {configureStore} from "@reduxjs/toolkit";
import {postsReducer} from "./slices/posts";
import {authReducer} from "./slices/auth";
import {servicesReducer} from "./slices/services";

const store = configureStore({
    reducer: {
        news: postsReducer,
        auth: authReducer,
        services: servicesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store