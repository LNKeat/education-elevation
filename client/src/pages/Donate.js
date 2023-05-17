import React, { useState, useContext, useEffect } from 'react'
import { ProgramsContext, UserContext } from '../App';
import Container from 'react-bootstrap/esm/Container';

// #TODO: create form with select options that display the list of programs (should highlight the program that was clicked on the "Programs Page, Program compoenent")
function Donate({ program }) {
  const [amount, setAmount] = useState(100)
  const [donationSum, setDonationSum] = useState(0)
  const [initProgram, setInitProgram] = useState(program)
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [user] = useContext(UserContext)
  const [programs] = useContext(ProgramsContext)


  useEffect(() => {
    user && setDonationSum(user.donations_sum)
    programs && setInitProgram(programs[0])
    program && setInitProgram(program)
    program && setFilteredPrograms(programs.filter((p) => p.id !== program.id))
  }, [user, program, programs])

  function handleSelectChange(e){
    const program = programs.find((p) => p.id == e.target.value)
    setInitProgram(program)
  }


  function handleSubmit(e) {
    e.preventDefault()
    console.log("Amount: ", amount, "program id: ", initProgram.id, "user id: ", user.id )
    fetch('/donations', {
      method: 'POST', 
      headers: {
        "Content-Type":"application/json", 
      },
      body: JSON.stringify({
        user_id: user.id,
        program_id: initProgram.id,
        amount: amount
      }),
    })
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((data) => console.log(data))
      } else {
        r.json().then((details) => console.log("errors: ", details.errors))
      }
    })
  }

  
  return (
    <Container>
      {user ?
        <>
          <h1>Donate here {user.first_name}</h1>

          <form onSubmit={handleSubmit}>
            <div className='form-group' styles={{ marginBottom: "20px" }}>
              {/* if the user arrived at the form from program component */}
              {program ?
              <>
              <label htmlFor="Program">Program:</label>
                <select id="program" aria-label="Choose a program" onChange={handleSelectChange}>
                  <option value={initProgram.id}>{initProgram.name}</option>
                  {/* {programs && filteredPrograms.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))} */}
                </select>
                </> :

                // if the user comes from the donate page map all programs
                <>
                <label htmlFor="Program">Select a program:</label>
                <select id="program" aria-label="Choose a program" onChange={handleSelectChange}>
                  {programs && programs.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}

                </select>
                </>
              }
            </div>
            <div className="form-group">
              <label htmlFor="amount">Donation Amount: </label>
              <input type="number" className="form-control" id="amount" aria-describedby="amount" placeholder="Enter amount you'd like to donate" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>



            <button type="submit" className="btn" style={{ backgroundColor: "#275251", color: "#ece0cd", margin: "5px" }}>Submit</button>
          </form>
        </> : <a href='/' style={{ color: "#275251" }}>Please log in or create an account to donate</a>}
    </Container>
  )
}

export default Donate