import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from './api/axios';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [auth, setAuth] = useState({
        loggedIn: false,
        user: null
    });

    const navigate = useNavigate();

    useEffect(()=>{
        const storedAuth = localStorage.getItem('auth');
        if(storedAuth){
            setAuth(JSON.parse(storedAuth));
        }
    },[]);

    const login = (userData) =>{
        setAuth({
            loggedIn: true,
            user: userData.name
        })

        localStorage.setItem('auth',JSON.stringify({
            loggedIn: true,
            user: userData.name
        }));

        if(userData) navigate('/dashboard');

    };

    const logout = async ()=>{
        try{
            await axios.post('/logout');

            setAuth({
                loggedIn:false,
                user: null
            });

            localStorage.removeItem('auth');

            navigate('/signin');

        } catch(error) {
            console.error('Error in logout: ', error);
        }
    }

    return (
        <AuthContext.Provider value={{auth,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};
