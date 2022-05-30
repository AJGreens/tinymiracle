import React from 'react';
import Admin from './Admin/Admin'
import ManageAnimals from './Admin/ManageAnimals'
import AddContact from './Admin/AddContact'
import AddAnimal from './Admin/AddAnimal'
import Home from './User/Home'
import Contact from './User/Contact'
import Donate from './User/Donate'
import PetCare from './User/PetCare'
import ManageContacts from './Admin/ManageContacts';
import UpdateContact from './Admin/UpdateContact';
import AdoptableDogsHome from './User/AdoptableDogsHome';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'

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
                <Route path="/addAnimal" element={<AddAnimal/>}/>
                <Route path="/adoptabledogshome" element={<AdoptableDogsHome/>}/>
                <Route path="/manageAnimals" element={<ManageAnimals/>}/>
                <Route path="/manageContacts" element={<ManageContacts/>}/>
                <Route path="/addContact" element={<AddContact/>}/>
                <Route path="/updateContact/:token" element={<UpdateContact/>}/>
            </Routes>
        </Router>
    </div>  
  );
}



export default App;
