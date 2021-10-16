import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/Firebase.init";


initAuth();
const useFirebase = () => {

    const [users, setUser] = useState([]);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // sign in
    const signInusingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        return () => unsubscribe;
    }, [])



    // sign out
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }
    return {
        users,
        signInusingGoogle,
        logOut
    }

}

export default useFirebase;