import React from 'react'
import DogForm from './DogForm'
import AdoptableDogs from './AdoptableDogs'
import {Button, Card,Container} from 'react-bootstrap'
import AdminNav from "./AdminNav"
import {Link} from 'react-router-dom'



function Admin(){
    return(
        <>
            <AdminNav/>
            <Container>
                <Card>
                    <Card.Body className="d-grid gap-3 text-center">
                        <Link to="/adoptabledogs">
                            <Button size="lg">AdoptableDogs</Button>
                        </Link>
                        <Link to="/dogform">
                            <Button size="lg">DogForm</Button>
                        </Link>
                        <Link to="/addcontact">
                            <Button size="lg">AddContact</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Admin