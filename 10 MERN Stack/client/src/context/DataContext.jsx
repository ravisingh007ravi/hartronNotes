import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}



export function DataProvider({ children }) {

 const [login, setlogin] = useState(false);

    const value = { login, setlogin };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}