import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'


function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log('Email:', email);
                    console.log('Password:', password);
                    login();
                    navigate('/dashboard');
                }}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />

                <button type="submit">Login</button>
                
            </form>

        </div>
    )
}


export default LoginPage;