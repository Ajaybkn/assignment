import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        localStorage.setItem('isAuthenticated', 'false'); 

        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-8 rounded-lg shadow-lg h-[450px] w-96">
                <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left mx-3">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full px-3 py-2 border-b border-gray-300 rounded-none focus:outline-none focus:border-blue-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left mx-3">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-3 py-2 border-b border-gray-300 rounded-none focus:outline-none focus:border-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="relative space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left mx-3">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter Password"
                            className="w-full px-3 py-2 border-b border-gray-300 rounded-none focus:outline-none focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-5 text-center">
                    <span> <a href="/login" className="text-blue-500 hover:underline"> Login</a></span>
                </div>
            </div>
        </div>
    );
};

export default Signup;
