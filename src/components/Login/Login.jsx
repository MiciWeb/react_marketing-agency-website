import { useState } from "react"
import "./Login.css"

export default function Login() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const onLoginChange = e => setLogin(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();

        const data = { login, password };

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify(data)
        }

        fetch("http://localhost:4242/login", requestOptions)
            .then(response => response.json())
            .then(res => setError(res))
            .catch(error => setError(error))
    };

    return (
        <div className="login">
            <h1>
                Blog Login
        </h1>
            <form action="/register" method="POST">
                <input type="text" value={login} onChange={onLoginChange} className="formStyleLogin" placeholder="Login" required />
                <input type="password" value={password} onChange={onPasswordChange} className="formStyleLogin" placeholder="Password" required />
                <input type="submit" onClick={handleSubmit} value="Login" className="formButtonLogin" />
            </form>
            <div className="error text-danger">{error}</div>
            <a href="/Register">Subscribe</a>
        </div>
    )
}
