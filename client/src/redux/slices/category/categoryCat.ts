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

export const getAllDryFoodForCats = createAsyncThunk(
    'products/getAllDryFoodForCats',
    async (dryFoodForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/dryFoodForCats/${dryFoodForCatsId}`);
        return response.data;
    }
)

export const getCategoryDryFoodForCats = createAsyncThunk(
    'products/getCategoryDryFoodForCats',
    async (dryFoodCatsId:string ) => {
        const response = await axios.get(`/shop/cat/product/dryFoodForCats/${dryFoodCatsId}`);
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

export const getCategoryPreservesForCats = createAsyncThunk(
    'products/getCategoryPreservesForCats',
    async (preservesForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/product/preservesForCats/${preservesForCatsId}`);
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
export const getAllHomeForCats = createAsyncThunk(
    'products/getAllHomeForCats',
    async (homeForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/homeForCats/${homeForCatsId}`);
        return response.data;
    }
)
export const getAllToysForCats = createAsyncThunk(
    'products/getAllToysForCats',
    async (toysForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/toysForCats/${toysForCatsId}`);
        return response.data;
    }
)
export const getAllCarryingForCats = createAsyncThunk(
    'products/getAllCarryingForCats',
    async (carryingForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/carryingForCats/${carryingForCatsId}`);
        return response.data;
    }
)
export const getAllCosmeticsForCats = createAsyncThunk(
    'products/getAllCosmeticsForCats',
    async (cosmeticsForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/cosmeticsForCats/${cosmeticsForCatsId}`);
        return response.data;
    }
)
export const getAllScratchingPostsForCats = createAsyncThunk(
    'products/getAllScratchingPostsForCats',
    async (scratchingPostsForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/scratchingPostsForCats/${scratchingPostsForCatsId}`);
        return response.data;
    }
)
export const getAllDishesForCats = createAsyncThunk(
    'products/getAllDishesForCats',
    async (dishesForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/dishesForCats/${dishesForCatsId}`);
        return response.data;
    }
)
export const getAllAmmunitionForCats = createAsyncThunk(
    'products/getAllAmmunitionForCats',
    async (ammunitionForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/ammunitionForCats/${ammunitionForCatsId}`);
        return response.data;
    }
)
export const getAllToiletsForCats = createAsyncThunk(
    'products/getAllToiletsForCats',
    async (toiletsForCatsId:string ) => {
        const response = await axios.get(`/shop/cat/toiletsForCats/${toiletsForCatsId}`);
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
        builder.addCase(getAllHomeForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllHomeForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllHomeForCats.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getAllToysForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllToysForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllToysForCats.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getAllCarryingForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllCarryingForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllCarryingForCats.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getAllCosmeticsForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllCosmeticsForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllCosmeticsForCats.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getAllScratchingPostsForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllScratchingPostsForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllScratchingPostsForCats.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getAllDishesForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllDishesForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllDishesForCats.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getAllAmmunitionForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllAmmunitionForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllAmmunitionForCats.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getAllToiletsForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllToiletsForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllToiletsForCats.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryDryFoodForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryDryFoodForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryDryFoodForCats.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryPreservesForCats.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryPreservesForCats.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryPreservesForCats.rejected, (state) => {
            state.loading = true
        })
    }
})

export const catReducer = categoryCatSlice.reducer


