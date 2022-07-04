import React from 'react'
import{Navbar,Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useAuth} from "./AuthContext"

function AdminNav(){

    const {signingOut}=useAuth()
    let navigate= useNavigate()
    

    async function handleSignOut(){
        try{
            await signingOut()
            navigate("/")
        }
        catch{
            console.log("error signing out")
        }
    }

    return(
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="m-auto">
                        <Nav.Link as={Link} to="/">View Site</Nav.Link>
                        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                        <Nav.Link as={Link} to="/manageAnimals">Manage Animals</Nav.Link>
                        <Nav.Link as={Link} to="/manageContacts">Manage Contacts</Nav.Link>
                        <Nav.Link as={Link} to="/addContact">Add Contact</Nav.Link>
                        <Nav.Link as={Link} to="/addAnimal">Add Animal</Nav.Link>
                        <Nav.Link as={Link} to="/downloadDocs">Download Docs</Nav.Link>
                        <Nav.Link as={Link} to="/dogWarden">Dog Warden</Nav.Link>
                        <Nav.Link as={Link} to="/viewApplications">View Applications</Nav.Link>
                        <Nav.Link onClick={handleSignOut}>Logout</Nav.Link>
                    </Nav>
                </Container>
          </Navbar>
        </>
        
        
    )
    
}

export default AdminNav