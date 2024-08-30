import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <nav className="w-full p-4 flex justify-between bg-blue-700 text-white">
            <h1 className="text-xl font-bold">App</h1>
            <div>
                {location.pathname === '/home' ? (
                    <button 
                        onClick={handleLogout}
                        className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <Link 
                            to="/login"
                            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 mx-2"
                        >
                            Login
                        </Link>
                        <Link 
                            to="/signup"
                            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 mx-2"
                        >
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
