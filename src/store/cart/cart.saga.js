import { takeLatest } from "redux-saga/effects";
import { actionAddToCart, actionFetchCart } from ".";
import { cartService } from "../../services/cartService";
import { actionFetchLogin, actionLogout } from "../auth";
import { userActions } from "../user";

function* fetchCart() {
    try {
        if (getToken()) {
            const res = yield call(cartService.getCart)
            yield put(cartActions.set({ cart: res.data }))
        }
    } finally { }
}

function* fetchAddToCart(action) {
    try {
        const res = yield call(cartService.updateQuantity, action.payload.id, action.payload.quantity)
        if (res.updateCount) {
            yield put(actionFetchCart())
        }
    } finally { }
}

function* clearCart() {
    try {
        yield put(cartAction.set({ cart: {} }))
    } finally {

    }
}

export function* cartSaga() {
    yield takeLatest([actionFetchCart, userActions.setUser], fetchCart)
    yield takeLatest(actionAddToCart, fetchAddToCart)

    yield takeLatest(actionLogout, clearCart())
}