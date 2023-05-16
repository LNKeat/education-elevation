import React, { useContext } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import { UserContext } from '../App';

function Logout() {
    const [_, setUser] = useContext(UserContext)

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        })
      }
  return (
    <Container>
        <Button onClick={handleLogoutClick} style={{ backgroundColor: "#275251", color: "#ece0cd", margin: "5px" }}>Log Out</Button>
    </Container>
    
  )
}

export default Logout