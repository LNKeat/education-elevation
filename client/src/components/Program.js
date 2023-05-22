import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Donate from '../pages/Donate';
import AdminForm from '../pages/AdminForm';
import { UserContext } from '../App';


function Program({ program, handleDeleteProgram }) {
  const [viewForm, setViewForm] = useState(false)
  const [viewAdminForm, setViewAdminForm] = useState(false)
  const [user] = useContext(UserContext)

  return (
    <Container fluid>
      <Card style={{ width: '18rem', margin: "20px", width: "95%" }}>
        <Card.Body>
          <Card.Title>{program.name}</Card.Title>
          <Card.Text>
            {program.description}
          </Card.Text>
          <ul>
            <li>Teacher: {program.teacher.first_name} {program.teacher.last_name}</li>
            <li>Funds needed: ${program.funds_needed}</li>
            <li>Funds raised: ${program.funds_raised}</li>
          </ul>
          <Button onClick={() => setViewForm(!viewForm)} style={{ backgroundColor: "#275251", color: "#ece0cd", margin: "5px" }}>Donate</Button>

          {/* show update & delete button only if user is admin */}
          {user && user.role == "admin" && <>
            <Button onClick={() => setViewAdminForm(!viewAdminForm)} style={{ backgroundColor: "#275251", color: "#ece0cd", margin: "5px" }}>Update Program</Button>
            <Button onClick={() => handleDeleteProgram(program)} style={{ backgroundColor: "#275251", color: "#ece0cd", margin: "5px" }}>Delete Program</Button>
          </>}
        </Card.Body>
      </Card>
      {viewForm && <Donate program={program} />}
      {viewAdminForm && <AdminForm program={program} />}

    </Container>
  )
}

export default Program