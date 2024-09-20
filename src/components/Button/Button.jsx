import classes from "./Button.module.css";

export default function Button({children}) {
  return (
    <div>
      <div className={classes.button}>
        <span>{children}</span>
      </div>
    </div>
  );
}
