import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Teacher from '../components/Teacher'
import TeacherOne from '../assets/images/Teacher_1.jpg'
import TeacherTwo from '../assets/images/Teacher_2.jpg'
import TeacherThree from '../assets/images/Teacher_3.jpg'
import TeacherFour from '../assets/images/Teacher_4.jpg'

//TODO: fix container to show multiple cards per line

const teachers_images = [TeacherOne, TeacherTwo, TeacherFour, TeacherThree]

function Teachers() {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    fetch('/teachers')
    .then((r) => r.json())
    .then((data) => setTeachers(data))
  }, [])
  

  return (
    <Container fluid style={{ padding: "20px", justifyContent:"center" }}>
        <h1>Teachers</h1>

        {teachers.map(( (t, ind) =>
          <Teacher key={ind} teacher={t} pic={teachers_images[ind] } />
        ))}

    </Container>
  )
}

export default Teachers