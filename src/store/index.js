import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { actionFetchLogin, authReducer } from './auth'
import rootSaga from './saga'
import { actionFetchUser, userReducer } from './user'
import thunk from "redux-thunk"
import cartReducer from './cart/cartSlice'
import orderReducer from './order/orderSlice'
import profileReducer from './profile/profileSlice'

const saga = createSagaMiddleware()

const store = configureStore({
    reducer: {
        // product: productReducer,
        auth: authReducer,
        user: userReducer,
        cart: cartReducer,
        profile: profileReducer,
        order: orderReducer,
    },
    middleware: [saga, thunk]
})

saga.run(rootSaga)

store.dispatch(actionFetchUser())

export default store