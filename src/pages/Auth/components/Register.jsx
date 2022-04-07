import React, { useState } from 'react'

export default function Register() {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const register = async (e) => {
        e.preventDefault();

        const errorObj = {}

        if (!form.firstname) {
            errorObj.firstname = "First Name is required"
        }

        if (!form.lastname) {
            errorObj.lastname = "Last Name is required"
        }

        if (!form.firstname) {
            errorObj.email = "Email is required"
        }

        if (!form.password) {
            errorObj.password = "Password is required"
        }

        setErrors(errorObj)
        if (Object.keys(errorObj).length === 0) {
            console.log('register');
        }
    }

    return (
        <div className="card-body">
            {/* Heading */}
            <h6 className="mb-7">New Customer</h6>
            {/* Form */}
            <form onSubmit={register}>
                <div className="row">
                    <div className="col-12">
                        {/* Email */}
                        <div className="form-group">
                            <label className="sr-only" htmlFor="registerFirstName">
                                First Name *
                            </label>
                            <input className="form-control form-control-sm" id="registerFirstName" type="text" placeholder="First Name *"
                                onChange={e => form.firstname = e.target.value} />
                            {errors.firstname && <p className='error-text'>{errors.firstname}</p>}
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
                            {errors.lastname && <p className='error-text'>{errors.lastname}</p>}
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
                            {errors.email && <p className='error-text'>{errors.email}</p>}
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
                            {errors.password && <p className='error-text'>{errors.password}</p>}
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
    )
}
