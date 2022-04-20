import React, { useEffect } from 'react'
import Form from '../../components/Form/Form'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { useToggle } from '../../hooks/useToggle'
import validate from '../../utils/validate'
import { useSelector } from 'react-redux'

export default function PersonalInfo() {
    const { user } = useSelector(store => store.user)
    const isFetchUpdate = useToggle()
    const form = Form.useForm()
    useEffect(() => {
        form.setValues(user)
    }, [user])

    const onFinish = (values) => {
        isFetchUpdate.setTrue()
        if (values.oldPassword) {
            const errors = validate(values, {
                oldPassword: [],
                newPassword: []
            })

            form.setErrors(errors)
            if (Object.keys(errors).length === 0) {

            }
        }
    }
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {/* Form */}
            <Form onFinish={onFinish} >
                <div className="row">
                    <div className="col-12 col-md-12">
                        {/* Email */}
                        <Form.Item name="name">
                            <Input placeholder="Full Name" />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-md-12">
                        {/* Email */}
                        <Form.Item name="username">
                            <Input disabled />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <Form.Item name="oldPassword">
                            <Input type='password' placeholder="Current Password" />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Password */}
                        <Form.Item name="newPassword">
                            <Input type='password' placeholder="New Password" />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Birthday */}
                        <div className="form-group">
                            {/* Label */}
                            <label>Date of Birth</label>
                            {/* Inputs */}
                            <div className="form-row">
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountDate">
                                        Date
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountDate">
                                        <option>10</option>
                                        <option>11</option>
                                        <option selected>12</option>
                                    </select>
                                </div>
                                <div className="col">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountMonth">
                                        Month
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountMonth">
                                        <option>January</option>
                                        <option selected>February</option>
                                        <option>March</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    {/* Date */}
                                    <label className="sr-only" htmlFor="accountYear">
                                        Year
                                    </label>
                                    <select className="custom-select custom-select-sm" id="accountYear">
                                        <option>1990</option>
                                        <option selected>1991</option>
                                        <option>1992</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Gender */}
                        <div className="form-group mb-8">
                            <label>Gender</label>
                            <div className="btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-sm btn-outline-border active">
                                    <input type="radio" name="gender" defaultChecked /> Male
                                </label>
                                <label className="btn btn-sm btn-outline-border">
                                    <input type="radio" name="gender" /> Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Button */}
                        <Button className="btn btn-dark" type="submit">Save Changes</Button>
                    </div>
                </div>
            </Form>
        </div>

    )
}
