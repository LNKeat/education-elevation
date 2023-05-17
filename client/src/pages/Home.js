import React, { useState, useContext, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { UserContext } from '../App'
import studentsPic from '../assets/images/students_image.jpg'

const component = {
  login:"login",
  signup:"signup",
  home:"home"
}


function Home() {
  const [view, setView] = useState(component.login)
  const [user] = useContext(UserContext)

  useEffect(() => {
    setView(component.login)
  }, [user])
  

  function handleLoginClick() {
    setView(component.login)
  }
  function handleSignupClick() {
    setView(component.signup)
  }

  return (
    <Container style={{backgroundColor:"#ece0cd"}}>
      {!user ?
        <div>
          {view === component.login ? (
            <div>
              <Link style={{ color: "#275251", textDecoration: "underline", cursor: "pointer" }} onClick={handleSignupClick}>Sign up for an account</Link>
              <Login />

            </div>
          ) : (
            <div>
              <Link style={{ color: "#275251", textDecoration: "underline", cursor: "pointer" }} onClick={handleLoginClick}>Log in to your account</Link>
              <Signup />
            </div>
          )}
        </div> :
        <Container style={{backgroundColor:"#ece0cd"}}>
          <h3>Welcome {user.first_name}</h3>
          <p>Please consider supporting after school enrichment programs. These programs help children to develop skills that will help them to excel in life. Your donations make these programs possible.</p>
          <h6>Thank you for your continued support!</h6>
          <img src={studentsPic} />
        </Container>}


    </Container>
  )
}

export default Home