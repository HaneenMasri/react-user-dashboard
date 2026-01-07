Project Overview

The Smart User Dashboard is a modern React-based application designed to manage users efficiently. It features a secure login system, user profile management, and a dynamic dashboard displaying all registered users in an interactive grid layout.

This project demonstrates the use of React hooks, React Router, CSS modules, and state management to create a responsive and user-friendly interface.

Features

User Authentication: Login functionality storing the username in localStorage.

Dynamic Dashboard: Displays all users in a responsive grid using reusable UserCard components.

Profile Management: View your profile with a personalized avatar and logout functionality.

Routing: Seamless navigation between Login, Dashboard, and Profile pages using React Router.

Responsive Design: Modern UI using CSS Modules for scoped styling.

Technologies Used

Frontend: React, React Router DOM, CSS Modules

State Management: useState, useEffect, useRef

Routing & Guards: Protected routes using custom guard components

Storage: LocalStorage for persisting login information

Project Structure
my-react-app/
├── src/
│   ├── components/
│   │   └── Dashboard/
│   │       ├── UserCard/
│   │       └── UserList/
│   ├── configs/
│   │   └── router-config.js
│   ├── guards/
│   │   └── dashboard-guard.jsx
│   ├── pages/
│   │   ├── Dashboard/
│   │   ├── Login/
│   │   └── Profile/
│   ├── routes.jsx
│   ├── App.css
│   └── App.jsx


components/ → Reusable UI components like UserCard and UserList.

pages/ → Complete pages such as Login, Dashboard, and Profile.

configs/router-config.js → Configuration for routing and guards.

guards/ → Components for route protection (e.g., dashboard-guard).

Getting Started

The app will open in your default browser at http://localhost:3000.

Usage

Navigate to the Login page and enter your username.

After login, you will be redirected to the Dashboard, showing a list of users.

Click on your Profile to view user details and use Logout to end the session.

Use the Back to Dashboard button to return to the main view anytime.

Future Improvements

Integrate real API calls to fetch and manage users dynamically.

Add authentication with backend for secure login.

Implement edit/delete functionality for each user card.

Enhance UI responsiveness for mobile devices.

Note: This project uses React's modern hooks and CSS Modules to ensure modular, scalable, and maintainable code.