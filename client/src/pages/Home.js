import React, { useState, useContext } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { UserContext } from '../App'

// TODO: set useContext in here? so that component updates when a user logs in or out

function Home() {
  const [viewLogin, setViewLogin] = useState(true)
  const user = useContext(UserContext)

  function handleToggleClick() {
    const view = viewLogin
    setViewLogin(!view)
  }

  return (
    <Container>
      {!user ?
        <div>
          {viewLogin ? (
            <div>
              <Link style={{ color: "#275251", textDecoration: "underline", cursor: "pointer" }} onClick={handleToggleClick}>Sign up for an account</Link>
              <Login />

            </div>
          ) : (
            <div>
              <Link style={{ color: "#275251", textDecoration: "underline", cursor: "pointer" }} onClick={handleToggleClick}>Log in to your account</Link>
              <Signup />
            </div>
          )}
        </div> :
        <Container>
          <h3>Welcome {user.first_name}</h3>
        </Container>}


    </Container>
  )
}

export default Home