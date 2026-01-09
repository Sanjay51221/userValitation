import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouting = ({ children }) => {
  // ✅ UPDATED: correct key + removed JSON.parse
  const jwt_token = localStorage.getItem("authToken")

  return jwt_token ? children : <Navigate to="/login" />
}

export default PrivateRouting
