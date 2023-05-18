import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { UserContext } from '../App'


const intialState = {
    first_name: "",
    last_name: "",
    email: "",
    password:"",
    password_confirmation:"",
    role:"donor"
}

function Signup() {
    const [formData, setFormData] = useState(intialState)
    const [errors, setErrors] = useState([])
    const [_, setUser] = useContext(UserContext)

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((user) => setUser(user))
                } else {
                    r.json().then((details) => setErrors(details.errors))
                    setFormData(intialState)
                }
            })

    }

    return (
        <Container>
            <h4 style={{ marginTop:"20px" }}>Please create an account</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="first_name" aria-describedby="name" placeholder="Enter first name" value={formData.first_name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="last_name" aria-describedby="name" placeholder="Enter last name" value={formData.last_name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" className="form-control" id="password_confirmation" placeholder="Password" value={formData.password_confirmation} onChange={handleChange} />
                </div>

                <button type="submit" className="btn" style={{ backgroundColor: "#275251", color: "#ece0cd", margin: "5px" }}>Submit</button>
            </form>
            <ul style={{ color: "red" }}>
                {errors.map((error, ind) => (
                    <li key={ind}>{error}</li>
                ))}
            </ul>
        </Container>
    )
}

export default Signup