import React, { useState, useEffect } from 'react';
import { database, storage } from '../Firebase'
import { ref, set, onValue, remove, update} from "firebase/database";
import { ref as sRef, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { Form, Button, Col, Row,Alert} from 'react-bootstrap'
import AdminNav from "./AdminNav"
import { useParams } from "react-router";
// import {Circles} from 'react-loader-spinner';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilePdf, faXmark} from '@fortawesome/free-solid-svg-icons'



function EditAnimal() {

  
  const {token} = useParams();
  const {prevStatus} = useParams();  //is either 'other' or 'adoptable'
  
  const navigate = useNavigate();

  const currYear= new Date().getFullYear()


  const [id, setId] = useState()
  const [name, setName] = useState();
  const [aka, setAka] = useState()
  const [primBreed, setPrimBreed] = useState();
  const [secBreed, setSecBreed] = useState();
  const [gender, setGender] = useState();
  const [birthDate, setBirthDate] = useState()
  const [ageGroup, setAgeGroup] = useState();
  const [allFosters, setAllFosters] = useState([])
  const [currFosterName, setCurrFosterName] = useState()
  const [currFosterToken, setCurrFosterToken] = useState()
  const [prevFosterToken, setPrevFosterToken] = useState()
  const [orgStatus, setOrgStatus] = useState()
  const [status, setStatus] = useState()
  const [shelter, setShelter] = useState();
  const [dateDue, setDateDue] = useState();
  const [description, setDescription] = useState();
  const [dateAdded, setDateAdded] = useState()
  const [dateAdopted, setDateAdopted] = useState();
  const [microChipNum, setMicroChipNum] = useState("");

  const [allFiles,setAllFiles]=useState([])
  const [fileCountError,setFileCountError]=useState('')
  const [currImgFile, setCurrImgFile] = useState();
  const [imageUrl,setImageUrl]= useState()





  useEffect(()=>{
    const tokenRef = ref(database, "animals/"+prevStatus+"/"+token+"/pdfs");
    onValue(tokenRef, snapshot=>{
      const data=snapshot.val()
      let tempArr= Object.entries(data).map(([key,val])=>{
        return {url: val["url"], name: val["name"]}
      })
      setAllFiles(tempArr)
    })

  },[prevStatus,token])


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
        setPrevFosterToken(data["fosterToken"])
        setCurrFosterName(data["fosterName"])
        setCurrFosterToken(data["fosterToken"])
        setStatus(data["status"])
        setOrgStatus(data["status"])
        setShelter(data["shelter"]);
        setDateDue(data["dateDue"]);
        setDescription(data["description"]);
        setImageUrl(data["img"])
        setDateAdded(data["dateAdded"])
        setDateAdopted(data["dateAdopted"])
        setMicroChipNum(data["microChipNum"])

      }
    });

    const fostersRef= ref(database, 'contacts/active')
    onValue(fostersRef, (snapshot)=>{
     
      const data=snapshot.val()
      let allTempFosters= Object.entries(data).map(([key,value])=>{
        return {token: key, name: value["name"]}
      })
      setAllFosters(allTempFosters)
    })

  },[prevStatus,token])



  useEffect(()=>{
    if (status!=="adopted"){
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
        const condVal= event.target.value===""? ["",""]:event.target.value.split(",")
        setCurrFosterToken(condVal[0])
        setCurrFosterName(condVal[1])
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



  async function updateAnimal(event) {

    event.preventDefault()
    

    //CASE 1: Animal was previously adoptable and is now not adoptable
    if (prevStatus ==="adoptable"  && status !== "Adoptable"){
      const deleteable = ref(database, 'animals/adoptable/'+token)
      remove(deleteable)
    }
    //CASE 2: Animal was previously not adoptable and is now adoptable
    else if (prevStatus ==="other"  && status === "Adoptable"){
      const deleteable = ref(database, 'animals/other/'+token)
      remove(deleteable)
    }

    let animalRefStr= 'animals/other/' + token;
    let animalRef = ref(database, 'animals/other/' + token)
    if (status ==="Adoptable"){
      animalRef = ref(database, 'animals/adoptable/' + token)
      animalRefStr='animals/adoptable/' + token
    }



    // loading for image process 2 needs to be set

    update(animalRef,{
      id:id,
      name: name,
      aka:aka,
      primBreed: primBreed,
      secBreed: secBreed,
      gender: gender,
      birthDate: birthDate,
      ageGroup: ageGroup,
      fosterToken: currFosterToken ,
      fosterName:currFosterName,
      status: status,
      shelter:shelter,
      dateDue:dateDue,
      dateAdded: dateAdded,
      description: description,
      dateAdopted: dateAdopted,
      microChipNum: microChipNum
  })


      //scenarios for foster
      //foster stays same
        // other-->adopted
        // adopted-->other
      //foster changes
        // other
        // adopted
    if(currFosterToken!==prevFosterToken){
      console.log("Changed Fosters")
      //currFoster-1 from previous foster
      const currAnimalFosterRef= ref(database, "contacts/active/"+prevFosterToken+"/currFostering/"+token)
      remove(currAnimalFosterRef)
      if(currFosterName!==""){
        const currFosterRef= ref(database, "contacts/active/"+currFosterToken+"/currFostering/"+token)
        const allFosterRef= ref(database, "contacts/active/"+currFosterToken+"/allFoster/"+currYear+"/"+token)
        set(allFosterRef,{name: name})
        if(status!=="Adopted"){
          set(currFosterRef,{name: name})
        }
      }
    }
    else{
      console.log("Same Fosters")
      if(currFosterName!==""){
        //other-->adopted
        if(orgStatus!=="Adopted"&&status==="Adopted"){
          const currAnimalFosterRef= ref(database, "contacts/active/"+currFosterToken+"/currFostering/"+token)
          remove(currAnimalFosterRef)
        }
        //adopted-->other
        else if(orgStatus==="Adopted"&&status!=="Adopted"){
          //increase currFostering from currFoster
          const currAnimalFosterRef= ref(database, "contacts/active/"+currFosterToken+"/currFostering/"+token)
          set(currAnimalFosterRef,{name: name})
        }
        
      }
    }



    //Image in storage
    if (currImgFile !== undefined){
      const uploadRef = sRef(storage, `${token}/img`)
      const uploadTask = uploadBytesResumable(uploadRef, currImgFile)

      uploadTask.on('state_changed',
        (snapshot) => {},
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              console.log('storage/unauthorized')
              break;
            case 'storage/canceled':
              console.log('storage/canceled')
              break;
            case 'storage/unknown':
              console.log('storage/unknown')
              break;
            default:
              console.log("unseen error")
          }
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            update(animalRef,{
              img: downloadURL
          })
          });
        }
      )
    }

    //Files in storage

    let onlyFiles= allFiles.filter(file=> file.type).map(file=>{
      return file
    })


    onlyFiles.forEach(item=>{
      const uploadRef = sRef(storage, `${token}/files/${item.name}`)
      const uploadTask = uploadBytesResumable(uploadRef, item)
      uploadTask.on('state_changed',
        (snapshot) => {},
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              console.log('storage/unauthorized')
              break;
            case 'storage/canceled':
              console.log('storage/canceled')
              break;
            case 'storage/unknown':
              console.log('storage/unknown')
              break;
            default:
              console.log("unseen error")
          }
        },
        () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                update(ref(database, animalRefStr+"/pdfs/"+(item.name.split(".")[0])),{url:downloadURL, name:item.name})
          });
        }
      )
      
    })
 
    goToManageAnimals()

  }


  function handleChangeFiles(e){
    console.log(e.target.files.length)
    let sameFileName= false;

    for(const newFile of e.target.files){
      for(const oldFile of allFiles){
        console.log(newFile.name, oldFile.name)
        if(newFile.name.split(".")[0]===oldFile.name.split(".")[0]){
          sameFileName=true
          break
        }
      }

    }

    if(allFiles.length+e.target.files.length>5){
      setFileCountError('Can not add more than five files')
    }
    else if(sameFileName){
      setFileCountError('Can not have same file names')
    }
    else{
      setFileCountError('')
      setAllFiles([...allFiles,...e.target.files])
    }
  }

  function handleChangeImg(e){
    setCurrImgFile(e.target.files[0])
    setImageUrl(URL.createObjectURL(e.target.files[0]))
  }

  function handleDeleteFile(j){
    if(allFiles[j].url){
      if(window.confirm('Are you sure you want to delete this item?')){
      deleteObject(sRef(storage,allFiles[j].url))
      const deleteFromRTDatabase= ref(database,"animals/"+prevStatus+"/"+token+"/pdfs/"+allFiles[j].name.split(".")[0])
      remove(deleteFromRTDatabase)
      }
    }
    let temp=[]
    for(let i=0; i<allFiles.length;i++){
      if(i!==j){
        temp.push(allFiles[i])
        
      }
    }
    setAllFiles(temp)
  }



  return (
    <>
      <AdminNav/>
        {id&&
        <div className="container">
          <h2>Edit Animal</h2>
          <Form onSubmit={updateAnimal}>
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
              <Form.Label>Microchip Number</Form.Label>
              <Form.Control onChange={(e)=>{setMicroChipNum(e.target.value)}}  value={microChipNum} type="text"/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Primary Breed</Form.Label>
              <select className="form-select" aria-label="Default select example" name = "primBreed" value = {primBreed} onChange = {handleChange}>
                <option value=""> </option>
                <option value="American Bulldog">American Bulldog </option>
                <option value="Australian Cattle Dog">Australian Cattle Dog </option>
                <option value="Australian Shepherd">Australian Shepherd </option>
                <option value="Basset Hound">Basset Hound </option>
                <option value="Beagle">Beagle </option>
                <option value="Bernese Mountain Dog">Bernese Mountain Dog </option>
                <option value="Bichon">Bichon </option>
                <option value="Bloodhound">Bloodhound </option>
                <option value="Blue Heeler">Blue Heeler </option>
                <option value="Border Collie">Border Collie </option>
                <option value="Boston Terrier">Boston Terrier </option>
                <option value="Boxer">Boxer </option>
                <option value="Brussels Griffon">Brussels Griffon </option>
                <option value="Bull Terrier">Bull Terrier </option>
                <option value="Bullmastiff">Bullmastiff</option>
                <option value="Cairn Terrier">Cairn Terrier</option>
                <option value="Carolina">Carolina</option>
                <option value="Cat">Cat</option>
                <option value="Catahoula Dog">Catahoula Dog</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Cocker Spaniel">Cocker Spaniel</option>
                <option value="Collie">Collie</option>
                <option value="Coonhound">Coonhound</option>
                <option value="Corgi">Corgi</option>
                <option value="Cur">Cur</option>
                <option value="Dachshund">Dachshund</option>
                <option value="Dalmation">Dalmation</option>
                <option value="Doberman">Doberman</option>
                <option value="English Bulldog">English Bulldog</option>
                <option value="English Setter">English Setter</option>
                <option value="Feist">Feist</option>
                <option value="Fox Terrier">Fox Terrier</option>
                <option value="Foxhound">Foxhound</option>
                <option value="French Bulldog">French Bulldog</option>
                <option value="German Shepherd">German Shepherd</option>
                <option value="Great Dane">Great Dane</option>
                <option value="Great Pyrenesse">Great Pyrenesse</option>
                <option value="Greyhound">Greyhound</option>
                <option value="Havanese">Havanese</option>
                <option value="Heeler">Heeler</option>
                <option value="Hound">Hound</option>
                <option value="Husky">Husky</option>
                <option value="Irish Wolfhound">Irish Wolfhound</option>
                <option value="Jack Russell Terrier">Jack Russell Terrier</option>
                <option value="Labrador Retreiver">Labrador Retreiver</option>
                <option value="Malamute">Malamute</option>
                <option value="Maltese">Maltese</option>
                <option value="Mastiff">Mastiff</option>
                <option value="Miniature Pinscher">Miniature Pinscher</option>
                <option value="Mountain Cur">Mountain Cur</option>
                <option value="Olde English Bulldogge">Olde English Bulldogge</option>
                <option value="Papillon">Papillon</option>
                <option value="Pekingese">Pekingese</option>
                <option value="Pit Bull Terrier">Pit Bull Terrier</option>
                <option value="Pointer">Pointer</option>
                <option value="Pomeranian">Pomeranian</option>
                <option value="Poodle">Poodle</option>
                <option value="Pug">Pug</option>
                <option value="Rotweiler">Rotweiler</option>
                <option value="Schnauzer">Schnauzer</option>
                <option value="Scottish Terrier">Scottish Terrier</option>
                <option value="Sheltie">Sheltie</option>
                <option value="Shepherd">Shepherd</option>
                <option value="Shih Tzu">Shih Tzu</option>
                <option value="Spaniel">Spaniel</option>
                <option value="Staffordshire Terrier">Staffordshire Terrier</option>
                <option value="Terrier">Terrier</option>
                <option value="Unknown">Unknown</option>
                <option value="Weimaraner">Weimaraner</option>
                <option value="West Highland Terrier (Westie)">West Highland Terrier (Westie)</option>
                <option value="Whippet">Whippet</option>
                <option value="Wire Haired Terrier">Wire Haired Terrier</option>
                <option value="Yorkshire Terrier">Yorkshire Terrier</option>

              </select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Secondary Breed</Form.Label>
              <select className="form-select" aria-label="Default select example" name = "secBreed" value = {secBreed} onChange = {handleChange}>
                <option value=""></option>
                <option value="American Bulldog">American Bulldog</option>
                <option value="Australian Cattle Dog">Australian Cattle Dog</option>
                <option value="Australian Shepherd">Australian Shepherd</option>
                <option value="Basset Hound">Basset Hound</option>
                <option value="Beagle">Beagle</option>
                <option value="Bernese Mountain Dog">Bernese Mountain Dog</option>
                <option value="Bichon">Bichon</option>
                <option value="Bloodhound">Bloodhound</option>
                <option value="Blue Heeler">Blue Heeler</option>
                <option value="Border Collie">Border Collie</option>
                <option value="Boston Terrier">Boston Terrier</option>
                <option value="Boxer">Boxer</option>
                <option value="Brussels Griffon">Brussels Griffon</option>
                <option value="Bull Terrier">Bull Terrier</option>
                <option value="Bullmastiff">Bullmastiff</option>
                <option value="Cairn Terrier">Cairn Terrier</option>
                <option value="Carolina">Carolina</option>
                <option value="Cat">Cat</option>
                <option value="Catahoula Dog">Catahoula Dog</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Cocker Spaniel">Cocker Spaniel</option>
                <option value="Collie">Collie</option>
                <option value="Coonhound">Coonhound</option>
                <option value="Corgi">Corgi</option>
                <option value="Cur">Cur</option>
                <option value="Dachshund">Dachshund</option>
                <option value="Dalmation">Dalmation</option>
                <option value="Doberman">Doberman</option>
                <option value="English Bulldog">English Bulldog</option>
                <option value="English Setter">English Setter</option>
                <option value="Feist">Feist</option>
                <option value="Fox Terrier">Fox Terrier</option>
                <option value="Foxhound">Foxhound</option>
                <option value="French Bulldog">French Bulldog</option>
                <option value="German Shepherd">German Shepherd</option>
                <option value="Great Dane">Great Dane</option>
                <option value="Great Pyrenesse">Great Pyrenesse</option>
                <option value="Greyhound">Greyhound</option>
                <option value="Havanese">Havanese</option>
                <option value="Heeler">Heeler</option>
                <option value="Hound">Hound</option>
                <option value="Husky">Husky</option>
                <option value="Irish Wolfhound">Irish Wolfhound</option>
                <option value="Jack Russell Terrier">Jack Russell Terrier</option>
                <option value="Labrador Retreiver">Labrador Retreiver</option>
                <option value="Malamute">Malamute</option>
                <option value="Maltese">Maltese</option>
                <option value="Mastiff">Mastiff</option>
                <option value="Miniature Pinscher">Miniature Pinscher</option>
                <option value="Mountain Cur">Mountain Cur</option>
                <option value="Olde English Bulldogge">Olde English Bulldogge</option>
                <option value="Papillon">Papillon</option>
                <option value="Pekingese">Pekingese</option>
                <option value="Pit Bull Terrier">Pit Bull Terrier</option>
                <option value="Pointer">Pointer</option>
                <option value="Pomeranian">Pomeranian</option>
                <option value="Poodle">Poodle</option>
                <option value="Pug">Pug</option>
                <option value="Rotweiler">Rotweiler</option>
                <option value="Schnauzer">Schnauzer</option>
                <option value="Scottish Terrier">Scottish Terrier</option>
                <option value="Sheltie">Sheltie</option>
                <option value="Shepherd">Shepherd</option>
                <option value="Shih Tzu">Shih Tzu</option>
                <option value="Spaniel">Spaniel</option>
                <option value="Staffordshire Terrier">Staffordshire Terrier</option>
                <option value="Terrier">Terrier</option>
                <option value="Unknown">Unknown</option>
                <option value="Weimaraner">Weimaraner</option>
                <option value="West Highland Terrier (Westie)">West Highland Terrier (Westie)</option>
                <option value="Whippet">Whippet</option>
                <option value="Wire Haired Terrier">Wire Haired Terrier</option>
                <option value="Yorkshire Terrier">Yorkshire Terrier</option>
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
              <select className="form-select" value={[currFosterToken,currFosterName]} name = "foster" onChange = {handleChange} aria-label="Default select example" >
                <option value=""></option>
                {
                  allFosters.map(foster=>{
                    return <option key={foster.token} value={[foster.token, foster.name]}>{foster.name}</option>
                  })
                }
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
              <Form.Control name = "picture" onChange = {handleChangeImg} style = {{display: 'none'}} id = "uniqueImg" type = "file" placeholder="image" accept="image/*"/> 
              <Form.Label htmlFor = "uniqueImg" className = "btn btn-primary">Upload Picture</Form.Label>
              <br/>
              {imageUrl &&<img src={imageUrl} className="adoptableImg" alt="Cute Dog"/>}
            </Form.Group>


            <Form.Group>
              {fileCountError!==''&&<Alert variant='danger'>{fileCountError}</Alert>}
              <Form.Control name = "files" onChange = {handleChangeFiles} style = {{display: 'none'}} id = "uniqueFiles" type = "file" multiple={true} /> 
              <Form.Label htmlFor = "uniqueFiles" className = "btn btn-success">Upload Files</Form.Label>
              <br/>
              {allFiles.map((file,i)=>{
                return <div className="m-2" ><FontAwesomeIcon icon={faFilePdf}/> <a target="_blank"  rel="noreferrer" href={file.url? file.url: URL.createObjectURL(file)} className="link-primary">{file.name}</a> <FontAwesomeIcon onClick={()=>handleDeleteFile(i)} icon={faXmark}/> </div>
              })}
            </Form.Group>
            <br/>
            <Button type = "submit" variant="primary">Submit</Button>
          </Form>
        </div>
        }
      
        
    </>
  );

}

export default EditAnimal;