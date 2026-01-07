import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css'; 
const Profile = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); 

  const handleLogout = () => {
    localStorage.clear(); 
    navigate('/login'); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.avatar}>
          {username.charAt(0).toUpperCase()}
        </div>
        
        <h2 className={styles.username}>{username}</h2>

        <div className={styles.buttonGroup}>
          <button 
            onClick={() => navigate('/dashboard')} 
            className={styles.backBtn}
          >
            Back to Dashboard
          </button>
          
          <button 
            onClick={handleLogout} 
            className={styles.logoutBtn}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;