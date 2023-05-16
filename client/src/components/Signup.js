import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'

const intialState = {
    first_name: "",
    last_name: "",
    email: "",
    password:"", 
    password_confirmation:"",
    role:"donor"
}

// TODO: make controlled components, add handle submit & fetch
function Signup() {
    const [formData, setFormData] = useState(intialState)

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    return (
        <Container>
            <h4 style={{marginTop:"20px"}}>Please create an account</h4>
            <form>
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
        </Container>
    )
}

export default Signup