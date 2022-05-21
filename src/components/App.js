import React from 'react';
import Admin from './Admin'
import AdoptableDogs from './AdoptableDogs'
import AddContact from './AddContact'
import DogForm from './DogForm'
import Home from './Home'
import Contact from './Contact'
import Donate from './Donate'
import PetCare from './PetCare'
import AdoptableDogsHome from './AdoptableDogsHome';
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
