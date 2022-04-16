import { call, put, takeLatest } from "redux-saga/effects"
import { userActions, actionFetchUser } from "."
import { actionLogout } from "../auth"
import { userService } from "../../services/userService"
import { clearUser, getToken, setUser } from "../../utils/token"

function* fetchUser() {
    try {
        if (getToken()) {
            const user = yield call(userService.getInfo)
            // console.log('user', user);
            setUser(user.data)

            yield put(userActions.setUser(user.data))
        }
    } catch (error) {
        console.log(error);
    }
}

function* logout() {
    yield put(userActions.setUser(null))
    clearUser
}

export function* userSaga() {
    yield takeLatest(actionFetchUser, fetchUser)
    yield takeLatest(actionLogout, logout)
}