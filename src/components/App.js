import React from 'react';
import Admin from './Admin'
import AdoptableDogs from './AdoptableDogs'
import AddContact from './AddContact'
import DogForm from './DogForm'
import Home from './Home'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/admin" element={<Admin/>}/>
                <Route path="/dogform" element={<DogForm/>}/>
                <Route path="/adoptabledogs" element={<AdoptableDogs/>}/>
                <Route path="/addcontact" element={<AddContact/>}/>
            </Routes>
        </Router>
    </div>  
  );
}



export default App;
