import classes from "./styles/Account.module.css";
import avatar from "/assets/images/avatar.png";

export default function Account() {
  return (
    <div className={classes.account}>
      <span className={classes["material-icons-outlined"]} title="Account">
        <img src={avatar} alt="User Avatar" />
      </span>
      <a href="signup.html">Signup</a>
      {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
