import React from 'react'
import{Navbar,Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function UserNav(){
    return(
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/adoptabledogshome">Adoptable Dogs</Nav.Link>
                        <Nav.Link as={Link} to="/petcare">Pet Care</Nav.Link>
                        <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Container>
          </Navbar>
        </>
        
        
    )
    
}

export default UserNav
