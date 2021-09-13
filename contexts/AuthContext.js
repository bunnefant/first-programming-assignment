import React, { useState, useContext } from 'react';
import axios from 'axios'

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    const registerUser = async (email, password) => {
        const user = await axios.post(`${process.env.BACKEND_URL}/auth/register`, {
            email, password
        })
        setCurrentUser(user)
    }

    const loginUser = async (email, password) => {
        const user = await axios.post(`${process.env.BACKEND_URL}/auth/login`, {
            email, password
        })
        setCurrentUser(user)
    };

    const logoutUser = () => {
        setCurrentUser(null)
    }

    const value = {
        currentUser,
        registerUser,
        loginUser,
        logoutUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
