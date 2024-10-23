import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout() {
  return (
    <div className='main-h-screen bg-slate-50'>
        <Navbar/>
    
     
      <Outlet/>
    </div>
  )
}

export default Layout
