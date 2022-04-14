import { CircularProgress } from '@mui/material'
import React from 'react'

export default function Button({ children, loading, ...props }) {
    return (
        <button disabled={loading} className="btn btn-sm btn-dark" style={{ display: 'flex', alignItems: 'center' }} {...props}>
            {loading && <div style={{ marginRight: 10 }}><CircularProgress color='inherit' size={20} /></div>}
            {children}
        </button>
    )
}
