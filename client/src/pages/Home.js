import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Login from '../components/Login'

function Home() {
  return (
    <Container>
        <h2 style={{padding:"40px"}}>Please Log in or Sign up</h2>
        <Login />
    </Container>
  )
}

export default Home