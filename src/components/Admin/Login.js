import React,{useState} from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {useAuth} from './AuthContext'

function Login(){

    let navigate= useNavigate()

    const {signIn}= useAuth()
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()


    async function handleSubmit(event){
        event.preventDefault()
        try {
            await signIn(email,password)
            navigate('/admin')
        }
        catch{
            console.log("error sigining in buddy")
        }
        
    }


    return (
        <>
            <div className="outerFlex">
                <Card>
                    <Card.Body>
                        <h2 className="text-center">Login</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={(e)=>{setEmail(e.target.value)}} value={email} type="text" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password"/>
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