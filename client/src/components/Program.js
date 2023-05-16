import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Donate from '../pages/Donate';


function Program({ program, programs }) {
    const [viewForm, setViewForm] = useState(false)

  return (
    <Container fluid>
        <Card style={{ width: '18rem', margin:"20px", width:"95%" }}>
          <Card.Body>
            <Card.Title>{program.name}</Card.Title>
            <Card.Text>
              {program.description}
            </Card.Text>
            <Button onClick={() => setViewForm(!viewForm)} style={{ backgroundColor: "#275251", color: "#ece0cd", margin: "5px" }}>Donate</Button>
          </Card.Body>
        </Card>
        {viewForm && <Donate program={program} programs={programs} />}
        
        </Container>
  )
}

export default Program