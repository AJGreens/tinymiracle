import React from "react";
import UserNav from "./UserNav";
import contactUs from "./DogImages/contactUs.jpg";
import { Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <>
      <div className="container-fluid userHtml themeBlue" id="noPadding">
        <UserNav />
        <Row id="noMarginExtraPadding">
          <Col md={12} lg={6} className="container d-flex align-items-center">
            <Row>
              <Col md={3}></Col>
              <Col xs={12} md={6}>
                <h3 className="underlineHeading">Pet Care & Day Care</h3>
                <div>
                  <p>
                    <b>Address:</b> 696 New Galena Rd Chalfont, PA 18914
                  </p>
                  <p>
                    <b>Phone:</b> 215-997-2844
                  </p>
                  <p>
                    <b>Email:</b> tiny_miracles@msn.com
                  </p>
                </div>
              </Col>
              <Col md={3}></Col>
              <Col md={3}></Col>
              <Col xs={12} md={6}>
                <h3 className="underlineHeading">Rescue</h3>
                <div>
                  <p>
                    <b>Phone:</b> 215-997-2844
                  </p>
                  <p>
                    <b>Email:</b> info@tinymiraclesrescue.com
                  </p>

                  <p>
                    <b>TO MEET RESCUE DOGS:</b> Please submit an application and
                    we will have a representative get back to you ASAP. Most of
                    our rescue dogs are going/are in foster care and not at the
                    farm.
                  </p>
                </div>
              </Col>
              <Col lg={3}></Col>
            </Row>
          </Col>
          <Col md={12} lg={6} className="verticalDogPic">
            <img src={contactUs} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Contact;
