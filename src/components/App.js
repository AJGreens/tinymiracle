import React from 'react';
import Admin from './Admin/Admin'
import ManageAnimals from './Admin/ManageAnimals'
import AddContact from './Admin/AddContact'
import AddAnimal from './Admin/AddAnimal'
import Home from './User/Home'
import Contact from './User/Contact'
import Donate from './User/Donate'
import PetCare from './User/PetCare'
import Login from './Admin/Login';
import DogWarden from './Admin/DogWarden';
import ManageContacts from './Admin/ManageContacts';
import UpdateContact from './Admin/UpdateContact';
import AdoptableDogsHome from './User/AdoptableDogsHome';
import DownloadDocs from './Admin/DownloadDocs';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import EditAnimal from './Admin/EditAnimal';



function App() {
  
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/petcare" element={<PetCare/>}/>
                <Route exact path="/donate" element={<Donate/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/admin" element={<Admin/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/addAnimal" element={<AddAnimal/>}/>
                <Route path="/editAnimal/:token" element={<EditAnimal/>}/>
                <Route path="/adoptabledogshome" element={<AdoptableDogsHome/>}/>
                <Route path="/manageAnimals" element={<ManageAnimals/>}/>
                <Route path="/manageContacts" element={<ManageContacts/>}/>
                <Route path="/addContact" element={<AddContact/>}/>
                <Route path="/downloadDocs" element={<DownloadDocs/>}/>
                <Route path="/dogWarden" element={<DogWarden/>}/>
                <Route path="/updateContact/:sub/:token" element={<UpdateContact/>}/>
            </Routes>
        </Router>
    </div>  
  );
}



export default App;
