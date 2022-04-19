import { call, put, takeLatest, putResolve, delay } from "redux-saga/effects";
import { actionFetchLogin, actionFetchRegister, actionLogout, authActions } from ".";
import { actionFetchUser } from "../user";
import { authService } from "../../services/authService"
import { clearToken, clearUser, setToken } from "../../utils/token"

function* fetchLogin(action) {
    try {
        // console.log('fetch login', action);
        // yield putResolve(authActions.statusFetchLogin(true))

        const res = yield call(authService.login, action.payload)
        // console.log('res', res);
        if (res.message) {
            // return yield put(authActions.errorMessage(res.message))
            return action.payload?.error?.(res.message)
        }

        setToken(res.data)
        yield put(actionFetchUser())

        action.payload?.success?.()
        // const user = yield call(userService.getInfo)
        // setUser(user.data)

        // yield put(userActions.setUser(user.data))

    } catch (error) {
        console.log(error);
    } finally {
        action.payload?.end?.()
        // yield put(authActions.statusFetchLogin(false))
    }
}

function* logout() {
    clearToken()
    clearUser()
}

function* fetchRegister(action) {
    try {
        const res = yield call(authService.register, action.payload.data)
        if(res.error){
            return action.payload?.error?.(res.error)
        }

        setToken(res.data)
        yield put(actionFetchUser())

        action.payload?.success?.()
    } finally {
        action.payload?.end?.()
    }
}

export function* authSaga() {
    yield takeLatest(actionFetchLogin, fetchLogin)
    yield takeLatest(actionLogout, logout)

    yield takeLatest(actionFetchRegister, fetchRegister)

}