import React, { createContext, useEffect, useState } from 'react';
import useFirebase from '../hooks/useFirebase';


export const AuthConext = createContext();


const AuthProvider = ({ children }) => {

    const allContext = useFirebase()

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [])


    return (
        <AuthConext.Provider value={[foods, setFoods, allContext]} >
            {children}
        </AuthConext.Provider >
    );
};

export default AuthProvider;