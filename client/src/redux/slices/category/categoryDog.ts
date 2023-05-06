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

export const getAllDryFoodForDogs = createAsyncThunk(
    'products/getAllDryFoodForDogs',
    async (dryFoodDogId:string ) => {
        const response = await axios.get(`/shop/dog/dryFoodDog/${dryFoodDogId}`);
        return response.data;
    }
)
export const getCategoryDryFoodForDogs = createAsyncThunk(
    'products/getCategoryDryFoodForDogs',
    async (dryFoodDogId:string ) => {
        const response = await axios.get(`/shop/dog/product/dryFoodDog/${dryFoodDogId}`);
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
export const getCategoryPreservesForDogs = createAsyncThunk(
    'products/getCategoryPreservesForDogs',
    async (preservesForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/product/preservesForDogs/${preservesForDogsId}`);
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

export const getCategoryVitaminsForDogs = createAsyncThunk(
    'products/getCategoryVitaminsForDogs',
    async (vitaminsForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/product/vitaminsForDogs/${vitaminsForDogsId}`);
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

export const getCategoryHomeForDogs = createAsyncThunk(
    'products/getCategoryHomeForDogs',
    async (homeForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/product/homeForDogs/${homeForDogsId}`);
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

export const getCategoryToysForDogs = createAsyncThunk(
    'products/getCategoryToysForDogs',
    async (toysForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/product/toysForDogs/${toysForDogsId}`);
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

export const getCategoryCarryingForDogs = createAsyncThunk(
    'products/getCategoryCarryingForDogs',
    async (carryingForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/product/carryingForDogs/${carryingForDogsId}`);
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

export const getCategoryCosmeticsForDogs = createAsyncThunk(
    'products/getCategoryCosmeticsForDogs',
    async (cosmeticsForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/product/cosmeticsForDogs/${cosmeticsForDogsId}`);
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

export const getCategoryClothesForDogs = createAsyncThunk(
    'products/getCategoryClothesForDogs',
    async (clothesForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/product/clothesForDogs/${clothesForDogsId}`);
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

export const getCategoryDishesForDogs = createAsyncThunk(
    'products/getCategoryDishesForDogs',
    async (dishesForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/product/dishesForDogs/${dishesForDogsId}`);
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

export const getCategoryAmmunitionForDogs = createAsyncThunk(
    'products/getCategoryAmmunitionForDogs',
    async (ammunitionForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/product/ammunitionForDogs/${ammunitionForDogsId}`);
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

export const getCategoryToiletsForDogs = createAsyncThunk(
    'products/getCategoryToiletsForDogs',
    async (toiletsForDogsId:string ) => {
        const response = await axios.get(`/shop/dog/product/toiletsForDogs/${toiletsForDogsId}`);
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
        //
        builder.addCase(getCategoryDryFoodForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryDryFoodForDogs.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryDryFoodForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryPreservesForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryPreservesForDogs.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryPreservesForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryVitaminsForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryVitaminsForDogs.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryVitaminsForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryHomeForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryHomeForDogs.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryHomeForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryToysForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryToysForDogs.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryToysForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryCarryingForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryCarryingForDogs.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryCarryingForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryCosmeticsForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryCosmeticsForDogs.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryCosmeticsForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryClothesForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryClothesForDogs.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryClothesForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryDishesForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryDishesForDogs.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryDishesForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryAmmunitionForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryAmmunitionForDogs.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryAmmunitionForDogs.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryToiletsForDogs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryToiletsForDogs.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryToiletsForDogs.rejected, (state) => {
            state.loading = true
        })
    }
})

export const dogReducer = categoryDodSlice.reducer


