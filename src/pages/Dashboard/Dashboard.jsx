import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserList from '../../components/Dashboard/UserList/UserList';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]); 
  const navigate = useNavigate();

  // 1. Fetch users using useEffect
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <button onClick={() => navigate('/profile')} className={styles.viewProfileBtn}>
          View Profile
        </button>
      </header>
      <main className={styles.mainContent}>
        <UserList users={users} />
      </main>
    </div>
  );
};

export default Dashboard;