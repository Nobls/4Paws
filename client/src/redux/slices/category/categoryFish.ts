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

type CategoryObject = {
    category: string;
}

interface ProductsState {
    products: ProductCard[];
    category: CategoryObject;
    loading: boolean;
    error: string | null;
}


const initialState: ProductsState = {
    products: [],
    category: {
        category: ''
    },
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
export const getCategoryAquariums = createAsyncThunk(
    'products/getCategoryAquariums',
    async (aquariumId: string) => {
        const response = await axios.get(`/shop/fish/product/aquariums/${aquariumId}`);
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
export const getCategoryLivingInhabitants = createAsyncThunk(
    'products/getCategoryLivingInhabitants',
    async (livingInhabitantsId: string) => {
        const response = await axios.get(`/shop/fish/product/livingInhabitants/${livingInhabitantsId}`);
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
export const getCategoryAquariumsAndPedestals = createAsyncThunk(
    'products/getCategoryAquariumsAndPedestals',
    async (aquariumsAndPedestalsId: string) => {
        const response = await axios.get(`/shop/fish/product/aquariumsAndPedestals/${aquariumsAndPedestalsId}`);
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
export const getCategoryFishFood = createAsyncThunk(
    'products/getCategoryFishFood',
    async (fishFoodId: string) => {
        const response = await axios.get(`/shop/fish/product/fishFood/${fishFoodId}`);
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
export const getCategoryDecorations = createAsyncThunk(
    'products/getCategoryDecorations',
    async (decorationsId: string) => {
        const response = await axios.get(`/shop/fish/product/decorations/${decorationsId}`);
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
export const getCategoryEquipment = createAsyncThunk(
    'products/getCategoryEquipment',
    async (equipmentId: string) => {
        const response = await axios.get(`/shop/fish/product/equipment/${equipmentId}`);
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
export const getCategoryChemistryForFish = createAsyncThunk(
    'products/getCategoryChemistryForFish',
    async (chemistryForFishId: string) => {
        const response = await axios.get(`/shop/fish/product/chemistryForFish/${chemistryForFishId}`);
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

        builder.addCase(getCategoryAquariums.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryAquariums.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryAquariums.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryLivingInhabitants.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryLivingInhabitants.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryLivingInhabitants.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryAquariumsAndPedestals.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryAquariumsAndPedestals.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryAquariumsAndPedestals.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryFishFood.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryFishFood.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryFishFood.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryDecorations.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryDecorations.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryDecorations.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryEquipment.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryEquipment.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryEquipment.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryChemistryForFish.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryChemistryForFish.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryChemistryForFish.rejected, (state) => {
            state.loading = true
        })
    }
})

export const fishReducer = categoryFishSlice.reducer