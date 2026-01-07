import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const inputRef = useRef(null); 
  const navigate = useNavigate();

  // 1. Focus input on load using useRef
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      // 2. Save login status in localStorage
      localStorage.setItem('username', username);
      // 3. Redirect to Dashboard
      navigate('/dashboard');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.glassCard} onSubmit={handleLogin}>
                          <h2>Welcome Back</h2>

        <p className={styles.welcomeText}>
          Please enter your username to access your dashboard and manage your tasks.
        </p>
        <input
          ref={inputRef} 
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;