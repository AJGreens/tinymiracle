import React, { useState, useEffect } from "react";
import { database, storage } from "../Firebase";
import { ref, onValue, update } from "firebase/database";
import {
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Form, Button, Col, Row } from "react-bootstrap";

export default function RescueStory(props) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [currImgFile, setCurrImgFile] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [uniqueImageID, setUniqueImageID] = useState();

  useEffect(() => {
    const tokenRef = ref(database, "rescueStories/" + props.storyNum);
    onValue(tokenRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setName(data["name"]);
        setDescription(data["description"]);
        setImageUrl(data["img"]);
      }
    });
    setUniqueImageID("uniqueImg" + props.storyNum);
  }, [props.storyNum]);

  function handleChange(event) {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      default:
        console.log("Case Error");
        break;
    }
  }

  async function updateAnimal(event) {
    event.preventDefault();

    let animalRef = ref(database, "rescueStories/" + props.storyNum);

    update(animalRef, {
      name: name,
      description: description,
    });

    //Image in storage
    if (currImgFile !== undefined) {
      const uploadRef = sRef(storage, `story`);
      const uploadTask = uploadBytesResumable(uploadRef, currImgFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              console.log("storage/unauthorized");
              break;
            case "storage/canceled":
              console.log("storage/canceled");
              break;
            case "storage/unknown":
              console.log("storage/unknown");
              break;
            default:
              console.log("unseen error");
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            update(animalRef, {
              img: downloadURL,
            });
          });
        }
      );
    }
  }

  function handleChangeImg(e) {
    setCurrImgFile(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <Form name="rescueForm" onSubmit={updateAnimal}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">
            Dog Name
          </Form.Label>
          <Col sm="5">
            <Form.Control
              name="name"
              onChange={handleChange}
              value={name}
              type="text"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rescue Story</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            onChange={handleChange}
            value={description}
            type="text"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="panda"
            onChange={(e) => handleChangeImg(e)}
            style={{ display: "none" }}
            id={uniqueImageID}
            type="file"
            placeholder="image"
            accept="image/*"
          />
          <Form.Label htmlFor={uniqueImageID} className="btn btn-primary">
            Upload Picture
          </Form.Label>
          <br />
          {imageUrl && (
            <img
              src={imageUrl}
              className="rescueStoryUpdateImg"
              alt="Cute Dog"
            />
          )}
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
}
