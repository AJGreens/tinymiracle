import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "./DogImages/bestestLogo.png";
import { useAuth } from "../Admin/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function UserNav() {
  const { user, signingOut } = useAuth();

  async function handleSignOut() {
    try {
      await signingOut();
    } catch {
      console.log("error signing out");
    }
  }

  return (
    <>
      <div id="topRightContainer">
        <Link to="/login">
          <FontAwesomeIcon id="topRight" icon={faLock} />
        </Link>
      </div>
      <div className="container-fluid userNav text-center logoDiv">
        <Link to="/">
          <img src={logo} alt="Tiny Miracles" id="logoPic" />
        </Link>
      </div>
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className="stickyNav userNav"
      >
        <Container className="justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavLink
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
                }
                to="/adoptabledogshome"
              >
                Adoptable Dogs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
                }
                to="/fosterHome"
              >
                Fostering
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
                }
                to="/petcare"
              >
                Petcare
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
                }
                to="/rescueStories"
              >
                Rescue Stories
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
                }
                to="/donate"
              >
                Donate
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
                }
                to="/about"
              >
                About
              </NavLink>
              {user && (
                <NavLink className="nav-link homeNavLink" to="/admin">
                  Admin
                </NavLink>
              )}
              {user && (
                <Nav.Link className="homeNavLink" onClick={handleSignOut}>
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

  // return (
  //   <>
  //     <div className="container-fluid userNav text-center logoDiv">
  //       <img src={logo} alt="Tiny Miracles" id="logoPic" />
  //     </div>
  //     <Navbar
  //       collapseOnSelect
  //       expand="md"
  //       variant="dark"
  //       className="stickyNav userNav"
  //     >
  //       <Container className="justify-content-center">
  //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //         <Navbar.Collapse id="basic-navbar-nav">
  //           <Nav className="m-auto">
  //             <NavLink
  //               className={({ isActive }) =>
  //                 "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
  //               }
  //               to="/"
  //             >
  //               Home
  //             </NavLink>
  //             <NavLink
  //               className={({ isActive }) =>
  //                 "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
  //               }
  //               to="/adoptabledogshome"
  //             >
  //               Adoptable Dogs
  //             </NavLink>
  //             <NavLink
  //               className={({ isActive }) =>
  //                 "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
  //               }
  //               to="/fosterApplication"
  //             >
  //               Foster Application
  //             </NavLink>
  //             <NavLink
  //               className={({ isActive }) =>
  //                 "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
  //               }
  //               to="/petcare"
  //             >
  //               Pet Care
  //             </NavLink>
  //             <NavLink
  //               className={({ isActive }) =>
  //                 "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
  //               }
  //               to="/rescueStories"
  //             >
  //               Rescue Stories
  //             </NavLink>
  //             <NavLink
  //               className={({ isActive }) =>
  //                 "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
  //               }
  //               to="/donate"
  //             >
  //               Donate
  //             </NavLink>
  //             <NavLink
  //               className={({ isActive }) =>
  //                 "nav-link " + (isActive ? "homeNavActiveLink" : "homeNavLink")
  //               }
  //               to="/contact"
  //             >
  //               Contact
  //             </NavLink>
  //             {user ? (
  //               <NavLink className="nav-link homeNavLink" to="/admin">
  //                 Admin
  //               </NavLink>
  //             ) : (
  //               <NavLink className="nav-link homeNavLink" to="/login">
  //                 Login
  //               </NavLink>
  //             )}
  //             {user && (
  //               <Nav.Link className="homeNavLink" onClick={handleSignOut}>
  //                 Logout
  //               </Nav.Link>
  //             )}
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //   </>
  // );
}

export default UserNav;
