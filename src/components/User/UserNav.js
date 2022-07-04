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
            <div className="container-fluid userNav text-center">
                <img src = {logo} id="logoPic"/>
                <Navbar>
                    <Container>
                        <Nav className="m-auto">
                            <Nav.Link as={Link} className="homeNavLink" to="/">Home</Nav.Link>
                            <Nav.Link as={Link} className="homeNavLink" to="/adoptabledogshome">Adoptable Dogs</Nav.Link>
                            <Nav.Link as={Link} className="homeNavLink" to="/petcare">Pet Care</Nav.Link>
                            <Nav.Link as={Link} className="homeNavLink" to="/donate">Donate</Nav.Link>
                            <Nav.Link as={Link} className="homeNavLink" to="/contact">Contact</Nav.Link>
                            {user?<Nav.Link as={Link} className="homeNavLink" to="/admin">Admin</Nav.Link>: <Nav.Link clasName = "navLink" as={Link} to="/login">Login</Nav.Link>}
                            {user && <Nav.Link className="homeNavLink" onClick={handleSignOut}>Logout</Nav.Link>}
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            
        </>
        
        
    )
    
}

export default UserNav
