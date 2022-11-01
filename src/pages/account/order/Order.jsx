import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Paginate from '../../../components/Paginate/Paginate'
import useQuery from '../../../hooks/useQuery'
import { useQueryURL } from '../../../hooks/useQueryURL'
import { orderService } from '../../../services/orderService'
import { currency } from '../../../utils/number'
import { convertObjToQueryString, convertQueryURLToObject } from '../../../utils/url'

export default function Order() {
    const query = useSearchParams()
    const objUrl = convertQueryURLToObject(query[0].toString())

    const page = parseInt(objUrl.page || '1')

    const queryObj = useQueryURL()
    const navigate = useNavigate()
    const queryString = convertObjToQueryString({
        name: queryObj.q,
        page: page,
        sort: queryObj.sort
    })
    const { data: orders, loading: orderLoading, paginate } = useQuery(() => orderService.getAllOrder(queryString), [queryString])
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        let orderNotNull = orders?.filter(order => order?.listItems?.length > 0)
        setOrderList(orderNotNull)
    }, [orders])

    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Order */}
            {
                orderList?.map((e, i) => (
                    <div className="card card-lg mb-5 border" key={e?._id}>
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
                                                {e?._id}
                                            </p>
                                        </div>
                                        <div className="col-6 col-lg-3">
                                            <h6 className="heading-xxxs text-muted">Shipped date:</h6>
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
                                                {e?.status}
                                            </p>
                                        </div>
                                        <div className="col-6 col-lg-3">
                                            {/* Heading */}
                                            <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                                            {/* Text */}
                                            <p className="mb-0 font-size-sm font-weight-bold">
                                                {currency(e?.total)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-6">
                                    <div className="form-row mb-4 mb-lg-0">
                                        {
                                            e?.listItems.map((item, index) => (
                                                <div className="col-3">
                                                    {/* Image */}
                                                    <div className="embed-responsive embed-responsive-1by1 bg-cover"
                                                        style={{ backgroundImage: `url(${item?.product?.thumbnail_url})` }} />
                                                </div>
                                            ))
                                        }
                                        {/* <div className="col-3">
                                            <div className="embed-responsive embed-responsive-1by1 bg-light">
                                                <a className="embed-responsive-item embed-responsive-item-text text-reset" href="#!">
                                                    <div className="font-size-xxs font-weight-bold">
                                                        +2 <br /> more
                                                    </div>
                                                </a>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="form-row">
                                        <div className="col-6">
                                            {/* Button */}
                                            <a className="btn btn-sm btn-block btn-outline-dark"
                                                href=""
                                                onClick={() => navigate(`/account/order/${e?._id}`)}
                                            >
                                                Order Details
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a className="btn btn-sm btn-block btn-outline-dark" href="#!">
                                                Track order
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {/* Pagination */}
            <Paginate totalPage={paginate?.totalPage} />
        </div>

    )
}
