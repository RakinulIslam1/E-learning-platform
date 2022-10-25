import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const userProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    

    


    const authInfo = { user, createUser, userProfile, login };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;