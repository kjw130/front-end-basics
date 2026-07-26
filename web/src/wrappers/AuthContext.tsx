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

  const login = async (email: string, password: string) => {
    try {
      const data = await loginUser(email, password);

      localStorage.setItem("tokenData", `${data.token}`);
      localStorage.setItem("isLoggedIn", "true");

      setLoggedIn(true);
      setToken(data.token);
    } catch (error) {
      console.error("Error in AuthProvider login stage");
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const data = await registerUser(email, password);

      localStorage.setItem("tokenData", `${data.token}`);
      localStorage.setItem("isLoggedIn", "true");

      setLoggedIn(true);
      setToken(data.token);
    } catch (error) {
      console.error("Error in AuthProvider login stage");
      throw error;
    }
  };

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("tokenData", "");
    setLoggedIn(false);
    setToken("");
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
