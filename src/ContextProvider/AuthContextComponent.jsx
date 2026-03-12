import { useEffect, useState } from "react";
import { AuthContext } from "./contextCreate";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../FireBase/firebase.init";




const AuthContextComponent = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app)


    const createUserEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }



    console.log("OnAuth: ", user)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currenUser => {

            setUser(currenUser)
            setLoading(false)

        }));
        return () => {
            unSubscribe()
        }

    }, [auth])

    const authInfo = {
        user,
        setUser,
        createUserEmailPass,
        signInEmailPass,
        logOut,

        loading
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextComponent;