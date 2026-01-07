// src/guards/dashboard-guard.jsx
import { Navigate } from 'react-router-dom';

const DashboardGuard = ({ children, role }) => {
  const isAuthenticated = !!localStorage.getItem('username');

  if (role === 'protected') {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

  if (role === 'public') {
    return isAuthenticated ? <Navigate to="/dashboard" /> : children;
  }

  // return children;
};

export default DashboardGuard;