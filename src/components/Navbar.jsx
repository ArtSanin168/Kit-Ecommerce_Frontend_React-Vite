import React, { useEffect, useState } from "react";
import ProfileDropDown from "./ProfileDropDown";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [menuState, setMenuState] = useState(false);
    const {search, setSearch, getCartCount} = useContext(ShopContext);

    const navigation = [
        { title:  "Home", path: "/" },
        { title: "Collection", path: "/collection" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-white border-b z-10 relative">
            <div className="flex items-center space-x-6 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <Link to="/">
                        <img
                            src="https://www.floatui.com/logo.svg"
                            width={120}
                            height={50}
                            alt="Float UI logo"
                        />
                    </Link>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div
                        className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
                            menuState ? "" : "hidden"
                        }`}
                    >
                        <ul className="mt-4 space-y-6 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0 text-base font-semibold">
                            {navigation.map((item, idx) => (
                                <li key={idx} className="text-gray-600 hover:text-blue-600">
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <ProfileDropDown class="mt-5 pt-5 border-t lg:hidden" />
                    </div>

                    <div className="flex-1 flex items-center justify-end space-x-4 sm:space-x-6">

                           {/* Search navigation */}
                        <form className="flex items-center space-x-2 border rounded-md p-2 hover:border-blue-700">
                      
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 flex-none text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                     
                            <input value={search} onChange={(e) => setSearch(e.target.value)}
                                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 text-sm sm:w-auto"
                                type="text"
                                placeholder="Search"
                            />
                        </form>

                        <Link to="/cart">
                            <button className="relative outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600 bg-gray-100 z-30">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    className="h-10 w-10 bg-slate-100 p-1.5 rounded-full border-b border-2 text-gray-500"
                                >
                                    <path
                                        d="M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                                <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center text-xs bg-red-500 text-white rounded-full">
                                    {getCartCount()}
                                </span>
                            </button>
                        </Link>

                        <Link to="/login">
                        <ProfileDropDown class="hidden lg:block z-40" />
                        <button
                            className="outline-none text-gray-400 block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {menuState ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={24}
                                    height={24}
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6"
                                >
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
