import React from "react";
// import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const token = localStorage.getItem('token');
	
	return token ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;