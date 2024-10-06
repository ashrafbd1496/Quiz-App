//import avatar from "../../assets/images/avatar.png";
import classes from "./Account.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Account() {
  const { currentUser, signout } = useAuth();
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle signout and redirect to login page
  const handleSignout = async () => {
    try {
      await signout(); // Perform the signout action
      navigate("/signin"); // Redirect to the login (signin) page
    } catch (error) {
      console.error("Failed to sign out", error);
    }
  };

  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span className="material-icons-outlined" onClick={handleSignout}>
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </div>
  );
}
