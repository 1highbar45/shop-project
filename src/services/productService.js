import api from "../constants/api"

export const productService = {
    getProduct(query = '') {
        return api.get(`/product${query}`)
    },

    getProductDetail(slug) {
        return api.get(`/product?slug=${slug}`)
    }
}