import api from "../constants/api"

export const profileService = {
    getWishList(query = '') {
        return api.get('/ecommerce/v1/profile/wishlist')
    },
    addWishList(id) {
        return api.post(`/ecommerce/v1/profile/wishlist/${id}`)
    },
    removeWishList(id) {
        return api.delete(`/ecommerce/v1/profile/wishlist/${id}`)
    },
    
    addAddress(data) {
        return api.post('/ecommerce/v1/profile/address', data)
    },
    editAddress(id, data) {
        return api.put(`/ecommerce/v1/profile/address/${id}`, data)
    },
    getAddressListDefault() {
        return api.get(`/ecommerce/v1/profile/address/default`)
    },
    getAddressList() {
        return api.get(`/ecommerce/v1/profile/address`)
    },
    getAddressDetail(id) {
        return api.get(`/ecommerce/v1/profile/address/${id}`)
    },
    deleteAddress(id) { 
        return api.delete(`/ecommerce/v1/profile/address/${id}`)
    },
}