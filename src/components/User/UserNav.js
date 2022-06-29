import React from 'react'
import{Navbar,Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from './DogImages/fantasticlogo.png'


function UserNav(){
    return(
        <>
        <div style = {{'height': '140px', backgroundColor: '#4ECDC4', textAlign: 'center'}}>
        <img src = {logo} style = {{height: '140px'}}/>

            
        </div>
            <Navbar className = "navLink" style = {{backgroundColor: '#4ECDC4', height: '30px'}}bg="" variant="light">
                <Container className = "navLink">
                    <Nav className="me-auto">
                        <Nav.Link clasName = "navLink" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link clasName = "navLink" as={Link} to="/adoptabledogshome">Adoptable Dogs</Nav.Link>
                        <Nav.Link clasName = "navLink" as={Link} to="/petcare">Pet Care</Nav.Link>
                        <Nav.Link clasName = "navLink" as={Link} to="/donate">Donate</Nav.Link>
                        <Nav.Link clasName = "navLink" as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link clasName = "navLink" as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Container>
          </Navbar>
        </>
        
        
    )
    
}

export default UserNav
