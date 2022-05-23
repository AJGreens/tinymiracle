import React from 'react'
import{Navbar,Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function AdminNav(){
    return(
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                        <Nav.Link as={Link} to="/adoptabledogs">AdoptableDogs</Nav.Link>
                        <Nav.Link as={Link} to="/addcontact">AddContact</Nav.Link>
                        <Nav.Link as={Link} to="/dogform">DogForm</Nav.Link>
                    </Nav>
                </Container>
          </Navbar>
        </>
        
        
    )
    
}

export default AdminNav