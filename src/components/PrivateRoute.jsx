import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
