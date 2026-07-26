import { useState } from "react";
import { useAuth } from "../wrappers/AuthContext";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const { login, register } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async () => {
      try {
        await register(email, password, name)
        await login(email, password);
        navigate('/dashboard')
      } catch (error) {
        console.error("Registration failed", error);
      }
    
  };

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
         if (confirmPassword !== password) {
            console.log(`Placeholder error passwords don't match`);
            return;
          } else {
            handleSubmit();
          }
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
