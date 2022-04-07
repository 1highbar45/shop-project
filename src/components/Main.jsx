import React from 'react'

export default function Main() {
    return (
        <>
            <div>
                {/* MODALS */}
                {/* Newsletter: Horizontal */}
                <div className="modal fade" id="modalNewsletterHorizontal" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            {/* Close */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fe fe-x" aria-hidden="true" />
                            </button>
                            {/* Content */}
                            <div className="row no-gutters">
                                <div className="col-12 col-lg-5">
                                    {/* Image */}
                                    <img className="img-fluid" src="/img/covers/cover-25.jpg" alt="..." />
                                </div>
                                <div className="col-12 col-lg-7 d-flex flex-column px-md-8">
                                    {/* Body */}
                                    <div className="modal-body my-auto py-10">
                                        {/* Heading */}
                                        <h4>Subscribe to Newsletter and get 15% Discount</h4>
                                        {/* Text */}
                                        <p className="mb-7 font-size-lg">
                                            On your next purchase
                                        </p>
                                        {/* Form */}
                                        <form>
                                            <div className="form-row">
                                                <div className="col">
                                                    {/* Input */}
                                                    <label className="sr-only" htmlFor="modalNewsletterHorizontalEmail">Enter Email *</label>
                                                    <input className="form-control form-control-sm" id="modalNewsletterHorizontalEmail" type="email" placeholder="Enter Email *" />
                                                </div>
                                                <div className="col-auto">
                                                    {/* Button */}
                                                    <button className="btn btn-sm btn-dark" type="submit">
                                                        <i className="fe fe-send" />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* Footer */}
                                    <div className="modal-footer pt-0">
                                        {/* Checkbox */}
                                        <div className="custom-control custom-checkbox">
                                            {/* Input */}
                                            <input className="custom-control-input" id="modalNewsletterHorizontalCheckbox" type="checkbox" />
                                            {/* Label */}
                                            <label className="custom-control-label font-size-xs" htmlFor="modalNewsletterHorizontalCheckbox">
                                                Prevent this Pop-up
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Newsletter: Vertical */}
                <div className="modal fade" id="modalNewsletterVertical" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            {/* Close */}
                            <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                <i className="fe fe-x" aria-hidden="true" />
                            </button>
                            {/* Body */}
                            <div className="modal-body mt-2 mr-2 ml-2 py-10 bg-cover text-center text-white" style={{ backgroundImage: 'url(/img/covers/cover-26.jpg)' }}>
                                {/* Heading */}
                                <h4>Subscribe to Newsletter and get 15% Discount</h4>
                                {/* Text */}
                                <p className="mb-0 font-size-lg">
                                    On your next purchase
                                </p>
                            </div>
                            {/* Body */}
                            <div className="modal-body py-9">
                                {/* Form */}
                                <form>
                                    <div className="form-row">
                                        <div className="col">
                                            {/* Input */}
                                            <label className="sr-only" htmlFor="modalNewsletterVerticalEmail">Enter Email *</label>
                                            <input className="form-control form-control-sm" id="modalNewsletterVerticalEmail" type="email" placeholder="Enter Email *" />
                                        </div>
                                        <div className="col-auto">
                                            {/* Button */}
                                            <button className="btn btn-sm btn-dark" type="submit">
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Footer */}
                            <div className="modal-footer justify-content-center pt-0">
                                {/* Checkbox */}
                                <div className="custom-control custom-checkbox">
                                    {/* Input */}
                                    <input className="custom-control-input" id="modalNewsletterVerticalCheckbox" type="checkbox" />
                                    {/* Label */}
                                    <label className="custom-control-label font-size-xs" htmlFor="modalNewsletterVerticalCheckbox">
                                        Prevent this Pop-up
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Password Reset */}
                <div className="modal fade" id="modalPasswordReset" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            {/* Close */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fe fe-x" aria-hidden="true" />
                            </button>
                            {/* Header*/}
                            <div className="modal-header line-height-fixed font-size-lg">
                                <strong className="mx-auto">Forgot Password?</strong>
                            </div>
                            {/* Body */}
                            <div className="modal-body text-center">
                                {/* Text */}
                                <p className="mb-7 font-size-sm text-gray-500">
                                    Please enter your Email Address. You will receive a link
                                    to create a new password via Email.
                                </p>
                                {/* Form */}
                                <form>
                                    {/* Email */}
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="modalPasswordResetEmail">
                                            Email Address *
                                        </label>
                                        <input className="form-control form-control-sm" id="modalPasswordResetEmail" type="email" placeholder="Email Address *" required />
                                    </div>
                                    {/* Button */}
                                    <button className="btn btn-sm btn-dark">
                                        Reset Password
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product */}
                <div className="modal fade" id="modalProduct" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                        <div className="modal-content">
                            {/* Close */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fe fe-x" aria-hidden="true" />
                            </button>
                            {/* Content */}
                            <div className="container-fluid px-xl-0">
                                <div className="row align-items-center mx-xl-0">
                                    <div className="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">
                                        {/* Image */}
                                        <img className="img-fluid" src="/img/products/product-7.jpg" alt="..." />
                                        {/* Button */}
                                        <a className="btn btn-sm btn-block btn-primary" href="./product.html">
                                            More Product Info <i className="fe fe-info ml-2" />
                                        </a>
                                    </div>
                                    <div className="col-12 col-lg-6 col-xl-7 py-9 px-md-9">
                                        {/* Heading */}
                                        <h4 className="mb-3">Leather Sneakers</h4>
                                        {/* Price */}
                                        <div className="mb-7">
                                            <span className="h5">$85.00</span>
                                            <span className="font-size-sm">(In Stock)</span>
                                        </div>
                                        {/* Form */}
                                        <form>
                                            <div className="form-group">
                                                {/* Label */}
                                                <p>
                                                    Color: <strong id="modalProductColorCaption">White</strong>
                                                </p>
                                                {/* Radio */}
                                                <div className="mb-8 ml-n1">
                                                    <div className="custom-control custom-control-inline custom-control-img">
                                                        <input type="radio" className="custom-control-input" id="modalProductColorOne" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" defaultValue="White" defaultChecked />
                                                        <label className="custom-control-label" htmlFor="modalProductColorOne">
                                                            <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-7.jpg)' }} />
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-img">
                                                        <input type="radio" className="custom-control-input" id="modalProductColorTwo" name="modalProductColor" data-toggle="form-caption" data-target="#modalProductColorCaption" defaultValue="Black" />
                                                        <label className="custom-control-label" htmlFor="modalProductColorTwo">
                                                            <span className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: 'url(/img/products/product-49.jpg)' }} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                {/* Label */}
                                                <p>
                                                    Size: <strong><span id="modalProductSizeCaption">7.5</span> US</strong>
                                                </p>
                                                {/* Radio */}
                                                <div className="mb-2">
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeOne" defaultValue={6} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeOne">6</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeTwo" defaultValue="6.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeTwo">6.5</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeThree" defaultValue={7} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeThree">7</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeFour" defaultValue="7.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" defaultChecked />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeFour">7.5</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeFive" defaultValue={8} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeFive">8</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeSix" defaultValue="8.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeSix">8.5</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeSeven" defaultValue={9} data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeSeven">9</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeEight" defaultValue="9.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" disabled />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeEight">9.5</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeNine" defaultValue={10} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeNine">10</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeTen" defaultValue="10.5" data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeTen">10.5</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeEleven" defaultValue={11} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeEleven">11</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeTwelve" defaultValue={12} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeTwelve">12</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeThirteen" defaultValue={13} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeThirteen">13</label>
                                                    </div>
                                                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                                                        <input type="radio" className="custom-control-input" name="modalProductSize" id="modalProductSizeFourteen" defaultValue={14} data-toggle="form-caption" data-target="#modalProductSizeCaption" />
                                                        <label className="custom-control-label" htmlFor="modalProductSizeFourteen">14</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mb-0">
                                                <div className="form-row">
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
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Search */}
                <div className="modal fixed-right fade" id="modalSearch" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-vertical" role="document">
                        <div className="modal-content">
                            {/* Close */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fe fe-x" aria-hidden="true" />
                            </button>
                            {/* Header*/}
                            <div className="modal-header line-height-fixed font-size-lg">
                                <strong className="mx-auto">Search Products</strong>
                            </div>
                            {/* Body: Form */}
                            <div className="modal-body">
                                <form>
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
                                        <input className="form-control" type="search" placeholder="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-border" type="submit">
                                                <i className="fe fe-search" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Body: Results (add `.d-none` to disable it) */}
                            <div className="modal-body border-top font-size-sm">
                                {/* Heading */}
                                <p>Search Results:</p>
                                {/* Items */}
                                <div className="row align-items-center position-relative mb-5">
                                    <div className="col-4 col-md-3">
                                        {/* Image */}
                                        <img className="img-fluid" src="/img/products/product-5.jpg" alt="..." />
                                    </div>
                                    <div className="col position-static">
                                        {/* Text */}
                                        <p className="mb-0 font-weight-bold">
                                            <a className="stretched-link text-body" href="./product.html">Leather mid-heel Sandals</a> <br />
                                            <span className="text-muted">$129.00</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row align-items-center position-relative mb-5">
                                    <div className="col-4 col-md-3">
                                        {/* Image */}
                                        <img className="img-fluid" src="/img/products/product-6.jpg" alt="..." />
                                    </div>
                                    <div className="col position-static">
                                        {/* Text */}
                                        <p className="mb-0 font-weight-bold">
                                            <a className="stretched-link text-body" href="./product.html">Cotton floral print Dress</a> <br />
                                            <span className="text-muted">$40.00</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row align-items-center position-relative mb-5">
                                    <div className="col-4 col-md-3">
                                        {/* Image */}
                                        <img className="img-fluid" src="/img/products/product-7.jpg" alt="..." />
                                    </div>
                                    <div className="col position-static">
                                        {/* Text */}
                                        <p className="mb-0 font-weight-bold">
                                            <a className="stretched-link text-body" href="./product.html">Leather Sneakers</a> <br />
                                            <span className="text-primary">$85.00</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row align-items-center position-relative mb-5">
                                    <div className="col-4 col-md-3">
                                        {/* Image */}
                                        <img className="img-fluid" src="/img/products/product-8.jpg" alt="..." />
                                    </div>
                                    <div className="col position-static">
                                        {/* Text */}
                                        <p className="mb-0 font-weight-bold">
                                            <a className="stretched-link text-body" href="./product.html">Cropped cotton Top</a> <br />
                                            <span className="text-muted">$29.00</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row align-items-center position-relative mb-5">
                                    <div className="col-4 col-md-3">
                                        {/* Image */}
                                        <img className="img-fluid" src="/img/products/product-9.jpg" alt="..." />
                                    </div>
                                    <div className="col position-static">
                                        {/* Text */}
                                        <p className="mb-0 font-weight-bold">
                                            <a className="stretched-link text-body" href="./product.html">Floral print midi Dress</a> <br />
                                            <span className="text-muted">$50.00</span>
                                        </p>
                                    </div>
                                </div>
                                {/* Button */}
                                <a className="btn btn-link px-0 text-reset" href="./shop.html">
                                    View All <i className="fe fe-arrow-right ml-2" />
                                </a>
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
                {/* Shopping Cart */}
                <div className="modal fixed-right fade" id="modalShoppingCart" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-vertical" role="document">
                        {/* Full cart (add `.d-none` to disable it) */}
                        <div className="modal-content">
                            {/* Close */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fe fe-x" aria-hidden="true" />
                            </button>
                            {/* Header*/}
                            <div className="modal-header line-height-fixed font-size-lg">
                                <strong className="mx-auto">Your Cart (2)</strong>
                            </div>
                            {/* List group */}
                            <ul className="list-group list-group-lg list-group-flush">
                                <li className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-4">
                                            {/* Image */}
                                            <a href="./product.html">
                                                <img className="img-fluid" src="/img/products/product-6.jpg" alt="..." />
                                            </a>
                                        </div>
                                        <div className="col-8">
                                            {/* Title */}
                                            <p className="font-size-sm font-weight-bold mb-6">
                                                <a className="text-body" href="./product.html">Cotton floral print Dress</a> <br />
                                                <span className="text-muted">$40.00</span>
                                            </p>
                                            {/*Footer */}
                                            <div className="d-flex align-items-center">
                                                {/* Select */}
                                                <select className="custom-select custom-select-xxs w-auto">
                                                    <option value={1}>1</option>
                                                    <option value={1}>2</option>
                                                    <option value={1}>3</option>
                                                </select>
                                                {/* Remove */}
                                                <a className="font-size-xs text-gray-400 ml-auto" href="#!">
                                                    <i className="fe fe-x" /> Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-4">
                                            {/* Image */}
                                            <a href="./product.html">
                                                <img className="img-fluid" src="/img/products/product-10.jpg" alt="..." />
                                            </a>
                                        </div>
                                        <div className="col-8">
                                            {/* Title */}
                                            <p className="font-size-sm font-weight-bold mb-6">
                                                <a className="text-body" href="./product.html">Suede cross body Bag</a> <br />
                                                <span className="text-muted">$49.00</span>
                                            </p>
                                            {/*Footer */}
                                            <div className="d-flex align-items-center">
                                                {/* Select */}
                                                <select className="custom-select custom-select-xxs w-auto">
                                                    <option value={1}>1</option>
                                                    <option value={1}>2</option>
                                                    <option value={1}>3</option>
                                                </select>
                                                {/* Remove */}
                                                <a className="font-size-xs text-gray-400 ml-auto" href="#!">
                                                    <i className="fe fe-x" /> Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* Footer */}
                            <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
                                <strong>Subtotal</strong> <strong className="ml-auto">$89.00</strong>
                            </div>
                            {/* Buttons */}
                            <div className="modal-body">
                                <a className="btn btn-block btn-dark" href="./checkout.html">Continue to Checkout</a>
                                <a className="btn btn-block btn-outline-dark" href="./shopping-cart.html">View Cart</a>
                            </div>
                        </div>
                        {/* Empty cart (remove `.d-none` to enable it) */}
                        <div className="modal-content d-none">
                            {/* Close */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fe fe-x" aria-hidden="true" />
                            </button>
                            {/* Header*/}
                            <div className="modal-header line-height-fixed font-size-lg">
                                <strong className="mx-auto">Your Cart (0)</strong>
                            </div>
                            {/* Body */}
                            <div className="modal-body flex-grow-0 my-auto">
                                {/* Heading */}
                                <h6 className="mb-7 text-center">Your cart is empty 😞</h6>
                                {/* Button */}
                                <a className="btn btn-block btn-outline-dark" href="#!">
                                    Continue Shopping
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sidebar */}
                <div className="modal fixed-right fade" id="modalSidebar" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-vertical" role="document">
                        <div className="modal-content">
                            {/* Close */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fe fe-x" aria-hidden="true" />
                            </button>
                            {/* Body */}
                            <div className="modal-body px-10 my-auto">
                                {/* Nav */}
                                <ul className="nav nav-vertical nav-unstyled font-size-h2" id="sidebarNav">
                                    <li className="nav-item">
                                        {/* Toggle */}
                                        <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarHome">
                                            Home
                                        </a>
                                        {/* Collapse */}
                                        <div className="collapse" id="sidebarHome" data-parent="#sidebarNav">
                                            <ul className="list-styled font-size-lg py-3 mb-0">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index.html">Default</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-classic.html">Classic</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-fashion.html">Fashion</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-boxed.html">Boxed</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-simple.html">Simple</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-asymmetric.html">Asymmetric</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-sidenav.html">Sidenav</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./index-landing.html">Landing</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        {/* Toggle */}
                                        <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarCatalog">
                                            Catalog
                                        </a>
                                        {/* Collapse */}
                                        <div className="collapse" id="sidebarCatalog" data-parent="#sidebarNav">
                                            <div className="row">
                                                <div className="col-12 py-3">
                                                    {/* Heading */}
                                                    <h6 className="mb-5 font-weight-bold">Clothing</h6>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-lg py-3">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">All Clothing</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Blouses &amp; Shirts</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Coats &amp; Jackets</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Dresses</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Hoodies &amp; Sweats</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Denim</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Jeans</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Jumpers &amp; Cardigans</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Leggings</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 py-3">
                                                    {/* Heading */}
                                                    <h6 className="mb-5 font-weight-bold">Shoes &amp; Boots</h6>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-lg">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">All Shoes &amp; Boots</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Branded Shoes</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Boots</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Heels</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Trainers</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Sandals</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Shoes</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Wide Fit Shoes</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 py-3">
                                                    {/* Heading */}
                                                    <h6 className="mb-5 font-weight-bold">Bags &amp; Accessories</h6>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-lg">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">All Bags &amp; Accessories</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Accessories</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Bags &amp; Purses</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Luggage</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Belts</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Hats</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Hair Accessories</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Jewellery</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Travel Accessories</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        {/* Toggle */}
                                        <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarShop">
                                            Shop
                                        </a>
                                        {/* Collapse */}
                                        <div className="collapse" id="sidebarShop" data-parent="#sidebarNav">
                                            <div className="row">
                                                <div className="col-12 py-3">
                                                    {/* Heading */}
                                                    <h6 className="mb-5">Shop</h6>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-lg">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop.html">Default</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop-topbar.html">Topbar</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop-collapse.html">Collapse</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop-simple.html">Simple</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shop-masonry.html">Masonry</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 py-3">
                                                    {/* Heading */}
                                                    <h6 className="mb-5">Product</h6>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-lg">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product.html">Default</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product-images-left.html">Images Left</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product-image-grid.html">Image Grid</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product-image-slider.html">Image Slider</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./product-images-stacked.html">Images Stacked</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 py-3">
                                                    {/* Heading */}
                                                    <h6 className="mb-5">Support</h6>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-lg">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shopping-cart.html">Shopping Cart</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./checkout.html">Checkout</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./order-completed.html">Order Completed</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./shipping-and-returns.html">Shipping &amp; Returns</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 py-3">
                                                    {/* Heading */}
                                                    <h6 className="mb-5">Account</h6>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-lg">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-order.html">Order</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-orders.html">Orders</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-wishlist.html">Wishlist</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-personal-info.html">Personal Info</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-address.html">Addresses</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-address-edit.html">Addresses: New</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-payment.html">Payment</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-payment-edit.html">Payment: New</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./account-payment-choose.html">Payment: Choose</a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" href="./auth.html">Auth</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 py-3">
                                                    {/* Heading */}
                                                    <h6 className="mb-5">Modals</h6>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-lg">
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterHorizontal">
                                                                Newsletter: Horizontal
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterVertical">
                                                                Newsletter: Vertical
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalProduct">
                                                                Product
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalSearch">
                                                                Search
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalShoppingCart">
                                                                Shopping Cart
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalSizeChart">
                                                                Size Chart
                                                            </a>
                                                        </li>
                                                        <li className="list-styled-item">
                                                            <a className="list-styled-link" data-toggle="modal" href="#modalWaitList">
                                                                Wait List
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        {/* Toggle */}
                                        <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarPages">
                                            Pages
                                        </a>
                                        {/* Collapse */}
                                        <div className="collapse" id="sidebarPages" data-parent="#sidebarNav">
                                            <ul className="list-styled font-size-lg py-3 mb-0">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./about.html">About</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./contact-us.html">Contact Us</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./store-locator.html">Store Locator</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./faq.html">FAQ</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./coming-soon.html">Coming Soon</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./404.html">404</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        {/* Toggle */}
                                        <a className="nav-link dropdown-toggle" data-toggle="collapse" href="#sidebarBlog">
                                            Blog
                                        </a>
                                        {/* Collapse */}
                                        <div className="collapse" id="sidebarBlog" data-parent="#sidebarNav">
                                            <ul className="list-styled font-size-lg py-3 mb-0">
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./blog.html">Blog</a>
                                                </li>
                                                <li className="list-styled-item">
                                                    <a className="list-styled-link" href="./blog-post.html">Blog Post</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./docs/getting-started.html">Docs</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Body */}
                            <div className="moda-body px-10 py-9">
                                {/* Social links */}
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a className="text-gray-350" href="#!">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-gray-350" href="#!">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-gray-350" href="#!">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-gray-350" href="#!">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-gray-350" href="#!">
                                            <i className="fab fa-medium-m" />
                                        </a>
                                    </li>
                                </ul>
                                {/* Footer */}
                                <div className="font-size-xxs text-gray-350">
                                    © 2019 All rights reserved. Designed by Unvab.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Size Chart */}
                <div className="modal fade" id="modalSizeChart" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            {/* Close */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fe fe-x" aria-hidden="true" />
                            </button>
                            {/* Header*/}
                            <div className="modal-header line-height-fixed font-size-lg">
                                <strong className="mx-auto">Size Chart</strong>
                            </div>
                            {/* Body */}
                            <div className="modal-body border-bottom">
                                {/* Header */}
                                <div className="d-flex mb-7">
                                    {/* Heading */}
                                    <h5 className="mb-0">Clothing</h5>
                                    {/* Toggles */}
                                    <div className="btn-group btn-group-toggle ml-auto" data-toggle="buttons">
                                        <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                                            <input type="radio" name="modalSizeChartUnitOne" defaultChecked /> IN
                                        </label>
                                        <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                                            <input type="radio" name="modalSizeChartUnitOne" /> CM
                                        </label>
                                    </div>
                                </div>
                                {/* Table */}
                                <div className="table-responsive">
                                    <table className="table table-bordered table-sm table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>US</th>
                                                <th>Bust</th>
                                                <th>Waist</th>
                                                <th>Hips</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>XS</td>
                                                <td>2</td>
                                                <td>32</td>
                                                <td>24 - 25</td>
                                                <td>33 - 34</td>
                                            </tr>
                                            <tr>
                                                <td>S</td>
                                                <td>4</td>
                                                <td>34 - 35</td>
                                                <td>26 - 27</td>
                                                <td>35 - 26</td>
                                            </tr>
                                            <tr>
                                                <td>M</td>
                                                <td>6</td>
                                                <td>36 - 37</td>
                                                <td>28 - 29</td>
                                                <td>38 - 40</td>
                                            </tr>
                                            <tr>
                                                <td>L</td>
                                                <td>8</td>
                                                <td>38 - 29</td>
                                                <td>30 - 31</td>
                                                <td>42 - 44</td>
                                            </tr>
                                            <tr>
                                                <td>XL</td>
                                                <td>10</td>
                                                <td>40 - 41</td>
                                                <td>32 - 33</td>
                                                <td>45 - 47</td>
                                            </tr>
                                            <tr>
                                                <td>XXL</td>
                                                <td>12</td>
                                                <td>42 - 43</td>
                                                <td>34 - 35</td>
                                                <td>48 - 50</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* Body */}
                            <div className="modal-body">
                                {/* Header */}
                                <div className="d-flex mb-7">
                                    {/* Heading */}
                                    <h5 className="mb-0">Shoes</h5>
                                    {/* Toggles */}
                                    <div className="btn-group btn-group-toggle ml-auto" data-toggle="buttons">
                                        <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                                            <input type="radio" name="modalSizeCharUnitTwo" defaultChecked /> IN
                                        </label>
                                        <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                                            <input type="radio" name="modalSizeCharUnitTwo" /> CM
                                        </label>
                                    </div>
                                </div>
                                {/* Tables */}
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        {/* Table */}
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-sm table-hover mb-lg-0">
                                                <thead>
                                                    <tr>
                                                        <th>Size</th>
                                                        <th>US</th>
                                                        <th>Foot Length</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>36</td>
                                                        <td>5</td>
                                                        <td>22.8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>26.5</td>
                                                        <td>5.5</td>
                                                        <td>23.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>37</td>
                                                        <td>6</td>
                                                        <td>23.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>37.5</td>
                                                        <td>6.</td>
                                                        <td>23.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>38</td>
                                                        <td>7</td>
                                                        <td>24.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>38.5</td>
                                                        <td>7.5</td>
                                                        <td>24.5</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        {/* Table */}
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-sm table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Size</th>
                                                        <th>US</th>
                                                        <th>Foot Length</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>36</td>
                                                        <td>5</td>
                                                        <td>22.8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>39</td>
                                                        <td>8</td>
                                                        <td>24.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>40</td>
                                                        <td>9</td>
                                                        <td>25.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>40.5</td>
                                                        <td>9.5</td>
                                                        <td>25.7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>41</td>
                                                        <td>10</td>
                                                        <td>26.0</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Wait List */}
                <div className="modal fade" id="modalWaitList" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            {/* Close */}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="fe fe-x" aria-hidden="true" />
                            </button>
                            {/* Header*/}
                            <div className="modal-header line-height-fixed font-size-lg">
                                <strong className="mx-auto">Wait List</strong>
                            </div>
                            {/* Body */}
                            <div className="modal-body">
                                <div className="row mb-6">
                                    <div className="col-12 col-md-3">
                                        {/* Image */}
                                        <a href="./product.html">
                                            <img className="img-fluid mb-7 mb-md-0" src="/img/products/product-6.jpg" alt="..." />
                                        </a>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        {/* Label */}
                                        <p>
                                            <a className="font-weight-bold text-body" href="./product.html">Cotton floral print Dress</a>
                                        </p>
                                        {/* Radio */}
                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                            <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeOne" defaultValue={6} data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                            <label className="custom-control-label" htmlFor="modalWaitListSizeOne">3XS</label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                            <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeTwo" defaultValue="6.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                            <label className="custom-control-label" htmlFor="modalWaitListSizeTwo">2XS</label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                            <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeThree" defaultValue={7} data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                            <label className="custom-control-label" htmlFor="modalWaitListSizeThree">XS</label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                            <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeFour" defaultValue="7.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" defaultChecked />
                                            <label className="custom-control-label" htmlFor="modalWaitListSizeFour">S</label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                            <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeFive" defaultValue={8} data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                            <label className="custom-control-label" htmlFor="modalWaitListSizeFive">M</label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                            <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeSix" defaultValue="8.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                            <label className="custom-control-label" htmlFor="modalWaitListSizeSix">LG</label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                            <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeSeven" defaultValue={9} data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                            <label className="custom-control-label" htmlFor="modalWaitListSizeSeven">XL</label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                            <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeEight" defaultValue="9.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                            <label className="custom-control-label" htmlFor="modalWaitListSizeEight">2XL</label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                            <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeNine" defaultValue={10} data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                            <label className="custom-control-label" htmlFor="modalWaitListSizeNine">3XL</label>
                                        </div>
                                        <div className="custom-control custom-control-inline custom-control-size mb-2">
                                            <input type="radio" className="custom-control-input" name="modalWaitListSize" id="modalWaitListSizeTen" defaultValue="10.5" data-toggle="form-caption" data-target="#modalWaitListSizeCaption" />
                                            <label className="custom-control-label" htmlFor="modalWaitListSizeTen">4XL</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        {/* Text */}
                                        <p className="font-size-sm text-center text-gray-500">
                                            Justo ut diam erat hendrerit morbi porttitor,
                                            per eu curabitur diam sociis.
                                        </p>
                                    </div>
                                </div>
                                <div className="form-row mb-2">
                                    <div className="col-12 col-md-6">
                                        {/* Form group */}
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="listName">Your Name</label>
                                            <input className="form-control" id="listName" type="text" placeholder="Your Name *" required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Form group */}
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="listEmail">Your Name</label>
                                            <input className="form-control" id="listEmail" type="email" placeholder="Your Email *" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-center">
                                        {/* Button */}
                                        <button className="btn btn-dark" type="submit">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* NAVBAR */}
                <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
                    <div className="container">
                        {/* Promo */}
                        <div className="mr-xl-8">
                            <i className="fe fe-truck mr-2" /> <span className="heading-xxxs">Free shipping worldwide</span>
                        </div>
                        {/* Toggler */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        {/* Collapse */}
                        <div className="collapse navbar-collapse" id="topbarCollapse">
                            {/* Nav */}
                            <ul className="nav nav-divided navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    {/* Toggle */}
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                        <img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." /> United States
                                    </a>
                                    {/* Menu */}
                                    <div className="dropdown-menu minw-0">
                                        <a className="dropdown-item" href="#!">
                                            <img className="mb-1 mr-2" src="/img/flags/usa.svg" alt="USA" />United States
                                        </a>
                                        <a className="dropdown-item" href="#!">
                                            <img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" />Canada
                                        </a>
                                        <a className="dropdown-item" href="#!">
                                            <img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" />Germany
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    {/* Toggle */}
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">USD</a>
                                    {/* Menu */}
                                    <div className="dropdown-menu minw-0">
                                        <a className="dropdown-item" href="#!">USD</a>
                                        <a className="dropdown-item" href="#!">EUR</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    {/* Toggle */}
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">English</a>
                                    {/* Menu */}
                                    <div className="dropdown-menu minw-0">
                                        <a className="dropdown-item" href="#">English</a>
                                        <a className="dropdown-item" href="#">French</a>
                                        <a className="dropdown-item" href="#">German</a>
                                    </div>
                                </li>
                            </ul>
                            {/* Nav */}
                            <ul className="nav navbar-nav mr-8">
                                <li className="nav-item">
                                    <a className="nav-link" href="./shipping-and-returns.html">Shipping</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./faq.html">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./contact-us.html">Contact</a>
                                </li>
                            </ul>
                            {/* Nav */}
                            <ul className="nav navbar-nav flex-row">
                                <li className="nav-item">
                                    <a className="nav-link text-gray-350" href="#!">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="nav-item ml-xl-n4">
                                    <a className="nav-link text-gray-350" href="#!">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="nav-item ml-xl-n4">
                                    <a className="nav-link text-gray-350" href="#!">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                                <li className="nav-item ml-xl-n4">
                                    <a className="nav-link text-gray-350" href="#!">
                                        <i className="fab fa-medium" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* NAVBAR */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container">
                        {/* Brand */}
                        <a className="navbar-brand" href="./overview.html">
                            Shopper.
                        </a>
                        {/* Toggler */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        {/* Collapse */}
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            {/* Nav */}
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item dropdown">
                                    {/* Toggle */}
                                    <a className="nav-link" data-toggle="dropdown" href="#">Home</a>
                                    {/* Menu */}
                                    <div className="dropdown-menu">
                                        <div className="card card-lg">
                                            <div className="card-body">
                                                <ul className="list-styled font-size-sm">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./index.html">Default</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./index-classic.html">Classic</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./index-fashion.html">Fashion</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./index-boxed.html">Boxed</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./index-simple.html">Simple</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./index-asymmetric.html">Asymmetric</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./index-sidenav.html">Sidenav</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./index-landing.html">Landing</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown position-static">
                                    {/* Toggle */}
                                    <a className="nav-link" data-toggle="dropdown" href="#">Catalog</a>
                                    {/* Menu */}
                                    <div className="dropdown-menu w-100">
                                        {/* Tabs */}
                                        <form className="mb-2 mb-lg-0 border-bottom-lg">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12">
                                                        {/* Nav */}
                                                        <nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
                                                            <a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
                                                                Women
                                                            </a>
                                                            <a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
                                                                Men
                                                            </a>
                                                            <a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
                                                                Kids
                                                            </a>
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        {/* Tab content */}
                                        <div className="card card-lg">
                                            <div className="card-body">
                                                <div className="tab-content">
                                                    <div className="tab-pane fade show active" id="navTab">
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col-6 col-md">
                                                                    {/* Heading */}
                                                                    <div className="mb-5 font-weight-bold">Clothing</div>
                                                                    {/* Links */}
                                                                    <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">All Clothing</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Blouses &amp; Shirts</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Coats &amp; Jackets</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Dresses</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Hoodies &amp; Sweats</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Denim</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Jeans</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Jumpers &amp; Cardigans</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Leggings</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-6 col-md">
                                                                    {/* Heading */}
                                                                    <div className="mb-5 font-weight-bold">Shoes &amp; Boots</div>
                                                                    {/* Links */}
                                                                    <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">All Shoes &amp; Boots</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Branded Shoes</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Boots</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Heels</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Trainers</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Sandals</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Shoes</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Wide Fit Shoes</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-6 col-md">
                                                                    {/* Heading */}
                                                                    <div className="mb-5 font-weight-bold">Bags &amp; Accessories</div>
                                                                    {/* Links */}
                                                                    <ul className="list-styled mb-0 font-size-sm">
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">All Bags &amp; Accessories</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Accessories</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Bags &amp; Purses</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Luggage</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Belts</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Hats</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Hair Accessories</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Jewellery</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Travel Accessories</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-6 col-md">
                                                                    {/* Heading */}
                                                                    <div className="mb-5 font-weight-bold">Collections</div>
                                                                    {/* Links */}
                                                                    <ul className="list-styled mb-0 font-size-sm">
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">All Collections</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Occasionwear</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Going Out</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Workwear</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Holiday Shop</a>
                                                                        </li>
                                                                        <li className="list-styled-item">
                                                                            <a className="list-styled-link" href="./shop.html">Jean Fit Guide</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-4 d-none d-lg-block">
                                                                    {/* Card */}
                                                                    <div className="card">
                                                                        {/* Image */}
                                                                        <img className="card-img" src="/img/products/product-110.jpg" alt="..." />
                                                                        {/* Overlay */}
                                                                        <div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
                                                                            <div className="text-center">
                                                                                <a className="btn btn-white stretched-link" href="./shop.html">
                                                                                    Shop Sweaters <i className="fe fe-arrow-right ml-2" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    {/* Toggle */}
                                    <a className="nav-link" data-toggle="dropdown" href="#">Shop</a>
                                    {/* Menu */}
                                    <div className="dropdown-menu" style={{ minWidth: 650 }}>
                                        <div className="card card-lg">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        {/* Heading */}
                                                        <div className="mb-5 font-weight-bold">Shop</div>
                                                        {/* Links */}
                                                        <ul className="list-styled mb-7 font-size-sm">
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./shop.html">Default</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./shop-topbar.html">Topbar</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./shop-collapse.html">Collapse</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./shop-simple.html">Simple</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./shop-masonry.html">Masonry</a>
                                                            </li>
                                                        </ul>
                                                        {/* Heading */}
                                                        <div className="mb-5 font-weight-bold">Product</div>
                                                        {/* Links */}
                                                        <ul className="list-styled font-size-sm">
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./product.html">Default</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./product-images-left.html">Images Left</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./product-image-grid.html">Image Grid</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./product-image-slider.html">Image Slider</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./product-images-stacked.html">Images Stacked</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        {/* Heading */}
                                                        <div className="mb-5 font-weight-bold">Support</div>
                                                        {/* Links */}
                                                        <ul className="list-styled mb-7 font-size-sm">
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./shopping-cart.html">Shopping Cart</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./checkout.html">Checkout</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./order-completed.html">Order Completed</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./shipping-and-returns.html">Shipping &amp; Returns</a>
                                                            </li>
                                                        </ul>
                                                        {/* Heading */}
                                                        <div className="mb-5 font-weight-bold">Account</div>
                                                        {/* Links */}
                                                        <ul className="list-styled font-size-sm">
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./account-order.html">Order</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./account-orders.html">Orders</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./account-wishlist.html">Wishlist</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./account-personal-info.html">Personal Info</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./account-address.html">Addresses</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./account-address-edit.html">Addresses: New</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        {/* Links */}
                                                        <ul className="list-styled mb-7 font-size-sm">
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./account-payment.html">Payment</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./account-payment-edit.html">Payment: New</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./account-payment-choose.html">Payment: Choose</a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" href="./auth.html">Auth</a>
                                                            </li>
                                                        </ul>
                                                        {/* Heading */}
                                                        <div className="mb-5 font-weight-bold">Modals</div>
                                                        {/* Links */}
                                                        <ul className="list-styled font-size-sm">
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterHorizontal">
                                                                    Newsletter: Horizontal
                                                                </a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" data-toggle="modal" href="#modalNewsletterVertical">
                                                                    Newsletter: Vertical
                                                                </a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" data-toggle="modal" href="#modalProduct">
                                                                    Product
                                                                </a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" data-toggle="modal" href="#modalSearch">
                                                                    Search
                                                                </a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" data-toggle="modal" href="#modalShoppingCart">
                                                                    Shopping Cart
                                                                </a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" data-toggle="modal" href="#modalSizeChart">
                                                                    Size Chart
                                                                </a>
                                                            </li>
                                                            <li className="list-styled-item">
                                                                <a className="list-styled-link" data-toggle="modal" href="#modalWaitList">
                                                                    Wait List
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    {/* Toggle */}
                                    <a className="nav-link" data-toggle="dropdown" href="#">Pages</a>
                                    {/* Menu */}
                                    <div className="dropdown-menu">
                                        <div className="card card-lg">
                                            <div className="card-body">
                                                <ul className="list-styled font-size-sm">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./about.html">About</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./contact-us.html">Contact Us</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./store-locator.html">Store Locator</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./faq.html">FAQ</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./coming-soon.html">Coming Soon</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./404.html">404</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    {/* Toggle */}
                                    <a className="nav-link" data-toggle="dropdown" href="#">Blog</a>
                                    {/* Menu */}
                                    <div className="dropdown-menu">
                                        <div className="card card-lg">
                                            <div className="card-body">
                                                <ul className="list-styled font-size-sm">
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./blog.html">Blog</a>
                                                    </li>
                                                    <li className="list-styled-item">
                                                        <a className="list-styled-link" href="./blog-post.html">Blog Post</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="docs/getting-started.html">Docs</a>
                                </li>
                            </ul>
                            {/* Nav */}
                            <ul className="navbar-nav flex-row">
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="modal" href="#modalSearch">
                                        <i className="fe fe-search" />
                                    </a>
                                </li>
                                <li className="nav-item ml-lg-n4">
                                    <a className="nav-link" href="./account-orders.html">
                                        <i className="fe fe-user" />
                                    </a>
                                </li>
                                <li className="nav-item ml-lg-n4">
                                    <a className="nav-link" href="./account-wishlist.html">
                                        <i className="fe fe-heart" />
                                    </a>
                                </li>
                                <li className="nav-item ml-lg-n4">
                                    <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                                        <span data-cart-items={2}>
                                            <i className="fe fe-shopping-cart" />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* PROMO */}
                <div className="py-3 bg-dark bg-pattern mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Text */}
                                <div className="text-center text-white">
                                    <span className="heading-xxs letter-spacing-xl">
                                        ⚡️ Happy Holiday Deals on Everything ⚡️
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CATEGORIES */}
                <section>
                    <div className="row no-gutters d-block d-lg-flex flickity flickity-lg-none" data-flickity="{&quot;watchCSS&quot;: true}">
                        {/* Item */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-1.jpg)' }}>
                            <div className="card bg-dark-5 bg-hover text-white text-center" style={{ minHeight: 470 }}>
                                <div className="card-body mt-auto mb-n11 py-8">
                                    {/* Heading */}
                                    <h1 className="mb-0 font-weight-bolder">
                                        Women
                                    </h1>
                                </div>
                                <div className="card-body mt-auto py-8">
                                    {/* Button */}
                                    <a className="btn btn-white stretched-link" href="shop.html">
                                        Shop Women <i className="fe fe-arrow-right ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-2.jpg)' }}>
                            <div className="card bg-dark-5 bg-hover text-white text-center" style={{ minHeight: 470 }}>
                                <div className="card-body mt-auto mb-n11 py-8">
                                    {/* Heading */}
                                    <h1 className="mb-0 font-weight-bolder">
                                        Men
                                    </h1>
                                </div>
                                <div className="card-body mt-auto py-8">
                                    {/* Button */}
                                    <a className="btn btn-white stretched-link" href="shop.html">
                                        Shop Men <i className="fe fe-arrow-right ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Card */}
                        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-3.jpg)' }}>
                            <div className="card bg-dark-5 bg-hover text-white text-center" style={{ minHeight: 470 }}>
                                <div className="card-body mt-auto mb-n11 py-8">
                                    {/* Heading */}
                                    <h1 className="mb-0 font-weight-bolder">
                                        Kids
                                    </h1>
                                </div>
                                <div className="card-body mt-auto py-8">
                                    {/* Button */}
                                    <a className="btn btn-white stretched-link" href="shop.html">
                                        Shop Kids <i className="fe fe-arrow-right ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FEATURES */}
                <section className="pt-7">
                    <div className="container">
                        <div className="row pb-7 border-bottom">
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
                {/* BEST PICKS */}
                <section className="pt-12">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
                                {/* Preheading */}
                                <h6 className="heading-xxs mb-3 text-gray-400">
                                    New Collection
                                </h6>
                                {/* Heading */}
                                <h2 className="mb-4">Best Picks 2019</h2>
                                {/* Subheading */}
                                <p className="mb-10 text-gray-500">
                                    Appear, dry there darkness they're seas, dry waters thing fly midst. Beast, above fly brought Very green.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
                                {/* Card */}
                                <div className="card mb-7 text-white" style={{ minHeight: 400, backgroundImage: 'url(/img/products/product-1.jpg)' }}>
                                    {/* Background */}
                                    <div className="card-bg">
                                        <div className="card-bg-img bg-cover" style={{ backgroundImage: 'url(/img/products/product-1.jpg)' }} />
                                    </div>
                                    {/* Body */}
                                    <div className="card-body my-auto text-center">
                                        {/* Heading */}
                                        <h4 className="mb-0">Bags Collection</h4>
                                        {/* Link */}
                                        <a className="btn btn-link stretched-link text-reset" href="shop.html">
                                            Shop Now <i className="fe fe-arrow-right ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
                                {/* Card */}
                                <div className="card mb-7 text-body" style={{ minHeight: 400 }}>
                                    {/* Background */}
                                    <div className="card-bg">
                                        <div className="card-bg-img bg-cover" style={{ backgroundImage: 'url(/img/products/product-2.jpg)' }} />
                                    </div>
                                    {/* Body */}
                                    <div className="card-body my-auto px-md-10 text-center text-md-left">
                                        {/* Circle */}
                                        <div className="card-circle card-circle-lg card-circle-right">
                                            <strong>save</strong>
                                            <span className="font-size-h4 font-weight-bold">30%</span>
                                        </div>
                                        {/* Heading */}
                                        <h4 className="mb-0">Printed men’s Shirts</h4>
                                        {/* Link */}
                                        <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
                                            Shop Now <i className="fe fe-arrow-right ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
                                {/* Card */}
                                <div className="card mb-7 mb-md-0 text-body" style={{ minHeight: 400 }}>
                                    {/* Background */}
                                    <div className="card-bg">
                                        <div className="card-bg-img bg-cover" style={{ backgroundImage: 'url(/img/products/product-3.jpg)' }} />
                                    </div>
                                    {/* Body */}
                                    <div className="card-body my-auto px-md-10 text-center text-md-left">
                                        {/* Heading */}
                                        <h4 className="mb-0">Basic women’s Dresses</h4>
                                        {/* Link */}
                                        <a className="btn btn-link stretched-link px-0 text-reset" href="shop.html">
                                            Shop Now <i className="fe fe-arrow-right ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
                                {/* Card */}
                                <div className="card text-white" style={{ minHeight: 400 }}>
                                    {/* Background */}
                                    <div className="card-bg">
                                        <div className="card-bg-img bg-cover" style={{ backgroundImage: 'url(/img/products/product-4.jpg)' }} />
                                    </div>
                                    {/* Body */}
                                    <div className="card-body my-auto text-center">
                                        {/* Heading */}
                                        <h4 className="mb-0">Sweatshirts</h4>
                                        {/* Link */}
                                        <a className="btn btn-link stretched-link text-reset" href="shop.html">
                                            Shop Now <i className="fe fe-arrow-right ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* TOP SELLERS */}
                <section className="py-12">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                                {/* Heading */}
                                <h2 className="mb-4 text-center">Top month Sellers</h2>
                                {/* Nav */}
                                <div className="nav justify-content-center mb-10">
                                    <a className="nav-link active" href="#topSellersTab" data-toggle="tab">Women</a>
                                    <a className="nav-link" href="#topSellersTab" data-toggle="tab">Men</a>
                                    <a className="nav-link" href="#topSellersTab" data-toggle="tab">Kids</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="topSellersTab">
                                <div className="row">
                                    <div className="col-6 col-md-4 col-lg-3">
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
                                    <div className="col-6 col-md-4 col-lg-3">
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
                                    <div className="col-6 col-md-4 col-lg-3">
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
                                    <div className="col-6 col-md-4 col-lg-3">
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
                                    <div className="col-6 col-md-4 col-lg-3">
                                        {/* Card */}
                                        <div className="card mb-7">
                                            {/* Image */}
                                            <div className="card-img">
                                                {/* Image */}
                                                <a href="#!">
                                                    <img className="card-img-top card-img-front" src="/img/products/product-9.jpg" alt="..." />
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
                                                        Floral print midi Dress
                                                    </a>
                                                </div>
                                                {/* Price */}
                                                <div className="font-weight-bold text-muted">
                                                    $50.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
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
                                                    <img className="card-img-top card-img-back" src="/img/products/product-123.jpg" alt="..." />
                                                    <img className="card-img-top card-img-front" src="/img/products/product-10.jpg" alt="..." />
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
                                                    <a className="text-muted" href="shop.html">Bags</a>
                                                </div>
                                                {/* Title */}
                                                <div className="font-weight-bold">
                                                    <a className="text-body" href="product.html">
                                                        Suede cross body Bag
                                                    </a>
                                                </div>
                                                {/* Price */}
                                                <div className="font-weight-bold">
                                                    <span className="font-size-xs text-gray-350 text-decoration-line-through">$79.00</span>
                                                    <span className="text-primary">$49.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        {/* Card */}
                                        <div className="card mb-7">
                                            {/* Image */}
                                            <div className="card-img">
                                                {/* Image */}
                                                <a className="card-img-hover" href="product.html">
                                                    <img className="card-img-top card-img-back" src="/img/products/product-124.jpg" alt="..." />
                                                    <img className="card-img-top card-img-front" src="/img/products/product-11.jpg" alt="..." />
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
                                                    <a className="text-muted" href="shop.html">Skirts</a>
                                                </div>
                                                {/* Title */}
                                                <div className="font-weight-bold">
                                                    <a className="text-body" href="product.html">
                                                        Printed A-line Skirt
                                                    </a>
                                                </div>
                                                {/* Price */}
                                                <div className="font-weight-bold text-muted">
                                                    $79.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3">
                                        {/* Card */}
                                        <div className="card mb-7">
                                            {/* Badge */}
                                            <div className="badge badge-white card-badge card-badge text-uppercase">
                                                New
                                            </div>
                                            {/* Image */}
                                            <div className="card-img">
                                                {/* Image */}
                                                <a href="#!">
                                                    <img className="card-img-top card-img-front" src="/img/products/product-12.jpg" alt="..." />
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
                                                        Heel strappy Sandals
                                                    </a>
                                                </div>
                                                {/* Price */}
                                                <div className="font-weight-bold text-muted">
                                                    $90.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {/* Link  */}
                                <div className="mt-7 text-center">
                                    <a className="link-underline" href="#!">Discover more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* COUNTDOWN */}
                <section className="py-13 bg-cover" style={{ backgroundImage: 'url(/img/covers/cover-4.jpg)' }}>
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-12 col-md-8 col-lg-6">
                                {/* Heading */}
                                <h3 className="mb-7">
                                    Get -50% from <br />Summer Collection
                                </h3>
                                {/* Counter */}
                                <div className="d-flex mb-9" data-countdown data-date="Jan 5, 2021 15:37:25">
                                    <div className="text-center">
                                        <div className="font-size-h1 font-weight-bolder text-primary" data-days>00</div>
                                        <div className="heading-xxs text-muted">Days</div>
                                    </div>
                                    <div className="px-1 px-md-4">
                                        <div className="font-size-h2 font-weight-bolder text-primary">:</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-size-h1 font-weight-bolder text-primary" data-hours>00</div>
                                        <div className="heading-xxs text-muted">Hours</div>
                                    </div>
                                    <div className="px-1 px-md-4">
                                        <div className="font-size-h2 font-weight-bolder text-primary">:</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-size-h1 font-weight-bolder text-primary" data-minutes>00</div>
                                        <div className="heading-xxs text-muted">Minutes</div>
                                    </div>
                                    <div className="px-1 px-md-4">
                                        <div className="font-size-h2 font-weight-bolder text-primary">:</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-size-h1 font-weight-bolder text-primary" data-seconds>00</div>
                                        <div className="heading-xxs text-muted">Seconds</div>
                                    </div>
                                </div>
                                {/* Button */}
                                <a className="btn btn-dark" href="shop.html">
                                    Shop Now <i className="fe fe-arrow-right ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* REVIEWS */}
                <section className="py-12">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
                                {/* Preheading */}
                                <h6 className="heading-xxs mb-3 text-gray-400">
                                    What buyers say
                                </h6>
                                {/* Heading */}
                                <h2 className="mb-10">Latest buyers Reviews</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {/* Slider */}
                                <div data-flickity="{&quot;pageDots&quot;: true}">
                                    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                                        {/* Card */}
                                        <div className="card-lg card border">
                                            <div className="card-body">
                                                {/* Header */}
                                                <div className="row align-items-center mb-6">
                                                    <div className="col-4">
                                                        {/* Image */}
                                                        <img src="/img/products/product-13.jpg" alt="..." className="img-fluid" />
                                                    </div>
                                                    <div className="col-8 ml-n2">
                                                        {/* Preheading */}
                                                        <a className="font-size-xs text-muted" href="shop.html">
                                                            Shoes
                                                        </a>
                                                        {/* Heading */}
                                                        <a className="d-block font-weight-bold text-body" href="product.html">
                                                            Low top Sneakers
                                                        </a>
                                                        {/* Rating */}
                                                        <div className="rating font-size-xxs text-warning" data-value={3}>
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
                                                {/* Blockquote */}
                                                <blockquote className="mb-0">
                                                    <p className="text-muted">
                                                        From creepeth said moved given divide make multiply of him shall itself also above second doesn't
                                                        unto created saying land herb sea midst night wherein.
                                                    </p>
                                                    <footer className="font-size-xs text-muted">
                                                        Logan Edwards, <time dateTime="2019-06-01">01 Jun 2019</time>
                                                    </footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                                        {/* Card */}
                                        <div className="card-lg card border">
                                            <div className="card-body">
                                                {/* Header */}
                                                <div className="row align-items-center mb-6">
                                                    <div className="col-4">
                                                        {/* Image */}
                                                        <img src="/img/products/product-14.jpg" alt="..." className="img-fluid" />
                                                    </div>
                                                    <div className="col-8 ml-n2">
                                                        {/* Preheading */}
                                                        <a className="font-size-xs text-muted" href="shop.html">
                                                            Dresses
                                                        </a>
                                                        {/* Heading */}
                                                        <a className="d-block font-weight-bold text-body" href="product.html">
                                                            Cotton print Dress
                                                        </a>
                                                        {/* Rating */}
                                                        <div className="rating font-size-xxs text-warning" data-value={5}>
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
                                                {/* Blockquote */}
                                                <blockquote className="mb-0">
                                                    <p className="text-muted">
                                                        God every fill great replenish darkness unto. Very open. Likeness their that light. Given under
                                                        image to. Subdue of shall cattle day fish form saw spirit and given stars, us you whales may,
                                                        land, saw fill unto.
                                                    </p>
                                                    <footer className="font-size-xs text-muted">
                                                        Jane Jefferson, <time dateTime="2019-05-29">29 May 2019</time>
                                                    </footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                                        {/* Card */}
                                        <div className="card-lg card border">
                                            <div className="card-body">
                                                {/* Header */}
                                                <div className="row align-items-center mb-6">
                                                    <div className="col-4">
                                                        {/* Image */}
                                                        <img src="/img/products/product-15.jpg" alt="..." className="img-fluid" />
                                                    </div>
                                                    <div className="col-8 ml-n2">
                                                        {/* Preheading */}
                                                        <a className="font-size-xs text-muted" href="shop.html">
                                                            T-shirts
                                                        </a>
                                                        {/* Heading */}
                                                        <a className="d-block font-weight-bold text-body" href="product.html">
                                                            Oversized print T-shirt
                                                        </a>
                                                        {/* Rating */}
                                                        <div className="rating font-size-xxs text-warning" data-value={4}>
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
                                                {/* Blockquote */}
                                                <blockquote className="mb-0">
                                                    <p className="text-muted">
                                                        Fill his waters wherein signs likeness waters. Second light gathered appear sixth fourth, seasons
                                                        behold creeping female.
                                                    </p>
                                                    <footer className="font-size-xs text-muted">
                                                        Darrell Baker, <time dateTime="2019-05-18">18 May 2019</time>
                                                    </footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                                        {/* Card */}
                                        <div className="card-lg card border">
                                            <div className="card-body">
                                                {/* Header */}
                                                <div className="row align-items-center mb-6">
                                                    <div className="col-4">
                                                        {/* Image */}
                                                        <img src="/img/products/product-10.jpg" alt="..." className="img-fluid" />
                                                    </div>
                                                    <div className="col-8 ml-n2">
                                                        {/* Preheading */}
                                                        <a className="font-size-xs text-muted" href="shop.html">
                                                            Bags &amp; Accessories
                                                        </a>
                                                        {/* Heading */}
                                                        <a className="d-block font-weight-bold text-body" href="product.html">
                                                            Suede cross body Bag
                                                        </a>
                                                        {/* Rating */}
                                                        <div className="rating font-size-xxs text-warning" data-value={4}>
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
                                                {/* Blockquote */}
                                                <blockquote className="mb-0">
                                                    <p className="text-muted">
                                                        God every fill great replenish darkness unto. Very open. Likeness their that light. Given under
                                                        image to. Subdue of shall cattle day fish form saw spirit and given stars.
                                                    </p>
                                                    <footer className="font-size-xs text-muted">
                                                        Pavel Doe, <time dateTime="2019-05-29">29 May 2019</time>
                                                    </footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* BRANDS */}
                <section className="py-12 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                {/* Heading */}
                                <h2 className="mb-3">@shopper</h2>
                                {/* Subheading */}
                                <p className="mb-10 font-size-lg text-gray-500">
                                    Appear, dry there darkness they're seas, dry waters.
                                </p>
                            </div>
                        </div>
                        <div className="row mx-n1 mb-10">
                            <div className="col-6 col-sm-4 col-md px-1">
                                {/* Card */}
                                <div className="card mb-2">
                                    {/* Image */}
                                    <img src="/img/products/product-16.jpg" alt="..." className="card-img" />
                                    {/* Overlay */}
                                    <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                                        <p className="my-0 font-size-xxs text-center text-white">
                                            <i className="fe fe-heart mr-2" /> 248 <i className="fe fe-message-square mr-2 ml-3" /> 7
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-md px-1">
                                {/* Card */}
                                <div className="card mb-2">
                                    {/* Image */}
                                    <img src="/img/products/product-17.jpg" alt="..." className="card-img" />
                                    {/* Overlay */}
                                    <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                                        <p className="my-0 font-size-xxs text-center text-white">
                                            <i className="fe fe-heart mr-2" /> 248 <i className="fe fe-message-square mr-2 ml-3" /> 7
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-md px-1">
                                {/* Card */}
                                <div className="card mb-2">
                                    {/* Image */}
                                    <img src="/img/products/product-18.jpg" alt="..." className="card-img" />
                                    {/* Overlay */}
                                    <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                                        <p className="my-0 font-size-xxs text-center text-white">
                                            <i className="fe fe-heart mr-2" /> 248 <i className="fe fe-message-square mr-2 ml-3" /> 7
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-md px-1">
                                {/* Card */}
                                <div className="card mb-2">
                                    {/* Image */}
                                    <img src="/img/products/product-19.jpg" alt="..." className="card-img" />
                                    {/* Overlay */}
                                    <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                                        <p className="my-0 font-size-xxs text-center text-white">
                                            <i className="fe fe-heart mr-2" /> 248 <i className="fe fe-message-square mr-2 ml-3" /> 7
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-md px-1">
                                {/* Card */}
                                <div className="card">
                                    {/* Image */}
                                    <img src="/img/products/product-20.jpg" alt="..." className="card-img" />
                                    {/* Overlay */}
                                    <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                                        <p className="my-0 font-size-xxs text-center text-white">
                                            <i className="fe fe-heart mr-2" /> 248 <i className="fe fe-message-square mr-2 ml-3" /> 7
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4 col-md px-1">
                                {/* Card */}
                                <div className="card">
                                    {/* Image */}
                                    <img src="/img/products/product-21.jpg" alt="..." className="card-img" />
                                    {/* Overlay */}
                                    <a className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40" href="blog-post.html">
                                        <p className="my-0 font-size-xxs text-center text-white">
                                            <i className="fe fe-heart mr-2" /> 248 <i className="fe fe-message-square mr-2 ml-3" /> 7
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 col-sm-3 col-md text-center">
                                {/* Brand */}
                                <img src="/img/brands/gray-350/mango.svg" alt="..." className="img-fluid mb-7 mb-md-0" />
                            </div>
                            <div className="col-4 col-sm-3 col-md text-center">
                                {/* Brand */}
                                <img src="/img/brands/gray-350/zara.svg" alt="..." className="img-fluid mb-7 mb-md-0" />
                            </div>
                            <div className="col-4 col-sm-3 col-md text-center">
                                {/* Brand */}
                                <img src="/img/brands/gray-350/reebok.svg" alt="..." className="img-fluid mb-7 mb-md-0" />
                            </div>
                            <div className="col-4 col-sm-3 col-md text-center">
                                {/* Brand */}
                                <img src="/img/brands/gray-350/asos.svg" alt="..." className="img-fluid mb-7 mb-md-0" />
                            </div>
                            <div className="col-4 col-sm-3 col-md text-center">
                                {/* Brand */}
                                <img src="/img/brands/gray-350/stradivarius.svg" alt="..." className="img-fluid mb-6 mb-sm-0" />
                            </div>
                            <div className="col-4 col-sm-3 col-md text-center">
                                {/* Brand */}
                                <img src="/img/brands/gray-350/adidas.svg" alt="..." className="img-fluid mb-6 mb-sm-0" />
                            </div>
                            <div className="col-4 col-sm-3 col-md text-center">
                                {/* Brand */}
                                <img src="/img/brands/gray-350/bershka.svg" alt="..." className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* FOOTER */}
                <footer className="bg-dark bg-cover @@classList" style={{ backgroundImage: 'url(/img/patterns/pattern-2.svg)' }}>
                    <div className="py-12 border-bottom border-gray-700">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                                    {/* Heading */}
                                    <h5 className="mb-7 text-center text-white">Want style Ideas and Treats?</h5>
                                    {/* Form */}
                                    <form className="mb-11">
                                        <div className="form-row align-items-start">
                                            <div className="col">
                                                <input type="email" className="form-control form-control-gray-700 form-control-lg" placeholder="Enter Email *" />
                                            </div>
                                            <div className="col-auto">
                                                <button type="submit" className="btn btn-gray-500 btn-lg">Subscribe</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-3">
                                    {/* Heading */}
                                    <h4 className="mb-6 text-white">Shopper.</h4>
                                    {/* Social */}
                                    <ul className="list-unstyled list-inline mb-7 mb-md-0">
                                        <li className="list-inline-item">
                                            <a href="#!" className="text-gray-350">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="text-gray-350">
                                                <i className="fab fa-youtube" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="text-gray-350">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="text-gray-350">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#!" className="text-gray-350">
                                                <i className="fab fa-medium" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm">
                                    {/* Heading */}
                                    <h6 className="heading-xxs mb-4 text-white">
                                        Support
                                    </h6>
                                    {/* Links */}
                                    <ul className="list-unstyled mb-7 mb-sm-0">
                                        <li>
                                            <a className="text-gray-300" href="./contact-us.html">Contact Us</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-300" href="./faq.html">FAQs</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-300" data-toggle="modal" href="#modalSizeChart">Size Guide</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-300" href="./shipping-and-returns.html">Shipping &amp; Returns</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm">
                                    {/* Heading */}
                                    <h6 className="heading-xxs mb-4 text-white">
                                        Shop
                                    </h6>
                                    {/* Links */}
                                    <ul className="list-unstyled mb-7 mb-sm-0">
                                        <li>
                                            <a className="text-gray-300" href="./shop.html">Men's Shopping</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-300" href="./shop.html">Women's Shopping</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-300" href="./shop.html">Kids' Shopping</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-300" href="./shop.html">Discounts</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm">
                                    {/* Heading */}
                                    <h6 className="heading-xxs mb-4 text-white">
                                        Company
                                    </h6>
                                    {/* Links */}
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a className="text-gray-300" href="./about.html">Our Story</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-300" href="#!">Careers</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-300" href="#!">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-300" href="#!">Privacy &amp; Cookie policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm">
                                    {/* Heading */}
                                    <h6 className="heading-xxs mb-4 text-white">
                                        Contact
                                    </h6>
                                    {/* Links */}
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a className="text-gray-300" href="#!">1-202-555-0105</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-300" href="#!">1-202-555-0106</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-300" href="#!">help@shopper.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    {/* Copyright */}
                                    <p className="mb-3 mb-md-0 font-size-xxs text-muted">
                                        © 2019 All rights reserved. Designed by Unvab.
                                    </p>
                                </div>
                                <div className="col-auto">
                                    {/* Payment methods */}
                                    <img className="footer-payment" src="/img/payment/mastercard.svg" alt="..." />
                                    <img className="footer-payment" src="/img/payment/visa.svg" alt="..." />
                                    <img className="footer-payment" src="/img/payment/amex.svg" alt="..." />
                                    <img className="footer-payment" src="/img/payment/paypal.svg" alt="..." />
                                    <img className="footer-payment" src="/img/payment/maestro.svg" alt="..." />
                                    <img className="footer-payment" src="/img/payment/klarna.svg" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
