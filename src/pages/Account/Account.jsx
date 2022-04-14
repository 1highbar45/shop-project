import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { actionLogout } from '../../store/auth'

export default function Account({ path }) {
    const dispatch = useDispatch()
    const { user } = useSelector(store => store.user)

    const onLogout = (ev) => {
        ev.preventDefault();
        dispatch(actionLogout())
    }

    if (!user) return <Navigate to={'/auth'} />

    return (
        <div>
            {/* BREADCRUMB */}
            <nav className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Breadcrumb */}
                            <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                                <li className="breadcrumb-item">
                                    <a className="text-gray-400" href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    My Account
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </nav>
            {/* CONTENT */}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading */}
                            <h3 className="mb-10">My Account</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            {/* Nav */}
                            <nav className="mb-10 mb-md-0">
                                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle "
                                        to={`${path}/order`}>
                                        Orders
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle "
                                        to={`${path}/wishlist`}>
                                        Wishlist
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle "
                                        to={`${path}`}>
                                        Personal Info
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle "
                                        to={`${path}/address`}>
                                        Addresses
                                    </NavLink>
                                    <NavLink className="list-group-item list-group-item-action dropright-toggle "
                                        to={`${path}/payment`}>
                                        Payment Methods
                                    </NavLink>
                                    <NavLink
                                        onClick={onLogout}
                                        className="list-group-item list-group-item-action dropright-toggle" to="#!">
                                        Logout
                                    </NavLink>
                                </div>
                            </nav>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </section>
        </div>

    )
}
