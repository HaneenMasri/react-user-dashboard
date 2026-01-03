# React User Dashboard App

A simple and clean React dashboard application built to practice modern React concepts such as **React Router**, **Hooks**, **Protected Routes**, and **Component-based architecture**.

This project includes authentication flow simulation, protected pages, data fetching using loaders, and a well-structured folder organization.

---

## 🚀 Features

- Login page with basic authentication logic
- Protected Dashboard and Profile pages
- Client-side routing using React Router
- Data fetching using `loader`
- Reusable components (UserList, UserCard)
- Clean UI using CSS Modules
- Logout functionality
- LocalStorage-based session handling

---

## 🛠️ Technologies Used

- React
- React Router DOM
- Axios
- JavaScript (ES6+)
- CSS Modules

---

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── ProtectedRoute/
│   └── Dashboard/
│       ├── UserCard/
│       └── UserList/
├── pages/
│   ├── Login/
│   ├── Dashboard/
│   └── Profile/
├── App.jsx
├── main.jsx
└── index.css
🧩 Component Responsibility Overview

App.jsx
Defines application routes and loaders.

Login Page
Handles user login and stores session data in LocalStorage.

Dashboard Page
Displays a list of users fetched before page rendering.

UserList Component
Iterates over users data and renders UserCard components.

UserCard Component
Displays individual user information.

Profile Page
Displays logged-in user info and provides logout functionality.

ProtectedRoute
Restricts access to authenticated users only.

🔐 Authentication Logic

Login status is stored in localStorage

Protected routes check authentication before rendering

Logout clears stored session data

📌 Purpose of the Project

This project was created for educational purposes to understand:

React Hooks (useState, useEffect, useRef)

React Router v6 features

Component separation and reusability

Clean project structure and best practices

📌 Notes

Authentication is simulated (no backend).

API data is fetched from jsonplaceholder.typicode.com.