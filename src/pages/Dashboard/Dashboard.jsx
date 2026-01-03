// src/pages/Dashboard/Dashboard.jsx
import { useLoaderData, useNavigate } from 'react-router-dom';
import UserList from '../../components/Dashboard/UserList/UserList';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  // جلب البيانات التي تم تحميلها مسبقاً بواسطة الـ loader في App.js
  const users = useLoaderData(); 
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <button onClick={() => navigate('/profile')} className={styles.viewProfileBtn}>
          View Profile
        </button>
      </header>

      {/* لم نعد بحاجة لشرط loading لأن الصفحة لا تفتح إلا والبيانات جاهزة */}
      <main className={styles.mainContent}>
        <UserList users={users} />
      </main>
    </div>
  );
};

export default Dashboard;