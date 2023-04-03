import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../axios/axios";


export interface ProductCard {
    _id?: string
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

/*export interface CategoryDog {
    _id: string;
    product: ProductCard[];
    loading: boolean;
    errors: string | null;
}*/

/*export interface AllCategoryDog {
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
}*/

/*interface ProductsState {
    products: CategoryDog | null;
    loading: boolean;
    error: string | null;
}*/

interface ProductsState {
    products: ProductCard[];
    loading: boolean;
    error: string | null;
}

/*const initialState: AllCategoryDog = {
    dryFoodForDogs: {
        _id: '',
        product: [],
        loading: false,
        errors: null,
    },
    preservesForDogs: {
        _id: '',
        product: [],
        loading: false,
        errors: null,
    },
    vitaminsForDogs: {
        _id: '',
        product: [],
        loading: false,
        errors: null,
    },
    homeForDogs: {
        _id: '',
        product: [],
        loading: false,
        errors: null,
    },
    toysForDogs: {
        _id: '',
        product: [],
        loading: false,
        errors: null,
    },
    carryingForDogs: {
        _id: '',
        product: [],
        loading: false,
        errors: null,
    },
    cosmeticsForDogs: {
        _id: '',
        product: [],
        loading: false,
        errors: null,
    },
    clothesForDogs: {
        _id: '',
        product: [],
        loading: false,
        errors: null,
    },
    dishesForDogs: {
        _id: '',
        product: [],
        loading: false,
        errors: null,
    },
    ammunitionForDogs: {
        _id: '',
        product: [],
        loading: false,
        errors: null,
    },
    toiletsForDogs: {
        _id: '',
        product: [],
        loading: false,
        errors: null,
    },
    loading: false,
    errors: null,
}*/

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};

export const getAllDryFoodForBirds = createAsyncThunk(
    'products/getAllDryFoodForBirds',
    async (dryFoodForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/dryFoodForBirds/${dryFoodForBirdsId}`);
        return response.data;
    }
)
export const getAllVitaminsForBirds = createAsyncThunk(
    'products/getAllVitaminsForBirds',
    async (vitaminsForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/vitaminsForBirds/${vitaminsForBirdsId}`);
        return response.data;
    }
)

const categoryBirdSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllDryFoodForBirds.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllDryFoodForBirds.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllDryFoodForBirds.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllVitaminsForBirds.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllVitaminsForBirds.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllVitaminsForBirds.rejected, (state) => {
            state.loading = true
        })
    }
})

export const birdReducer = categoryBirdSlice.reducer


