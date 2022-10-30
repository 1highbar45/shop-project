import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { profileService } from '../../../services/profileService'
import ListView from '../../../components/ListView/ListView'
import Paginate from '../../../components/Paginate/Paginate'
import ProductCard, { ProductCardLoading } from '../../../components/ProductCard/ProductCard'
import useQuery from '../../../hooks/useQuery'
import { convertQueryURLToObject } from '../../../utils/url'
import WishlistCard from '../../../components/WishlistCard/WishlistCard'

export default function Wishlist() {
    const query = useSearchParams()
    const objUrl = convertQueryURLToObject(query[0].toString())

    const page = parseInt(objUrl.page || '1')
    const { data: products, loading, paginate, reFetch } = useQuery(() => profileService.getWishList(`?page=${page}`), [page])

    const onRemoveWishlist = () => {
        reFetch()
    }
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Products */}
            <div className="row">
                {/* Item */}
                {/* <ListView
                    LoadingComponent={ProductCardLoading}
                    isLoading={loading}
                    items={products}
                    render={e => <WishlistCard onRemoveWishlist={onRemoveWishlist} key={e.id} {...e.product} />}
                    loadingCount={6}
                /> */}
                {loading && ProductCardLoading ? [...Array(6)].map((_, i) => <ProductCardLoading key={i} />)
                    : products?.map((e, i) => (
                        <WishlistCard onRemoveWishlist={onRemoveWishlist} key={e.id} {...e.product} />
                    ))}
            </div>
            {/* Pagination */}
            <Paginate totalPage={paginate?.totalPage} />
        </div>

    )
}
