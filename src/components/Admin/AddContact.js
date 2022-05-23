import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import {database} from '../Firebase'
import {ref, push, set} from "firebase/database";
import AdminNav from "./AdminNav"





export default function AddContact(){
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [City, setCity]= useState("");
    const [State, setState]= useState("");
    const [Zip,  setZip]= useState("");
    const [PrimEmail, setPrimEmail]= useState("");
    const [SecEmail, setSecEmail]= useState("");
    const [MobPhone, setMobPhone]= useState("");
    const [HomePhone, setHomePhone]= useState("");
    const [Username, setUsername]= useState("");
    const [ActiveFost, setActiveFost]= useState("false");

    
    
    

function handleSubmit(e){
    e.preventDefault();
    const contactListRef = ref(database, 'contacts');
    const newContactRef = push(contactListRef);
    
    set(newContactRef, {
    name: Name,
    address: Address,
    city: City,
    state: State,
    zip: Zip,
    primaryEmail: PrimEmail,
    secondaryEmail: SecEmail,
    mobilePhone: MobPhone,
    homePhone: HomePhone,
    username: Username,
    activeFoster: ActiveFost
});
    
    console.log(Name)
    
}

function handleChange(event){
    
    
    console.log("SHEE")
    switch (event.target.name){
        case "Name":
            setName(event.target.value)
            break;
        case "Address":
            setAddress(event.target.value)
            break;
        case "City":
            setCity(event.target.value)
            break;
        case "State":
            setState(event.target.value)
            break;
        case "Zip":
            setZip(event.target.value)
            break;
        case "PrimEmail":
            setPrimEmail(event.target.value)
            break;
        case "SecEmail":
            setSecEmail(event.target.value)
            break;
        case "MobPhone":
            setMobPhone(event.target.value)
            break;
        case "HomePhone":
            setHomePhone(event.target.value)
            break;
        case "Username":
            setUsername(event.target.value)
            break;
        case "Check":
          
            if (event.target.checked){
                setActiveFost("true")
            }
            else {
                setActiveFost("false")
            }
        break;
    }
    
}




return(
    <>
    <AdminNav/>
    <div>
        <h1>
        SUCK IT
        </h1>
        
        <Form onSubmit = {handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name = "Name" onChange = {handleChange} type = "text" value = {Name}/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control name = "Address" onChange = {handleChange} type = "text" value = {Address}/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control name = "City" onChange = {handleChange} type = "text" value = {City}/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control name = "State" onChange = {handleChange} type = "text" value = {State}/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Zip</Form.Label>
                <Form.Control name = "Zip" onChange = {handleChange} type = "text" value = {Zip}/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Primary Email</Form.Label>
                <Form.Control name = "PrimEmail" onChange = {handleChange} type = "text" value = {PrimEmail}/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Secondary Email</Form.Label>
                <Form.Control name = "SecEmail" onChange = {handleChange} type = "text" value = {SecEmail}/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Mobile Phone</Form.Label>
                <Form.Control name = "MobPhone" onChange = {handleChange} type = "text" value = {MobPhone}/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Home Phone</Form.Label>
                <Form.Control name = "HomePhone" onChange = {handleChange} type = "text" value = {HomePhone}/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name = "Username" onChange = {handleChange} type = "text" value = {Username}/>
            </Form.Group>
            
            <Form.Group>
                <Form.Check
                    type="checkbox" name = "Check"
                    value = {ActiveFost}
                    label="Active Foster?"
                    onChange = {handleChange}
                />
            </Form.Group>
            
            <Button type = "submit">Add Contact</Button>
            
        </Form>
    </div>
    </>
    
    )    
    
    
    
}