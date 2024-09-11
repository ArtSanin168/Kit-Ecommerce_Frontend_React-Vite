import React, { useState, useRef, useEffect } from "react";

// Profile Dropdown Component
const ProfileDropDown = (props) => {
    const [state, setState] = useState(false);
    const profileRef = useRef();

    const navigation = [
        { title: "Profile", path: "javascript:void(0)" },
        { title: "Orders", path: "javascript:void(0)" },
        { title: "Log out", path: "javascript:void(0)" },
    ];

    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false);
        };
        document.addEventListener("click", handleDropDown);
        return () => document.removeEventListener("click", handleDropDown);
    }, []);

    return (
        <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-3">
                <button
                    ref={profileRef}
                    className="w-10 h-10 flex items-center justify-center outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600 bg-gray-100"
                    onClick={() => setState(!state)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-600"
                    >
                        <path
                            d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                        />
                        <path
                            d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                        />
                    </svg>
                </button>
            </div>
            <ul
                className={`bg-white top-12 right-0 mt-3 space-y-3 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-48 lg:shadow-md lg:space-y-0 lg:mt-0 z-50 ${
                    state ? "" : "lg:hidden"
                }`}
            >
                {navigation.map((item, idx) => (
                    <li key={idx}>
                        <a
                            className="block text-gray-600 hover:text-blue-600 lg:p-3"
                            href={item.path}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileDropDown;
