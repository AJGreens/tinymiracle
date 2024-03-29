import React, { useState, useEffect } from "react";
import { database } from "../Firebase";
import { ref, onValue } from "firebase/database";
import UserNav from "./UserNav";
import { Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function AdoptableDogsHome() {
  const [dogs, setDogs] = useState([]);

  const navigate = useNavigate();

  function goToAdoptionProcess(dogToken) {
    navigate("/adoptionProcess/" + dogToken);
  }

  useEffect(() => {
    const dogRef = ref(database, "animals/adoptable");
    onValue(dogRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        let allDogs = Object.entries(data).map(([key, value]) => {
          return {
            id: key,
            name: value["name"],
            description: value["description"],
            age: value["ageGroup"],
            breed: value["primBreed"],
            gender: value["gender"],
            img: value["img"],
          };
        });
        setDogs(allDogs.reverse());
      } else {
        setDogs([]);
      }
    });
  }, []);

  return (
    <>
      <div
        className="container-fluid text-center userHtml themeBlue"
        id="noPadding"
      >
        <UserNav />
        <div id="extra3Padding">
          <h1>Adoptable</h1>
          <p className="squishTxt">
            To meet our adoptable animals, please submit an application and we
            will have a representative get back to you ASAP. Most of our rescue
            dogs are going/are in foster care and not at the farm.
          </p>
          <Button id="coolBtn" onClick={() => goToAdoptionProcess("general")}>
            General Apply <FontAwesomeIcon icon={faDog} />
          </Button>
          {dogs.map((dog) => (
            <div className="container mt-4 dogContainer" key={dog.id}>
              <Row>
                <Col
                  md={12}
                  lg={6}
                  className="dogImgContainer d-flex justify-content-center align-items-center"
                >
                  <div>
                    <img
                      src={dog.img}
                      alt={dog.name}
                      className="adoptableImg"
                    />
                  </div>
                </Col>
                <Col
                  md={12}
                  lg={6}
                  className="dogTextContainer d-flex justify-content-center align-items-center"
                >
                  <div>
                    <h2>{dog.name}</h2>
                    <h4>
                      {dog.age} {dog.gender} {dog.breed}
                    </h4>
                    <p className="mt-4" style={{ textAlign: "left" }}>
                      {dog.description}
                    </p>
                    <Button
                      variant="primary"
                      id="coolBtn"
                      onClick={() => goToAdoptionProcess(dog.id)}
                    >
                      Apply <FontAwesomeIcon icon={faDog} />
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
        <div className="pushDown"></div>
      </div>
      <Footer />
    </>
  );
}

export default AdoptableDogsHome;
