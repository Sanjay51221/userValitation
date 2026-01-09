import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthRouting = ({ children }) => {
  // ✅ UPDATED: correct key + removed JSON.parse
  const token = localStorage.getItem("authToken")

  return token ? <Navigate to="/dashboard" /> : children
}

export default AuthRouting
