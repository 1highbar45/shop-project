import api from "../constants/api"

export const authService = {
    login(data) {
        // console.log('login', data);
        return api.post('/login', data)
    },

    refreshToken(data) {
        return api.post('/refresh-token', data)
    },

    register(data) {
        return api.post('/register', data)
    },

}