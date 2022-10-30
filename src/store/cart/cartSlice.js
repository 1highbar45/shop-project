import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../constants/api';
import { cartService } from '../../services/cartService';

export const fetchGetCart = createAsyncThunk(
    'cart/getCart',
    async () => {
        const res = await cartService.getCart();
        return res;
    }
);

export const fetchAddCart = createAsyncThunk(
    'cart/addCart',
    async (id, quantity) => {
        const res = await cartService.updateQuantity(id, quantity);
        return res;
    }
);

export const fetchRemoveCart = createAsyncThunk(
    'cart/removeCart',
    async (id) => {
        const res = await cartService.removeCart(id);
        return res;
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        // cart: (state, action) => ({ cart: action.payload }),
    },
    extraReducers: {
        [fetchGetCart.fulfilled]: (state, { payload }) => {
            state.cart = payload?.data;
        },
    },
});

export const {
    setDrawerSettingTab,
} = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
