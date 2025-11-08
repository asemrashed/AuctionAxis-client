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
        if(currentUser){
            const loggedUser = {email : currentUser.email}
            fetch('http://localhost:5000/getToken',{
                method:"POST",
                headers:{
                    'content-type':'application/json',
                    'authorization': `Bearer ${currentUser.accessToken}`
                },
                body: JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token)
            })
            .catch(err =>{
                console.log(err)
            })
        }else{
            localStorage.removeItem('token')
        }
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