import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { actionFetchLogin, authReducer } from './auth'
import rootSaga from './saga'
import { actionFetchUser, userReducer } from './user'
import thunk from "redux-thunk"
import cartReducer from './cart/cartSlice'

const saga = createSagaMiddleware()

const store = configureStore({
    reducer: {
        // product: productReducer,
        auth: authReducer,
        user: userReducer,
        cart: cartReducer
    },
    middleware: [saga, thunk]
})

saga.run(rootSaga)

store.dispatch(actionFetchUser())

export default store