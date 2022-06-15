import React, {useState, useEffect} from 'react';
import {database} from '../Firebase'
import {ref, onValue, remove} from "firebase/database";
import AdminNav from "./AdminNav"
import {Button, Table} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function ManageContacts(){
    
    
  const [contacts, setContacts] = useState([]);
  const navigate= useNavigate()
  
  useEffect(()=>{

    
    const contactsRef = ref(database, 'contacts/');
    onValue(contactsRef, (snapshot) => {
      console.log("this called")
      const data = snapshot.val();
      let allContacts= Object.entries(data).map(([key, value]) => {
        return {token: key, id: value["id"], name:value["name"], address:value["address"], city: value["city"], state:value["state"], zip:value["zip"], primaryEmail:value["primaryEmail"], secondaryEmail:value["secondaryEmail"], mobilePhone:value["mobilePhone"], homePhone:value["homePhone"], username:value["username"], activeFoster:value["activeFoster"]}
        // allContacts.push({token: key, id: value["id"],name:value["name"], description:value["description"], age: value["age"],breed:value["breed"],gender:value["gender"],img:value["img"]})
        // Pretty straightforward - use key for the key and value for the value.
        // Just to clarify: unlike object destructuring, the parameter names don't matter here.
      })
      setContacts(allContacts);
      return ()=>{
        setContacts()
      }
    });
  },[])

  function handleAddContact(){
    navigate('/addContact')
  }

  function handleDeleteContact(token){
      const deleteContactRef= ref(database, "contacts/"+token)
      remove(deleteContactRef)

      console.log(contacts[0])
  }
  function handleUpdateContact(token){
    navigate("/updateContact/"+token)
  }


  


  return(
    <>
      <AdminNav/>
      <div className="container">
        <h2>Manage Contacts</h2>
        <Button onClick={handleAddContact}>Add Contact</Button>
        <Table className='mt-4' striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Mobile Phone</th>
              <th>Address</th>
              <th>City</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact=>{
              return(
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td><a className="link-primary" onClick={()=>handleUpdateContact(contact.token)}>{contact.name}</a></td>
                  <td>{contact.mobilePhone}</td>
                  <td>{contact.address}</td>
                  <td>{contact.city}</td>
                  <td><Button onClick={()=>handleDeleteContact(contact.token)} variant="danger">Delete</Button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>

      
        
    </>
        
  )
    
}

export default ManageContacts