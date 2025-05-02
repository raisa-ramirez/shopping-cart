import { createSlice } from "@reduxjs/toolkit";
import { CartItemsProps } from "../interface";

const cartItems : CartItemsProps[] = [];

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: cartItems,
    reducers: {
        addItem: (state, action) => {
            let updatedId = action.payload.id
            let searchId = state.find(({id}) => id === updatedId)
            if(searchId){
                return state.map((item) => {
                    if(item.id === updatedId ){
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })
            } else {
                state.push(action.payload)
            }
        },
        removeItem: (state, action) => {
            let removedId = action.payload.id
            if(action.payload.quantity>1){
                return state.map((item) => {
                    if(item.id === removedId){
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item
                })
            } else {
                return state.filter((item) => item.id !== removedId)
            }
        },
        removeAll: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        }
    }
})


export const { addItem, removeItem, removeAll } = cartSlice.actions
export default cartSlice.reducer
