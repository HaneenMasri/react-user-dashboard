// src/components/Dashboard/UserList/UserList.jsx
import UserCard from "../UserCard";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <div className={styles.grid}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
