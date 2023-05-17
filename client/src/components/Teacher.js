import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';

// TODO: get teachers to line up 2 cards per column

function Teacher({ teacher, pic }) {
    return (
        <Container fluid>
        <Card style={{ width: '18rem', margin:"20px" }}>
          <Card.Img variant="top" src={pic} styles={{backgroundColor:"#275251"}} />
          <Card.Body>
            <Card.Title>{teacher.first_name} {teacher.last_name}</Card.Title>
            <Card.Text>
              {teacher.bio}
              {teacher.programs.length > 0 && <div style={{color:"#275251", fontFamily: 'League Spartan'}}><strong>Programs:</strong></div>}
              <ul>
                {teacher.programs.map((p) => <li key={p.name}>{p.name}</li>)}
              </ul>
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        </Container>
      );
}

export default Teacher