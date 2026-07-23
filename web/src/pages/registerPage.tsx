import { useState } from "react";

function RegisterPage(){
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={(e)=> {
                e.preventDefault()
                if(confirmPassword !== password){
                    console.log(`Placeholder error passwords don't match`)
                } else {
                    console.log(`Placeholder success passwords match`)
                }
                console.log(email)
                console.log(password)
            }}> 

            <input
            type = "email"
            placeholder="Email"
            value = {email}
            onChange={(e)=> setEmail(e.target.value)}
            />

            <input
            type = "password"
            placeholder="Password"
            value = {password}
            onChange={(e)=> setPassword(e.target.value)}
            />

            <input
            type = "password"
            placeholder="Confirm Password"
            value = {confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
            />

            <button type = "submit">Register</button>

            </form>
        </div>
    )
}

export default RegisterPage