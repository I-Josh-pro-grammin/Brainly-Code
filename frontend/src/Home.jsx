import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Home = () => {
  
  const { userInfo } = useSelector(state => state.auth);

  return (
    <div>
      {userInfo ?  <Outlet /> : <Navigate to="welcome/login" replace />} 
    </div>
  )
}

export default Home
