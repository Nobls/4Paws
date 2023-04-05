import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

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

export const getAllDryFoodForRodents = createAsyncThunk(
    'products/getAllDryFoodForRodents',
    async (dryFoodForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/dryFoodForRodents/${dryFoodForRodentsId}`);
        return response.data
    }
)
export const getAllVitaminsForRodents = createAsyncThunk(
    'products/getAllVitaminsForRodents',
    async (vitaminsForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/vitaminsForRodents/${vitaminsForRodentsId}`);
        return response.data
    }
)
export const getAllAccessoriesForRodents = createAsyncThunk(
    'products/getAllAccessoriesForRodents',
    async (accessoriesForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/accessoriesForRodents/${accessoriesForRodentsId}`);
        return response.data
    }
)
export const getAllCellsForRodents = createAsyncThunk(
    'products/getAllCellsForRodents',
    async (cellsForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/cellsForRodents/${cellsForRodentsId}`);
        return response.data
    }
)
export const getAllBathingForRodents = createAsyncThunk(
    'products/getAllBathingForRodents',
    async (bathingForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/bathingForRodents/${bathingForRodentsId}`);
        return response.data
    }
)
export const getAllToysForRodents = createAsyncThunk(
    'products/getAllToysForRodents',
    async (toysForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/toysForRodents/${toysForRodentsId}`);
        return response.data
    }
)
export const getAllExtenderForRodents = createAsyncThunk(
    'products/getAllExtenderForRodents',
    async (extenderForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/extenderForRodents/${extenderForRodentsId}`);
        return response.data
    }
)
export const getAllDishesForRodents = createAsyncThunk(
    'products/getAllDishesForRodents',
    async (dishesForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/dishesForRodents/${dishesForRodentsId}`);
        return response.data
    }
)


const CategoryRodentSlice = createSlice({
        name: 'products',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(getAllDryFoodForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getAllDryFoodForRodents.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            builder.addCase(getAllDryFoodForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getAllVitaminsForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getAllVitaminsForRodents.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            builder.addCase(getAllVitaminsForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getAllAccessoriesForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getAllAccessoriesForRodents.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            builder.addCase(getAllAccessoriesForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getAllCellsForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getAllCellsForRodents.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            builder.addCase(getAllCellsForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getAllBathingForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getAllBathingForRodents.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            builder.addCase(getAllBathingForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getAllToysForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getAllToysForRodents.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            builder.addCase(getAllToysForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getAllExtenderForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getAllExtenderForRodents.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            builder.addCase(getAllExtenderForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getAllDishesForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getAllDishesForRodents.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            builder.addCase(getAllDishesForRodents.rejected, (state) => {
                state.loading = true
            })

        }
    }
);

export const rodentReducer = CategoryRodentSlice.reducer;