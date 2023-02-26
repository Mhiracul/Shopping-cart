import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, ...props }) => {
  if (isLoggedIn) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
