import React from "react";
import UserNav from "./UserNav";
import { Row, Col, Carousel } from "react-bootstrap";
import dogA from "./DogImages/groupScream.jpg";
import dogC from "./DogImages/wolves.jpg";
import dogD from "./DogImages/ballPit.jpg";
import dogE from "./DogImages/groupPetCare.jpg";
import dogF from "./DogImages/dogF.jpeg";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function PetCare() {
  // const [loaded, setLoaded] = useState(false);
  // useEffect(() => {
  //   setLoaded(true);
  // }, []);

  const allPics = [dogA, dogC, dogD, dogE, dogF];

  return (
    <>
      <div className="container-fluid userHtml" id="noPadding">
        <UserNav />
        {/* {loaded && (
          <div> */}
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
          <Row>
            <Col xs="12" lg="6">
              <Carousel>
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
            </Col>

            <Col xs="12" lg="6">
              <div style={{ border: "red solid 0px", marginTop: "30px" }}>
                <h2>Drop-off/Pick-up Hours</h2>
                <div
                  style={{
                    textAlign: "left",
                    margin: "auto",
                    width: "320px",
                  }}
                >
                  <div style={{ marginBottom: "0" }}>
                    Monday-Saturday:
                    <div style={{ float: "right" }}>
                      <p style={{ marginBottom: "0" }}>8AM-10AM</p>
                      <p style={{ marginBottom: "0" }}>4PM-6PM</p>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div style={{ marginBottom: "0" }}>
                    Sunday:
                    <div style={{ float: "right", border: "red solid 0px" }}>
                      <p>
                        4PM-6PM <b>Only</b>. No AM Hours.
                      </p>
                    </div>
                  </div>
                  <br />
                  <div>
                    Daycare:
                    <div
                      style={{
                        float: "right",
                        border: "red solid 0px",
                        overflow: "hidden",
                      }}
                    >
                      Drop-off during AM hours
                      <p style={{ paddingBottom: "0", marginBottom: "0" }}>
                        Pick-up during PM hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col sm={12} md={6}>
              <h2>Services</h2>
              <div style={{ textAlign: "left" }}>
                <p>
                  <b>Lodging and Daycare: </b>Please bring your pet's favorite
                  food, treats, bedding, and toys as well as any medication and
                  directions for administering. Our services include:
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
                    <Col>
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

                    <Col>
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
            <Col sm={12} md={6}>
              <h2>Rates</h2>

              <div style={{ textAlign: "left" }}>
                <p>
                  Our rates and services are the same for all pets no matter the
                  size, amount of medication, or special needs of your animal.
                  There are no extra costs for complete care.
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
                              day of daycare and after your 10th you get a free
                              daycare on us!
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
          <div style={{ textAlign: "left", marginBottom: "40px" }}>
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
        {/* </div>
        )} */}
      </div>
      <Footer />
    </>
  );
}

export default PetCare;
