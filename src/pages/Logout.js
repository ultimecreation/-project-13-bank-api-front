import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {  Navigate } from 'react-router-dom';
import { logout } from "../redux/auth/AuthActions";

const Logout = ({logout}) => {
    useEffect(()=> {
        logout()
    },[])

    return <Navigate to="/"/>
}

export default connect(null, { logout })(Logout) 
