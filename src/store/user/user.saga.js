import { call, put, takeLatest } from "redux-saga/effects"
import { userActions, actionFetchUser, actionFetchChangePassword, actionFetchUpdateInfo } from "."
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

function* fetchChangePassword(action) {
    try {
        const res = yield call(userService.changePassword, action.payload.data)
        if (res.error) {
            return action?.payload?.error(res.error)
        }

        action?.payload?.success?.()
    } finally {
        action?.payload?.end?.()
    }
}

function* fetchUpdateInfo(action) {
    try {
        const res = yield call(userService.updateInfo, action.payload.data)
        if (res.error) {
            return action?.payload?.error(res.error)
        }

        if (res.updateCount) {
            yield put(actionFetchUser())
            action?.payload?.success?.()
        }
    } finally {
        action?.payload?.end?.()
    }
}

export function* userSaga() {
    yield takeLatest(actionFetchUser, fetchUser)
    yield takeLatest(actionLogout, logout)

    yield takeLatest(actionFetchChangePassword, fetchChangePassword)
    yield takeLatest(actionFetchUpdateInfo, fetchUpdateInfo)
}