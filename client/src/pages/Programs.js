import React, { useState, useEffect } from 'react'
import Program from '../components/Program'
import Container from 'react-bootstrap/esm/Container'

//TODO: map out cards with each program listed and details
//add donate now button to each card that goes to the donation form
function Programs() {
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    fetch('/programs')
      .then((r) => r.json())
      .then((data) => setPrograms(data))
  }, [])

  return (
    <Container style={{ padding: "20px" }}>
        <h1>Programs</h1>
        {programs && programs.map((p) => <Program key={p.id} program={p} programs={programs} />)}
    </Container>
  )
}

export default Programs