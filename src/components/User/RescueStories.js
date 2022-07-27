import React, { useState, useEffect } from "react";
import { database } from "../Firebase";
import { ref, onValue } from "firebase/database";
import UserNav from "./UserNav";
import { Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function RescueStories() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const dogRef = ref(database, "rescueStories");
    onValue(dogRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        let allDogs = Object.entries(data).map(([key, value]) => {
          return {
            id: key,
            name: value["name"],
            description: value["description"],
            img: value["img"],
          };
        });
        setDogs(allDogs);
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
          <h1>Rescue Stories</h1>
          {dogs.map((dog) => (
            <div className="container mt-4 dogContainer" key={dog.id}>
              <Row>
                <Col
                  sm={12}
                  md={6}
                  className="dogImgContainer d-flex justify-content-center align-items-center"
                >
                  <div>
                    {/* <h2>{dog.name}</h2>
                      <h4>
                        {dog.age} {dog.gender} {dog.breed}
                      </h4> */}
                    <img
                      src={dog.img}
                      alt={dog.name}
                      className="adoptableImg"
                    />
                  </div>
                </Col>
                <Col
                  sm={12}
                  md={6}
                  className="dogTextContainer d-flex justify-content-center align-items-center"
                >
                  <div>
                    <h2>{dog.name}</h2>

                    <p className="mt-4" style={{ textAlign: "left" }}>
                      {dog.description}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
