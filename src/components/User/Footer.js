import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
export default function Footer() {
  return (
    <div className="footerDiv">
      <Container id="noPadding">
        <Row>
          <Col sm={12} md={6} style={{ border: "red solid 0px" }}>
            <p className="mb-0 footColL">
              Tiny Miracles
              <br />
              696 New Galena Rd Chalfont, PA 18914
            </p>
          </Col>
          <Col sm={12} md={6}>
            <p className="mb-0 footColR">
              215-997-2844
              <br />
              tinymiraclespcr@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
