import React from 'react'
import{Navbar,Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from './DogImages/fantasticlogo.png'
import {useAuth} from "../Admin/AuthContext"

function UserNav(){

    const {user,signingOut}= useAuth()

    async function handleSignOut(){
        try{
            await signingOut()
        }
        catch{
            console.log("error signing out")
        }
    }





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
                        {user?<Nav.Link clasName = "navLink" as={Link} to="/admin">Admin</Nav.Link>: <Nav.Link clasName = "navLink" as={Link} to="/login">Login</Nav.Link>}
                        {user && <Nav.Link clasName = "navLink" onClick={handleSignOut}>Logout</Nav.Link>}
                    </Nav>
                </Container>
          </Navbar>
        </>
        
        
    )
    
}

export default UserNav
