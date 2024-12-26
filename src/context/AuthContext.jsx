import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase.js";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  // Signup function
  async function signup(username, email, password) {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: username,
      });

      setCurrentUser({
        ...userCredential.user,
        displayName: username,
      });
    } catch (error) {
      const errorMessage =
        error.code === "auth/email-already-in-use"
          ? "এই ইমেইল ইতিমধ্যে ব্যবহৃত হয়েছে"
          : error.message;
      console.error("সাইন আপ এরর: ", errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  // Signin function
  async function signin(email, password) {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      const errorMessage =
        error.code === "auth/wrong-password"
          ? "ভুল পাসওয়ার্ড"
          : error.code === "auth/user-not-found"
          ? "ইউজার পাওয়া যায়নি"
          : error.message;
      console.error("সাইন ইন এরর: ", errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  // Signout function
  async function signout() {
    try {
      return await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error.message);
      throw error;
    }
  }

  const value = {
    currentUser,
    signup,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Only render children when not loading */}
    </AuthContext.Provider>
  );
}
