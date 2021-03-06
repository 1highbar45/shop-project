import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Tab from '../../components/Tab/Tab'
import { HOME_PATH } from '../../constants/path'
import useQuery from '../../hooks/useQuery'
import { productService } from '../../services/productService'
import { currency } from '../../utils/number'

export default function ProductDetail() {
    // const [tabActive, setTabActive] = useState(0)
    // const [tabShow, setTabShow] = useState(0)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setTabShow(tabActive)
    //     }, 100)
    // }, [tabActive])


    // const changeTab = (i) => (ev) => {
    //     ev.preventDefault()
    //     setTabActive(i)
    // }

    const { slug } = useParams()

    const { data: detail, loading } = useQuery(() => productService.getProductDetail(slug))

    console.log(detail);

    if (loading) {
        return null
    }



    return (
        <div>
            {/* BREADCRUMB */}
            <nav className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                                <li className="breadcrumb-item">
                                    <a className="text-gray-400" href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a className="text-gray-400" href="shop.html">Shop</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    {detail[0].name}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </nav>
            {/* PRODUCT */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    {/* Card */}
                                    <div className="card">
                                        {/* Badge */}
                                        <div className="badge badge-primary card-badge text-uppercase">
                                            Sale
                                        </div>
                                        {/* Slider */}
                                        <div className="mb-4" data-flickity="{&quot;draggable&quot;: false, &quot;fade&quot;: true}" id="productSlider">
                                            {/* Item */}
                                            <a href={detail[0]?.images[0]?.large_url} data-fancybox>
                                                <img src={detail[0]?.images[0]?.large_url} alt="..." className="card-img-top" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 pl-lg-10">
                                    {/* Header */}
                                    <div className="row mb-1">
                                        <div className="col">
                                            {/* Preheading */}
                                            {/* <a className="text-muted" href="shop.html">Sneakers</a> */}
                                        </div>
                                        <div className="col-auto">
                                            {/* Rating */}
                                            <div className="rating font-size-xs text-dark" data-value={detail[0].rating_average}>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                            <a className="font-size-sm text-reset ml-2" href="#reviews">
                                                Reviews (6)
                                            </a>
                                        </div>
                                    </div>
                                    {/* Heading */}
                                    <h3 className="mb-2">{detail[0].name}</h3>
                                    {/* Price */}
                                    <div className="mb-7">
                                        <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">{currency(detail[0].price)}</span>
                                        <span className="ml-1 font-size-h5 font-weight-bolder text-primary">{currency(detail[0].real_price)}</span>
                                        <span className="font-size-sm ml-1">(
                                            {detail[0].stock_item.qty > 0
                                                ? "In Stock"
                                                : "Out of Stock"}
                                            )
                                        </span>
                                    </div>
                                    {/* Form */}
                                    <form>
                                        <div className="form-group">
                                            {/* Radio */}
                                            <div className="mb-2">
                                                {/* <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                    <input type="radio" className="custom-control-input" name="sizeRadio" id="sizeRadioOne" defaultValue={6} data-toggle="form-caption" data-target="#sizeCaption" defaultChecked/>
                                                    <label className="custom-control-label" htmlFor="sizeRadioOne">6</label>
                                                </div> */}
                                            </div>
                                            <div className="form-row mb-7">
                                                <div className="col-12 col-lg-auto">
                                                    {/* Quantity */}
                                                    <select className="custom-select mb-2">
                                                        <option value={1} selected>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 col-lg">
                                                    {/* Submit */}
                                                    <button type="submit" className="btn btn-block btn-dark mb-2">
                                                        Add to Cart <i className="fe fe-shopping-cart ml-2" />
                                                    </button>
                                                </div>
                                                <div className="col-12 col-lg-auto">
                                                    {/* Wishlist */}
                                                    <button className="btn btn-outline-dark btn-block mb-2" data-toggle="button">
                                                        Wishlist <i className="fe fe-heart ml-2" />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Text */}
                                            <p>
                                                <span className="text-gray-500">Is your size/color sold out?</span>
                                                <a className="text-reset text-decoration-underline" data-toggle="modal" href="#modalWaitList">Join the
                                                    Wait List!</a>
                                            </p>
                                            {/* Share */}
                                            <p className="mb-0">
                                                <span className="mr-4">Share:</span>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-pinterest-p" />
                                                </a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* DESCRIPTION */}
            <section className="pt-11">
                <div className="container">
                    <div className="row">
                        <Tab>
                            <div className="col-12">
                                {/* Nav */}
                                <div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
                                    <Tab.Title id='description'>Description</Tab.Title>
                                    <Tab.Title id='sizefit'>Size &amp; Fit</Tab.Title>
                                    <Tab.Title id='shippingreturn'>Shipping &amp; Return</Tab.Title>

                                    {/* <a onClick={changeTab(0)} className={`nav-link ${tabActive === 0 ? 'active' : ''}`} data-toggle="tab" href="#descriptionTab">
                                    Description
                                </a>
                                <a onClick={changeTab(1)} className={`nav-link ${tabActive === 1 ? 'active' : ''}`} data-toggle="tab" href="#sizeTab">
                                    Size &amp; Fit
                                </a>
                                <a onClick={changeTab(2)} className={`nav-link ${tabActive === 2 ? 'active' : ''}`} data-toggle="tab" href="#shippingTab">
                                    Shipping &amp; Return
                                </a> */}
                                </div>
                                {/* Content */}
                                <div className="tab-content">
                                    <Tab.Content id='description'>
                                        <div className="row justify-content-center py-9">
                                            <div className="col-12 col-lg-10 col-xl-8">
                                                <div className="row">
                                                    <div className="col-12">
                                                        {/* Text */}
                                                        <p className="text-gray-500">
                                                            {detail[0].short_description}
                                                        </p>
                                                    </div>
                                                    {detail[0].specifications?.map((element, index) => (
                                                        <div className="col-12 col-md-6" key={index}>
                                                            {/* List */}
                                                            <ul className="list list-unstyled mb-md-0 text-gray-500">
                                                                {
                                                                    element.attributes?.map((e, i) => (
                                                                        <li key={i}>
                                                                            <strong className="text-body">{e.name}</strong>: {e.value}
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Content>
                                    <Tab.Content id='sizefit'>
                                        <div className="row justify-content-center py-9">
                                            <div className="col-12 col-lg-10 col-xl-8">
                                                <div className="row">
                                                    <div className="col-12 col-md-6">
                                                        {/* Text */}
                                                        <p className="mb-4">
                                                            <strong>Fitting information:</strong>
                                                        </p>
                                                        {/* List */}
                                                        <ul className="mb-md-0 text-gray-500">
                                                            <li>
                                                                Upon seas hath every years have whose
                                                                subdue creeping they're it were.
                                                            </li>
                                                            <li>
                                                                Make great day bearing.
                                                            </li>
                                                            <li>
                                                                For the moveth is days don't said days.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        {/* Text */}
                                                        <p className="mb-4">
                                                            <strong>Model measurements:</strong>
                                                        </p>
                                                        {/* List */}
                                                        <ul className="list-unstyled text-gray-500">
                                                            <li>Height: 1.80 m</li>
                                                            <li>Bust/Chest: 89 cm</li>
                                                            <li>Hips: 91 cm</li>
                                                            <li>Waist: 65 cm</li>
                                                            <li>Model size: M</li>
                                                        </ul>
                                                        {/* Size */}
                                                        <p className="mb-0">
                                                            <img src="/img/icons/icon-ruler.svg" alt="..." className="img-fluid" />
                                                            <a className="text-reset text-decoration-underline ml-3" data-toggle="modal" href="#modalSizeChart">Size chart</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Content>
                                    <Tab.Content id='shippingreturn'>
                                        <div className="row justify-content-center py-9">
                                            <div className="col-12 col-lg-10 col-xl-8">
                                                {/* Table */}
                                                <div className="table-responsive">
                                                    <table className="table table-bordered table-sm table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Shipping Options</th>
                                                                <th>Delivery Time</th>
                                                                <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Standard Shipping</td>
                                                                <td>Delivery in 5 - 7 working days</td>
                                                                <td>$8.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Express Shipping</td>
                                                                <td>Delivery in 3 - 5 working days</td>
                                                                <td>$12.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1 - 2 day Shipping</td>
                                                                <td>Delivery in 1 - 2 working days</td>
                                                                <td>$12.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Free Shipping</td>
                                                                <td>
                                                                    Living won't the He one every subdue meat replenish
                                                                    face was you morning firmament darkness.
                                                                </td>
                                                                <td>$0.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* Caption */}
                                                <p className="mb-0 text-gray-500">
                                                    May, life blessed night so creature likeness their, for. <a className="text-body text-decoration-underline" href="#!">Find out more</a>
                                                </p>
                                            </div>
                                        </div>
                                    </Tab.Content>
                                    {/* <div className={`tab-pane fade ${tabShow === 0 ? 'show' : ''} ${tabActive === 0 ? 'active' : ''}`} id="descriptionTab">
                                </div>
                                <div className={`tab-pane fade ${tabShow === 1 ? 'show' : ''} ${tabActive === 1 ? 'active' : ''}`} id="sizeTab">
                                </div>
                                <div className={`tab-pane fade ${tabShow === 2 ? 'show' : ''} ${tabActive === 2 ? 'active' : ''}`} id="shippingTab">
                                </div> */}
                                </div>
                            </div>
                        </Tab>
                    </div>
                </div>
            </section>
            {/* PRODUCTS */}
            <section className="pt-11">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Heading */}
                            <h4 className="mb-10 text-center">You might also like</h4>
                            {/* Items */}
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                    {/* Card */}
                                    <div className="card mb-7">
                                        {/* Badge */}
                                        <div className="badge badge-white card-badge card-badge-left text-uppercase">
                                            New
                                        </div>
                                        {/* Image */}
                                        <div className="card-img">
                                            {/* Image */}
                                            <a className="card-img-hover" href="product.html">
                                                <img className="card-img-top card-img-back" src="/img/products/product-120.jpg" alt="..." />
                                                <img className="card-img-top card-img-front" src="/img/products/product-5.jpg" alt="..." />
                                            </a>
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
                                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
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
                                                <a className="text-body" href="product.html">
                                                    Leather mid-heel Sandals
                                                </a>
                                            </div>
                                            {/* Price */}
                                            <div className="font-weight-bold text-muted">
                                                $129.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                    {/* Card */}
                                    <div className="card mb-7">
                                        {/* Image */}
                                        <div className="card-img">
                                            {/* Image */}
                                            <a className="card-img-hover" href="product.html">
                                                <img className="card-img-top card-img-back" src="/img/products/product-121.jpg" alt="..." />
                                                <img className="card-img-top card-img-front" src="/img/products/product-6.jpg" alt="..." />
                                            </a>
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
                                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                        <i className="fe fe-heart" />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        {/* Body */}
                                        <div className="card-body px-0">
                                            {/* Category */}
                                            <div className="font-size-xs">
                                                <a className="text-muted" href="shop.html">Dresses</a>
                                            </div>
                                            {/* Title */}
                                            <div className="font-weight-bold">
                                                <a className="text-body" href="product.html">
                                                    Cotton floral print Dress
                                                </a>
                                            </div>
                                            {/* Price */}
                                            <div className="font-weight-bold text-muted">
                                                $40.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                    {/* Card */}
                                    <div className="card mb-7">
                                        {/* Badge */}
                                        <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                                            Sale
                                        </div>
                                        {/* Image */}
                                        <div className="card-img">
                                            {/* Image */}
                                            <a className="card-img-hover" href="product.html">
                                                <img className="card-img-top card-img-back" src="/img/products/product-122.jpg" alt="..." />
                                                <img className="card-img-top card-img-front" src="/img/products/product-7.jpg" alt="..." />
                                            </a>
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
                                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
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
                                                <a className="text-body" href="product.html">
                                                    Leather Sneakers
                                                </a>
                                            </div>
                                            {/* Price */}
                                            <div className="font-weight-bold">
                                                <span className="font-size-xs text-gray-350 text-decoration-line-through">$85.00</span>
                                                <span className="text-primary">$85.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-md-none d-lg-block">
                                    {/* Card */}
                                    <div className="card mb-7">
                                        {/* Image */}
                                        <div className="card-img">
                                            {/* Image */}
                                            <a href="#!">
                                                <img className="card-img-top card-img-front" src="/img/products/product-8.jpg" alt="..." />
                                            </a>
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
                                                    <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                                        <i className="fe fe-heart" />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        {/* Body */}
                                        <div className="card-body px-0">
                                            {/* Category */}
                                            <div className="font-size-xs">
                                                <a className="text-muted" href="shop.html">Tops</a>
                                            </div>
                                            {/* Title */}
                                            <div className="font-weight-bold">
                                                <a className="text-body" href="product.html">
                                                    Cropped cotton Top
                                                </a>
                                            </div>
                                            {/* Price */}
                                            <div className="font-weight-bold text-muted">
                                                $29.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* REVIEWS */}
            <section className="pt-9 pb-11" id="reviews">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Heading */}
                            <h4 className="mb-10 text-center">Customer Reviews</h4>
                            {/* Header */}
                            <div className="row align-items-center">
                                <div className="col-12 col-md-auto">
                                    {/* Dropdown */}
                                    <div className="dropdown mb-4 mb-md-0">
                                        {/* Toggle */}
                                        <a className="dropdown-toggle text-reset" data-toggle="dropdown" href="#">
                                            <strong>Sort by: Newest</strong>
                                        </a>
                                        {/* Menu */}
                                        <div className="dropdown-menu mt-3">
                                            <a className="dropdown-item" href="#!">Newest</a>
                                            <a className="dropdown-item" href="#!">Oldest</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md text-md-center">
                                    {/* Rating */}
                                    <div className="rating text-dark h6 mb-4 mb-md-0" data-value={4}>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                    {/* Count */}
                                    <strong className="font-size-sm ml-2">Reviews (3)</strong>
                                </div>
                                <div className="col-12 col-md-auto">
                                    {/* Button */}
                                    <a className="btn btn-sm btn-dark" data-toggle="collapse" href="#reviewForm">
                                        Write Review
                                    </a>
                                </div>
                            </div>
                            {/* New Review */}
                            <div className="collapse" id="reviewForm">
                                {/* Divider */}
                                <hr className="my-8" />
                                {/* Form */}
                                <form>
                                    <div className="row">
                                        <div className="col-12 mb-6 text-center">
                                            {/* Text */}
                                            <p className="mb-1 font-size-xs">
                                                Score:
                                            </p>
                                            {/* Rating form */}
                                            <div className="rating-form">
                                                {/* Input */}
                                                <input className="rating-input" type="range" min={1} max={5} defaultValue={5} />
                                                {/* Rating */}
                                                <div className="rating h5 text-dark" data-value={5}>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                    <div className="rating-item">
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Name */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="reviewName">Your Name:</label>
                                                <input className="form-control form-control-sm" id="reviewName" type="text" placeholder="Your Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Email */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="reviewEmail">Your Email:</label>
                                                <input className="form-control form-control-sm" id="reviewEmail" type="email" placeholder="Your Email *" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Name */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="reviewTitle">Review Title:</label>
                                                <input className="form-control form-control-sm" id="reviewTitle" type="text" placeholder="Review Title *" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Name */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="reviewText">Review:</label>
                                                <textarea className="form-control form-control-sm" id="reviewText" rows={5} placeholder="Review *" required defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            {/* Button */}
                                            <button className="btn btn-outline-dark" type="submit">
                                                Post Review
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Reviews */}
                            <div className="mt-8">
                                {/* Review */}
                                <div className="review">
                                    <div className="review-body">
                                        <div className="row">
                                            <div className="col-12 col-md-auto">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xxl mb-6 mb-md-0">
                                                    <span className="avatar-title rounded-circle">
                                                        <i className="fa fa-user" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md">
                                                {/* Header */}
                                                <div className="row mb-6">
                                                    <div className="col-12">
                                                        {/* Rating */}
                                                        <div className="rating font-size-sm text-dark" data-value={5}>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        {/* Time */}
                                                        <span className="font-size-xs text-muted">
                                                            Logan Edwards, <time dateTime="2019-07-25">25 Jul 2019</time>
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* Title */}
                                                <p className="mb-2 font-size-lg font-weight-bold">
                                                    So cute!
                                                </p>
                                                {/* Text */}
                                                <p className="text-gray-500">
                                                    Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales curabitur diam sociis. Taciti
                                                    lobortis nascetur. Ante laoreet odio hendrerit.
                                                    Dictumst curabitur nascetur lectus potenti dis sollicitudin habitant quis vestibulum.
                                                </p>
                                                {/* Footer */}
                                                <div className="row align-items-center">
                                                    <div className="col-auto d-none d-lg-block">
                                                        {/* Text */}
                                                        <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                                    </div>
                                                    <div className="col-auto mr-auto">
                                                        {/* Rate */}
                                                        <div className="rate">
                                                            <a className="rate-item" data-toggle="vote" data-count={3} href="#" role="button">
                                                                <i className="fe fe-thumbs-up" />
                                                            </a>
                                                            <a className="rate-item" data-toggle="vote" data-count={0} href="#" role="button">
                                                                <i className="fe fe-thumbs-down" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto d-none d-lg-block">
                                                        {/* Text */}
                                                        <p className="mb-0 font-size-sm">Comments (0)</p>
                                                    </div>
                                                    <div className="col-auto">
                                                        {/* Button */}
                                                        <a className="btn btn-xs btn-outline-border" href="#!">
                                                            Comment
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Review */}
                                <div className="review">
                                    {/* Body */}
                                    <div className="review-body">
                                        <div className="row">
                                            <div className="col-12 col-md-auto">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xxl mb-6 mb-md-0">
                                                    <span className="avatar-title rounded-circle">
                                                        <i className="fa fa-user" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md">
                                                {/* Header */}
                                                <div className="row mb-6">
                                                    <div className="col-12">
                                                        {/* Rating */}
                                                        <div className="rating font-size-sm text-dark" data-value={3}>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                            <div className="rating-item">
                                                                <i className="fas fa-star" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        {/* Time */}
                                                        <span className="font-size-xs text-muted">
                                                            Sophie Casey, <time dateTime="2019-07-07">07 Jul 2019</time>
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* Title */}
                                                <p className="mb-2 font-size-lg font-weight-bold">
                                                    Cute, but too small
                                                </p>
                                                {/* Text */}
                                                <p className="text-gray-500">
                                                    Shall good midst can't. Have fill own his multiply the divided. Thing great. Of heaven whose
                                                    signs.
                                                </p>
                                                {/* Footer */}
                                                <div className="row align-items-center">
                                                    <div className="col-auto d-none d-lg-block">
                                                        {/* Text */}
                                                        <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                                    </div>
                                                    <div className="col-auto mr-auto">
                                                        {/* Rate */}
                                                        <div className="rate">
                                                            <a className="rate-item" data-toggle="vote" data-count={2} href="#" role="button">
                                                                <i className="fe fe-thumbs-up" />
                                                            </a>
                                                            <a className="rate-item" data-toggle="vote" data-count={1} href="#" role="button">
                                                                <i className="fe fe-thumbs-down" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto d-none d-lg-block">
                                                        {/* Text */}
                                                        <p className="mb-0 font-size-sm">Comments (1)</p>
                                                    </div>
                                                    <div className="col-auto">
                                                        {/* Button */}
                                                        <a className="btn btn-xs btn-outline-border" href="#!">
                                                            Comment
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Child review */}
                                    <div className="review review-child">
                                        <div className="review-body">
                                            {/* Content */}
                                            <div className="row">
                                                <div className="col-12 col-md-auto">
                                                    {/* Avatar */}
                                                    <div className="avatar avatar-xxl mb-6 mb-md-0">
                                                        <span className="avatar-title rounded-circle">
                                                            <i className="fa fa-user" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md">
                                                    {/* Header */}
                                                    <div className="row mb-6">
                                                        <div className="col-12">
                                                            {/* Rating */}
                                                            <div className="rating font-size-sm text-dark" data-value={4}>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                                <div className="rating-item">
                                                                    <i className="fas fa-star" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            {/* Time */}
                                                            <span className="font-size-xs text-muted">
                                                                William Stokes, <time dateTime="2019-07-14">14 Jul 2019</time>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Title */}
                                                    <p className="mb-2 font-size-lg font-weight-bold">
                                                        Very good
                                                    </p>
                                                    {/* Text */}
                                                    <p className="text-gray-500">
                                                        Made face lights yielding forth created for image behold blessed seas.
                                                    </p>
                                                    {/* Footer */}
                                                    <div className="row align-items-center">
                                                        <div className="col-auto d-none d-lg-block">
                                                            {/* Text */}
                                                            <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                                        </div>
                                                        <div className="col-auto mr-auto">
                                                            {/* Rate */}
                                                            <div className="rate">
                                                                <a className="rate-item" data-toggle="vote" data-count={7} href="#" role="button">
                                                                    <i className="fe fe-thumbs-up" />
                                                                </a>
                                                                <a className="rate-item" data-toggle="vote" data-count={0} href="#" role="button">
                                                                    <i className="fe fe-thumbs-down" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-auto d-none d-lg-block">
                                                            {/* Text */}
                                                            <p className="mb-0 font-size-sm">Comments (0)</p>
                                                        </div>
                                                        <div className="col-auto">
                                                            {/* Button */}
                                                            <a className="btn btn-xs btn-outline-border" href="#!">
                                                                Comment
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination */}
                            <nav className="d-flex justify-content-center mt-9">
                                <ul className="pagination pagination-sm text-gray-400">
                                    <li className="page-item">
                                        <a className="page-link page-link-arrow" href="#">
                                            <i className="fa fa-caret-left" />
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link page-link-arrow" href="#">
                                            <i className="fa fa-caret-right" />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* FEATURES */}
            <section className="bg-light py-9">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */}
                            <div className="d-flex mb-6 mb-lg-0">
                                {/* Icon */}
                                <i className="fe fe-truck font-size-lg text-primary" />
                                {/* Body */}
                                <div className="ml-6">
                                    {/* Heading */}
                                    <h6 className="heading-xxs mb-1">
                                        Free shipping
                                    </h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        From all orders over $100
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */}
                            <div className="d-flex mb-6 mb-lg-0">
                                {/* Icon */}
                                <i className="fe fe-repeat font-size-lg text-primary" />
                                {/* Body */}
                                <div className="ml-6">
                                    {/* Heading */}
                                    <h6 className="mb-1 heading-xxs">
                                        Free returns
                                    </h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        Return money within 30 days
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */}
                            <div className="d-flex mb-6 mb-md-0">
                                {/* Icon */}
                                <i className="fe fe-lock font-size-lg text-primary" />
                                {/* Body */}
                                <div className="ml-6">
                                    {/* Heading */}
                                    <h6 className="mb-1 heading-xxs">
                                        Secure shopping
                                    </h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        You're in safe hands
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            {/* Item */}
                            <div className="d-flex">
                                {/* Icon */}
                                <i className="fe fe-tag font-size-lg text-primary" />
                                {/* Body */}
                                <div className="ml-6">
                                    {/* Heading */}
                                    <h6 className="mb-1 heading-xxs">
                                        Over 10,000 Styles
                                    </h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm text-muted">
                                        We have everything you need
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}
