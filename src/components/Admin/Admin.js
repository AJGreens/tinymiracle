import React, { useState, useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import AdminNav from "./AdminNav";
import { Link } from "react-router-dom";
import { database } from "../Firebase";
import { ref, get, update, set } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faPerson,
  faFile,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

function Admin() {
  const currYear = new Date().getFullYear();
  const [allFosters, setAllFosters] = useState([]);

  useEffect(() => {
    const lastAccessRef = ref(database, "lastAccess");
    get(lastAccessRef).then((snapshot) => {
      const data = snapshot.val();
      if (data !== currYear || data === null) {
        allFosters.forEach(([key, value]) => {
          if (value["currFostering"]) {
            const newAllFosteredForCurrFoster = ref(
              database,
              "contacts/active/" + key + "/allFoster/" + currYear
            );
            update(newAllFosteredForCurrFoster, value["currFostering"]);
          }
        });
        set(lastAccessRef, currYear);
      }
    });
  }, [allFosters, currYear]);

  useEffect(() => {
    const allFostersRef = ref(database, "contacts/active");
    get(allFostersRef).then((snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setAllFosters(data);
      }
    });
  }, []);

  return (
    <>
      <AdminNav />
      <Container className="text-center">
        <Row className="adminRow">
          <Col className="adminSection">
            <h2>
              Animals <FontAwesomeIcon icon={faDog} />
            </h2>
            <div className="adminBtns">
              <Link to="/manageAnimals">
                <Button size="lg">Manage Animals</Button>
              </Link>
            </div>
            <div className="adminBtns">
              <Link to="/addAnimal">
                <Button size="lg">Add Animal</Button>
              </Link>
            </div>
            <div className="adminBtns">
              <Link to="/addRescueStories">
                <Button size="lg">Rescue Stories</Button>
              </Link>
            </div>
          </Col>
          <Col className="adminSection">
            <h2>
              Contacts <FontAwesomeIcon icon={faPerson} />
            </h2>
            <div className="adminBtns">
              <Link to="/manageContacts">
                <Button size="lg">Manage Contacts</Button>
              </Link>
            </div>
            <div className="adminBtns">
              <Link to="/addContact">
                <Button size="lg">Add Contact</Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="adminRow">
          <Col className="adminSection">
            <h2>
              Applications <FontAwesomeIcon icon={faFile} />
            </h2>
            <div className="adminBtns">
              <Link to="/viewApplications">
                <Button size="lg">Adoption Applications</Button>
              </Link>
            </div>
            <div className="adminBtns">
              <Link to="/viewFosterApps">
                <Button size="lg">Foster Applications</Button>
              </Link>
            </div>
          </Col>
          <Col className="adminSection">
            <h2>
              Other <FontAwesomeIcon icon={faFolder} />
            </h2>
            <div className="adminBtns">
              <Link to="/changePassword">
                <Button size="lg">Change Password</Button>
              </Link>
            </div>
            <div className="adminBtns">
              <Link to="/dogWarden">
                <Button size="lg">Dog Warden Report</Button>
              </Link>
            </div>
            <div className="adminBtns">
              <Link to="/downloadDocs">
                <Button size="lg">Download Docs</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Admin;
