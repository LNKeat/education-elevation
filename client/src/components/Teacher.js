import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';


function Teacher({ teacher, pic }) {
    return (
        <Container fluid>
        <Card style={{ width: '18rem', margin:"20px" }}>
          <Card.Img variant="top" src={pic} styles={{backgroundColor:"#275251"}} />
          <Card.Body>
            <Card.Title>{teacher.first_name} {teacher.last_name}</Card.Title>
            <Card.Text>
              {teacher.bio}
              </Card.Text>
              <div style={{color:"#275251", fontFamily: 'League Spartan'}}>
              {teacher.programs.length > 0 && <strong>Programs:</strong>}
              <ul>
                {teacher.programs.map((p) => <li key={p.name}>{p.name}</li>)}
              </ul>
              </div>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        </Container>
      );
}

export default Teacher