import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/loginPage"
import RegisterPage from "./pages/registerPage"
import DashboardPage from "./pages/dashboardPage"
import { ProtectedRoute } from "./wrappers/protectedRoute"


function App(){
  return (
  
    <BrowserRouter>
      <Routes>
          
        <Route path = "/login" element = {<LoginPage />} />
      
        <Route path = "/register" element = {<RegisterPage />} />

        <Route path = "/dashboard" element = {
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
        } />
        
      </Routes>
    
    </BrowserRouter>

  )
}


export default App