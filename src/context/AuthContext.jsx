import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase"; // Import 'auth' from your firebase config

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: username,
      });

      // Set currentUser with updated profile
      setCurrentUser({
        ...userCredential.user,
        displayName: username,
      });
    } catch (error) {
      console.error("Error signing up: ", error.message);
      throw error;
    }
  }

  // Signin function
  async function signin(email, password) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in: ", error.message);
      throw error;
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
