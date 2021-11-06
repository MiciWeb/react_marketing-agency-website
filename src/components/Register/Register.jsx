import './Register.css'
import { useState } from "react"

export default function Register() {
  const [login, setLogin] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [error, setError] = useState("")

  const onLoginChange = e => setLogin(e.target.value);
  const onEmailChange = e => setEmail(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)
  const onPasswordChange2 = e => setPassword2(e.target.value)

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== password2) {
      setError("Password dont match !")
    } else {
      setError("")
      const data = { login, email, password };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify(data)
      }

      fetch("http://localhost:4242/register", requestOptions)
        .then(response => response.json())
        .then(res => setError(res))
        .catch(error => setError(error))
    }
  };

  return (
    <div className="register">
      <h1>
        Blog Subscription
      </h1>
      <form action="/register" method="POST">
        <input type="text" value={login} onChange={onLoginChange} className="formStyle" placeholder="Login" required />
        <input type="email" value={email} onChange={onEmailChange} className="formStyle" placeholder="Email" required />
        <input type="password" value={password} onChange={onPasswordChange} className="formStyle" placeholder="Password" required />
        <input type="password" value={password2} onChange={onPasswordChange2} className="formStyle" placeholder="Password confirmation" required />
        <input type="submit" onClick={handleSubmit} value="Create" className="formButton" />
      </form>
      <div className="error text-danger">{error}</div>
      <a href="/login">login</a>
    </div>
  );
}

