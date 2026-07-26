import { useAuth } from "../wrappers/AuthContext";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
//   const fakeData = { name: "John"};
  const { logout, user, token } = useAuth();
  const navigate = useNavigate();
  
  let name = ""
  let email = ""

  
  if(user) {
    name = user.result.name
    email = user.result.email
  } else{
    return (<div></div>)
  }

  return (
    <div>
      <h1>Hi {name}</h1>

      <h1>Your email is: {email}</h1>

      <button
        onClick={async () => {
          await logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default DashboardPage;