import React from 'react'
import AdminSidebar from './Sidebar'

const Layout = ({ child }) => {
    return (
        <div className='flex flex-col'>
            <AdminSidebar />
            {child}</div>
    )
}

export default Layout