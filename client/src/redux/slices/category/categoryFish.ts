import {createSlice} from "@reduxjs/toolkit";

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

const categoryFishSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        /*builder.addCase(getAllDryFoodForBirds.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllDryFoodForBirds.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllDryFoodForBirds.rejected, (state) => {
            state.loading = true
        })*/
    }
})

export const fishReducer = categoryFishSlice.reducer