import React from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Login(){

    let navigate= useNavigate()


    function handleSubmit(){
        navigate('/admin')
    }


    return (
        <>
            <div className="outerFlex">
                <Card>
                    <Card.Body>
                        <h2 className="text-center">Login</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"/>
                            </Form.Group>
                            <Button type="submit" className="mt-4">Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}

export default Login