import api from "../constants/api"

export const cartService = {
    getCart() {
        return api.get('/ecommerce/v1/cart')
    },

    updateQuantity(id, quantity) {
        return api.put(`/ecommerce/v1/cart/quantity/${id}`, {
            quantity
        })
    },

    removeCart(id) {
        return api.delete(`/ecommerce/v1/cart/remove-item/${id}`)
    }
}