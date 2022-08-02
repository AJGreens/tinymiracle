import React, { useState, useEffect } from "react";
import { database } from "../Firebase";
import { ref, onValue } from "firebase/database";
import UserNav from "./UserNav";
import { Row, Col } from "react-bootstrap";
import Footer from "./Footer";

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
          <div className="container">
            <p>
              “Rescue animals aren’t broken, they’ve simply experienced more
              life than other animals. If they were human, we would call them
              wise. They would be the ones with tales to tell and stories to
              write, the ones dealt a bad hand who responded with courage. Don’t
              pity them. Do something. Help to rescue. Donate. Volunteer.
              Foster. Adopt. And be proud to have their greatness by your side.”
            </p>
            <p className="blockquote-footer mb-0 font-italic themeBlue">
              Anonymous
            </p>
          </div>

          {dogs.map((dog) => (
            <div className="container mt-4 dogContainer" key={dog.id}>
              <Row>
                <Col
                  sm={12}
                  md={6}
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
                  sm={12}
                  md={6}
                  className="dogTextContainer d-flex justify-content-center align-items-center"
                >
                  <div className="adoptableTxtDiv">
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
        <div className="pushDown"></div>
      </div>
      <Footer />
    </>
  );
}
