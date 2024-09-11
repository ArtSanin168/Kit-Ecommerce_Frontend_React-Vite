import React from 'react'

const AdminNavbar = () => {
    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    Admin Dashboard
                </div>
                <ul className="flex space-x-4">
    
                    <li>
                        <button className="text-gray-300 hover:text-white">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminNavbar;
