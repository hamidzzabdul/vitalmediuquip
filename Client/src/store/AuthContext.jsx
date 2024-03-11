/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoggedInState = localStorage.getItem('isLoggedIn');
        if (storedLoggedInState === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const login = (username, password) => {
        if (username === 'admin' && password === 'vital@2024') {
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', true);
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
