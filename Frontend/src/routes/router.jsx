import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ role, children }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const userRole = localStorage.getItem("userRole");

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (role && userRole !== role) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default PrivateRoute;
