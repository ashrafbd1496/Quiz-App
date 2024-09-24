import Illustration from "../../components/Signin/Illustration";
import classes from "./Signin.module.css";
import SigninForm from "../../components/Signin/SigninForm";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

export default function Signin() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <SigninForm className={classes.login}>
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />

          <Button>Submit now</Button>

          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </SigninForm>
      </div>
    </div>
  );
}
