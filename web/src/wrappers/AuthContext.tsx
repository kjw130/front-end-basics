import { createContext, useContext, useState } from "react";
import { loginUser, registerUser } from "../api/authApi";

type AuthContextType = {
  token: string | null;
  loggedIn: boolean | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const storedToken = localStorage.getItem("tokenData");
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const [token, setToken] = useState(storedToken);

  function handleAuthState(token: string, loggedIn: boolean){
      localStorage.setItem("tokenData", `${token}`);
      localStorage.setItem("isLoggedIn", `${loggedIn}`);
      setLoggedIn(loggedIn);
      setToken(token);
  }

  const login = async (email: string, password: string) => {
      const data = await loginUser(email, password);
      handleAuthState(data.token, true);
  };

  const register = async (email: string, password: string) => {
      const data = await registerUser(email, password);
      handleAuthState(data.token, true);
      
  };

  const logout = () => {
    handleAuthState("", false); 
  };

  return (
    <AuthContext.Provider value={{ token, loggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
