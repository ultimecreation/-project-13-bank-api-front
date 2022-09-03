import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ isAuthenticated, children }) => {

    if (!isAuthenticated) return <Navigate replace to="/" />
    return children
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated
    }
}
export default connect(mapStateToProps)(RequireAuth) 
