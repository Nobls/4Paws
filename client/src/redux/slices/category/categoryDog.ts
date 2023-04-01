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
export const getAllСlothesForDogs = createAsyncThunk(
    'products/getAllСlothesForDogs',
    async (clothesForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/cosmeticsForDogs/${clothesForDogsId}`);
        return response.data;
    }
)

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
        builder.addCase(getAllСlothesForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllСlothesForDogs.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllСlothesForDogs.rejected, (state) => {
            state.loading = true
        })
    }
})

export const dogReducer = categoryDodSlice.reducer


