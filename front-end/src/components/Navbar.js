import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // Check for token in local storage

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from local storage
        navigate('/login'); // Redirect to login page
    };

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link to="/" className=" text-lg font-bold">Home</Link>

                <div className="flex items-center space-x-6">
                    {!token ? (
                        <Link to="/login" className="text-sm text-blue-600 hover:underline">Login</Link>
                    ) : (
                        <>
                            <Link to="/profile" className="text-sm text-gray-900 hover:underline">Profile</Link>
                            <button onClick={handleLogout} className="text-sm text-gray-900 hover:underline">Logout</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;