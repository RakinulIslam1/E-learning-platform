import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const userProfile = (profile) => {
      return updateProfile(auth.currentUser, profile);
    }

    const logout = () =>{
        return signOut(auth);
    }

    const google = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const github = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    useEffect( ()=>{
      const unsubscribe =  onAuthStateChanged(auth,(cUser) =>{
            setUser(cUser);
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
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;