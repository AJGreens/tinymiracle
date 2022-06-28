import { onAuthStateChanged, signInWithEmailAndPassword,signOut} from 'firebase/auth'
import React, {createContext,useContext,useEffect,useState} from 'react'
import {auth} from '../Firebase'



const AuthContext= createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {

    const[user, setUser]=useState()

    useEffect(()=>{
        const unsub= onAuthStateChanged(
        auth, 
        (currUser)=>{
            setUser(currUser)
        }, (error)=>{
            console.log(error)
        })

        return unsub

    },[])





    function signIn(email, password){
        signInWithEmailAndPassword(auth,email, password)
            .then((userCredential)=>{
                console.log(userCredential)
                setUser(userCredential.user)
            })
            .catch((error)=>{
                console.log(error.message)
            })
    }

    function signingOut(){
        
        signOut(auth)
            .then(()=>{
                console.log("signedOut")
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    const value={
        user, 
        signIn, 
        signingOut

    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
