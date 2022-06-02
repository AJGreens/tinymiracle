import React, {useState, useEffect} from 'react';
import {database} from '../Firebase'
import {ref, onValue} from "firebase/database";
import AdminNav from "./AdminNav"
import {Button, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function ManageAnimals(){
    
    
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();



 function addAnimalFunc(){
   navigate('/addAnimal')

  }

  
  useEffect(()=>{
    const dogRef = ref(database, 'animals/');
    onValue(dogRef, (snapshot) => {
      const data = snapshot.val();
      let allDogs=[]
      Object.entries(data).map(([key, value]) => {
        allDogs.push({id: key, myId:value["id"], name:value["name"], aka:value["aka"], description:value["description"], ageGroup: value["ageGroup"], status:value["status"],foster:value["foster"],primBreed:value["primBreed"], secBreed:value["secBreed"], gender:value["gender"], birthDate:value["birthDate"], shelter:value["shelter"], dateDue:value["dateDue"], img:value["img"],
      imgFileName: value["imgFileName"], imgFileLastModified: value["imgFileLastModified"], imgFileSize: value["imgFileSize"], dateChanged: value["dateChanged"]})
        // Pretty straightforward - use key for the key and value for the value.
        // Just to clarify: unlike object destructuring, the parameter names don't matter here.
      })
      console.log(allDogs)
      setDogs(allDogs);
    });
  },[])
    
    return(
      <>
      <AdminNav/>
        <div className = 'container' style = {{marginTop: '40px'}}>
          <Button onClick = {addAnimalFunc}>Add animal</Button><br/><br/>
            <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Dog Name</th>
                      <th>Breed</th>
                      <th>Foster</th>
                      <th>Status</th>
                      <th>Date Chng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dogs.map(dog=>
                    <tr>
                      <td>{dog.myId}</td>
                      <td> <Link to ={"/editAnimal/"+dog.id}>{dog.name}</Link></td>
                      <td>{dog.primBreed}</td>
                      <td>{dog.foster}</td>
                      <td>{dog.status}</td>
                      <td>{dog.dateChanged}</td>
                  </tr>
                    )}
                   
                  </tbody>
              </Table>









            <h1>animals</h1>
        
            {dogs.map(dog=> 
            <div key={dog.id}>
                <h2>{dog.name}</h2>
                <img src={dog.img} />
            </div>
            
            )}
        </div>
        
        
      </>
        
        )
    
}

export default ManageAnimals