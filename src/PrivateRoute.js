import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = localStorage.getItem('auth-token');

    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;