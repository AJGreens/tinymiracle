import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import {
  faTractor,
  faPaw,
  faKitMedical,
} from "@fortawesome/free-solid-svg-icons";
import UserNav from "./UserNav";
import widedog from "./DogImages/WeezyUp.jpg";
import cutieA from "./DogImages/rainbow.jpg";
import cutieB from "./DogImages/sitDog.jpg";
import cutieC from "./DogImages/Sable.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
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
      <div className="container-fluid userHtml" id="noPadding">
        <UserNav />
        <div className="beegDogFrame">
          <div className="beegDogText">
            <h2 id="specialShrinkh2">
              We give them shelter.
              <br />
              You give them a home.
            </h2>
            <h4 id="specialShrinkh4" style={{ marginBottom: 0 }}>
              <Link
                className="customLink d-flex align-items-center centerSmall"
                to="/adoptableDogsHome"
              >
                See Adoptable Dogs &gt;
              </Link>
            </h4>
          </div>

          <img className="beegDog" src={widedog} alt="cutedoggie" />
        </div>
        <div id="extra3Padding" className="themeBlue">
          <div className="container text-center">
            <Row className=" theme">
              <Col>
                {" "}
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
          <div className="homeMainPart">
            <div className="container mt-4 paddingTopBottom">
              <Row className="">
                <Col
                  sm={12}
                  md={4}
                  className="d-flex align-items-center justify-content-center"
                >
                  <img className="fullPic" src={cutieA} alt="cuteDogPic" />
                </Col>
                <Col
                  sm={12}
                  md={8}
                  className="d-flex align-items-center justify-content-center"
                >
                  <div>
                    <h3 className="smallTxtCenter">
                      Petcare Paradise on a Farm
                    </h3>
                    <p>
                      Kim Rutherford is a lifelong animal lover who was able to
                      turn her passion for animals into a successful petcare
                      business that she truly loves. Whether it's just for the
                      day or an extended stay, Kim and her staff are committed
                      to providing a loving home away from home for your pet!
                    </p>
                    <div className="smallTxtCenter">
                      <Button id="coolBtn" onClick={goToPetCare}>
                        Learn More &gt;
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr></hr>
              <Row className="homeRow">
                <Col
                  sm={12}
                  md={4}
                  id="hideOnBig"
                  className="d-flex align-items-center justify-content-center"
                >
                  <img id="picB" src={cutieB} alt="cuteDogPic" />
                </Col>
                <Col
                  sm={12}
                  md={8}
                  className="d-flex align-items-center justify-content-center"
                >
                  <div>
                    <h3 className="smallTxtCenter">
                      Saving Animals for Over 10 Years
                    </h3>
                    <p>
                      Kim started her rescue in 2011 with a simple goal: save as
                      many souls as possible. Since then, Tiny Miracles has
                      helped over a thousand animals find their forever homes.
                    </p>
                    <div className="smallTxtCenter">
                      <Button id="coolBtn" onClick={goToRescueStories}>
                        See their stories &gt;
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col
                  sm={12}
                  md={4}
                  id="hideOnPhone"
                  className="d-flex align-items-center justify-content-center"
                >
                  <img id="picB" src={cutieB} alt="cuteDogPic" />
                </Col>
              </Row>
              <hr></hr>
              <Row className="homeRow">
                <Col
                  sm={12}
                  md={4}
                  className="d-flex align-items-center justify-content-center"
                >
                  <img className="fullPic" src={cutieC} alt="cuteDogPic" />
                </Col>
                <Col
                  sm={12}
                  md={8}
                  className="d-flex align-items-center justify-content-center"
                >
                  <div>
                    <h3 className="smallTxtCenter">Founded on Love</h3>
                    <p>
                      Tiny Miracles Rescue is a non-profit organization that
                      depends on donations to succeed. We are so thankful for
                      the many people who have made it possible for us to
                      continue our work saving animals.
                    </p>
                    <div className="smallTxtCenter">
                      <Button id="coolBtn" onClick={goToDonate}>
                        Donate &gt;
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <div className="text-center followUsDiv container">
            <h2>Follow Us</h2>
            <Row>
              <Col>
                <a
                  target="_blank"
                  href="https://www.facebook.com/TinyMiraclesPetcare/"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className="themeBlue"
                    icon={faFacebook}
                    size="4x"
                  />
                </a>
              </Col>
              <Col>
                <a
                  target="_blank"
                  href="https://www.instagram.com/tinymiraclesrescue/"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className="themeBlue"
                    icon={faInstagram}
                    size="4x"
                  />
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
