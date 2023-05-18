import React, { useContext } from 'react'
import { UserContext } from '../App'
import Container from 'react-bootstrap/esm/Container'


function Profile() {
  const [user] = useContext(UserContext)

  return (
    <Container style={{backgroundColor:"#ece0cd", padding:"20px"}}>
      <h1>Profile</h1>
      {user ?
      <Container>
        <h6>Name: {user.first_name} {user.last_name}</h6>
        <h6>Total donations: {user.donations_sum}</h6>
        <h5>Thank you for your {user.donor_tier} donor status!</h5>
      </Container> : 
      <a style={{ color: "#275251", textDecoration: "underline", cursor: "pointer" }} href="/">Please log in or sign up for an account</a>
      }
    </Container>
  )
}

export default Profile