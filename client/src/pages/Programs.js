import React, { useState, useEffect, useContext } from 'react'
import Program from '../components/Program'
import Container from 'react-bootstrap/esm/Container'
import { ProgramsContext } from '../App'

//TODO: get program info to update once donation or update has been made
//handle error on delete 
function Programs() {
  const [programs] = useContext(ProgramsContext)
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [deleteErrors, setDeleteErrors] = useState([])

  useEffect(() => {
    programs && setFilteredPrograms(programs)
  }, [programs])


  function handleDeleteProgram(program) {
    fetch(`/programs/${program.id}`, {
      method: 'DELETE',
    }).then((r) => {
      if (r.ok) {
        console.log('delete worked')
        setFilteredPrograms(programs.filter((p) => p.id !== program.id))
      } else {
        r.json().then((details) => setDeleteErrors(details.errors))
      }
    })
  }

  return (
    <Container style={{ padding: "20px" }}>
      <h1>Programs</h1>
      {programs ? filteredPrograms.map((p) => <Program key={p.id} program={p} programs={programs} handleDeleteProgram={handleDeleteProgram} />) : <>not working</>}
      <ul style={{ color: "red" }}>
        {deleteErrors.map((error, ind) => (
          <li key={ind}>{error}</li>
        ))}
      </ul>
    </Container>
  )
}

export default Programs