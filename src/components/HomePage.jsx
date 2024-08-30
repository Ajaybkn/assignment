import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();
   

    if (localStorage.getItem('isAuthenticated') !== 'true') {
        navigate('/login');
        return null; 
    }

    return (
        <div className="w-full h-screen flex flex-col">
           <h1>Home Page</h1>
        </div>
    );
};

export default HomePage;
