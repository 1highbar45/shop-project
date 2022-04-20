
export const cartService = {
    getCart() {
        return api.get
    },

    updateQuantity() {
        return api.put(`/ecommerce/v1/cart/quantity`, {
            quantity
        })
    }
}