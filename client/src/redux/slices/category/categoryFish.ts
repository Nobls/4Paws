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

export const getAllAquariums = createAsyncThunk(
    'products/getAllAquariums',
    async (aquariumId: string) => {
        const response = await axios.get(`/shop/fish/aquariums/${aquariumId}`);
        return response.data
    }
)

export const getAllLivingInhabitants = createAsyncThunk(
    'products/getAllLivingInhabitants',
    async (livingInhabitantsId: string) => {
        const response = await axios.get(`/shop/fish/livingInhabitants/${livingInhabitantsId}`);
        return response.data
    }
)

export const getAllAquariumsAndPedestals = createAsyncThunk(
    'products/getAllAquariumsAndPedestals',
    async (aquariumsAndPedestalsId: string) => {
        const response = await axios.get(`/shop/fish/aquariumsAndPedestals/${aquariumsAndPedestalsId}`);
        return response.data
    }
)

export const getAllFishFood = createAsyncThunk(
    'products/getAllFishFood',
    async (fishFoodId: string) => {
        const response = await axios.get(`/shop/fish/fishFood/${fishFoodId}`);
        return response.data
    }
)

export const getAllDecorations = createAsyncThunk(
    'products/getAllDecorations',
    async (decorationsId: string) => {
        const response = await axios.get(`/shop/fish/decorations/${decorationsId}`);
        return response.data
    }
)

export const getAllEquipment = createAsyncThunk(
    'products/getAllEquipment',
    async (equipmentId: string) => {
        const response = await axios.get(`/shop/fish/equipment/${equipmentId}`);
        return response.data
    }
)

export const getAllChemistryForFish = createAsyncThunk(
    'products/getAllChemistryForFish',
    async (chemistryForFishId: string) => {
        const response = await axios.get(`/shop/fish/chemistryForFish/${chemistryForFishId}`);
        return response.data
    }
)

const categoryFishSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllAquariums.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllAquariums.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllAquariums.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllLivingInhabitants.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllLivingInhabitants.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllLivingInhabitants.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllAquariumsAndPedestals.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllAquariumsAndPedestals.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllAquariumsAndPedestals.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllFishFood.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllFishFood.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllFishFood.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllDecorations.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllDecorations.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllDecorations.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllEquipment.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllEquipment.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllEquipment.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getAllChemistryForFish.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllChemistryForFish.fulfilled, (state, action) => {
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getAllChemistryForFish.rejected, (state) => {
            state.loading = true
        })
    }
})

export const fishReducer = categoryFishSlice.reducer