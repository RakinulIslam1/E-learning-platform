import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userProfile = (profile) => {
        setLoading(true);
      return updateProfile(auth.currentUser, profile);
    }

    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const google = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const github = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    useEffect( ()=>{
      const unsubscribe =  onAuthStateChanged(auth,(cUser) =>{
            setUser(cUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])


    const authInfo = {
      user,
      createUser,
      userProfile,
      login,
      logout,
      google,
      github,
      loading,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;