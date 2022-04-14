import React from 'react'

export default function Input({ ...props }) {
    return (
        <div className="form-group">
            <input className="form-control form-control-sm" {...props} />
        </div>
    )
}
