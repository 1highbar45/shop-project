import React from 'react'
import Login from './components/Login'
import Register from './components/Register'

export default function Auth() {
    return (
        <section className="py-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <div className="card card-lg mb-10 mb-md-0">
                            <Login />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <div className="card card-lg">
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
