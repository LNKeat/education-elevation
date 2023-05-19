import React, { useState, useEffect, useContext } from 'react'
import Program from '../components/Program'
import Container from 'react-bootstrap/esm/Container'
import { ProgramsContext } from '../App'


function Programs() {
  const [programs, setPrograms] = useContext(ProgramsContext)
  const [deleteErrors, setDeleteErrors] = useState([])

  useEffect(() => {
    console.log('programs', programs)
    programs && setPrograms(programs)
  }, [programs])


  function handleDeleteProgram(program) {
    fetch(`/programs/${program.id}`, {
      method: 'DELETE',
    }).then((r) => {
      if (r.ok) {
        console.log('delete worked')
        setPrograms(programs.filter((p) => p.id !== program.id))
      } else {
        r.json().then((details) => setDeleteErrors(details.errors))
      }
    })
  }

  return (
    <Container style={{ padding: "20px" }}>
      <h1>Programs</h1>
      {programs ? programs.map((p) => <Program key={p.id} program={p} handleDeleteProgram={handleDeleteProgram} />) : <>not working</>}
      <ul style={{ color: "red" }}>
        {deleteErrors.map((error, ind) => (
          <li key={ind}>{error}</li>
        ))}
      </ul>
    </Container>
  )
}

export default Programs