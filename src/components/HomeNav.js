import React from 'react'
import{Navbar,Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function HomeNav(){
    return(
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">TinyMiracle</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                    </Nav>
                </Container>
          </Navbar>
        </>
        
        
    )
    
}

export default HomeNav
