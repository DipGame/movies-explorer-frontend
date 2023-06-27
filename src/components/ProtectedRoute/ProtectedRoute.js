import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, ...props  }) => {
  console.log(props.loggedIn);
  return (
    props.loggedIn ? children : <Navigate to="/signin" replace/>
)}

export default ProtectedRoute;