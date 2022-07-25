import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./DogImages/bestestLogo.png";
import { useAuth } from "../Admin/AuthContext";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";

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
      <div className="logoDiv">
        <img src={logo} alt="Tiny Miracles" id="logoPic" />
      </div>
      <div className="justBlueBox">
        <Row className="userNavRow">
          <Navbar
            collapseOnSelect
            expand="md"
            variant="dark"
            className="stickyNav userNav"
            style={{ paddingBottom: "0px" }}
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Col sm={6} className="userNavColDiv left">
                <Nav className="justify-content-end ms-auto userNavClass left">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link " +
                      (isActive ? "homeNavActiveLink" : "homeNavLink")
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link " +
                      (isActive ? "homeNavActiveLink" : "homeNavLink")
                    }
                    to="/adoptabledogshome"
                  >
                    Adoptable Dogs
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link " +
                      (isActive ? "homeNavActiveLink" : "homeNavLink")
                    }
                    to="/fosterApplication"
                  >
                    Foster Application
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link " +
                      (isActive ? "homeNavActiveLink" : "homeNavLink")
                    }
                    to="/petcare"
                  >
                    Pet Care
                  </NavLink>
                </Nav>
              </Col>

              <Col className="userNavColDiv right" sm={6}>
                <Nav className="userNavClass right">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link " +
                      (isActive ? "homeNavActiveLink" : "homeNavLink")
                    }
                    to="/rescueStories"
                  >
                    Rescue Stories
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link " +
                      (isActive ? "homeNavActiveLink" : "homeNavLink")
                    }
                    to="/donate"
                  >
                    Donate
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      "nav-link " +
                      (isActive ? "homeNavActiveLink" : "homeNavLink")
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                  {/* {user ? (
                    <NavLink className="nav-link homeNavLink" to="/admin">
                      Admin
                    </NavLink>
                  ) : (
                    <NavLink className="nav-link homeNavLink" to="/login">
                      Login
                    </NavLink>
                  )} */}
                  {user && (
                    <Nav.Link className="homeNavLink" onClick={handleSignOut}>
                      Logout
                    </Nav.Link>
                  )}
                </Nav>
              </Col>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </div>
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
