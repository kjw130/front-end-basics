import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/loginPage"

function App(){
  return (
  <BrowserRouter>
    <Routes>
        
      <Route path = "/login" element = {<LoginPage />} />
      
      <Route path = "/register" element = {<h1>register page</h1>} />
  
      <Route path = "/dashboard" element = {<h1>dashboard page</h1>} />
    </Routes>
  
  </BrowserRouter>
  )
}


export default App