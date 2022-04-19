import { call, put, takeLatest, putResolve } from "redux-saga/effects";
import { actionFetchLogin, actionLogout, authActions } from ".";
import { actionFetchUser } from "../user";
import { authService } from "../../services/authService"
import { clearToken, clearUser, setToken } from "../../utils/token"

function* fetchLogin(action) {
    try {
        // console.log('fetch login', action);
        yield putResolve(authActions.statusFetchLogin(true))

        const res = yield call(authService.login, action.payload)
        // console.log('res', res);
        if (res.message) {
            return yield put(authActions.errorMessage(res.message))
        }

        setToken(res.data)
        yield put(actionFetchUser())

        // const user = yield call(userService.getInfo)
        // setUser(user.data)

        // yield put(userActions.setUser(user.data))

    } catch (error) {
        console.log(error);
    } finally {
        yield put(authActions.statusFetchLogin(false))
    }
}

function* logout() {
    clearToken()
    clearUser()
}

export function* authSaga() {
    yield takeLatest(actionFetchLogin, fetchLogin)
    yield takeLatest(actionLogout, logout)
}