import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Login from '../components/Login'
import Signup from '../components/Signup'

function Home() {
  return (
    <Container>
        <h2 style={{padding:"40px"}}>Please Log in or Sign up</h2>
        <Login />
        <br />
        <Signup />
    </Container>
  )
}

export default Home