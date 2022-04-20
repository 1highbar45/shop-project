import React from 'react'
import { Link } from 'react-router-dom'
import SearchModal from '../SearchModal/SearchModal'
import { useToggle } from '../../hooks/useToggle'
import { HOME_PATH, PRODUCT_PATH } from '../../constants/path'
import { useTranslate } from '../../core/components/TranslateProvider'
import CartModal from '../CartModal/CartModal'

export default function MainNav() {
    const isShowSearchModal = useToggle()
    const isShowCartModal = useToggle()
    const { _t } = useTranslate()

    const onOpenSearch = (ev) => {
        ev.preventDefault()
        isShowSearchModal.setTrue()
    }

    const onOpenCart = (ev) => {
        ev.preventDefault()
        isShowCartModal.setTrue()
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    {/* Brand */}
                    <Link className="navbar-brand" to={HOME_PATH}>
                        Shopper.
                    </Link>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* Nav */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/">{_t('Home')}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to={PRODUCT_PATH}>Shop</Link>
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
                                                    <Link className="list-styled-link" to="/about">About</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/contact-us">Contact Us</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/store-locator">Store Locator</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/faq">FAQ</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/coming-soon">Coming Soon</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/404">404</Link>
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
                                                    <Link className="list-styled-link" to="/blog">Blog</Link>
                                                </li>
                                                <li className="list-styled-item">
                                                    <Link className="list-styled-link" to="/blog-post">Blog Post</Link>
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
                            <li className="nav-item" >
                                <a className="nav-link" onClick={onOpenSearch} data-toggle="modal" href="#modalSearch">
                                    <i className="fe fe-search" />
                                </a>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="/auth">
                                    <i className="fe fe-user" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="/account/wishlist">
                                    <i className="fe fe-heart" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <a className="nav-link" onClick={onOpenCart} data-toggle="modal" href="#modalShoppingCart">
                                    <span data-cart-items={2}>
                                        <i className="fe fe-shopping-cart" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <SearchModal visible={isShowSearchModal.value} onClose={isShowSearchModal.setFalse} />
            <CartModal visible={isShowCartModal.value} onClose={isShowCartModal.setFalse}/>
        </>
    )
}
