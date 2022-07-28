import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faTractor,
  faPaw,
  faKitMedical,
} from "@fortawesome/free-solid-svg-icons";
import UserNav from "./UserNav";
import widedog from "./DogImages/widedog.jpg";
// import pawtrail from "./DogImages/pawtrail.png";
import longtrail from "./DogImages/longtrail-removebg.png";
import { useEffect, useState } from "react";
import cutieA from "./DogImages/wink.png";
import cutieB from "./DogImages/contactUs.jpg";
import cutieC from "./DogImages/donate.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const [loaded, setLoaded] = useState(false); //this is here because without it, if you are scrolled down on another page and then click this tab you end up still scrolled down
  useEffect(() => {
    setLoaded(true);
  }, []);
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }

  const nav = useNavigate();
  function goToPetCare() {
    nav("/petCare/");
  }
  function goToDonate() {
    nav("/donate/");
  }
  function goToRescueStories() {
    nav("/rescueStories/");
  }

  return (
    <>
      {loaded && (
        <div className="container-fluid userHtml" id="noPadding">
          <UserNav />
          <div className="beegDogFrame">
            <div className="beegDogText">
              <h2>
                We give them shelter.
                <br />
                You give them a home.
              </h2>
              <h4 style={{ marginBottom: 0 }}>
                <Link className="customLink" to="/adoptableDogsHome">
                  See Adoptable Animals <span className="appleSign">&gt;</span>
                </Link>
              </h4>
            </div>

            <img className="beegDog" src={widedog} alt="cutedoggie" />
          </div>
          <div id="extra3Padding" className="themeBlue">
            <div className="container text-center">
              <Row className=" theme">
                <Col>
                  <FontAwesomeIcon icon={faTractor} size="3x" />
                  <h2 className="mt-2">Farm</h2>
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faPaw} size="3x" />
                  <h2 className="mt-2">Petcare</h2>
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faKitMedical} size="3x" />
                  <h2 className="mt-2">Rescue</h2>
                </Col>
              </Row>
            </div>
            <div className="container mt-4">
              <Row className="homeRow">
                <Col sm={12} md={4} className="homeCol">
                  <div className="homeColImgDiv">
                    <img src={cutieA} alt="cuteDogPic" />
                  </div>
                </Col>
                <Col sm={12} md={8} className="homeCol">
                  <div className="myOuter">
                    <div className="myMiddle">
                      <div className="myInner">
                        <h3>Petcare Paradise on a Farm</h3>
                        <p>
                          Kim Rutherford is a lifelong animal lover who was able
                          to turn her passion for animals into a successful
                          petcare business that she truly loves. Whether it's
                          just for the day or an extended stay, Kim and her
                          staff are committed to providing a loving home away
                          from home for your pet!
                        </p>
                        <Button onClick={goToPetCare}>Learn More &gt;</Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="lineDiv"></div>
              <Row className="homeRow">
                <Col sm={12} md={4} className="homeCol hideOnBig">
                  <div className="homeColImgDiv">
                    <img src={cutieB} alt="cuteDogPic" />
                  </div>
                </Col>
                <Col sm={12} md={8} className="homeCol">
                  <div className="myOuter">
                    <div className="myMiddle">
                      <div className="myInner">
                        <h3>Saving Animals for Over 10 Years</h3>
                        <p>
                          Kim started her rescue in 2011 with a simple goal:
                          save as many souls as possible. Since then, Tiny
                          Miracles has helped over a thousand animals find their
                          forever homes.
                        </p>
                        <Button onClick={goToRescueStories}>
                          See their stories &gt;
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={4} className="homeCol hideOnPhone">
                  <div className="homeColImgDiv">
                    <img src={cutieB} alt="cuteDogPic" />
                  </div>
                </Col>
              </Row>
              <div className="lineDiv"></div>
              <Row className="homeRow">
                <Col sm={12} md={4} className="homeCol">
                  <div className="homeColImgDiv">
                    <img src={cutieC} alt="cuteDogPic" />
                  </div>
                </Col>
                <Col sm={12} md={8} className="homeCol">
                  <div className="myOuter">
                    <div className="myMiddle">
                      <div className="myInner">
                        <h3>Founded on Love</h3>
                        <p>
                          Tiny Miracles Rescue is a non-profit organization that
                          depends on donations to succeed. We are so thankful
                          for the many people who have made it possible for us
                          to continue our work saving animals.
                        </p>
                        <Button onClick={goToDonate}>Donate &gt;</Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* <img className="pawTrail" src={longtrail} alt="pawtrail" />
          <img className="pawTrail2" src={longtrail} alt="pawtrail" /> */}
            <div className="text-center">
              <h2>Follow Us</h2>
              <Row>
                <Col>
                  <a href="https://www.facebook.com/TinyMiraclesPetcare/">
                    <FontAwesomeIcon icon={faFacebook} size="4x" />
                  </a>
                </Col>
                <Col>
                  <a href="https://www.instagram.com/tinymiraclesrescue/">
                    <FontAwesomeIcon icon={faInstagram} size="4x" />
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
