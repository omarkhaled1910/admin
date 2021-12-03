import React from 'react'
import "./login.css"
import { login } from '../apiCalls'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handlesubmit = (e) => {
        e.preventDefault();
        const user = {
            name: username,
            password
        }
        login(dispatch, user)
    }

    return (
        <div className="logincontainer">
            <div>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            </div>
            <button type="submit" onClick={handlesubmit} >SignIn</button>
        </div>
    )
}

export default Login
