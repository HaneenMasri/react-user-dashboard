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
      <DashboardGuard role="guest">
        <Login />
      </DashboardGuard>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <DashboardGuard role="private">
        <Dashboard />
      </DashboardGuard>
    ),
  },
  {
    path: "/profile",
    element: (
      <DashboardGuard role="private">
        <Profile />
      </DashboardGuard>
    ),
  },
  { path: "/", element: <Navigate to="/login" /> },
  { path: "*", element: <Navigate to="/login" /> },
];