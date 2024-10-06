import Illustration from "../../components/Signin/Illustration";
import SigninForm from "../../components/Signin/SigninForm";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signin } = useAuth();
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
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signin(email, password);
      navigate("/");
    } catch (error) {
      setError("Failed to signin");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <h1>Signin to your account</h1>
      <div className="column">
        <Illustration />
        <SigninForm style={{ height: "330px" }} onSubmit={handleSignin}>
          <TextInput
            type="text" required
            placeholder="Enter Email"
            icon="alternate_email"  value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock"  required  value={password}
            onChange={(e) => setPassword(e.target.value)}/>

          <Button type="submit" disabled={loading} >Submit now</Button>

          {error && <p className="error">{error}</p>}

          <div className="info">
            Don't have an account? <Link to="/signup">Sign Up</Link> instead.
          </div>
        </SigninForm>
      </div>
    </div>
  );
}
