import styles from "./UserCard.module.css";

const UserCard = ({ user  }) => {
  return (
    <div className={styles.card}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
