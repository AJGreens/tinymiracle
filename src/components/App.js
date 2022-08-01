import React from "react";
import Admin from "./Admin/Admin";
import ManageAnimals from "./Admin/ManageAnimals";
import AddContact from "./Admin/AddContact";
import AddAnimal from "./Admin/AddAnimal";
import Home from "./User/Home";
import Donate from "./User/Donate";
import PetCare from "./User/PetCare";
import Login from "./Admin/Login";
import DogWarden from "./Admin/DogWarden";
import ManageContacts from "./Admin/ManageContacts";
import UpdateContact from "./Admin/UpdateContact";
import AdoptableDogsHome from "./User/AdoptableDogsHome";
import DownloadDocs from "./Admin/DownloadDocs";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import EditAnimal from "./Admin/EditAnimal";
import AdoptionProcess from "./User/AdoptionProcess";
import AdoptionForm from "./User/AdoptionForm";
import ThankYou from "./User/ThankYou";
import ViewApplications from "./Admin/ViewApplications";
import SpecificApplication from "./Admin/SpecificApplication";
import AuthProvider from "./Admin/AuthContext";
import PrivateRoute from "./Admin/PrivateRoute";
import ChangePassword from "./Admin/ChangePassword";
import FosterApplication from "./User/FosterApplication";
import ViewFosterApps from "./Admin/ViewFosterApps";
import SpecificFosterApp from "./Admin/SpecificFosterApp";
import RescueStories from "./User/RescueStories";
import AddRescueStories from "./Admin/AddRescueStories";
import ScrollToTop from "./User/ScrollToTop";
import About from "./User/About";
import FosterHome from "./User/FosterHome";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/petcare" element={<PetCare />} />
            <Route
              exact
              path="/fosterApplication"
              element={<FosterApplication />}
            />
            <Route exact path="/fosterHome" element={<FosterHome />} />
            <Route exact path="/donate" element={<Donate />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/adoptionProcess/:token"
              element={<AdoptionProcess />}
            />
            <Route path="/adoptionForm/:token" element={<AdoptionForm />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/adoptabledogshome" element={<AdoptableDogsHome />} />
            <Route path="/rescueStories" element={<RescueStories />} />
            <Route path="/about" element={<About />} />

            <Route exact path="/admin" element={<PrivateRoute />}>
              <Route exact path="/admin" element={<Admin />} />
            </Route>
            <Route exact path="/addAnimal" element={<PrivateRoute />}>
              <Route path="/addAnimal" element={<AddAnimal />} />
            </Route>
            <Route
              exact
              path="/editAnimal/:prevStatus/:token"
              element={<PrivateRoute />}
            >
              <Route
                path="/editAnimal/:prevStatus/:token"
                element={<EditAnimal />}
              />
            </Route>
            <Route exact path="/manageAnimals" element={<PrivateRoute />}>
              <Route path="/manageAnimals" element={<ManageAnimals />} />
            </Route>
            <Route exact path="/viewFosterApps" element={<PrivateRoute />}>
              <Route path="/viewFosterApps" element={<ViewFosterApps />} />
            </Route>
            <Route exact path="/manageContacts" element={<PrivateRoute />}>
              <Route path="/manageContacts" element={<ManageContacts />} />
            </Route>
            <Route exact path="/addContact" element={<PrivateRoute />}>
              <Route path="/addContact" element={<AddContact />} />
            </Route>
            <Route exact path="/addRescueStories" element={<PrivateRoute />}>
              <Route path="/addRescueStories" element={<AddRescueStories />} />
            </Route>
            <Route exact path="/downloadDocs" element={<PrivateRoute />}>
              <Route path="/downloadDocs" element={<DownloadDocs />} />
            </Route>
            <Route exact path="/dogWarden" element={<PrivateRoute />}>
              <Route path="/dogWarden" element={<DogWarden />} />
            </Route>
            <Route
              exact
              path="/updateContact/:sub/:token"
              element={<PrivateRoute />}
            >
              <Route
                path="/updateContact/:sub/:token"
                element={<UpdateContact />}
              />
            </Route>
            <Route exact path="/viewApplications" element={<PrivateRoute />}>
              <Route path="/viewApplications" element={<ViewApplications />} />
            </Route>
            <Route exact path="/changePassword" element={<PrivateRoute />}>
              <Route path="/changePassword" element={<ChangePassword />} />
            </Route>
            <Route
              exact
              path="/viewApplications/:token"
              element={<PrivateRoute />}
            >
              <Route
                path="/viewApplications/:token"
                element={<SpecificApplication />}
              />
            </Route>
            <Route
              exact
              path="/viewFosterApps/:token"
              element={<PrivateRoute />}
            >
              <Route
                path="/viewFosterApps/:token"
                element={<SpecificFosterApp />}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
