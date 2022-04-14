import api from "../constants/api"

export const profileService = {
    getWishList(query = '') {
        return api.get(`/product${query}`)
    }
}