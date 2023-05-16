import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../App';
import Container from 'react-bootstrap/esm/Container';

// #TODO: create form with select options that display the list of programs (should highlight the program that was clicked on the "Programs Page, Program compoenent")
function Donate({ program, programs }) {
  const [amount, setAmount] = useState(100)
  const [donationSum, setDonationSum] = useState()
  const [initProgram, setInitProgram] = useState(program)
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [user] = useContext(UserContext)


  useEffect(() => {
    user && setDonationSum(user.donations_sum)
    program && setInitProgram(program)
    program && setFilteredPrograms(programs.filter((p) => p.id !== program.id))
  }, [user])


  function handleSubmit(e) {
    e.preventDefault()
    //post donation to program
    //post new donations_sum to user
    const newSum = donationSum + amount

    console.log("Amount: ", amount, "program id: ", initProgram.id, "user id: ", user.id )
  }
  return (
    <Container>
      {user ?
        <>
          <h1>Donate here {user.first_name}</h1>

          <form onSubmit={handleSubmit}>
            <div className='form-group' styles={{ marginBottom: "20px" }}>
              <label htmlFor="Program">Select a program:</label>
              {/* if the user arrived at the form from program component */}
              {program ?
                <select id="program" aria-label="Choose a program" onChange={(e) => setInitProgram(e.target.value)}>
                  <option value={initProgram.id}>{initProgram.name}</option>
                  {programs && filteredPrograms.map((p) => (
                    <option key={p.id} value={p}>{p.name}</option>
                  ))}
                </select> :

                // if the user comes from the donate page map all programs
                <select id="program" aria-label="Choose a program" onChange={(e) => setInitProgram(e.target.value)}>
                  {programs && programs.map((p) => (
                    <option key={p.id} value={p}>{p.name}</option>
                  ))}

                </select>
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