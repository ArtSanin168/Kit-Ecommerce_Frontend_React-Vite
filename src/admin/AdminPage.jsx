import React from 'react'
import AdminNavbar from './element/AdminNavbar'
import AdminSidebar from './element/AdminSidebar'

const adminPage = () => {
  return (
    <div>
        <AdminNavbar />
        <hr/>
        <div className="p-8 bg-slate-100">
            <AdminSidebar/>
        </div>
    </div>
  )
}

export default adminPage