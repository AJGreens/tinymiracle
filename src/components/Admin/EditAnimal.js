import React, { useState, useEffect } from 'react';
import { database, storage } from '../Firebase'
import { ref, push, set, onValue, remove} from "firebase/database";
import { ref as sRef, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { Form, Button, Col, Row} from 'react-bootstrap'
import AdminNav from "./AdminNav"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router";
import {Circles} from 'react-loader-spinner';
import {useNavigate} from 'react-router-dom';


function EditAnimal() {

    const [loading, setLoading] = useState(false)

    const {token} = useParams();
    const {prevStatus} = useParams();  //is either 'other' or 'adoptable'

    const navigate = useNavigate();


  const [id, setId] = useState()
  const [name, setName] = useState();
  const [aka, setAka] = useState()
  const [primBreed, setPrimBreed] = useState();
  const [secBreed, setSecBreed] = useState();
  const [gender, setGender] = useState();
  const [birthDate, setBirthDate] = useState()
  const [ageGroup, setAgeGroup] = useState();
  const [foster, setFoster] = useState()
  const [status, setStatus] = useState()
  const [shelter, setShelter] = useState();
  const [dateDue, setDateDue] = useState();
  const [description, setDescription] = useState();
  const [imageFile, setImageFile] = useState();   //We never saved the image file name in firebase so we have to fix that first in order to fix this
  const [imgFileName, setImgFileName] = useState();
  const [imgFileLastModified, setImgFileLastModified] = useState();
  const [imgFileSize, setImgFileSize] = useState();
  const [imageUrl, setImageUrl] = useState()
  const [dateAdded, setDateAdded] = useState()
  const [dateAdopted, setDateAdopted] = useState();


  // const current = new Date();
  // const date = current.getMonth()+1+"/"+current.getDate()+"/"+current.getFullYear()


  useEffect(() => {
   const tokenRef = ref(database, "animals/"+prevStatus+"/"+token);
onValue(tokenRef, (snapshot) => {
  const data = snapshot.val();
  if(data){
setId(data["id"])
setName(data["name"]);
setAka(data["aka"])
setPrimBreed(data["primBreed"]);
setSecBreed(data["secBreed"]);
setGender(data["gender"]);
setBirthDate(data["birthDate"])
setAgeGroup(data["ageGroup"]);
setFoster(data["foster"])
setStatus(data["status"])
setShelter(data["shelter"]);
setDateDue(data["dateDue"]);
setDescription(data["description"]);
setImgFileName(data["imgFileName"]);
setImgFileLastModified(data["imgFileLastModified"]);
setImgFileSize(data["imgFileSize"]);
setImageUrl(data["img"])
setDateAdded(data["dateAdded"])
setDateAdopted(data["dateAdopted"])

  }

});


    //have a call to the database and get counter to set equal to id
    const animalRef = ref(database, 'animals/counter');
    onValue(animalRef, (snapshot) => {
      const data = snapshot.val();
      if(data){
        setId(data)
      }
    //   console.log(data)
    });
  }, [])



  useEffect(()=>{
    if (status!="adopted"){
      setDateAdopted("")
    }

},[status])



  function goToManageAnimals(){
    navigate('/manageAnimals')
  }

  function handleChange(event) {
    switch (event.target.name) {
      case "name":
        setName(event.target.value)
        break
      case "aka":
        setAka(event.target.value)
        break
      case "description":
        setDescription(event.target.value)
        break
      case "primBreed":
        setPrimBreed(event.target.value)
        break
      case "secBreed":
        setSecBreed(event.target.value)
        break
      case "gender":
        setGender(event.target.value)
        break
      case "birthDate":
        setBirthDate(event.target.value)
        break
      case "ageGroup":
        setAgeGroup(event.target.value)
        break
      case "foster":
        setFoster(event.target.value)
        break
      case "status":
        setStatus(event.target.value)
        break
      case "shelter":
        setShelter(event.target.value)
        break
      case "dateDue":
        setDateDue(event.target.value)
        break
        case "dateAdopted":
          setDateAdopted(event.target.value)
        break
      default:
        console.log("Case Error")
        break
    }
  }

  function handleChangeImg(e) {
    setLoading(true)

    if (imageUrl) {
      handleDelete()
    }
    //Do we need async?
    const tempFile = e.target.files[0];
    if (tempFile !== undefined){
    const uploadRef = sRef(storage, `/images/adoptable/${tempFile.name+tempFile.lastModified+tempFile.size}`)
    const uploadTask = uploadBytesResumable(uploadRef, tempFile)

    uploadTask.on('state_changed',
      (snapshot) => {},
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            setLoading(false)
            break;
          case 'storage/canceled':
            setLoading(false)
            break;
          case 'storage/unknown':
            setLoading(false)
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL)
          setImageFile(tempFile)
          setLoading(false)
        });
      }
    );
    }

    else {
        setLoading(false)

    }

  }


  function handleDelete() {
    console.log("it did not delete anything")


    if (imgFileName && imgFileLastModified && imgFileSize){
        const desertRef = sRef(storage, `/images/adoptable/${imgFileName+imgFileLastModified+imgFileSize}`);  //referencing previous image data for the first change
            // Delete the file
    deleteObject(desertRef).then(() => {
        // File deleted successfully
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
      setImgFileLastModified();
      setImgFileName();
      setImgFileSize();
      setImageFile();
      setImageUrl();
    }
    else {
       const desertRef = sRef(storage, `/images/adoptable/${imageFile.name+imageFile.lastModified+imageFile.size}`);
           // Delete the file
    deleteObject(desertRef).then(() => {
        // File deleted successfully
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
      setImageFile();
      setImageUrl();
    
    }



  }




  function updateAnimal(event) {

    event.preventDefault()

//CASE 1: Animal was previously adoptable and is now not adoptable
if (prevStatus ==="adoptable"  && status != "Adoptable"){
  const deleteable = ref(database, 'animals/adoptable/'+token)
  remove(deleteable)
}

//CASE 2: Animal was previously not adoptable and is now adoptable
else if (prevStatus ==="other"  && status === "Adoptable"){
  const deleteable = ref(database, 'animals/other/'+token)
  remove(deleteable)
}


//CASE 3: Animal was previously adoptable and still adoptable

//CASE 4: Animal was previously not adoptable and is still not adoptable
    

let animalRef = ref(database, 'animals/other/' + token)

if (status ==="Adoptable"){
  animalRef = ref(database, 'animals/adoptable/' + token)
}




    //BELOW IS THE ORIGNAL FUNCTIONALITY
  

    if (imageFile){
    set(animalRef,{
        id:id,
        name: name,
        aka:aka,
        primBreed: primBreed,
        secBreed: secBreed,
        gender: gender,
        birthDate: birthDate,
        ageGroup: ageGroup,
        foster:foster,
        status: status,
        shelter:shelter,
        dateDue:dateDue,
        dateAdded: dateAdded,
        description: description,
        img: imageUrl,
        imgFileName: imageFile.name,
        imgFileLastModified:imageFile.lastModified,
        imgFileSize: imageFile.size,
        dateAdopted: dateAdopted
    })
}

else{
    set(animalRef,{
        id:id,
        name: name,
        aka:aka,
        primBreed: primBreed,
        secBreed: secBreed,
        gender: gender,
        birthDate: birthDate,
        ageGroup: ageGroup,
        foster:foster,
        status: status,
        shelter:shelter,
        dateDue:dateDue,
        dateAdded: dateAdded,
        description: description,
        img: imageUrl,
        imgFileName: imgFileName,
        imgFileLastModified:imgFileLastModified,
        imgFileSize: imgFileSize,
        dateAdopted: dateAdopted
    })
}


goToManageAnimals()


  }



  return (
    <>
      <AdminNav/>
        <div className="container">
          <h2>Edit Animal</h2>
          {/* <h2>Prevanme: {prevName} prevPrimBreed: {prevPrimBreed} age: {prevAgeGroup}</h2> */}
          <Form onSubmit={updateAnimal} >
            <Form.Group as = {Row} className="mb-3">
              
              <Form.Label column sm="3">Id</Form.Label>
              
              <Col sm="5">
              <Form.Control name="id" value={id} type="number"/>
              </Col>
            </Form.Group>
            <Form.Group as = {Row} className="mb-3">
              <Form.Label column sm="3">Dog Name</Form.Label>
              <Col sm="5">
              <Form.Control name="name" onChange={handleChange}  value={name} type="text" required/>
              </Col>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Also Known As</Form.Label>
              <Form.Control name="aka" onChange={handleChange}  value={aka} type="text"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Primary Breed</Form.Label>
              <select className="form-select" aria-label="Default select example" name = "primBreed" value = {primBreed} onChange = {handleChange}>
<option value="">
</option><option value="American Bulldog">American Bulldog
</option><option value="Australian Cattle Dog">Australian Cattle Dog
</option><option value="Australian Shepherd">Australian Shepherd
</option><option value="Basset Hound">Basset Hound
</option><option value="Beagle">Beagle
</option><option value="Bernese Mountain Dog">Bernese Mountain Dog
</option><option value="Bichon">Bichon
</option><option value="Bloodhound">Bloodhound
</option><option value="Blue Heeler">Blue Heeler
</option><option value="Border Collie">Border Collie
</option><option value="Boston Terrier">Boston Terrier
</option><option value="Boxer">Boxer
</option><option value="Brussels Griffon">Brussels Griffon
</option><option value="Bull Terrier">Bull Terrier
</option><option value="Bullmastiff">Bullmastiff
</option><option value="Cairn Terrier">Cairn Terrier
</option><option value="Carolina">Carolina
</option><option value="Cat">Cat
</option><option value="Catahoula Dog">Catahoula Dog
</option><option value="Chihuahua">Chihuahua
</option><option value="Cocker Spaniel">Cocker Spaniel
</option><option value="Collie">Collie
</option><option value="Coonhound">Coonhound
</option><option value="Corgi">Corgi
</option><option value="Cur">Cur
</option><option value="Dachshund">Dachshund
</option><option value="Dalmation">Dalmation
</option><option value="Doberman">Doberman
</option><option value="English Bulldog">English Bulldog
</option><option value="English Setter">English Setter
</option><option value="Feist">Feist
</option><option value="Fox Terrier">Fox Terrier
</option><option value="Foxhound">Foxhound
</option><option value="French Bulldog">French Bulldog
</option><option value="German Shepherd">German Shepherd
</option><option value="Great Dane">Great Dane
</option><option value="Great Pyrenesse">Great Pyrenesse
</option><option value="Greyhound">Greyhound
</option><option value="Havanese">Havanese
</option><option value="Heeler">Heeler
</option><option value="Hound">Hound
</option><option value="Husky">Husky
</option><option value="Irish Wolfhound">Irish Wolfhound
</option><option value="Jack Russell Terrier">Jack Russell Terrier
</option><option value="Labrador Retreiver">Labrador Retreiver
</option><option value="Malamute">Malamute
</option><option value="Maltese">Maltese
</option><option value="Mastiff">Mastiff
</option><option value="Miniature Pinscher">Miniature Pinscher
</option><option value="Mountain Cur">Mountain Cur
</option><option value="Olde English Bulldogge">Olde English Bulldogge
</option><option value="Papillon">Papillon
</option><option value="Pekingese">Pekingese
</option><option value="Pit Bull Terrier">Pit Bull Terrier
</option><option value="Pointer">Pointer
</option><option value="Pomeranian">Pomeranian
</option><option value="Poodle">Poodle
</option><option value="Pug">Pug
</option><option value="Rotweiler">Rotweiler
</option><option value="Schnauzer">Schnauzer
</option><option value="Scottish Terrier">Scottish Terrier
</option><option value="Sheltie">Sheltie
</option><option value="Shepherd">Shepherd
</option><option value="Shih Tzu">Shih Tzu
</option><option value="Spaniel">Spaniel
</option><option value="Staffordshire Terrier">Staffordshire Terrier
</option><option value="Terrier">Terrier
</option><option value="Unknown">Unknown
</option><option value="Weimaraner">Weimaraner
</option><option value="West Highland Terrier (Westie)">West Highland Terrier (Westie)
</option><option value="Whippet">Whippet
</option><option value="Wire Haired Terrier">Wire Haired Terrier
</option><option value="Yorkshire Terrier">Yorkshire Terrier
</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Secondary Breed</Form.Label>
              <select className="form-select" aria-label="Default select example" name = "secBreed" value = {secBreed} onChange = {handleChange}>
<option value="">
</option><option value="American Bulldog">American Bulldog
</option><option value="Australian Cattle Dog">Australian Cattle Dog
</option><option value="Australian Shepherd">Australian Shepherd
</option><option value="Basset Hound">Basset Hound
</option><option value="Beagle">Beagle
</option><option value="Bernese Mountain Dog">Bernese Mountain Dog
</option><option value="Bichon">Bichon
</option><option value="Bloodhound">Bloodhound
</option><option value="Blue Heeler">Blue Heeler
</option><option value="Border Collie">Border Collie
</option><option value="Boston Terrier">Boston Terrier
</option><option value="Boxer">Boxer
</option><option value="Brussels Griffon">Brussels Griffon
</option><option value="Bull Terrier">Bull Terrier
</option><option value="Bullmastiff">Bullmastiff
</option><option value="Cairn Terrier">Cairn Terrier
</option><option value="Carolina">Carolina
</option><option value="Cat">Cat
</option><option value="Catahoula Dog">Catahoula Dog
</option><option value="Chihuahua">Chihuahua
</option><option value="Cocker Spaniel">Cocker Spaniel
</option><option value="Collie">Collie
</option><option value="Coonhound">Coonhound
</option><option value="Corgi">Corgi
</option><option value="Cur">Cur
</option><option value="Dachshund">Dachshund
</option><option value="Dalmation">Dalmation
</option><option value="Doberman">Doberman
</option><option value="English Bulldog">English Bulldog
</option><option value="English Setter">English Setter
</option><option value="Feist">Feist
</option><option value="Fox Terrier">Fox Terrier
</option><option value="Foxhound">Foxhound
</option><option value="French Bulldog">French Bulldog
</option><option value="German Shepherd">German Shepherd
</option><option value="Great Dane">Great Dane
</option><option value="Great Pyrenesse">Great Pyrenesse
</option><option value="Greyhound">Greyhound
</option><option value="Havanese">Havanese
</option><option value="Heeler">Heeler
</option><option value="Hound">Hound
</option><option value="Husky">Husky
</option><option value="Irish Wolfhound">Irish Wolfhound
</option><option value="Jack Russell Terrier">Jack Russell Terrier
</option><option value="Labrador Retreiver">Labrador Retreiver
</option><option value="Malamute">Malamute
</option><option value="Maltese">Maltese
</option><option value="Mastiff">Mastiff
</option><option value="Miniature Pinscher">Miniature Pinscher
</option><option value="Mountain Cur">Mountain Cur
</option><option value="Olde English Bulldogge">Olde English Bulldogge
</option><option value="Papillon">Papillon
</option><option value="Pekingese">Pekingese
</option><option value="Pit Bull Terrier">Pit Bull Terrier
</option><option value="Pointer">Pointer
</option><option value="Pomeranian">Pomeranian
</option><option value="Poodle">Poodle
</option><option value="Pug">Pug
</option><option value="Rotweiler">Rotweiler
</option><option value="Schnauzer">Schnauzer
</option><option value="Scottish Terrier">Scottish Terrier
</option><option value="Sheltie">Sheltie
</option><option value="Shepherd">Shepherd
</option><option value="Shih Tzu">Shih Tzu
</option><option value="Spaniel">Spaniel
</option><option value="Staffordshire Terrier">Staffordshire Terrier
</option><option value="Terrier">Terrier
</option><option value="Unknown">Unknown
</option><option value="Weimaraner">Weimaraner
</option><option value="West Highland Terrier (Westie)">West Highland Terrier (Westie)
</option><option value="Whippet">Whippet
</option><option value="Wire Haired Terrier">Wire Haired Terrier
</option><option value="Yorkshire Terrier">Yorkshire Terrier
</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <select className="form-select" aria-label="Default select example" value = {gender} name = "gender" onChange = {handleChange} >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3 dateField">
              <Form.Label>Approx Birth Date</Form.Label>
              <Form.Control type = "date" name="birthDate" onChange={handleChange} value={birthDate}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age Group</Form.Label>
              <select className="form-select" name = "ageGroup" value = {ageGroup} onChange = {handleChange} aria-label="Default select example" >
                <option value=""></option>
                <option value="Baby">Baby</option>
                <option value="Young">Young</option>
                <option value="Adult">Adult</option>
                <option value="Senior">Senior</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Foster</Form.Label>
              <select className="form-select" name = "foster" onChange = {handleChange} value = {foster} aria-label="Default select example" >
                <option value=""></option>
                <option value="Jordan">Jordan</option>
                <option value="Abdel">Abdel</option>
                <option value="Ahmed">Ahmed</option>
                <option value="Harris">Harris</option>
                <option value="Piyush">Piyush</option>
                <option value="Kareem">Kareem</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <select className="form-select" name = "status" onChange = {handleChange} value = {status} aria-label="Default select example" >
                <option value=""></option>
                <option value="Adoptable">Adoptable</option>
                <option value="Adopted">Adopted</option>
                <option value="Crosspost">Crosspost</option>
                <option value="Hold">Hold</option>
                <option value="Pending">Pending</option>
                <option value="Removed">Removed</option>
              </select>
            </Form.Group>
            {status==="Adopted" &&
               <Form.Group className="mb-3 dateField">
                    <Form.Label>Date Adopted</Form.Label>
                    <Form.Control type = "date" onChange = {handleChange} name = "dateAdopted" value = {dateAdopted}/>
                </Form.Group>
            }

            <Form.Group className="mb-3">
              <Form.Label>Shelter</Form.Label>
              <Form.Control name="shelter" onChange={handleChange}  value={shelter} type="text" />
            </Form.Group>
            
            <Form.Group className="mb-3 dateField">
              <Form.Label>Date Due</Form.Label>
               <Form.Control type = "date" onChange = {handleChange} name = "dateDue" value = {dateDue}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dog Description</Form.Label>
              <Form.Control as="textarea" rows={3} name = "description" onChange = {handleChange} value = {description} type = "text"/>
            </Form.Group>
    
            <Form.Group className="mb-3">

              <Form.Control name = "picture" onChange = {handleChangeImg} style = {{display: 'none'}} id = "unique" type = "file" placeholder="image" accept="image/*"/> 
              <Form.Label for = "unique" className = "btn btn-primary">Upload Picture</Form.Label>
 
              <br/>
              {loading && <Circles color="#00BFFF" height={80} width={80}/>}
              {imageFile&&<div><h6>{imageFile.name}</h6></div>}
              {imgFileName &&<div><h6>{imgFileName}</h6></div>}
              {imageUrl&&<img src={imageUrl}/>}
            </Form.Group>
    
            <Button type = "submit" disabled={loading} variant="primary">Submit</Button>
          </Form>
        </div>
        
    </>
  );

}

export default EditAnimal;