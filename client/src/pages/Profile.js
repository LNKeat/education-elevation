import React, { useContext } from 'react'
import { UserContext } from '../App'
import Container from 'react-bootstrap/esm/Container'

// TODO: thank you message with donor name, donation tier they belong to, donation sum

function Profile() {
  const [user] = useContext(UserContext)

  return (
    <div style={{backgroundColor:"#ece0cd"}}>
      <h1>Profile</h1>
      {user && 
      <Container>
        <h6>Name: {user.first_name} {user.last_name}</h6>
        <h6>Total donations: {user.donations_sum}</h6>
        <h5>Thank you for your {user.donor_tier} donor status!</h5>
      </Container>
      }
    </div>
  )
}

export default Profile