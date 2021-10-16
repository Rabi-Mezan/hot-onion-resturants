import React, { createContext, useEffect, useState } from 'react';

export const AuthConext = createContext();


const AuthProvider = ({ children }) => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [])


    return (
        <AuthConext.Provider value={[foods, setFoods]} >
            {children}
        </AuthConext.Provider >
    );
};

export default AuthProvider;