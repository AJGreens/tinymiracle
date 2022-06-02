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
                        <Nav.Link as={Link} to="/manageAnimals">ManageAnimals</Nav.Link>
                        <Nav.Link as={Link} to="/manageContacts">ManageContacts</Nav.Link>
                        <Nav.Link as={Link} to="/addContact">AddContact</Nav.Link>
                        <Nav.Link as={Link} to="/addAnimal">AddAnimal</Nav.Link>
                    </Nav>
                </Container>
          </Navbar>
        </>
        
        
    )
    
}

export default AdminNav