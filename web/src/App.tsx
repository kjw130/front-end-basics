import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/loginPage"
import RegisterPage from "./pages/registerPage"
import DashboardPage from "./pages/dashboardPage"

import { AuthProvider } from "./context/AuthContext"

function App(){
  return (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
          
        <Route path = "/login" element = {<LoginPage />} />
        
        <Route path = "/register" element = {<RegisterPage />} />
    
        <Route path = "/dashboard" element = {<DashboardPage />} />
        
      </Routes>
    
    </BrowserRouter>
  </AuthProvider>
  )
}


export default App