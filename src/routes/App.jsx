import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import ScrollToTop from '../components/scroll/ScrollToTop'

function App() {

  return (
    <div className='w-full h-full'>
      <div className='w-full h-full'>
        <ScrollToTop/>
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App
