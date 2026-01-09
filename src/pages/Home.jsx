import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("authToken") // ✅ UPDATED
    if (token) {
      navigate("/dashboard") // ✅ UPDATED
    }
  }, [navigate])

  return (
    <div className='h-[100vh] w-[100%] bg-slate-400'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Home
