import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../interface";

const products : ProductProps[]= [
    {
      id: 1,
      title: 'Mouse inalambrico logitech mx anywhere 3s ',
      price: 99.95
    },
    {
      id: 2,
      title: 'Mouse inalambrico logitech pro x superlight 2',
      price: 159.95
    },
    {
      id: 3,
      title: 'Mouse inalambrico logitech semipro x superlight 2',
      price: 100.95
    },
    {
      id: 4,
      title: 'Mouse inalambrico bluetooth logitech signature m650',
      price: 39.95
    },
    {
      id: 5,
      title: 'Mouse inalambrico bluetooth logitech signature m650',
      price: 39.95
    },
    {
      id: 6,
      title: 'Mouse inalambrico bluetooth logitech signature m650',
      price: 39.95
    },
    {
      id: 7,
      title: 'Mouse inalambrico bluetooth logitech signature m650',
      price: 39.95
    }
];

const productSlice = createSlice({
    name: 'productSlice',
    initialState: products,
    reducers: {
      orderByPrice: (state) => {
        state.sort((a:ProductProps, b:ProductProps) => (a.price < b.price) ? 1 : ((a.price > b.price) ? -1 : 0))
      }
    }
})

export const {orderByPrice} = productSlice.actions
export default productSlice.reducer;
