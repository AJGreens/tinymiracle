import React from 'react'
import{Navbar,Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useAuth} from "./AuthContext"

function AdminNav(){

    const {signingOut}=useAuth()
    let navigate= useNavigate()
    

    async function handleSignOut(){
        console.log("flhalshjas")
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
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                        <Nav.Link as={Link} to="/manageAnimals">ManageAnimals</Nav.Link>
                        <Nav.Link as={Link} to="/manageContacts">ManageContacts</Nav.Link>
                        <Nav.Link as={Link} to="/addContact">AddContact</Nav.Link>
                        <Nav.Link as={Link} to="/addAnimal">AddAnimal</Nav.Link>
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