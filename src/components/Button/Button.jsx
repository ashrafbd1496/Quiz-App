import classes from "./Button.module.css";

export default function Button({ children }) {
  return (
    <div>
      <button className={classes.button}>
        <span>{children}</span>
      </button>
    </div>
  );
}
