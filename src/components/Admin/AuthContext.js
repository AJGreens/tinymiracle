import { onAuthStateChanged, signInWithEmailAndPassword,signOut} from 'firebase/auth'
import React, {createContext,useContext,useEffect,useState} from 'react'
import {auth} from '../Firebase'


const AuthContext= createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {

    const[user, setUser]=useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unsub= onAuthStateChanged(
        auth, 
        (currUser)=>{
            setUser(currUser)
            setLoading(false)
        }, (error)=>{
            console.log(error)
        })

        return unsub

    },[])





    function signIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signingOut(){ 
       return signOut(auth)
    }

    const value={
        user, 
        signIn, 
        signingOut

    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
