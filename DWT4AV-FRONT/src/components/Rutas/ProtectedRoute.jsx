import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'


const ProtectedRoute = ({ children }) => {
 
    const location = useLocation()
    console.log(location.pathname)

    const token = localStorage.getItem('token')

    if (token) {
        return children
    }else {
        return <Navigate to="/login" />
    }

}

export default ProtectedRoute