import { createAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
}

export const { reducer: cartReducer, actions: cartActions } = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        cart: (state, action) => ({ cart: action.payload }),
    },
})

export const actionFetchCart = createAction('cart/fetchCart')
export const actionAddToCart = createAction(`cart/logout`)