import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Navigate } from 'react-router-dom'
import { actionFetchLogin, actionFetchRegister } from '../../store/auth'
import { useToggle } from '../../hooks/useToggle'

export default function Auth() {
    const formRegister = Form.useForm()
    const dispatch = useDispatch()

    // const isFetchLogin = useToggle()
    const [loginError, setLoginError] = useState('')

    const { isFetchLogin, errorMessage } = useSelector(store => store.auth)
    const { user } = useSelector(store => store.user)

    const isFetchRegister = useToggle()

    const onFinishLogin = (form) => {
        isFetchLogin.setTrue()
        setLoginError('')
        dispatch(actionFetchLogin(form))
    }

    const onFinishRegister = (form) => {
        isFetchRegister.setTrue()
        dispatch(actionFetchRegister({
            data: form,
            end() {
                isFetchRegister.setTrue()
            }
        }))
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
                                            <Form.Item name='username' rules={[{ required: true, message: 'Username must not be empty' }]}>
                                                <Input placeholder="Email Address" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-12">
                                            {/* Password */}
                                            <Form.Item name='password' >
                                                <Input type='password' placeholder="Password" />
                                            </Form.Item>
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
                                <Form onFinish={onFinishRegister} form={formRegister}>
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Email */}
                                            <Form.Item name='firstname'>
                                                <Input placeholder="First Name *" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-12">
                                            {/* Email */}
                                            <Form.Item name='lastname' >
                                                <Input placeholder="Last Name *" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-12">
                                            {/* Email */}
                                            <Form.Item name='email' >
                                                <Input placeholder="Email Address *" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <Form.Item name='password' >
                                                <Input placeholder="Password *" />
                                            </Form.Item>
                                            {/* <div className="form-group">
                                                <label className="sr-only" htmlFor="registerPassword">
                                                    Password *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerPassword" type="password" placeholder="Password *"
                                                    onChange={e => form.password = e.target.value} />
                                            </div> */}
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <Form.Item name='confirmPassword' >
                                                <Input placeholder="Confirm Password *" />
                                            </Form.Item>
                                            {/* <div className="form-group">
                                                <label className="sr-only" htmlFor="registerPasswordConfirm">
                                                    Confirm Password *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confrm Password *" />
                                            </div> */}
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
                                            <Button loading={isFetchRegister.value} className="btn btn-sm btn-dark" type="submit">
                                                Register
                                            </Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >

    )
}
