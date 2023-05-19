import React, { useState, useContext, useEffect } from 'react'
import { ProgramsContext, UserContext } from '../App'
import Container from 'react-bootstrap/esm/Container'

function AdminForm({ program, setViewPrograms }) {
  const [programs, setPrograms] = useContext(ProgramsContext)
  const [user] = useContext(UserContext)
  const [initProgram, setInitProgram] = useState(program)
  const [programName, setProgramName] = useState("")
  const [programDesc, setProgramDesc] = useState("")
  const [fundsNeeded, setFundsNeeded] = useState(0)
  const [teacherId, setTeacherId] = useState(0)
  const [teachers, setTeachers] = useState([])
  const [viewComplete, setViewComplete] = useState(false)
  const [responseData, setResponseData] = useState(null)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    programs && setInitProgram(programs[0])
    program && setInitProgram(program)
    program && setProgramName(program.name)
    program && setProgramDesc(program.description)
    program && setFundsNeeded(program.funds_needed)
    program && setTeacherId(program.teacher.id)

    fetch('/teachers')
      .then((r) => r.json())
      .then((data) => setTeachers(data))

  }, [program, programs])

  useEffect(() => {
    console.log(responseData)
    if (responseData) {
      const newPrograms = programs.map((p) => {
        return (p.id === responseData.id) ? responseData : p
      })
      setPrograms(newPrograms)
    }
  }, [responseData])

  function handleSelectChange(e) {
    const program = programs.find((p) => p.id == e.target.value)
    setInitProgram(program)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (program) {
      console.log("update")
      fetch(`/programs/${program.id}`, {
        method: 'PATCH',
        headers: { "content-type": "application/json", },
        body: JSON.stringify({
          description: programDesc,
          funds_needed: fundsNeeded,
          teacher_id: teacherId,
        })
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => {
              setResponseData(data)
              setViewComplete(true)
              setProgramDesc("")
              setProgramName("")
              setFundsNeeded(0)
              setTeacherId(0)
            })
          } else {
            r.json()
              .then((details) => setErrors(details.errors))
          }
        })
    } else {
      // create new program fetch
      console.log("post")
      fetch('/programs', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          name: programName,
          description: programDesc,
          funds_needed: fundsNeeded,
          teacher_id: teacherId,
          funds_raised: 0
        })
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => {
              console.log("post response data", data)
              setViewComplete(true)
              setProgramDesc("")
              setProgramName("")
              setFundsNeeded(0)
              setTeacherId(0)
            })
          } else {
            r.json().then((details) => setErrors(details.errors))
          }
        })
    }
  }

  return (
    <Container style={{ padding: "20px" }}>
      {user && user.role == "admin" ?
        <>
          {!viewComplete ? <>
            <form onSubmit={handleSubmit}>
              <div className='form-group' styles={{ marginBottom: "20px" }}>

                {/* if the user arrived at the form from program component */}
                {program ?
                  <>
                    <h2>Update Program Form</h2>
                    <label htmlFor="Program">Program:</label>
                    <select id="program" aria-label="Choose a program" onChange={handleSelectChange}>
                      <option value={initProgram.id}>{initProgram.name}</option>
                    </select>
                  </> :

                  // if the user comes from the admin-page create a program
                  <>
                    <h2>New Program Form</h2>
                    {/* new program name */}
                    <label htmlFor="programName">Program Name:</label>
                    <input type="text" id="programName" placeholder="Enter new program name" value={programName} onChange={(e) => setProgramName(e.target.value)} style={{ width: "200px" }} />
                  </>
                }
                {/* program funds needed */}
                <label style={{ paddingLeft: "10px" }} htmlFor="fundsNeeded">Funds Needed:</label>
                <input type="number" id="fundsNeeded" placeholder="Funds needed for program" value={fundsNeeded} onChange={(e) => setFundsNeeded(e.target.value)} style={{ width: "200px" }} />


                {/* program desription */}
                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="programDesc">Program Description:</label>
                  <textarea type="text" id="programDesc" placeholder="Enter program description" value={programDesc} onChange={(e) => setProgramDesc(e.target.value)} style={{ width: "480px" }} />
                </div>

                {/* program teacher */}
                <br />
                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="teacherId">Program Teacher:</label>
                  <input type="number" id="teacherId" placeholder="Enter Teacher Id" value={teacherId} onChange={(e) => setTeacherId(e.target.value)} />
                </div>

              </div>
              <button type="submit" className="btn" style={{ backgroundColor: "#275251", color: "#ece0cd", margin: "5px" }}>Submit</button>
            </form>

            {/* error handling */}
            <ul style={{ color: "red" }}>
              {errors.map((error, ind) => (
                <li key={ind}>{error}</li>
              ))}
            </ul>

            {/* show list of teachers and ids */}
            {teachers &&
              <Container style={{ margin: "20px" }}>
                <h4>Teacher ids: </h4>
                <ul>
                  {teachers.map((t) => <li key={t.id}>{t.first_name} {t.last_name}, id: {t.id}</li>)}
                </ul>
              </Container>}
          </> :
            <h5>Response Recorded</h5>
          }
        </>
        :
        <>
          <h2>Admin access only beyond this point</h2>
        </>}
    </Container>
  )
}

export default AdminForm