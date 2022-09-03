import React from 'react'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
  const isLoggedIn = false

  if (!isLoggedIn) return <Navigate replace to="/" />
  return children
}

export default RequireAuth
