import React, { useState } from 'react'
import { Drawer } from 'antd';
import { useQueryURL } from '../../hooks/useQueryURL';
import { generatePath, Link, useNavigate } from 'react-router-dom';
import { productService } from '../../services/productService'
import { currency } from '../../utils/number'
import { PRODUCT_DETAIL_PATH } from '../../constants/path';
import Skeleton from '@mui/material/Skeleton';
import ListView from '../../components/ListView/ListView'

export default function SearchModal({ visible, onClose }) {
    // const queryObj = useQueryURL()
    // console.log(queryObj);
    // const navigate = useNavigate()
    // const [value, setValue] = useState(queryObj.q || '')
    const [value, setValue] = useState()
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const onSearchChange = (ev) => {
        setValue(ev.target.value)
    }

    const onKeyUp = async (ev) => {
        if (ev.key === 'Enter') {
            // navigate('/product' + '?q=' + value)
            setIsLoading(true)
            const product = await productService.getProduct(`?name=${encodeURI(value)}&limit=5`)
            // console.log(product);
            setProduct(product.data)
            setIsLoading(false)
        }
    }

    return (
        <Drawer
            visible={visible}
            closeIcon={null}
            headerStyle={{ display: 'none' }}
            bodyStyle={{ padding: 0 }}
            width={470}
            onClose={onClose}
        >
            <div >
                <div className="modal-dialog modal-dialog-vertical" role="document">
                    <div className="modal-content">
                        {/* Close */}
                        <button type="button" className="close" onClick={onClose} data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true" />
                        </button>
                        {/* Header*/}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Search Products</strong>
                        </div>
                        {/* Body: Form */}
                        <div className="modal-body">
                            <div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="modalSearchCategories">Categories:</label>
                                    <select className="custom-select" id="modalSearchCategories">
                                        <option selected>All Categories</option>
                                        <option>Women</option>
                                        <option>Men</option>
                                        <option>Kids</option>
                                    </select>
                                </div>
                                <div className="input-group input-group-merge">
                                    <input value={value} onKeyUp={onKeyUp} onChange={onSearchChange} className="form-control" type="search" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-border" type="submit">
                                            <i className="fe fe-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Body: Results (add `.d-none` to disable it) */}
                        <div className="modal-body border-top font-size-sm">
                            {/* Heading */}
                            <p>Search Results:</p>
                            {/* Items */}
                            <ListView
                                LoadingComponent={SearchItemLoading}
                                isLoading={isLoading}
                                items={product}
                                render={e => <SearchItem key={e._id} {...e} />}
                                loadingCount={5}
                            />
                            {
                                product.length === 0 && <p>Ko co san pham nao nhu ban tim kiem</p>
                            }
                            {/* Button */}
                            <Link className="btn btn-link px-0 text-reset" to={'/product' + '?q=' + value} onClick={ev => onClose()}>
                                View All <i className="fe fe-arrow-right ml-2" />
                            </Link>
                        </div>
                        {/* Body: Empty (remove `.d-none` to disable it) */}
                        <div className="d-none modal-body">
                            {/* Text */}
                            <p className="mb-3 font-size-sm text-center">
                                Nothing matches your search
                            </p>
                            <p className="mb-0 font-size-sm text-center">
                                😞
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    )
}

const SearchItemLoading = () => {
    return (
        <div className="row align-items-center position-relative mb-5">
            <div className="col-4 col-md-3">
                {/* Image */}
                <Skeleton width={44} height={44} />
            </div>
            <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                    <Skeleton height={43} variant="text" />
                    <Skeleton height={20} width="30%" variant="text" />
                </p>
            </div>
        </div>
    )
}

const SearchItem = ({ name, real_price, price, thumbnail_url, slug }) => {
    return (
        <div className="row align-items-center position-relative mb-5">
            <div className="col-4 col-md-3">
                {/* Image */}
                <img className="img-fluid" src={thumbnail_url} alt="..." />
            </div>
            <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                    <Link className="stretched-link text-body" to={generatePath(PRODUCT_DETAIL_PATH, { slug })}>{name}</Link> <br />
                    <span className="text-primary">{currency(real_price)}</span>
                </p>
            </div>
        </div>
    )
}