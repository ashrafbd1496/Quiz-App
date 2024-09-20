import classes from "./Illustration.module.css";
import SignupImage from "../../assets/images/signup.svg";

export default function Illustration() {
  return (
    <div>
      <div className={classes.illustration}>
        <img src={SignupImage} alt="Signup" />
      </div>
    </div>
  );
}
