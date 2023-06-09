import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import logo from '../assets/images/EE-logo.svg'
import { UserContext } from '../App';


function Header() {
  const [user] = useContext(UserContext)

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{color:"#275251"}}>Education Elevation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navba r-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/teachers">Teachers</Nav.Link>
            <Nav.Link href="/programs">Programs</Nav.Link>
            <Nav.Link href="/donate">Donate</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            {user && user.role == "admin" && <Nav.Link href="/admin-form">Admin Form</Nav.Link> }
          </Nav>
        </Navbar.Collapse>
        <Image rounded src={logo} width={100} height={100} />
      </Container>
    </Navbar>
  )
}

export default Header