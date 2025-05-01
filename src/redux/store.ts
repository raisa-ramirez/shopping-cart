import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice'
import cartsSlice from './cartSlice'

const store = configureStore({
    reducer: {
        products: productSlice,
        cartItems: cartsSlice
    }
})


export default store;
