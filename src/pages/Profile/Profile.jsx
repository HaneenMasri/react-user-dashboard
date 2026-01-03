// src/pages/Profile/Profile.jsx
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';

const Profile = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Guest';

  const handleLogout = () => {
    localStorage.clear(); //clear  (username + isLoggedIn)
    navigate('/login');   
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        
        <div className={styles.headerSection}>
          <div className={styles.avatar}>
            {username.charAt(0).toUpperCase()}
          </div>
          <h2 className={styles.title}>My Profile</h2>
        </div>

        <div className={styles.nameDisplay}>
          <p>{username}</p>
        </div>

        <div className={styles.actions}>
          <button onClick={() => navigate('/dashboard')} className={styles.backBtn}>
            Back to Dashboard
          </button>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;