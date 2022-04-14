import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    errorMessage: '',
    isFetchLogin: false
}

export const { reducer: authReducer, actions: authActions, name } = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        errorMessage: (state, action) => ({ errorMessage: action.payload }),
        statusFetchLogin: (state, action) => ({ isFetchLogin: action.payload })
    }
})

export const actionFetchLogin = createAction(`${name}/fetchLogin`)
export const actionLogout = createAction(`${name}/logout`)