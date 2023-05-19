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

export const getAllDryFoodForRodents = createAsyncThunk(
    'products/getAllDryFoodForRodents',
    async (dryFoodForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/dryFoodForRodents/${dryFoodForRodentsId}`);
        return response.data
    }
)
export const getCategoryDryFoodForRodents = createAsyncThunk(
    'products/getCategoryDryFoodForRodents',
    async (dryFoodForRodentsId:string ) => {
        const response = await axios.get(`/shop/rodent/product/dryFoodForRodents/${dryFoodForRodentsId}`);
        return response.data;
    }
)

export const getAllVitaminsForRodents = createAsyncThunk(
    'products/getAllVitaminsForRodents',
    async (vitaminsForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/vitaminsForRodents/${vitaminsForRodentsId}`);
        return response.data
    }
)
export const getCategoryVitaminsForRodents = createAsyncThunk(
    'products/getCategoryVitaminsForRodents',
    async (vitaminsForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/product/vitaminsForRodents/${vitaminsForRodentsId}`);
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
export const getCategoryAccessoriesForRodents = createAsyncThunk(
    'products/getCategoryAccessoriesForRodents',
    async (accessoriesForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/product/accessoriesForRodents/${accessoriesForRodentsId}`);
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
export const getCategoryCellsForRodents = createAsyncThunk(
    'products/getCategoryCellsForRodents',
    async (cellsForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/product/cellsForRodents/${cellsForRodentsId}`);
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
export const getCategoryBathingForRodents = createAsyncThunk(
    'products/getCategoryBathingForRodents',
    async (bathingForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/product/bathingForRodents/${bathingForRodentsId}`);
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
export const getCategoryToysForRodents = createAsyncThunk(
    'products/getCategoryToysForRodents',
    async (toysForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/product/toysForRodents/${toysForRodentsId}`);
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
export const getCategoryExtenderForRodents = createAsyncThunk(
    'products/getCategoryExtenderForRodents',
    async (extenderForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/product/extenderForRodents/${extenderForRodentsId}`);
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
export const getCategoryDishesForRodents = createAsyncThunk(
    'products/getCategoryDishesForRodents',
    async (dishesForRodentsId: string) => {
        const response = await axios.get(`/shop/rodent/product/dishesForRodents/${dishesForRodentsId}`);
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

            builder.addCase(getCategoryDryFoodForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getCategoryDryFoodForRodents.fulfilled, (state, action) => {
                state.category = action.payload
                state.loading = false
            })
            builder.addCase(getCategoryDryFoodForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getCategoryVitaminsForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getCategoryVitaminsForRodents.fulfilled, (state, action) => {
                state.category = action.payload
                state.loading = false
            })
            builder.addCase(getCategoryVitaminsForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getCategoryAccessoriesForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getCategoryAccessoriesForRodents.fulfilled, (state, action) => {
                state.category = action.payload
                state.loading = false
            })
            builder.addCase(getCategoryAccessoriesForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getCategoryCellsForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getCategoryCellsForRodents.fulfilled, (state, action) => {
                state.category = action.payload
                state.loading = false
            })
            builder.addCase(getCategoryCellsForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getCategoryBathingForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getCategoryBathingForRodents.fulfilled, (state, action) => {
                state.category = action.payload
                state.loading = false
            })
            builder.addCase(getCategoryBathingForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getCategoryToysForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getCategoryToysForRodents.fulfilled, (state, action) => {
                state.category = action.payload
                state.loading = false
            })
            builder.addCase(getCategoryToysForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getCategoryExtenderForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getCategoryExtenderForRodents.fulfilled, (state, action) => {
                state.category = action.payload
                state.loading = false
            })
            builder.addCase(getCategoryExtenderForRodents.rejected, (state) => {
                state.loading = true
            })

            builder.addCase(getCategoryDishesForRodents.pending, (state) => {
                state.loading = true
            })
            builder.addCase(getCategoryDishesForRodents.fulfilled, (state, action) => {
                state.category = action.payload
                state.loading = false
            })
            builder.addCase(getCategoryDishesForRodents.rejected, (state) => {
                state.loading = true
            })

        }
    }
);

export const rodentReducer = CategoryRodentSlice.reducer;