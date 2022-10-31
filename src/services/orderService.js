import api from "../constants/api"

export const orderService = {
    getAllOrder() {
        return api.get('/ecommerce/v1/order')
    },

    getOrderDetail(id) {
        return api.get(`/ecommerce/v1/order/${id}`)
    },

    addOrder(data) {
        return api.post(`/ecommerce/v1/order`, { data })
    }
}