import React, {useState, useEffect} from 'react';
import {database} from '../Firebase'
import {ref, onValue} from "firebase/database";
import HomeNav from './UserNav';
import {Button, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog} from '@fortawesome/free-solid-svg-icons'



function AdoptableDogsHome(){
    
    
  const [dogs, setDogs] = useState([]);
  
  useEffect(()=>{
    const dogRef = ref(database, 'adoptableDogs/');
    onValue(dogRef, (snapshot) => {
      const data = snapshot.val();
      let allDogs=[]
      if(data!=null){
        Object.entries(data).map(([key, value]) => {
          if(key!=="counter"){//think about a better implementation
            allDogs.push({id: key,name:value["name"], description:value["description"], age: value["ageGroup"],breed:value["primBreed"],gender:value["gender"],img:value["img"]})
          }
            // Pretty straightforward - use key for the key and value for the value.
          // Just to clarify: unlike object destructuring, the parameter names don't matter here.
        })
      }
      setDogs(allDogs);
    });
  },[])
    
    return(
      <>
      <HomeNav/>
        <div className='container text-center'>
            {/* <FontAwesomeIcon icon={faDog} /> */}
            <h1>Adoptable Dogs</h1>
            {dogs.map(dog=> 
              <div className="container mt-4 dogContainer" key={dog.id}>
                <h2>{dog.name}</h2>
                <h4>{dog.age} {dog.gender} {dog.breed}</h4>
                <Row>
                  <Col>
                    <img src={dog.img} />
                  </Col>
                  <Col>
                    <p className='mt-4'>{dog.description}</p>
                    <Button variant="primary">Apply <FontAwesomeIcon icon={faDog} /></Button>
                  </Col>                  
                </Row>
                
              </div>
            )}
        </div>
        
      </>
        
        )
    
}

export default AdoptableDogsHome