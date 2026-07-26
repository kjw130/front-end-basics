import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, registerUser, getUser } from "../api/authApi";

type AuthContextType = {
  token: string | null;
  loggedIn: boolean | null;
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
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
  const [user, setUser] = useState<any | null>(null);
  console.log("AuthProvider rendering, token is:", localStorage.getItem("tokenData"));



  function handleAuthState(token: string, loggedIn: boolean){
      localStorage.setItem("tokenData", `${token}`);
      localStorage.setItem("isLoggedIn", `${loggedIn}`);
      setLoggedIn(loggedIn);
      setToken(token);
  }

  const handleUserData = async(token: string, loggedIn: boolean) => {
    // Sets user data
     if(loggedIn && token !== ""){
      const userData = await getUser(token)
      setUser(userData);
     } else {
      setUser(null);
     }
  }

  useEffect(()=> {
    console.log("USE EFFECT")
      if(token){
      
      handleUserData(token, true);
    }
  }, [])


  const login = async (email: string, password: string) => {
      const data = await loginUser(email, password);
      handleAuthState(data.token, true);
      await handleUserData(data.token, true)
  };

  const register = async (email: string, password: string, name: string) => {
      await registerUser(email, password, name);
      // handleAuthState(data.token, true);
      // await handleUserData(data.token, true);
  };

  const logout = async () => {
    handleAuthState("", false); 
    await handleUserData("", false)
  };





  return (
    <AuthContext.Provider value={{ token, loggedIn, user, login, logout, register }}>
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
