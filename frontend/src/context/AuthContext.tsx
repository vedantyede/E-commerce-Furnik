import { createContext, ReactNode, useContext } from "react";

const AuthContext = createContext({ auth: null });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const auth = { auth: null };
    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    useContext(AuthContext);
}