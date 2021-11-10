import { getAuth, signInWithPopup,signInWithEmailAndPassword, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState({})
    
    const auth = getAuth();
     const googleProvider = new GoogleAuthProvider()

    const singInUsingGoogle = () =>{
       return signInWithPopup(auth, googleProvider);
    }

    const LogInForm = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
           
        });
         return unsubscribed
    },[])


    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    return{
        user,
        singInUsingGoogle,
        logOut,
        LogInForm
    }
}
export default useFirebase;