import {configureStore} from "@reduxjs/toolkit";
import {postsReducer} from "./slices/posts";
import {authReducer} from "./slices/auth";
import {servicesReducer} from "./slices/services";
import {userPetReducer} from "./slices/userPet";
import {petProceduresReducer} from "./slices/procedures";
import {commentReducer} from "./slices/comment";
import {reviewsReducer} from "./slices/reviews";
import {dogReducer} from "./slices/category/categoryDog";
import {catReducer} from "./slices/category/categoryCat";
import {birdReducer} from "./slices/category/categoryBird";
import {rodentReducer} from "./slices/category/categoryRodent";
import {fishReducer} from "./slices/category/categoryFish";

const store = configureStore({
    reducer: {
        news: postsReducer,
        auth: authReducer,
        services: servicesReducer,
        userPet: userPetReducer,
        procedures: petProceduresReducer,
        comments: commentReducer,
        reviews: reviewsReducer,
        dogCategory: dogReducer,
        catCategory: catReducer,
        birdCategory: birdReducer,
        rodentCategory: rodentReducer,
        fishCategory: fishReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store