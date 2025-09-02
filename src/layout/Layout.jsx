import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

export default function Layout() {
    return (
        <div>
            <Sidebar />
            <div className='sm:ml-72 mt-6 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-300'>
                <Outlet />
            </div>
        </div>
    )
}
