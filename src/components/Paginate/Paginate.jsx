import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { changeQueryURL, convertQueryURLToObject } from '../../utils/url'

export default function Paginate({ totalPage }) {

    // console.log(totalPage);

    const query = useSearchParams()
    const objURL = convertQueryURLToObject(query[0].toString())
    const currentPage = parseInt(objURL.page || '1')

    const renderPage = () => {
        if (totalPage <= 1) return

        let start = currentPage - 2,
            end = currentPage + 2

        if (start < 1) {
            start = 1
            end = 5
        }

        if (end > totalPage) {
            start = end - 4
            end = totalPage

            if (start < 1) start = 1
        }

        let list = []
        for (let i = start; i <= end; i++) {
            list.push(<li className={`page-item ${currentPage === i ? 'active' : ''}`} key={i}>
                <Link className="page-link" to={changeQueryURL({ ...objURL, page: i })}>{i}</Link>
            </li>)
        }
        return list
    }

    return (
        <nav className="d-flex justify-content-center justify-content-md-end">
            <ul className="pagination pagination-sm text-gray-400">
                {
                    currentPage > 1 && (
                        <li className="page-item">
                            <Link className="page-link page-link-arrow" to={changeQueryURL({ ...objURL, page: currentPage - 1 })}>
                                <i className="fa fa-caret-left" />
                            </Link>
                        </li>
                    )
                }
                {renderPage()}
                {/* <li className="page-item">
                    <a className="page-link" href="#">6</a>
                </li> */}
                {
                    currentPage < totalPage && (
                        <li className="page-item">
                            <Link className="page-link page-link-arrow" to={changeQueryURL({ ...objURL, page: currentPage + 1 })}>
                                <i className="fa fa-caret-right" />
                            </Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}
