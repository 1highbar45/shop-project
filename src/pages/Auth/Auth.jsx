import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Navigate } from 'react-router-dom'
import { actionFetchLogin } from '../../store/auth'

export default function Auth() {
    const formRegister = Form.useForm()
    const dispatch = useDispatch()
    const { isFetchLogin } = useSelector(store => store.auth)
    const { user } = useSelector(store => store.user)

    const onFinishLogin = (form) => {
        dispatch(actionFetchLogin(form))
    }

    if (user) {
        return <Navigate to='/account' />
    }

    return (
        <section className="py-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <div className="card card-lg mb-10 mb-md-0">
                            {/* <Login /> */}
                            <div className="card-body">
                                {/* Heading */}
                                <h6 className="mb-7">Returning Customer</h6>
                                {/* Form */}
                                <Form onFinish={onFinishLogin}>
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Email */}
                                            <Form.Item name='username' label='Email Address *'>
                                                <Input placeholder="Email Address" />
                                            </Form.Item>
                                            {/* <div className="form-group">
                                                <label className="sr-only" htmlFor="loginEmail">
                                                    Email Address *
                                                </label>
                                                <input className="form-control form-control-sm" id="loginEmail" type="email" placeholder="Email Address *" />
                                            </div> */}
                                        </div>
                                        <div className="col-12">
                                            {/* Password */}
                                            <Form.Item name='password' label='Password *'>
                                                <Input type='password' placeholder="Password" />
                                            </Form.Item>
                                            {/* <div className="form-group">
                                                <label className="sr-only" htmlFor="loginPassword">
                                                    Password *
                                                </label>
                                                <input className="form-control form-control-sm" id="loginPassword" type="password" placeholder="Password *" />
                                            </div> */}
                                        </div>
                                        <div className="col-12 col-md">
                                            {/* Remember */}
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="loginRemember">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-auto">
                                            {/* Link */}
                                            <div className="form-group">
                                                <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                                                    Password?</a>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Button */}
                                            <Button loading={isFetchLogin} className="btn btn-sm btn-dark" type="submit">
                                                Sign In
                                            </Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <div className="card card-lg">
                            {/* <Register /> */}
                            <div className="card-body">
                                {/* Heading */}
                                <h6 className="mb-7">New Customer</h6>
                                {/* Form */}
                                <form >
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Email */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerFirstName">
                                                    First Name *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerFirstName" type="text" placeholder="First Name *"
                                                    onChange={e => form.firstname = e.target.value} />
                                                {/* {errors.firstname && <p className='error-text'>{errors.firstname}</p>} */}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Email */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerLastName">
                                                    Last Name *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerLastName" type="text" placeholder="Last Name *"
                                                    onChange={e => form.lastname = e.target.value} />
                                                {/* {errors.lastname && <p className='error-text'>{errors.lastname}</p>} */}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Email */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerEmail">
                                                    Email Address *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerEmail" type="email" placeholder="Email Address *"
                                                    onChange={e => form.email = e.target.value} />
                                                {/* {errors.email && <p className='error-text'>{errors.email}</p>} */}
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerPassword">
                                                    Password *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerPassword" type="password" placeholder="Password *"
                                                    onChange={e => form.password = e.target.value} />
                                                {/* {errors.password && <p className='error-text'>{errors.password}</p>} */}
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerPasswordConfirm">
                                                    Confirm Password *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confrm Password *" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-auto">
                                            {/* Link */}
                                            <div className="form-group font-size-sm text-muted">
                                                By registering your details, you agree with our Terms &amp; Conditions,
                                                and Privacy and Cookie Policy.
                                            </div>
                                        </div>
                                        <div className="col-12 col-md">
                                            {/* Newsletter */}
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="registerNewsletter">
                                                        Sign me up for the Newsletter!
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Button */}
                                            <button className="btn btn-sm btn-dark" type="submit">
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >

    )
}
