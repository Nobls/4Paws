import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../axios/axios";


interface ProductCard {
    title: string,
    productImage: string,
    weight: string,
    quantity: string,
    category: string,
    countryOfManufacture: string,
    description: string,
    price: string,
    brand: string,
    tags: string,
}

interface CategoryDog {
    _id: string,
    product: ProductCard[]
}

interface AllCategoryDog {
    dryFoodForDogs: CategoryDog
    preservesForDogs: CategoryDog
    vitaminsForDogs: CategoryDog
    homeForDogs: CategoryDog
    toysForDogs: CategoryDog
    carryingForDogs: CategoryDog
    cosmeticsForDogs: CategoryDog
    clothesForDogs: CategoryDog
    dishesForDogs: CategoryDog
    ammunitionForDogs: CategoryDog
    toiletsForDogs: CategoryDog
    loading: boolean
    errors: any
}

const initialState: AllCategoryDog = {
    dryFoodForDogs: {
        _id: '',
        product: []
    },
    preservesForDogs: {
        _id: '',
        product: []
    },
    vitaminsForDogs: {
        _id: '',
        product: []
    },
    homeForDogs: {
        _id: '',
        product: []
    },
    toysForDogs: {
        _id: '',
        product: []
    },
    carryingForDogs: {
        _id: '',
        product: []
    },
    cosmeticsForDogs: {
        _id: '',
        product: []
    },
    clothesForDogs: {
        _id: '',
        product: []
    },
    dishesForDogs: {
        _id: '',
        product: []
    },
    ammunitionForDogs: {
        _id: '',
        product: []
    },
    toiletsForDogs: {
        _id: '',
        product: []
    },
    loading: false,
    errors: null,
}

export const getAllDryFoodForDogs = createAsyncThunk(
    'dog/getAllDryFoodForDogs',
    async (dryFoodDogId:string) => {
        try {
            const {data} = await axios.get(`/shop/dog/dryFoodDog/${dryFoodDogId}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

const categoryDodSlice = createSlice({
    name: 'dog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllDryFoodForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllDryFoodForDogs.fulfilled, (state, action) => {
            state.loading = false
            state.dryFoodForDogs = action.payload
        })
        builder.addCase(getAllDryFoodForDogs.rejected, (state) => {
            state.loading = true
        })
    }
})

export const dogReducer = categoryDodSlice.reducer


