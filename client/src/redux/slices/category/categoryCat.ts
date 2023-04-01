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

export const getAllDryFoodForCats = createAsyncThunk(
    'products/getAllDryFoodForCats',
    async (dryFoodForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/dryFoodForCats/${dryFoodForCatsId}`);
        return response.data;
    }
)
export const getAllPreservesForCats = createAsyncThunk(
    'products/getAllPreservesForCats',
    async (preservesForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/preservesForCats/${preservesForCatsId}`);
        return response.data;
    }
)
export const getAllVitaminsForCats = createAsyncThunk(
    'products/getAllVitaminsForCats',
    async (vitaminsForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/vitaminsForCats/${vitaminsForCatsId}`);
        return response.data;
    }
)

const categoryCatSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllDryFoodForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllDryFoodForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllDryFoodForCats.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllPreservesForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllPreservesForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllPreservesForCats.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getAllVitaminsForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllVitaminsForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllVitaminsForCats.rejected, (state) => {
            state.loading = true
        })
    }
})

export const catReducer = categoryCatSlice.reducer


