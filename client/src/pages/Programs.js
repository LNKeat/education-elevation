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
  }, [])

  function handleDeleteProgram(program){
    console.log(program.id)
    fetch(`/programs/${program.id}`, {
      method: 'DELETE',
    }).then((r) => r.json())
    .then(() => {
      programs && setFilteredPrograms(programs.filter((p) => p.id !== program.id))
    })
  }

  return (
    <Container style={{ padding: "20px" }}>
        <h1>Programs</h1>
        {programs && programs.map((p) => <Program key={p.id} program={p} programs={programs} handleDeleteProgram={handleDeleteProgram} />)}
    </Container>
  )
}

export default Programs