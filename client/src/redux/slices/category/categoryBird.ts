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

interface ProductsState {
    products: ProductCard[];
    loading: boolean;
    error: string | null;
}


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

export const getAllBirdcageForBirds = createAsyncThunk(
    'products/getAllBirdcageForBirds',
    async (birdcageForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/birdcageForBirds/${birdcageForBirdsId}`);
        return response.data;
    }
)

export const getAllBathForBirds = createAsyncThunk(
    'products/getAllBathForBirds',
    async (bathForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/bathForBirds/${bathForBirdsId}`);
        return response.data;
    }
)

export const getAllToysForBirds = createAsyncThunk(
    'products/getAllToysForBirds',
    async (toysForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/toysForBirds/${toysForBirdsId}`);
        return response.data;
    }
)

export const getAllFillersAndPadsForBirds = createAsyncThunk(
    'products/getAllFillersAndPadsForBirds',
    async (fillersAndPadsForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/fillersAndPadsForBirds/${fillersAndPadsForBirdsId}`);
        return response.data;
    }
)

export const getAllAccessoriesForBirds = createAsyncThunk(
    'products/getAllAccessoriesForBirds',
    async (accessoriesForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/accessoriesForBirds/${accessoriesForBirdsId}`);
        return response.data;
    }
)

export const getAllDishesForBirds = createAsyncThunk(
    'products/getAllDishesForBirds',
    async (dishesForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/dishesForBirds/${dishesForBirdsId}`);
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

        builder.addCase(getAllBirdcageForBirds.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllBirdcageForBirds.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllBirdcageForBirds.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllBathForBirds.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllBathForBirds.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllBathForBirds.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllToysForBirds.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllToysForBirds.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllToysForBirds.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllFillersAndPadsForBirds.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllFillersAndPadsForBirds.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllFillersAndPadsForBirds.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllAccessoriesForBirds.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllAccessoriesForBirds.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllAccessoriesForBirds.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllDishesForBirds.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllDishesForBirds.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllDishesForBirds.rejected, (state) => {
            state.loading = true
        })
    }
})

export const birdReducer = categoryBirdSlice.reducer


