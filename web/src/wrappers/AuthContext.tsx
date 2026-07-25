import { createContext, useContext, useState } from "react";

const defaultValue = { loggedIn: false, login: () => {}, logout: () => {} };
const AuthContext = createContext(defaultValue);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
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
