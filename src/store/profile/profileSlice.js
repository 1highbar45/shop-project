import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { profileService } from '../../services/profileService';

export const fetchGetAddressList = createAsyncThunk(
    'profile/getAddressList',
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

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        address: [],
    },
    reducers: {
        // cart: (state, action) => ({ cart: action.payload }),
    },
    extraReducers: {
        [fetchGetAddressList.fulfilled]: (state, { payload }) => {
            state.address = payload?.data;
        },
    },
});

const profileReducer = profileSlice.reducer;
export default profileReducer;
