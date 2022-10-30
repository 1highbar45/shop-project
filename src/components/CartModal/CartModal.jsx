import { Drawer, message, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useQuery from '../../hooks/useQuery'
import { cartService } from '../../services/cartService'
import { fetchGetCart, fetchRemoveCart } from '../../store/cart/cartSlice'
import { currency } from '../../utils/number'

export default function CartModal({ visible, onClose }) {
    const dispatch = useDispatch()
    const [cart, setCart] = useState([])

    async function getCart() {
        let { payload } = await dispatch(fetchGetCart())
        setCart(payload?.data)
    }

    useEffect(() => {
        getCart();
    }, [visible]);

    const onRemoveCart = async (id) => {
        const res = await cartService.removeCart(id)
        if (res.updateCount) {
            message.success('Remove cart success')
            getCart()
        }
    }

    const handleChangeQuantity = async (id, value) => {
        const res = await cartService.updateQuantity(id, value)
        if (res.updateCount) {
            message.success('Update product quantity success')
            getCart()
        }
    };

    return (
        <Drawer
            visible={visible}
            closeIcon={null}
            headerStyle={{ display: 'none' }}
            bodyStyle={{ padding: 0 }}
            width={470}
            onClose={onClose}
        >
            <div tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-vertical" role="document">
                    {/* Full cart (add `.d-none` to disable it) */}
                    <div className="modal-content">
                        {/* Close */}
                        <button type="button" className="close" onClick={onClose} data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true" />
                        </button>
                        {/* Header*/}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">Your Cart ({cart?.totalQuantity})</strong>
                        </div>
                        {/* List group */}
                        <ul className="list-group list-group-lg list-group-flush">
                            {
                                cart?.listItems?.map((e, i) => (
                                    <li className="list-group-item" key={e?.product?.id}>
                                        <div className="row align-items-center">
                                            <div className="col-4">
                                                {/* Image */}
                                                <a href="./product.html">
                                                    <img className="img-fluid" src={e?.product?.thumbnail_url} alt="..." />
                                                </a>
                                            </div>
                                            <div className="col-8">
                                                {/* Title */}
                                                <p className="font-size-sm font-weight-bold mb-6">
                                                    <a className="text-body" href="./product.html">{e?.product?.name}</a> <br />
                                                    <span className="text-muted">{currency(e?.product?.price)}</span>
                                                </p>
                                                {/*Footer */}
                                                <div className="d-flex align-items-center">
                                                    {/* Select */}
                                                    {/* <select className="custom-select custom-select-xxs w-auto">
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                    </select> */}
                                                    <Select
                                                        defaultValue={e?.quantity}
                                                        className="custom-select custom-select-xxs w-auto"
                                                        onChange={(value) => handleChangeQuantity(e?.product?.id, value)}
                                                    >
                                                        <Select.Option value={1}>1</Select.Option>
                                                        <Select.Option value={2}>2</Select.Option>
                                                        <Select.Option value={3}>3</Select.Option>
                                                        <Select.Option value={4}>4</Select.Option>
                                                    </Select>
                                                    {/* Remove */}
                                                    <a
                                                        className="font-size-xs text-gray-400 ml-auto"
                                                        href="#!"
                                                        onClick={() => onRemoveCart(e?.product?.id)}
                                                    >
                                                        <i className="fe fe-x" /> Remove
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        {/* Footer */}
                        <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
                            <strong>Subtotal</strong> <strong className="ml-auto">$89.00</strong>
                        </div>
                        {/* Buttons */}
                        <div className="modal-body">
                            <Link className="btn btn-block btn-dark" to='/checkout' onClick={onClose}>Continue to Checkout</Link>
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

        </Drawer>
    )
}
