import React from 'react'
import { Link } from "react-router-dom"
import { Container } from "../../globalStyles";

export default function Home() {
    return (
        <div>
            <Container>
                <Link to="/register">
                    <h1>Register</h1>
                </Link>
                <Link to="/login">
                    <h1>Login</h1>
                </Link>
            </Container>
        </div>
    )
}
