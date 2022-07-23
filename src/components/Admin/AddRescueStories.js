import React, { useState, useEffect } from "react";
import { database, storage } from "../Firebase";
import { ref, set, onValue, remove, update } from "firebase/database";
import {
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import AdminNav from "./AdminNav";
import { useParams } from "react-router";
// import {Circles} from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faXmark } from "@fortawesome/free-solid-svg-icons";
import RescueStory from "./RescueStory";

export default function AddRescueStories() {



  return (
    <>
      <AdminNav />
      <div className="container">
        <Row>
            <Col>
        <h2>Rescue Story 1</h2>
            <RescueStory storyNum = "story1"/>

        </Col>

        <Col>
        <h2>Rescue Story 2</h2>
        <RescueStory storyNum = "story2"/>
        </Col>

        <Col>
        <h2>Rescue Story 3</h2>
        <RescueStory storyNum = "story3"/>
        </Col>

        </Row>
      </div>
    </>
  );
}

