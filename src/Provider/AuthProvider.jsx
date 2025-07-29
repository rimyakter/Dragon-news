import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Initialize Firebase Authentication
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  console.log(user);

  //sign-up method
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //setting observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //Sign-Out method

  const logOut = () => {
    return signOut(auth);
  };

  //Sign-In method

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Auth Object
  const AuthData = {
    user,
    setUser,
    createUser,
    logOut,
    login,
  };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
