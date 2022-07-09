import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function AdminNav() {
  const { signingOut } = useAuth();
  let navigate = useNavigate();

  async function handleSignOut() {
    try {
      await signingOut();
      navigate("/");
    } catch {
      console.log("error signing out");
    }
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container className="justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavLink
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "adminNavActiveLink" : "adminNavLink")
                }
                to="/"
              >
                View Site
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "adminNavActiveLink" : "adminNavLink")
                }
                to="/admin"
              >
                Admin
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "adminNavActiveLink" : "adminNavLink")
                }
                to="/manageAnimals"
              >
                Manage Animals
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "adminNavActiveLink" : "adminNavLink")
                }
                to="/manageContacts"
              >
                Manage Contacts
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "adminNavActiveLink" : "adminNavLink")
                }
                to="/addContact"
              >
                Add Contact
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "adminNavActiveLink" : "adminNavLink")
                }
                to="/addAnimal"
              >
                Add Animal
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "adminNavActiveLink" : "adminNavLink")
                }
                to="/downloadDocs"
              >
                Download Docs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "adminNavActiveLink" : "adminNavLink")
                }
                to="/dogWarden"
              >
                Dog Warden
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "adminNavActiveLink" : "adminNavLink")
                }
                to="/viewApplications"
              >
                View Applications
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " +
                  (isActive ? "adminNavActiveLink" : "adminNavLink")
                }
                to="/changePassword"
              >
                Change Password
              </NavLink>
              <Nav.Link className="adminNavLink" onClick={handleSignOut}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNav;
