import React, { createContext, useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslate } from '../../core/components/TranslateProvider'

export default function Navbar() {
    const { selectLanguage } = useTranslate()
    return (
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
                        <TopBarMenu>
                            <TopBarMenu.Item><img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." />United States</TopBarMenu.Item>
                            <TopBarMenu.Item><img className="mb-1 mr-2" src="/img/flags/canada.svg" alt="Canada" />Canada</TopBarMenu.Item>
                            <TopBarMenu.Item><img className="mb-1 mr-2" src="/img/flags/germany.svg" alt="Germany" />Germany</TopBarMenu.Item>
                        </TopBarMenu>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                <img className="mb-1 mr-1" src="/img/flags/usa.svg" alt="..." /> United States
                            </a>
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
                        </li> */}
                        <TopBarMenu>
                            <TopBarMenu.Item>USD</TopBarMenu.Item>
                            <TopBarMenu.Item>EUR</TopBarMenu.Item>
                        </TopBarMenu>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">USD</a>
                            <div className="dropdown-menu minw-0">
                                <a className="dropdown-item" href="#!">USD</a>
                                <a className="dropdown-item" href="#!">EUR</a>
                            </div>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">English</a>
                            <div className="dropdown-menu minw-0">
                                <a className="dropdown-item" href="#">English</a>
                                <a className="dropdown-item" href="#">French</a>
                                <a className="dropdown-item" href="#">German</a>
                            </div>
                        </li> */}
                        <TopBarMenu>
                            <TopBarMenu.Item onClick={() => selectLanguage('en')}>English</TopBarMenu.Item>
                            <TopBarMenu.Item onClick={() => selectLanguage('vi')}>French</TopBarMenu.Item>
                            <TopBarMenu.Item onClick={() => selectLanguage('ge')}>German</TopBarMenu.Item>
                        </TopBarMenu>
                    </ul>
                    {/* Nav */}
                    <ul className="nav navbar-nav mr-8">
                        <li className="nav-item">
                            <Link className="nav-link" to="/shipping-and-returns">Shipping</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faq">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">Contact</Link>
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
    )
}

const Context = createContext()

const TopBarMenu = ({ initialSelect = 0, children }) => {
    const [active, setActive] = useState(initialSelect)

    const ref = useRef()
    const hoverIn = () => {
        ref.current.classList.add('show')
        ref.current.querySelector('.dropdown-menu').classList.add('show')
    }
    const hoverOut = () => {
        ref.current.classList.remove('show')
        ref.current.querySelector('.dropdown-menu').classList.remove('show')
    }

    return (
        <Context.Provider value={{ setActive }}>
            <li className="nav-item dropdown hovered" ref={ref} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                {/* Toggle */}
                {
                    React.cloneElement(React.Children.toArray(children)?.[active], {
                        className: 'nav-link dropdown-toggle',
                    })
                }
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                    {
                        React.Children.map(children, (child, i) => React.cloneElement(child, { index: i }))
                    }
                </div>
            </li>
        </Context.Provider>
    )
}

TopBarMenu.Item = ({ index, children, ...props }) => {
    const { setActive } = useContext(Context)
    const _onClick = (ev) => {
        if (typeof index !== undefined) {
            ev.preventDefault()
            setActive(index)
        }
    }

    return <a className="dropdown-item" href="#" {...props} onClick={_onClick}>{children}</a>
}