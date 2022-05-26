import React from 'react'
import {Button, Card,Container} from 'react-bootstrap'
import UserNav from '../User/UserNav'
import {Link} from 'react-router-dom'



function Admin(){
    return(
        <>
            <UserNav/>
            <Container>
                <Card>
                    <Card.Body className="d-grid gap-3 text-center">
                        <Link to="/manageAnimals">
                            <Button size="lg">ManageAnimals</Button>
                        </Link>
                        <Link to="/manageContacts">
                            <Button size="lg">ManageContacts</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Admin