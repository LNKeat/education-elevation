import React, { useState, useEffect } from 'react'
import Program from '../components/Program'

//TODO: map out cards with each program listed and details
//add donate now button to each card that goes to the donation form
function Programs() {
  const [programs, setPrograms] = useState([])
  programs && console.log("initial set: ", programs)

  useEffect(() => {
    fetch('/programs')
      .then((r) => r.json())
      .then((data) => setPrograms(data))
  }, [])

  return (
    <div>
        <h1>Programs</h1>
        {programs && programs.map((p) => <Program key={p.id} program={p} />)}
    </div>
  )
}

export default Programs