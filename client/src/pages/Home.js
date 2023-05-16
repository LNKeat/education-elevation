import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'

function Home() {
  const [viewLogin, setViewLogin] = useState(true)

  function handleToggleClick() {
    const view = viewLogin
    setViewLogin(!view)
  }

  return (
    <Container>
      {viewLogin ? (
        <div>
          <Link style={{color:"#275251", textDecoration:"underline", cursor:"pointer"}} onClick={handleToggleClick}>Sign up for an account</Link>
          <Login />

        </div>
      ) : (
        <div>
        <Link style={{color:"#275251", textDecoration:"underline", cursor:"pointer"}} onClick={handleToggleClick}>Log in to your account</Link>
        <Signup />
        </div>
      )}
    </Container>
  )
}

export default Home