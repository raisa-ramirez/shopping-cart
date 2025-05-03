import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductProps, ProductState } from "../interface";
import { showProducts } from "../services";

const fetchProducts = createAsyncThunk<ProductProps[]>('products/fetchProducts', () => showProducts())

const initialState: ProductState = {
  loading: false,
  products: [],
  error: ''
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState: initialState,
    reducers: {
      orderByPrice: (state, action) => {
        if(action.payload.order === 'asc'){
          state.products.sort((a, b) => a.price - b.price);
        } else if(action.payload.order ==='desc') {
          state.products.sort((a, b) => b.price - a.price);
        }
      }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchProducts.pending, (state) => {
        state.loading = true
      })
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
        state.error = ''
      })
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.products = []
        state.error = action.error.message
      })
    }
})

export { fetchProducts }
export const { orderByPrice } = productSlice.actions
export default productSlice.reducer;
