import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios/axios";


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
    code: string,
}

export interface ProductState {
    product: ProductCard;
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    product: {
        title: '',
        productImage: '',
        weight: '',
        quantity: '',
        category: '',
        countryOfManufacture: '',
        description: '',
        price: '',
        brand: '',
        tags: '',
        code: '',
    },
    loading: false,
    error: null,
};

export const getOneProduct = createAsyncThunk(
    'product/getOneProduct',
    async (id: any) => {
        const response = await axios.get(`/shop/product/${id}`)
        return response.data
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOneProduct.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getOneProduct.fulfilled, (state, action) => {
            state.product = action.payload
            state.loading = false
        })
        builder.addCase(getOneProduct.rejected, (state) => {
            state.loading = true
        })
    }
})

export const productReducer = productSlice.reducer