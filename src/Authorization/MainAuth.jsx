import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';

export const AuthContext = createContext(null)

const MainAuth = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user setting')
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    
    const myRef = {
        user, createUser, logIn, logOut, loading
    }
    return (
        <div>
            <AuthContext.Provider value={myRef}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default MainAuth;