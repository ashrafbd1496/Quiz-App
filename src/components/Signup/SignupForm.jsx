import classes from "./SignupForm.module.css";

export default function Form({ children, className, ...rest }) {
  return (
    <div>
      <form className={`${className} ${classes.form}`} action="#" {...rest}>
        {children}
      </form>
    </div>
  );
}
