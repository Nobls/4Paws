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

export const getAllDryFoodForDogs = createAsyncThunk(
    'products/getAllDryFoodForDogs',
    async (dryFoodDogId:string ) => {
        const response = await axios.get(`/shop/dog/dryFoodDog/${dryFoodDogId}`);
        return response.data;
    }
)

export const getAllPreservesForDogs = createAsyncThunk(
    'products/getAllPreservesForDogs',
    async (preservesForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/preservesForDogs/${preservesForDogsId}`);
        return response.data;
    }
)

export const getAllVitaminsForDogs = createAsyncThunk(
    'products/getAllVitaminsForDogs',
    async (vitaminsForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/vitaminsForDogs/${vitaminsForDogsId}`);
        return response.data;
    }
)

export const getAllHomeForDogs = createAsyncThunk(
    'products/getAllHomeForDogs',
    async (homeForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/homeForDogs/${homeForDogsId}`);
        return response.data;
    }
)

export const getAllToysForDogs = createAsyncThunk(
    'products/getAllToysForDogs',
    async (toysForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/toysForDogs/${toysForDogsId}`);
        return response.data;
    }
)

export const getAllCarryingForDogs = createAsyncThunk(
    'products/getAllCarryingForDogs',
    async (carryingForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/carryingForDogs/${carryingForDogsId}`);
        return response.data;
    }
)

export const getAllCosmeticsForDogs = createAsyncThunk(
    'products/getAllCosmeticsForDogs',
    async (cosmeticsForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/cosmeticsForDogs/${cosmeticsForDogsId}`);
        return response.data;
    }
)
export const getAllClothesForDogs = createAsyncThunk(
    'products/getAllClothesForDogs',
    async (clothesForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/clothesForDogs/${clothesForDogsId}`);
        return response.data;
    }
)
export const getAllDishesForDogs = createAsyncThunk(
    'products/getAllDishesForDogs',
    async (dishesForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/dishesForDogs/${dishesForDogsId}`);
        return response.data;
    }
)
export const getAllAmmunitionForDogs = createAsyncThunk(
    'products/getAllAmmunitionForDogs',
    async (ammunitionForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/ammunitionForDogs/${ammunitionForDogsId}`);
        return response.data;
    }
)
export const getAllToiletsForDogs = createAsyncThunk(
    'products/getAllToiletsForDogs',
    async (toiletsForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/toiletsForDogs/${toiletsForDogsId}`);
        return response.data;
    }
)

/*export const getOneProduct = createAsyncThunk(
    'products/getOneProduct',
    async (id:any) => {
        const response = await axios.get(`/shop/product/${id}`)
        return response.data
    }
)*/

const categoryDodSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllDryFoodForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllDryFoodForDogs.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllDryFoodForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllPreservesForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllPreservesForDogs.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllPreservesForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllVitaminsForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllVitaminsForDogs.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllVitaminsForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllHomeForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllHomeForDogs.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllHomeForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllToysForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllToysForDogs.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllToysForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllCarryingForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllCarryingForDogs.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllCarryingForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllCosmeticsForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllCosmeticsForDogs.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllCosmeticsForDogs.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getAllClothesForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllClothesForDogs.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllClothesForDogs.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getAllDishesForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllDishesForDogs.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllDishesForDogs.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getAllAmmunitionForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllAmmunitionForDogs.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllAmmunitionForDogs.rejected, (state) => {
            state.loading = true
        })
        builder.addCase(getAllToiletsForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllToiletsForDogs.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllToiletsForDogs.rejected, (state) => {
            state.loading = true
        })

        /*builder.addCase(getOneProduct.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getOneProduct.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getOneProduct.rejected, (state) => {
            state.loading = true
        })*/
    }
})

export const dogReducer = categoryDodSlice.reducer


