import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
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

function Home() {
  const [loaded, setLoaded] = useState(false); //this is here because without it, if you are scrolled down on another page and then click this tab you end up still scrolled down
  useEffect(() => {
    setLoaded(true);
  }, []);
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }

  return (
    <>
      {loaded && (
        <div className="container-fluid userHtml" id="noPadding">
          <UserNav />
          <div className="beegDogFrame">
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
                  <h2 className="mt-2">Pet Care</h2>
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faKitMedical} size="3x" />
                  <h2 className="mt-2">Rescue</h2>
                </Col>
              </Row>
            </div>

            <div className="container text-center" id="extra30MarginTB">
              <Row>
                <Col sm={12} md={6}>
                  <h2>Our Inspiration</h2>
                  <p className="text-justify tan">
                    Kim Rutherford is a lifelong animal lover, whose caring and
                    kindness to all creatures is well known in the community.
                    She was able to turn her passion for animals into a business
                    that she truly loves. Kim’s farm is an eclectic mix of furry
                    and feathered friends, and she is always rescuing something
                    new to add to the farm family. Kim and her staff are
                    committed to providing a loving home away from home for your
                    pet!
                  </p>
                </Col>
                <Col sm={12} md={6}>
                  <h2>Our History</h2>
                  <p className="text-justify tan">
                    Kim wanted to help animals by finding them their forever
                    homes. She started her rescue in 2011. Every rescue animal
                    becomes her child, just like her pet care kids. No matter
                    the situation, Kim wants to save every soul possible. She
                    wanted to save as many animals from kill shelters and puppy
                    mills as she could. If she could she would take in every
                    single dog, who needs help. The dogs that are lucky enough
                    to be saved by Kim, stay with her until they are ready to
                    find a forever home. When the match between dog and family
                    are perfect, Kim makes sure the rescue is going to his
                    loving, caring, and forever home!
                  </p>
                </Col>
              </Row>
            </div>
            <div className="container text-center" id="extra30MarginTB">
              <h2>Our Rescue</h2>
              <Row>
                <Col sm={12} md={6}>
                  <blockquote className="blockquote">
                    <p class="mb-3" id="specialQuote">
                      "Rescue animals aren’t broken, they’ve simply experienced
                      more life than other animals. If they were human, we would
                      call them wise. They would be the ones with tales to tell
                      and stories to write, the ones dealt a bad hand who
                      responded with courage. Don’t pity them. Do something.
                      Help to rescue. Donate. Volunteer. Foster. Adopt. And be
                      proud to have their greatness by your side."
                    </p>
                    <footer className="blockquote-footer text-end">
                      <cite title="Source Title">Anonymous</cite>
                    </footer>
                  </blockquote>
                </Col>
                <Col sm={12} md={6}>
                  <p className="text-justify">
                    Tiny Miracles Rescue is a non profit 501c3 organization
                    dedicated to solving the problem of pet over-population. At
                    the farm, we provide a safe refuge for animals in need. Our
                    adoptable pets have been abandoned and/or are saved from
                    “high-kill” shelters where their odds of ending up in a
                    loving home are poor. Once here, they will receive love,
                    attention, a health evaluation, and help to find their
                    perfect forever family. All of our adoptable pets are
                    altered, vaccinated, and given heartworm and flea
                    preventatives. Their temperament are carefully screened so
                    that we can place them in the correct adoptive homes. We
                    also serve as a resource to our community by providing
                    education and information on responsible pet ownership,
                    including the importance of altering your pet, positive
                    behavior training, and pet nutrition. Be sure to check both
                    our website often to see our available animals. You can also
                    visit us in person! Please call or email us to set up an
                    appointment. email: tiny_miracles@msn.com or call:
                    215-997-2844
                  </p>
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
