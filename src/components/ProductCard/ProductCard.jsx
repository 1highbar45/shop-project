import React from 'react'
import { currency } from '../../utils/number'
import Skeleton from '@mui/material/Skeleton';
import { generatePath, Link } from 'react-router-dom';
import { PRODUCT_DETAIL_PATH } from '../../constants/path';
import { profileService } from '../../services/profileService';
import { message } from 'antd';

export const ProductCardLoading = () => {
    return (
        <div className="col-6 col-md-4">
            {/* Card */}
            <div className="card mb-7">
                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    <Skeleton height={280} />
                    {/* Actions */}
                </div>
                {/* Body */}
                <div className="card-body px-0">
                    {/* Title */}
                    <div className="font-weight-bold">
                        <a className="text-body" href="product.html">
                            <Skeleton />
                        </a>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">
                        <Skeleton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ProductCard({ name, real_price, images, slug, _id }) {
    const productDetailPath = generatePath(PRODUCT_DETAIL_PATH, { slug })

    const onClickAddWishlist = async () => {
        const res = await profileService.addWishList(_id)
        if (res.insertCount) {
            message.success('Add product success')
        }
    }

    return (
        <div className="col-6 col-md-4">
            {/* Card */}
            <div className="card mb-7">
                {/* Badge */}
                <div className="badge badge-white card-badge card-badge-left text-uppercase">
                    New
                </div>
                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    <Link className="card-img-hover" to={productDetailPath}>
                        <img className="card-img-top card-img-back" src={images?.[0]?.thumbnail_url} alt="..." />
                        <img className="card-img-top card-img-front" src={images?.[1]?.thumbnail_url || images?.[0]?.thumbnail_url} alt="..." />
                    </Link>
                    {/* Actions */}
                    <div className="card-actions">
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
                                <i className="fe fe-eye" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" onClick={onClickAddWishlist}>
                                <i className="fe fe-heart" />
                            </button>
                        </span>
                    </div>
                </div>
                {/* Body */}
                <div className="card-body px-0">
                    {/* Category */}
                    <div className="font-size-xs">
                        <a className="text-muted" href="shop.html">Shoes</a>
                    </div>
                    {/* Title */}
                    <div className="font-weight-bold">
                        <Link className="text-body" to={productDetailPath}>
                            {name}
                        </Link>
                    </div>
                    {/* Price */}
                    <div className="font-weight-bold text-muted">
                        {currency(real_price)}
                    </div>
                </div>
            </div>
        </div>
    )
}
