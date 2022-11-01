import React from 'react'
import { useParams } from 'react-router-dom'
import useQuery from '../../../hooks/useQuery'
import { orderService } from '../../../services/orderService'
import { currency } from '../../../utils/number'

export default function OrderDetail() {
    const id = useParams()

    const { data: detail, loading } = useQuery(() => orderService.getOrderDetail(id?.id))

    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Order */}
            <div className="card card-lg mb-5 border">
                <div className="card-body pb-0">
                    {/* Info */}
                    <div className="card card-sm">
                        <div className="card-body bg-light">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Order No:</h6>
                                    {/* Text */}
                                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                                        {detail?._id}
                                    </p>
                                </div>
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                                    {/* Text */}
                                    <p className="mb-lg-0 font-size-sm font-weight-bold">
                                        <time dateTime="2019-10-01">
                                            01 Oct, 2019
                                        </time>
                                    </p>
                                </div>
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Status:</h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm font-weight-bold">
                                        {detail?.status}
                                    </p>
                                </div>
                                <div className="col-6 col-lg-3">
                                    {/* Heading */}
                                    <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                                    {/* Text */}
                                    <p className="mb-0 font-size-sm font-weight-bold">
                                        {currency(detail?.total)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    {/* Heading */}
                    <h6 className="mb-7">Order Items ({detail?.totalQuantity})</h6>
                    {/* Divider */}
                    <hr className="my-5" />
                    {/* List group */}
                    <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x">
                        {
                            detail?.listItems.map((e, i) => (
                                <li className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-4 col-md-3 col-xl-2">
                                            {/* Image */}
                                            <a href="product.html"><img src={e?.product?.thumbnail_url} alt="..." className="img-fluid" /></a>
                                        </div>
                                        <div className="col">
                                            {/* Title */}
                                            <p className="mb-4 font-size-sm font-weight-bold">
                                                <a className="text-body" href="product.html">{e?.product?.name}</a> <br />
                                                <span className="text-muted">{currency(e?.product?.price)}</span>
                                            </p>
                                            {/* Text */}
                                            <div className="font-size-sm text-muted">
                                                Quantity: {e?.quantity}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/* Total */}
            <div className="card card-lg mb-5 border">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Order Total</h6>
                    {/* List group */}
                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                        <li className="list-group-item d-flex">
                            <span>Subtotal</span>
                            <span className="ml-auto">{currency(detail?.subTotal)}</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>Tax</span>
                            <span className="ml-auto">{currency(detail?.tax)}</span>
                        </li>
                        <li className="list-group-item d-flex">
                            <span>Shipping</span>
                            <span className="ml-auto">{currency(detail?.shipping)}</span>
                        </li>
                        <li className="list-group-item d-flex font-size-lg font-weight-bold">
                            <span>Total</span>
                            <span className="ml-auto">{currency(detail?.total)}</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Details */}
            <div className="card card-lg border">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Billing &amp; Shipping Details</h6>
                    {/* Content */}
                    <div className="row">
                        <div className="col-12 col-md-4">
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Billing Address:
                            </p>
                            <p className="mb-7 mb-md-0 text-gray-500">
                                Daniel Robinson, <br />
                                3997 Raccoon Run, <br />
                                Kingston, 45644, <br />
                                United States, <br />
                                6146389574
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Shipping Address:
                            </p>
                            <p className="mb-7 mb-md-0 text-gray-500">
                                Daniel Robinson, <br />
                                3997 Raccoon Run, <br />
                                Kingston, 45644, <br />
                                United States, <br />
                                6146389574
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Shipping Method:
                            </p>
                            <p className="mb-7 text-gray-500">
                                Standart Shipping <br />
                                (5 - 7 days)
                            </p>
                            {/* Heading */}
                            <p className="mb-4 font-weight-bold">
                                Payment Method:
                            </p>
                            <p className="mb-0 text-gray-500">
                                Debit Mastercard
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
