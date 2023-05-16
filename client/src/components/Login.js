import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container'


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log("submitted")
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn" style={{ backgroundColor: "#275251", color: "#ece0cd", margin: "5px" }}>Submit</button>
            </form>
        </Container>
    )
}

export default Login