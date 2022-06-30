import React, {useState, useEffect} from 'react';
import {database} from '../Firebase'
import {ref, onValue} from "firebase/database";
import UserNav from './UserNav';
import {Button, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom';




function AdoptableDogsHome(){

  const navigate = useNavigate()




  function goToAdoptionProcess(dogToken){
    console.log("Wellit was called to go the thing")
    console.log("dogtoken:"+dogToken)
navigate("/adoptionProcess/"+dogToken)
  }
    
    
  const [dogs, setDogs] = useState([]);
  
  useEffect(()=>{
    const dogRef = ref(database, 'animals/adoptable');
    const otherRef = ref(database, 'animals/other');
    onValue(dogRef, (snapshot) => {
      const data = snapshot.val();
      let allDogs=Object.entries(data).map(([key, value]) => {
          return {id: key,name:value["name"], description:value["description"], age: value["ageGroup"],breed:value["primBreed"],gender:value["gender"],img:value["img"]}
      })
      setDogs(allDogs);
    });
  },[])
    
    return(
      <>
      <UserNav/>
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
                    <Button variant="primary" onClick = {()=> goToAdoptionProcess(dog.id)}>Apply <FontAwesomeIcon icon={faDog}/></Button>
                  </Col>                  
                </Row>
                
              </div>
            )}
        </div>
        
      </>
        
        )
    
}

export default AdoptableDogsHome