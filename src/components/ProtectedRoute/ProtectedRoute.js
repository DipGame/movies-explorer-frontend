import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, ...props  }) => {
  return (
    props.loggedIn ? children : <Navigate to="/signin" replace/>
)}

export default ProtectedRoute;