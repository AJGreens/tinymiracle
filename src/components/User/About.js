import React from "react";
import UserNav from "./UserNav";
import Footer from "./Footer";
import diaperBoys from "./DogImages/diaperBoys.jpeg";
import { Row, Col, Container } from "react-bootstrap";
function About() {
  return (
    <>
      <div
        className="container-fluid userHtml text-center themeBlue"
        id="noPadding"
      >
        <UserNav />
        <div id="extra3Padding" style={{ paddingBottom: 0 }}>
          <h1>About</h1>
          <Container>
            <Row>
              <Col md={12} lg={6} className="specialPadTopBottom aboutDogText">
                <p style={{ textAlign: "left" }}>
                  Tiny Miracles Rescue is a non profit 501c3 organization
                  dedicated to solving the problem of pet over-population. We
                  also serve our community by providing a resource for people to
                  call when needing to surrender a pet due to unforeseen
                  circumstances. Some of our adoptable pets have been abandoned
                  and/or are saved from “high-kill” shelters where their odds of
                  ending up in a loving home are poor. Once here, they will
                  receive love, attention, a health evaluation, and help to find
                  their perfect forever family. All of our adoptable pets are
                  altered and up to date on core vaccines per their age.
                  Temperaments and personalities are carefully screened so that
                  we can place them in the correct adoptive homes. Be sure to
                  check our website often to see our available animals. Please
                  feel free to reach out with any questions. email:
                  tinymiraclespcr@gmail.com or call: 215-997-2844
                </p>
              </Col>
              <Col md={12} lg={6} className="aboutDogImg">
                <div className="d-flex epicFlex justify-content-center">
                  <img src={diaperBoys} alt="Cute Dog" className="diaperPic" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
