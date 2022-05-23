import React from 'react';
import Admin from './Admin/Admin'
import AdoptableDogs from './Admin/AdoptableDogs'
import AddContact from './Admin/AddContact'
import DogForm from './Admin/DogForm'
import Home from './User/Home'
import Contact from './User/Contact'
import Donate from './User/Donate'
import PetCare from './User/PetCare'
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
                <Route path="/dogform" element={<DogForm/>}/>
                <Route path="/adoptabledogshome" element={<AdoptableDogsHome/>}/>
                <Route path="/adoptabledogs" element={<AdoptableDogs/>}/>
                <Route path="/addcontact" element={<AddContact/>}/>
            </Routes>
        </Router>
    </div>  
  );
}



export default App;
