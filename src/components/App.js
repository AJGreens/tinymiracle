import React, {useState, useEffect } from 'react';
import {database} from './Firebase'
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import {Form,Button} from 'react-bootstrap'

function App() {


  const [dogs, setDogs] = useState([]);
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState();

  
  
  useEffect(()=>{
    console.log("Hello again")
    const dogRef = ref(database, 'dogs/');
    onValue(dogRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      let allDogs=[]
      Object.entries(data).map(([key, value]) => {
        
        allDogs.push({id: key, name:value})

        // Pretty straightforward - use key for the key and value for the value.
        // Just to clarify: unlike object destructuring, the parameter names don't matter here.
      })
      setDogs(allDogs);
      console.log("dope");
      console.log(dogs);
    });
  },[])
  
  function addDog(event){
    event.preventDefault()
    const dogRef = ref(database, 'adoptableDogs')
    const newDogRef = push(dogRef)
    set(newDogRef, {
      name: name,
      breed: breed,
      age: age,
      gender: gender,
      description: description
    })
    setName("")
    setAge("")
    setBreed("")
    setGender("")
    setDescription("")
    // const dogRef= ref(database,'dogs')
    // const newDogRef=push(dogRef);
    // set(newDogRef, "Hello");

  }

  function handleChange(event){
  
    switch(event.target.name){
      case "name":
        setName(event.target.value)
        break
      case "description":
        setDescription(event.target.value)
        break
      case "breed":
        setBreed(event.target.value)
        break
      case "gender":
        setGender(event.target.value)
        break
      case "age":
        setAge(event.target.value)
        break
    }
  }

  
  return (
    <div className="container">
      <h1>Tiny Mircale{console.log(gender + age + breed)}</h1>
      <h2> Adopted Dogs</h2>
      
      <h2>Adoptable Dogs</h2>
      <ul>
        {dogs.map((dog) => <li>{dog.id}:{dog.name}</li>)}
      </ul>
      <Form onSubmit={addDog} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dog Name</Form.Label>
          <Form.Control name="name" onChange={handleChange}  value={name} type="text" placeholder="Dax"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Dog Description</Form.Label>
          <Form.Control name = "description" onChange = {handleChange} value = {description} type = "text" placeholder="description"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Dog Picture</Form.Label>
          <Form.Control name = "picture" type = "file" placeholder="image" accept="image/*"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <select class="form-select" name = "age" onChange = {handleChange} aria-label="Default select example">
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <select class="form-select" aria-label="Default select example" name = "gender" onChange = {handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Breed</Form.Label>
        <select class="form-select" aria-label="Default select example" name = "breed" onChange = {handleChange}>
            <option value="Heeler">Heeler</option>
            <option value="Hound">Hound</option>
            <option value="Laborador Retriever">Laborador Retriever</option>
            <option value="Pitbull Terrier">Pitbull Terrier</option>
            <option value="Pointer">Pointer</option>
            <option value="Unknown">Unknown</option>
          </select>
        </Form.Group>

        <Button type = "submit" variant="primary">Submit</Button>
      </Form>
    </div>
  );
}



export default App;
