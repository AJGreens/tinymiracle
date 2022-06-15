import React from 'react'
import {Button, Card,Container} from 'react-bootstrap'
import AdminNav from './AdminNav'
import {Link} from 'react-router-dom'



function Admin(){
    return(
        <>
            <AdminNav/>
            <Container>
                <Card>
                    <Card.Body className="d-grid gap-3 text-center">
                        <Link to="/manageAnimals">
                            <Button size="lg">ManageAnimals</Button>
                        </Link>
                        <Link to="/manageContacts">
                            <Button size="lg">ManageContacts</Button>
                        </Link>
                        <Link to="/downloadDocs">
                            <Button size="lg">Download Docs</Button>
                        </Link>
                        <Link to="/dogWarden">
                            <Button size="lg">Dog Warden Report</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Admin