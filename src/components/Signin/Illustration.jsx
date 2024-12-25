import classes from "./Illustration.module.css";
import SigninImage from "../../assets/images/signin.png";

export default function Illustration() {
  return (
    <div>
      <div className={classes.illustration}>
        <img src={SigninImage} alt="Signin" />
      </div>
    </div>
  );
}
