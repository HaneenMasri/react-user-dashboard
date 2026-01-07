// src/guards/dashboard-guard.jsx
import { Navigate } from 'react-router-dom';

const DashboardGuard = ({ children }) => {
  const isAuth = !!localStorage.getItem('username');

  return isAuth ? children : <Navigate to="/login" replace />;
};

export default DashboardGuard;
