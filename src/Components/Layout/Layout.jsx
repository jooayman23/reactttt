import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <div className='mt-16'>
                <Navbar />
                <Outlet></Outlet>
            </div>
            <Footer />
        </>
    )
}
