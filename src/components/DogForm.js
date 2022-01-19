import React, {useState,useEffect} from 'react';
import {database, storage} from './Firebase'
import {ref, push, set} from "firebase/database";
import {ref as sRef,uploadBytesResumable, getDownloadURL,deleteObject} from "firebase/storage";
import {Form,Button} from 'react-bootstrap'
import AdminNav from "./AdminNav"

function DogForm(){
    
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("Heeler");
    const [gender, setGender] = useState("Male");
    const [description, setDescription] = useState("");
    const [age, setAge] = useState("Baby");
    const [imageFile, setImageFile] = useState();
    const [imageUrl, setImageUrl]=useState()
    
    
    useEffect(() => {
      return () => {
        console.log("RELOAD")
      if(imageUrl){
         handleDelete()
      }
      }
    }, [])
    //understand useEffect as component unmount
    
    
    
    
    
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
          default:
            console.log("Case Error")
            break
        }
        
    }
    
    function handleChangeImg(e){
      
      if (imageUrl){
        handleDelete()
      }
      //Do we need async?
      const tempFile=e.target.files[0];
      const uploadRef = sRef(storage, `/images/adoptable/${tempFile.name+tempFile.lastModified+tempFile.size}`)
      const uploadTask = uploadBytesResumable(uploadRef, tempFile)
      
      uploadTask.on('state_changed',
        (snapshot) => {
        }, 
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              break;
            case 'storage/canceled':
              break;
            case 'storage/unknown':
              break;
        }
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL)
          setImageFile(tempFile)
      });
      }
      );
      
    }
    
    
    function handleDelete(){
      console.log("it did not delete anything")
      const desertRef =  sRef(storage, `/images/adoptable/${imageFile.name+imageFile.lastModified+imageFile.size}`);
      // Delete the file
            deleteObject(desertRef).then(() => {
        // File deleted successfully
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });

      setImageFile();
      setImageUrl();
    }
    
    function addDog(event){
        
        event.preventDefault()
        const dogRef = ref(database, 'adoptableDogs')
        const newDogRef = push(dogRef)
        set(newDogRef, {
          name: name,
          breed: breed,
          age: age,
          gender: gender,
          description: description,
          img: imageUrl
        })
        setName("")
        setAge("")
        setBreed("")
        setGender("")
        setDescription("")
        
  
    }
    
  

    return (
      <>
      <AdminNav/>
        <div className="container">
          <h2>Dog Form</h2>
          <Form onSubmit={addDog} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Dog Name</Form.Label>
              <Form.Control name="name" onChange={handleChange}  value={name} type="text" placeholder="Dax" required/>
            </Form.Group>
    
            <Form.Group className="mb-3">
              <Form.Label>Dog Description</Form.Label>
              <Form.Control name = "description" onChange = {handleChange} value = {description} type = "text" placeholder="He loves licking!" required/>
            </Form.Group>
    
            <Form.Group className="mb-3">
              <Form.Label>Dog Picture</Form.Label>
              <Form.Control name = "picture" onChange = {handleChangeImg} type = "file" placeholder="image" accept="image/*"/>
              <br/>
              {imageFile&&<div><h6>{imageFile.name}</h6></div>}
              {imageUrl&&<img src={imageUrl}/>}
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
            <select className="form-select" aria-label="Default select example" name = "breed" onChange = {handleChange}>
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
        
    </>
  );
    
}

export default DogForm