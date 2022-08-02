import React from "react";
import UserNav from "./UserNav";
import { Row, Col, Carousel, Container } from "react-bootstrap";
import dogA from "./DogImages/groupScream.jpg";
import dogC from "./DogImages/wolves.jpg";
import dogD from "./DogImages/ballPit.jpg";
import dogE from "./DogImages/groupPetCare.jpg";
import dogF from "./DogImages/dogE.jpeg";
import Footer from "./Footer";

function PetCare() {
  const allPics = [dogA, dogC, dogD, dogE, dogF];

  return (
    <>
      <div className="container-fluid userHtml" id="noPadding">
        <UserNav />
        <div className="container text-center themeBlue" id="extra3Padding">
          <h1>Your Pet’s Favorite Bucks County Bed & Breakfast!</h1>
          <p>
            We know how difficult it is to leave your pet and our goal is to
            provide the best in care and comfort during your pet’s stay. We
            treat each of our guests as if they are members of the Tiny Miracles
            Family. Each day is filled with plenty of personal interaction,
            group playtime, love and attention.
          </p>
          <br />
          <Container>
            <Row>
              <Col xs="12" lg="6">
                <div className="d-flex justify-content-center align-items-center">
                  <Carousel className="actualCarousel">
                    {allPics.map((pic, i) => {
                      return (
                        <Carousel.Item key={i}>
                          <img
                            className="d-block w-100 petCareCarouselPics"
                            src={pic}
                            alt={"image" + i}
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </div>
              </Col>

              <Col
                xs="12"
                lg="6"
                className="d-flex"
                style={{ border: "red solid 0px" }}
              >
                <div className="smushDiv text-center">
                  <h2>Drop-off/Pick-up Hours</h2>
                  <Container
                    style={{
                      textAlign: "left",
                      padding: "0 0",
                      border: "red solid 0px",
                    }}
                  >
                    <Row>
                      <Col style={{ textAlign: "right" }}>
                        <p>
                          <b>Monday-Saturday:</b>
                        </p>
                      </Col>
                      <Col>
                        <p>
                          8AM-10AM
                          <br /> 4PM-6PM
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ textAlign: "right" }}>
                        <p>
                          <b>Sunday:</b>
                        </p>
                      </Col>
                      <Col>
                        <p>
                          4PM-6PM <b>Only.</b> No AM hours.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ textAlign: "right" }}>
                        <p>
                          <b>Daycare:</b>
                        </p>
                      </Col>
                      <Col>
                        <p>
                          Drop-off during AM hours
                          <br />
                          Pick-up during PM hours
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <Container>
            <Row>
              <Col xl={6} lg={12}>
                <h2>Services</h2>
                <div style={{ textAlign: "left" }}>
                  <p>
                    <b>Lodging and Daycare: </b>Please bring your pet's favorite
                    food, treats, bedding, and toys as well as any medication
                    and directions for administering. Our services include:
                  </p>
                  <div
                    style={{
                      margin: "auto",
                      border: "black solid 0px",
                      borderRadius: 25,
                      width: "100%",
                    }}
                  >
                    <Row>
                      <Col xs={12} sm={6}>
                        <ul>
                          <li>
                            Appropriately sized accommodations
                            <ul>
                              <li style={{ fontSize: "12pt" }}>
                                Each room maintains its own heating and cooling
                                unit
                              </li>
                            </ul>
                          </li>
                          <li>
                            Comfy bedding
                            <ul>
                              <li style={{ fontSize: "12pt" }}>
                                Includes yours or ours
                              </li>
                            </ul>
                          </li>
                          <li>Maid service</li>
                          <li>Group and individual playtime</li>
                          <li>
                            Meal service as directed
                            <ul>
                              <li style={{ fontSize: "12pt" }}>
                                Includes dispensing of minimal medications
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </Col>

                      <Col xs={12} sm={6}>
                        <ul>
                          <li>Individual exercise</li>
                          <li>Owner residing on premises</li>
                          <li>Highly trained staff of true animal lovers </li>
                          <li>Private kitty quarters</li>
                          <li>Plenty of TLC </li>
                          <li>Music played for all tastes</li>
                          <li>Bathing ($25.00)</li>
                          <li>Nails ($15.00)</li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                  <br />
                  <br />
                </div>
              </Col>
              <Col xl={6} lg={12}>
                <h2>Rates</h2>

                <div style={{ textAlign: "left" }}>
                  <p>
                    Our rates and services are the same for all pets no matter
                    the size, amount of medication, or special needs of your
                    animal. There are no extra costs for complete care.
                    <br />
                  </p>
                  <ul>
                    <li>
                      <span>
                        DOGS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                      </span>
                      <ul>
                        <li>
                          <span>$60.00 / Overnight </span>
                        </li>
                        <li>
                          <span>$30.00 / Half Day</span>
                        </li>
                        <li>
                          <span>Daycare (Dogs Only) updated</span>
                          <ul>
                            <li>
                              <span>$35.00 / Dog</span>
                            </li>
                            <li>
                              <span>
                                Punch Cards will be provided, bring them in each
                                day of daycare and after your 10th you get a
                                free daycare on us!
                              </span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>
                        CATS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <ul>
                        <li>
                          <span>$40.00 / Overnight</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
          <div
            className="petCareNotice"
            style={{ textAlign: "left", marginBottom: "40px" }}
          >
            <div>
              <span>
                <span>
                  <b>NOTICE: </b>We will need your pet’s license number as well
                  as a proof of the following up to date vaccines: DOGS
                  –&nbsp;Distemper, Parvo, Bordetella and Rabies; CATS – rabies
                  and FVRCP (current within six months). Flea and tick
                  prevention is greatly appreciated!
                </span>
              </span>
            </div>
            <div></div>
            <div>
              Please be on time. For every minute you’re late you will be
              donating a dollar to our rescue. (15 minutes late = $15 donation)
            </div>
            <div>
              Cancellation fees will be charged for less than 24 hours’ notice
              of arrival time.<p></p>
            </div>
            <div>
              If you have any question or concerns, please contact Kim at (215)
              997-2844.
            </div>
            <div></div>
            <div>Thank you.</div>
          </div>
        </div>
        <div className="petCarePushDown"></div>
      </div>
      <Footer />
    </>
  );
}

export default PetCare;
