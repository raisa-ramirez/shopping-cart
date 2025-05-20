import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../interface";


const initialState: ProductState = {
  filter: 'desc',
  products: []
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState: initialState,
    reducers: {
      setProducts: (state, action) => {
        state.products = action.payload
      },
      orderByPrice: (state, action) => {
        state.filter = action.payload.order
        if(action.payload.order === 'asc'){
          state.products.sort((a, b) => a.price - b.price);
        } else if(action.payload.order ==='desc') {
          state.products.sort((a, b) => b.price - a.price);
        }
      }
    }
})

export const { setProducts, orderByPrice } = productSlice.actions
export default productSlice.reducer;
