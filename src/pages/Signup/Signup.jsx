import Illustration from "../../components/Signup/Illustration";
import SignupForm from "../../components/Signup/SignupForm";
import classes from "./Signup.module.css";
import TextInput from "../../components/TextInput/TextInput";
import CheckBox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";

export default function Signup() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm className={classes.signup}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />

          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />

          <CheckBox text=" I agree to the Term &amp; Conditions" />

          <Button>Submit now</Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </SignupForm>
      </div>
    </div>
  );
}
