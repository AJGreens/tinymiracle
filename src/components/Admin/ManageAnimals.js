import React, {useState, useEffect} from 'react';
import {database} from '../Firebase'
import {ref, onValue} from "firebase/database";
import AdminNav from "./AdminNav"



function ManageAnimals(){
    
    
  const [dogs, setDogs] = useState([]);
  
  useEffect(()=>{
    const dogRef = ref(database, 'adoptableDogs/');
    onValue(dogRef, (snapshot) => {
      const data = snapshot.val();
      let allDogs=[]
      Object.entries(data).map(([key, value]) => {
        allDogs.push({id: key,name:value["name"], description:value["description"], age: value["age"],breed:value["breed"],gender:value["gender"],img:value["img"]})
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
        <div>
          
            <h1>AdoptableDogs</h1>
        
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