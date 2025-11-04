import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [ user, setUser ]= useState(null)
    const [ loading, setLoading ]= useState(true)


    const userSignUp =({email, password})=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = ({email, password}) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const userSignOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo={
        user,
        loading,
        setLoading,
        userSignUp,
        userSignIn,
        userSignInWithGoogle,
        userSignOut
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;