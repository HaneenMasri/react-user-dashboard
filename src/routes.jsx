// src/routes.jsx
import { Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import DashboardGuard from './guards/dashboard-guard';

export const routes = [
  {
    path: "/login",
    element: (
        <Login />
    ),
  },
  {
    path: "/dashboard",
    element: (
      <DashboardGuard>
        <Dashboard />
      </DashboardGuard>
    ),
  },
  {
    path: "/profile",
    element: (
      <DashboardGuard>
        <Profile />
      </DashboardGuard>
    ),
  },
  { path: "/", element: <Navigate to="/login" /> },
  { path: "*", element: <Navigate to="/login" /> },
];