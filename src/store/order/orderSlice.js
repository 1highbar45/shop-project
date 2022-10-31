import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGetAllOrder = createAsyncThunk(
    'order/getAllOrder',
    async () => {
        const res = await profileService.getAddressList();
        return res;
    }
);

// export const fetchAddCart = createAsyncThunk(
//     'cart/addCart',
//     async (id, quantity) => {
//         const res = await cartService.updateQuantity(id, quantity);
//         return res;
//     }
// );

// export const fetchRemoveCart = createAsyncThunk(
//     'cart/removeCart',
//     async (id) => {
//         const res = await cartService.removeCart(id);
//         return res;
//     }
// );

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: [],
    },
    reducers: {
        // cart: (state, action) => ({ cart: action.payload }),
    },
    extraReducers: {
        [fetchGetAllOrder.fulfilled]: (state, { payload }) => {
            state.order = payload?.data;
        },
    },
});

const orderReducer = orderSlice.reducer;
export default orderReducer;
