import { useState } from 'react';
import { useAuth } from '../wrappers/AuthContext';
import { useNavigate } from 'react-router-dom'


function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e: any)=>{
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/dashboard')
        } catch (error) {
            console.error('login failed')
            throw error
        }
       

    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => {handleSubmit(e)}}>

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