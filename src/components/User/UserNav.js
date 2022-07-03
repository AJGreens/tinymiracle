import React from 'react'
import{Navbar,Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from './DogImages/weblogo.png'
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
        <div style = {{'height': '140px', backgroundColor: '#386A92', textAlign: 'center'}}>
        <img src = {logo} style = {{height: '140px'}}/>

            
        </div>
            <Navbar className = "navLink" style = {{backgroundColor: '#386A92', height: '30px', color: "#DC0404"}}bg="" variant="light">
                <Container className = "navLink">
                    <Nav className="me-auto red">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/adoptabledogshome">Adoptable Dogs</Nav.Link>
                        <Nav.Link as={Link} to="/petcare">Pet Care</Nav.Link>
                        <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        {user?<Nav.Link as={Link} to="/admin">Admin</Nav.Link>: <Nav.Link clasName = "navLink" as={Link} to="/login">Login</Nav.Link>}
                        {user && <Nav.Link onClick={handleSignOut}>Logout</Nav.Link>}
                    </Nav>
                </Container>
          </Navbar>
        </>
        
        
    )
    
}

export default UserNav
