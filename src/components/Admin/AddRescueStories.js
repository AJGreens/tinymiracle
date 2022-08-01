import React from "react";
import { Col, Row } from "react-bootstrap";
import AdminNav from "./AdminNav";
import RescueStory from "./RescueStory";

export default function AddRescueStories() {
  return (
    <>
      <AdminNav />
      <div className="container">
        <Row>
          <Col>
            <h2>Rescue Story 1</h2>
            <RescueStory storyNum="story1" />
          </Col>

          <Col>
            <h2>Rescue Story 2</h2>
            <RescueStory storyNum="story2" />
          </Col>

          <Col>
            <h2>Rescue Story 3</h2>
            <RescueStory storyNum="story3" />
          </Col>
        </Row>
      </div>
    </>
  );
}
