import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    children: React.ReactNode;
}

export const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    const { loggedIn } = useAuth();
    if (!loggedIn){
        return (
            <Navigate to = "/login"/>
        )
    }

    // 
    return ( 
        <>{children}</>
    )
}