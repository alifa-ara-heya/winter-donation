import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import auth from '../firebase/firebase.config.js'
import { auth } from '../firebase/firebase.config'
import toast from "react-hot-toast";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true)
        toast.success("signed out.")
        return signOut(auth);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = updatedData => {
        return updateProfile(auth.currentUser, updatedData);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user:', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        };
    }, []);

    // const name = 'alifa';

    const authInfo = {
        signInWithGoogle,
        user,
        loading,
        signOutUser,
        createUser,
        signInUser,
        setUser,
        updateUserProfile
    }

    // console.log(authInfo);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;