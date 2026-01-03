// src/pages/Login/Login.jsx
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // تركيز تلقائي على المدخل عند تحميل الصفحة
    inputRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      navigate('/dashboard');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.glassCard}>
        <h2>Welcome Back</h2>
        <p style={{ color: '#666', marginTop: '-10px', marginBottom: '20px' }}>
    Please enter your details to access your dashboard.
  </p>
        <form onSubmit={handleLogin}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;