import { createSlice } from "@reduxjs/toolkit";
import { CartItemsProps } from "../interface";

const cartItems : CartItemsProps[] = [
    {
      id: 1,
      title: 'Mouse inalambrico logitech mx anywhere 3s ',
      price: 99.95,
      quantity: 1
    },
    {
      id: 2,
      title: 'Mouse inalambrico logitech pro x superlight 2',
      price: 159.95,
      quantity: 2
    },
  ];

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: cartItems,
    reducers: {
        addItem : (state, action) => {
            console.log(action)
        },
        removeItem: (state, action) => {
            if(action.payload.quantity>1){
                return state.map((item) => {
                    if(item.id === action.payload.id){
                        return {
                            ...item,
                            quantity: item.quantity -1
                        }
                    }
                    return item
                })
            } else {
                return state.filter((item) => item.id !== action.payload.id)
            }
        }
    }
})


export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
