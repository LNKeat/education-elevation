import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container'


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => console.log("user logged in", user));

            } else {
                r.json().then((details) => console.log(details.errors))
            }
            setEmail("")
            setPassword("")
        });
    }

    return (
        <Container>
            <h4 style={{marginTop:"20px"}}>Please login to your account</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn" style={{ backgroundColor: "#275251", color: "#ece0cd", margin: "5px" }}>Submit</button>
            </form>
            
        </Container>
    )
}

export default Login