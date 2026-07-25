import { useAuth } from "../wrappers/AuthContext"
import { useNavigate } from "react-router-dom";

function DashboardPage(){
    const fakeData = {name: "John", email: "Email"}
    const { logout } = useAuth();
    const navigate = useNavigate();
    
    return(
        <div>
            <h1>
                Hi {fakeData.name}
            </h1>

            <h1>
                Your email is: {fakeData.email}
            </h1>

            <button onClick={()=>{logout(); navigate('/login')}}>Logout</button>

        </div>
    )
}




export default DashboardPage