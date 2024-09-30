import Illustration from "../../components/Signup/Illustration";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

import SignupForm from "../../components/Signup/SignupForm";
import classes from "./Signup.module.css";
import TextInput from "../../components/TextInput/TextInput";
import CheckBox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  useEffect(() => {
    if (isValidEmail(email)) {
      setError("");
    } else {
      setError("Invalid email address");
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !isValidEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    if (!agree) {
      return setError("You must agree to the terms and conditions");
    }

    try {
      setError("");
      setLoading(true);

      // Debugging email value before signup
      console.log("Signing up with:", { username, email, password });

      // Signup the user
      await signup(username, email, password);

      // Redirect to home page after successful signup
      navigate("/");

      alert("Account created successfully");
    } catch (error) {
      setError("Failed to create an account: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm className={classes.signup} onSubmit={handleSubmit}>
          <TextInput
            type="text"
            required
            placeholder="Enter Name"
            icon="person"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextInput
            type="email"
            placeholder="Enter Email"
            required
            icon="alternate_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            type="password"
            required
            placeholder="Enter Password"
            icon="lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextInput
            type="password"
            required
            placeholder="Confirm Password"
            icon="lock_clock"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <CheckBox
            text=" I agree to the Terms & Conditions"
            required
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />

          <Button disabled={loading} type="submit">
            Submit now
          </Button>

          {error && <p className="error">{error}</p>}

          <div className="info">
            Already have an account? <Link to="/signin">Sign in</Link> instead.
          </div>
        </SignupForm>
      </div>
    </div>
  );
}
