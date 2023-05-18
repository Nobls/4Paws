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

export const getAllDryFoodForBirds = createAsyncThunk(
    'products/getAllDryFoodForBirds',
    async (dryFoodForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/dryFoodForBirds/${dryFoodForBirdsId}`);
        return response.data;
    }
)
export const getCategoryDryFoodForBird = createAsyncThunk(
    'products/getCategoryDryFoodForBird',
    async (dryFoodForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/product/dryFoodForBirds/${dryFoodForBirdsId}`);
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

export const getCategoryVitaminsForBird = createAsyncThunk(
    'products/getCategoryVitaminsForBird',
    async (vitaminsForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/product/vitaminsForBirds/${vitaminsForBirdsId}`);
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

export const getCategoryBirdcageForBird = createAsyncThunk(
    'products/getCategoryBirdcageForBird',
    async (birdcageForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/product/birdcageForBirds/${birdcageForBirdsId}`);
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

export const getCategoryBathForBird = createAsyncThunk(
    'products/getCategoryBathForBird',
    async (bathForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/product/bathForBirds/${bathForBirdsId}`);
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

export const getCategoryToysForBird = createAsyncThunk(
    'products/getCategoryToysForBird',
    async (toysForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/product/toysForBirds/${toysForBirdsId}`);
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

export const getCategoryFillersAndPadsForBird = createAsyncThunk(
    'products/getCategoryFillersAndPadsForBird',
    async (fillersAndPadsForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/product/fillersAndPadsForBirds/${fillersAndPadsForBirdsId}`);
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

export const getCategoryAccessoriesForBird = createAsyncThunk(
    'products/getCategoryAccessoriesForBird',
    async (accessoriesForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/product/accessoriesForBirds/${accessoriesForBirdsId}`);
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

export const getCategoryDishesForBird = createAsyncThunk(
    'products/getCategoryDishesForBird',
    async (dishesForBirdsId:string ) => {
        const response = await axios.get(`/shop/bird/product/dishesForBirds/${dishesForBirdsId}`);
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

        builder.addCase(getCategoryDryFoodForBird.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryDryFoodForBird.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryDryFoodForBird.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryVitaminsForBird.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryVitaminsForBird.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryVitaminsForBird.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryBirdcageForBird.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryBirdcageForBird.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryBirdcageForBird.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryBathForBird.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryBathForBird.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryBathForBird.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryToysForBird.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryToysForBird.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryToysForBird.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryFillersAndPadsForBird.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryFillersAndPadsForBird.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryFillersAndPadsForBird.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryAccessoriesForBird.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryAccessoriesForBird.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryAccessoriesForBird.rejected, (state) => {
            state.loading = true
        })

        builder.addCase(getCategoryDishesForBird.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCategoryDishesForBird.fulfilled, (state, action) => {
            state.category = action.payload
            state.loading = false
        })
        builder.addCase(getCategoryDishesForBird.rejected, (state) => {
            state.loading = true
        })


    }
})

export const birdReducer = categoryBirdSlice.reducer


