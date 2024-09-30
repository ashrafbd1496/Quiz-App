import avatar from "../../assets/images/avatar.png";
import classes from "./Account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <span className={classes["material-icons-outlined"]} title="Account">
          <img src={avatar} alt="User Avatar" />
        </span>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Signin</Link>
        </>
      )}
      {currentUser && (
        <span
          className="material-icons-outlined"
          title="Logout"
          onClick={logout}
        >
          logout
        </span>
      )}
    </div>
  );
}
