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
import AdoptionProcess from './User/AdoptionProcess';
import AdoptionForm from './User/AdoptionForm';
import ThankYou from './User/ThankYou';
import ViewApplications from './Admin/ViewApplications';
import SpecificApplication from './Admin/SpecificApplication';
import AuthProvider from "./Admin/AuthContext"
import PrivateRoute from './Admin/PrivateRoute'



function App() {
  
  return (
    <div>
        <Router>
        <AuthProvider>
            <Routes>
                
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/petcare" element={<PetCare/>}/>
                <Route exact path="/donate" element={<Donate/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/adoptionProcess/:token" element={<AdoptionProcess/>}/>
                <Route exact path="/adoptionForm/:token" element={<AdoptionForm/>}/>
                <Route exact path="/thankyou" element={<ThankYou/>}/>
                <Route exact path="/adoptabledogshome" element={<AdoptableDogsHome/>}/>


                <Route exact path="/admin" element={<PrivateRoute/>}>
                  <Route exact path="/admin" element={<Admin/>}/>
                </Route>
                
                <Route exact path="/addAnimal" element={<PrivateRoute/>}>
                  <Route path="/addAnimal" element={<AddAnimal/>}/>
                </Route>
                <Route exact path="/editAnimal/:prevStatus/:token" element={<PrivateRoute/>}>
                  <Route path="/editAnimal/:prevStatus/:token" element={<EditAnimal/>}/>
                </Route>
                <Route exact path="/manageAnimals" element={<PrivateRoute/>}>
                  <Route path="/manageAnimals" element={<ManageAnimals/>}/>
                </Route>
                <Route exact path="/manageContacts" element={<PrivateRoute/>}>
                  <Route path="/manageContacts" element={<ManageContacts/>}/>
                </Route>
                <Route exact path="/addContact" element={<PrivateRoute/>}>
                  <Route path="/addContact" element={<AddContact/>}/>
                </Route>
                <Route exact path="/downloadDocs" element={<PrivateRoute/>}>
                  <Route path="/downloadDocs" element={<DownloadDocs/>}/>
                </Route>
                <Route exact path="/dogWarden" element={<PrivateRoute/>}>
                  <Route path="/dogWarden" element={<DogWarden/>}/>
                </Route>
                <Route exact path="/updateContact/:sub/:token" element={<PrivateRoute/>}>
                  <Route path="/updateContact/:sub/:token" element={<UpdateContact/>}/>
                </Route>
                <Route exact path="/viewApplications" element={<PrivateRoute/>}>
                  <Route path="/viewApplications" element={<ViewApplications/>}/>
                </Route>
                <Route exact path="/viewApplications/:token" element={<PrivateRoute/>}>
                  <Route path="/viewApplications/:token" element={<SpecificApplication/>}/>
                </Route>


               

            </Routes>
          </AuthProvider>
        </Router>
    </div>  
  );
}



export default App;
