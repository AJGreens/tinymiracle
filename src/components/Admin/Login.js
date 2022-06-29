import React,{useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {useAuth} from './AuthContext'

function Login(){

    let navigate= useNavigate()

    const {signIn}= useAuth()
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    async function handleSubmit(event){
        event.preventDefault()
        try {
            setError("")
            setLoading(true)
            await signIn(email,password)
            navigate('/admin')
        }
        catch{
            setError("Error Signing in")
            console.log("error sigining in buddy")
        }
        setLoading(false)
        
    }


    return (
        <>
            <div className="outerFlex">
                <Card>
                    <Card.Body>
                        <h2 className="text-center">Login</h2>
                        {error !=="" && <Alert variant = "danger"> {error} </Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={(e)=>{setEmail(e.target.value)}} value={email} type="text" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password"/>
                            </Form.Group>
                            <Button disabled = {loading} type="submit" className="mt-4">Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>

            </div>
        </>
    )
}

export default Login