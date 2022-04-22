import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../components/Form/Form'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import { Navigate } from 'react-router-dom'
import { actionFetchLogin, actionFetchRegister } from '../store/auth'
import { useToggle } from '../hooks/useToggle'
import { message } from 'antd'

export default function Auth() {
    const formRegister = Form.useForm()
    const dispatch = useDispatch()
    const isFetchLogin = useToggle()

    // const { isFetchLogin } = useSelector(store => store.auth)
    const { user } = useSelector(store => store.user)

    const isFetchRegister = useToggle()

    const onFinishLogin = (form) => {
        isFetchLogin.setTrue()
        dispatch(actionFetchLogin({
            data: form,
            success() {
                message.success('Welcome back')
            },
            error(error) { },
            end() {
                isFetchLogin.setFalse()
            }
        }))
    }

    const onFinishRegister = (form) => {
        isFetchRegister.setTrue()
        dispatch(actionFetchRegister({
            data: form,
            success() {
                message.success('Register success')
            },
            error(error) { },
            end() {
                isFetchRegister.setFalse()
            },
        }))

        // if (form.confirmPassword !== form.password) {
        //     return formRegister.setErrors({ confirmPassword: 'Password not matched' })
        // }

        // formRegister.setErrors({ confirmPassword: '' })
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
                                            {/* rules={[{ required: true, message: 'Name must not be null' }]} */}
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
                                            <Button
                                                // loading={isFetchLogin} 
                                                loading={isFetchLogin.value}
                                                className="btn btn-sm btn-dark" type="submit">
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
                                <Form
                                    onFinish={onFinishRegister}
                                    form={formRegister}
                                >
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Email */}
                                            <Form.Item name='name' label='Full Name *'>
                                                <Input placeholder="Full Name *" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-12">
                                            {/* Email */}
                                            <Form.Item name='username' label='Email Address *'>
                                                <Input placeholder="Email Address *" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <Form.Item name='password' label='Password *'>
                                                <Input type="password" placeholder="Password *" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <Form.Item name='confirmPassword' label='Confirm Password *'>
                                                <Input type="password" placeholder="Confirm Password *" />
                                            </Form.Item>
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
                                            <Button className="btn btn-sm btn-dark" type="submit">
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
