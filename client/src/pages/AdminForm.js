import React, { useState, useContext, useEffect } from 'react'
import { ProgramsContext } from '../App'
import Container from 'react-bootstrap/esm/Container'

function AdminForm({ program }) {
  const [programs] = useContext(ProgramsContext)
  const [initProgram, setInitProgram] = useState(program)
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [programName, setProgramName] = useState("")
  const [programDesc, setProgramDesc] = useState("")
  const [programFN, setProgramFN] = useState(0)
  const [teacherID, setTeacherID] = useState(0)

  useEffect(() => {
    programs && setInitProgram(programs[0])
    program && setInitProgram(program)
    program && setFilteredPrograms(programs.filter((p) => p.id !== program.id))
  }, [program, programs])

  function handleSelectChange(e) {
    const program = programs.find((p) => p.id == e.target.value)
    setInitProgram(program)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }
  
  return (
    <Container style={{padding:"20px"}}>
      <form onSubmit={handleSubmit}>
        <div className='form-group' styles={{ marginBottom: "20px" }}>
          {/* if the user arrived at the form from program component */}
          {program ?
            <>
              <label htmlFor="Program">Program:</label>
              <select id="program" aria-label="Choose a program" onChange={handleSelectChange}>
                <option value={initProgram.id}>{initProgram.name}</option>
              </select>
            </> :

            // if the user comes from the admin-page map all programs
            <>
              <label htmlFor="Program">Program Name:</label>
              <input type="text" className="form-control" id="programName" aria-describedby="programName" placeholder="Enter new program name" value={programName} onChange={(e) => setProgramName(e.target.value)} />
                  
            </>
          }
          {/* remainder of form */}
        </div>



        <button type="submit" className="btn" style={{ backgroundColor: "#275251", color: "#ece0cd", margin: "5px" }}>Submit</button>
      </form>
    </Container>
  )
}

export default AdminForm