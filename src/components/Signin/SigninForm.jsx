import classes from "./SigninForm.module.css";

export default function Form() {
  return (
    <div>
      <form className={`${classes.login} ${classes.form}`} action="#">
        <div className={classes.textInput}>
          <input type="text" placeholder="Enter email" />
          <span className={classes["material-icons-outlined"]}>
            alternate_email
          </span>
        </div>

        <div className={classes.textInput}>
          <input type="password" placeholder="Enter password" />
          <span className={classes["material-icons-outlined"]}> lock </span>
        </div>

        <button className={classes.button}>
          <span>Submit now</span>
        </button>

        <div className={classes.info}>
          Don&apos;t have an account? <a href="signup.html">Signup</a> instead.
        </div>
      </form>
    </div>
  );
}
