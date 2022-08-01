import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { database } from "../Firebase";
import { ref, set, push } from "firebase/database";
import UserNav from "./UserNav";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function FosterApplication() {
  const current = new Date();
  const date =
    current.getMonth() +
    1 +
    "/" +
    current.getDate() +
    "/" +
    current.getFullYear();

  const navigate = useNavigate();

  const [applicantName, setApplicantName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [applicantAge, setApplicantAge] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [rentOwn, setRentOwn] = useState("");
  const [landLordName, setLandLordName] = useState("");
  const [landLordPhone, setLandLordPhone] = useState("");
  const [houseType, setHouseType] = useState("");
  const [numAdults, setNumAdults] = useState("");
  const [numChilds, setNumChilds] = useState("");
  const [childAges, setChildAges] = useState("");
  const [hasPets, setHasPets] = useState("");
  const [p1Gender, setP1Gender] = useState("");
  const [p2Gender, setP2Gender] = useState("");
  const [p1Spayed, setP1Spayed] = useState("");
  const [p2Spayed, setP2Spayed] = useState("");
  const [p1Type, setP1Type] = useState("");
  const [p2Type, setP2Type] = useState("");
  const [p1HowLongOwned, setP1HowLongOwned] = useState("");
  const [p2HowLongOwned, setP2HowLongOwned] = useState("");
  const [aboutYourself, setAboutYourself] = useState("");
  const [morePetsOther, setMorePetsOther] = useState("");
  const [yardSize, setYardSize] = useState("");
  const [hoursAlone, setHoursAlone] = useState("");
  const [vetName, setVetName] = useState("");
  const [vetPhone, setVetPhone] = useState("");
  const [vetCity, setVetCity] = useState("");
  const [vetState, setVetState] = useState("");
  const [petNamesOnFile, setPetNamesOnFile] = useState("");
  const [allergies, setAllergies] = useState("");
  const [fenced, setFenced] = useState("");
  const [readDisclaimer, setReadDisclaimer] = useState(false);
  const [allowedAnimals, setAllowedAnimals] = useState("");
  const [getAlong, setGetAlong] = useState("");

  const [loaded, setLoaded] = useState(false); //this is here because without it, if you are scrolled down on another page and then click this tab you end up still scrolled down
  useEffect(() => {
    setLoaded(true);
  }, []);

  const form = useRef();

  function sendEmail() {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_FOSTER_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_FOSTER_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_FOSTER_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function handleChange(event) {
    switch (event.target.name) {
      case "applicantName":
        setApplicantName(event.target.value);
        break;
      case "partnerName":
        setPartnerName(event.target.value);
        break;
      case "applicantAge":
        setApplicantAge(event.target.value);
        break;
      case "streetAddress":
        setStreetAddress(event.target.value);
        break;
      case "addressLine2":
        setAddressLine2(event.target.value);
        break;
      case "city":
        setCity(event.target.value);
        break;
      case "state":
        setState(event.target.value);
        break;
      case "zip":
        setZip(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "emailAddress":
        setEmailAddress(event.target.value);
        break;
      case "rentOwn":
        setRentOwn(event.target.value);
        break;
      case "landLordName":
        setLandLordName(event.target.value);
        break;
      case "landLordPhone":
        setLandLordPhone(event.target.value);
        break;
      default:
        return;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const adoptionFormRef = ref(database, "fosterApplications");
    const newAdoptionFormRef = push(adoptionFormRef);

    set(newAdoptionFormRef, {
      date: date,
      applicantName: applicantName,
      partnerName: partnerName,
      applicantAge: applicantAge,
      address: {
        streetAddress: streetAddress,
        addressLine2: addressLine2,
        city: city,
        state: state,
        zip: zip,
      },
      phone: phone,
      emailAddress: emailAddress,
      rentOwn: rentOwn,
      allowedAnimals: allowedAnimals,
      landLordName: landLordName,
      landLordPhone: landLordPhone,
      houseType: houseType,
      numAdults: numAdults,
      numChilds: numChilds,
      childAges: childAges,
      getAlong: getAlong,
      hasPets: hasPets,
      currPet1: {
        p1Type: p1Type,
        p1Gender: p1Gender,
        p1Spayed: p1Spayed,
        p1HowLongOwned: p1HowLongOwned,
      },
      currPet2: {
        p2Type: p2Type,
        p2Gender: p2Gender,
        p2Spayed: p2Spayed,
        p2HowLongOwned: p2HowLongOwned,
      },
      morePetsOther: morePetsOther,
      aboutYourself: aboutYourself,
      allergies: allergies,
      fenced: fenced,
      yardSize: yardSize,
      hoursAlone: hoursAlone,
      vetName: vetName,
      vetPhone: vetPhone,
      vetCity: vetCity,
      vetState: vetState,
      petNamesOnFile: petNamesOnFile,
      readDisclaimer: readDisclaimer,
    });

    sendEmail();

    navigate("/thankyou"); //need to add back in toward end
  }

  return (
    <>
      {loaded && (
        <div className="userHtml container-fluid" id="noPadding">
          <UserNav />
          <Container className="mt-4 themeBlue">
            <h1 className="text-center mb-4">Foster Application</h1>
            <Form ref={form} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Applicant's <b>First and Last</b> Name{" "}
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={applicantName}
                  name="applicantName"
                  onChange={(e) => setApplicantName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Partner's <b>First and Last</b> Name
                </Form.Label>
                <Form.Control
                  type="text"
                  value={partnerName}
                  name="partnerName"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Applicant's Age</Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={applicantAge}
                  name="applicantAge"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={streetAddress}
                  name="streetAddress"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control
                  type="text"
                  value={addressLine2}
                  name="addressLine2"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={city}
                  name="city"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={state}
                  name="state"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={zip}
                  name="zip"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={phone}
                  name="phone"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="text"
                  value={emailAddress}
                  name="emailAddress"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Do you rent or own?</Form.Label>
                <Form.Select
                  value={rentOwn}
                  name="rentOwn"
                  required
                  onChange={handleChange}
                >
                  <option>Select One</option>
                  <option>Rent</option>
                  <option>Own</option>
                </Form.Select>
              </Form.Group>
              {rentOwn === "Rent" && (
                <>
                  <Form.Label className="mb-3">
                    Are you allowed to have animals where you live? &nbsp;
                    &nbsp;
                  </Form.Label>

                  <Form.Check
                    inline
                    label="yes"
                    name="allowedGroup"
                    type="radio"
                    // id={`p1spay`}
                    onChange={() => setAllowedAnimals("yes")}
                  />
                  <Form.Check
                    inline
                    label="no"
                    name="allowedGroup"
                    type="radio"
                    // id={`p1spay`}
                    onChange={() => setAllowedAnimals("no")}
                  />
                  <br />

                  <Form.Group className="mb-3">
                    <Form.Label>Landlord Name</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={landLordName}
                      name="landLordName"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Landlord Phone</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={landLordPhone}
                      name="landLordPhone"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </>
              )}
              <Form.Group className="mb-3">
                <Form.Label>Type of house</Form.Label>
                <Form.Select
                  required
                  value={houseType}
                  name="houseType"
                  onChange={(e) => setHouseType(e.target.value)}
                >
                  <option>Select One</option>
                  <option>Single Family</option>
                  <option>Multiple Family</option>
                  <option>Townhouse</option>
                  <option>Apartment/Condo</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Number of adults in house</Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={numAdults}
                  name="workSchedule"
                  onChange={(e) => setNumAdults(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Number of children in house</Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={numChilds}
                  name="workSchedule"
                  onChange={(e) => setNumChilds(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ages of children</Form.Label>
                <Form.Control
                  type="text"
                  value={childAges}
                  name="workSchedule"
                  onChange={(e) => setChildAges(e.target.value)}
                />
              </Form.Group>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Label>
                    Do you currently have pets? &nbsp;&nbsp;
                  </Form.Label>
                  <Form.Check
                    required
                    inline
                    label="yes"
                    name="HasPets"
                    value="yes"
                    type={type}
                    id={`yes`}
                    onChange={() => setHasPets(true)}
                  />
                  <Form.Check
                    required
                    inline
                    value="no"
                    label="no"
                    name="HasPets"
                    type={type}
                    id={`no`}
                    onChange={() => setHasPets(false)}
                  />
                </div>
              ))}
              {hasPets && (
                <>
                  <Container id="fullContainer" className="adoptionFormBox">
                    <p className="mb-1">
                      <b>Current Pet #1</b>
                    </p>

                    <Form.Group className="mb-3">
                      <Form.Label>Type</Form.Label>
                      <Form.Select
                        value={p1Type}
                        onChange={(e) => setP1Type(e.target.value)}
                      >
                        <option>Select One</option>
                        <option>Cat</option>
                        <option>Dog</option>
                        <option>Other</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Label className="mb-3">
                      Gender &nbsp; &nbsp;
                    </Form.Label>

                    <Form.Check
                      inline
                      label="male"
                      name="group2"
                      type="radio"
                      id={`p1male`}
                      onChange={() => setP1Gender("male")}
                    />
                    <Form.Check
                      inline
                      label="female"
                      name="group2"
                      type="radio"
                      id={`p1female`}
                      onChange={() => setP1Gender("female")}
                    />
                    <br />

                    <Form.Label className="mb-3">
                      Spayed/Neutered? &nbsp; &nbsp;
                    </Form.Label>

                    <Form.Check
                      inline
                      label="yes"
                      name="group3"
                      type="radio"
                      id={`p1spay`}
                      onChange={() => setP1Spayed("yes")}
                    />
                    <Form.Check
                      inline
                      label="no"
                      name="group3"
                      type="radio"
                      id={`p1spay`}
                      onChange={() => setP1Spayed("no")}
                    />
                    <br />

                    <Form.Group className="mb-3">
                      <Form.Label>How long owned?</Form.Label>
                      <Form.Control
                        type="text"
                        value={p1HowLongOwned}
                        onChange={(e) => setP1HowLongOwned(e.target.value)}
                      />
                    </Form.Group>
                  </Container>
                  <br />

                  <Container
                    id="fullContainer"
                    className="mb-3 adoptionFormBox"
                  >
                    <p className="mb-1">
                      <b>Current Pet #2</b>
                    </p>

                    <Form.Group className="mb-3">
                      <Form.Label>Type</Form.Label>
                      <Form.Select
                        value={p2Type}
                        onChange={(e) => setP2Type(e.target.value)}
                      >
                        <option>Select One</option>
                        <option>Cat</option>
                        <option>Dog</option>
                        <option>Other</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Label className="mb-3">
                      Gender &nbsp; &nbsp;
                    </Form.Label>

                    <Form.Check
                      inline
                      label="male"
                      name="group4"
                      type="radio"
                      id={`p2male`}
                      onChange={() => setP2Gender("male")}
                    />
                    <Form.Check
                      inline
                      label="female"
                      name="group4"
                      type="radio"
                      id={`p2female`}
                      onChange={() => setP2Gender("female")}
                    />
                    <br />

                    <Form.Label className="mb-3">
                      Spayed/Neutered? &nbsp; &nbsp;
                    </Form.Label>

                    <Form.Check
                      inline
                      label="yes"
                      name="group5"
                      type="radio"
                      id={`p2spay`}
                      onChange={() => setP2Spayed("yes")}
                    />
                    <Form.Check
                      inline
                      label="no"
                      name="group5"
                      type="radio"
                      id={`p2spay`}
                      onChange={() => setP2Spayed("no")}
                    />
                    <br />

                    <Form.Group className="mb-3">
                      <Form.Label>How long owned?</Form.Label>
                      <Form.Control
                        type="text"
                        value={p2HowLongOwned}
                        onChange={(e) => setP2HowLongOwned(e.target.value)}
                      />
                    </Form.Group>
                  </Container>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      Please list any more current pets and "other" types from
                      above
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={morePetsOther}
                      onChange={(e) => setMorePetsOther(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Do your pets get along with other animals? Please be
                      specific.
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={getAlong}
                      onChange={(e) => setGetAlong(e.target.value)}
                    />
                  </Form.Group>

                  {/* <p> spayed: {p1Spayed}</p> */}
                </>
              )}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  Please tell us a little about yourself, your past experience
                  with dogs, and why you feel you could provide a good home for
                  a rescue:
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={aboutYourself}
                  onChange={(e) => setAboutYourself(e.target.value)}
                />
              </Form.Group>
              <Form.Label className="mb-3">
                Any pet allergies? &nbsp; &nbsp;
              </Form.Label>
              <Form.Check
                inline
                label="yes"
                name="group6"
                type="radio"
                id={`allergies`}
                onChange={() => setAllergies("yes")}
              />
              <Form.Check
                inline
                label="no"
                name="group6"
                type="radio"
                id={`allergies`}
                onChange={() => setAllergies("no")}
              />
              <br />
              <Form.Label className="mb-3">
                Is your yard fenced? &nbsp; &nbsp;
              </Form.Label>
              <Form.Check
                required
                inline
                label="yes"
                name="group7"
                type="radio"
                id={`fenced`}
                onChange={() => setFenced("yes")}
              />
              <Form.Check
                required
                inline
                label="no"
                name="group7"
                type="radio"
                id={`fenced`}
                onChange={() => setFenced("no")}
              />
              {fenced === "yes" && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Yard size</Form.Label>
                    <Form.Select
                      value={yardSize}
                      onChange={(e) => setYardSize(e.target.value)}
                    >
                      <option>Select One</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </Form.Select>
                  </Form.Group>
                </>
              )}
              {fenced !== "yes" && <br />}
              <Form.Group className="mb-3">
                <Form.Label>
                  How many hours per day will the dog be left alone?
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={hoursAlone}
                  onChange={(e) => setHoursAlone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Veterinarian Name</Form.Label>
                <Form.Control
                  type="text"
                  value={vetName}
                  onChange={(e) => setVetName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Vet Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  value={vetPhone}
                  onChange={(e) => setVetPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Vet City</Form.Label>
                <Form.Control
                  type="text"
                  value={vetCity}
                  onChange={(e) => setVetCity(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Vet State</Form.Label>
                <Form.Control
                  type="text"
                  value={vetState}
                  onChange={(e) => setVetState(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Pet Names on File at Vet</Form.Label>
                <Form.Control
                  type="text"
                  value={petNamesOnFile}
                  onChange={(e) => setPetNamesOnFile(e.target.value)}
                />
              </Form.Group>
              <p>
                Please be advised that Tiny Miracles Rescue covers the cost of
                food and veterinary care. Veterinary visits will be scheduled
                through a TMR volunteer and must be approved. If a crate is
                needed, one will be supplied for you. As a foster, you agree to
                accept the risk of your own animals catching anything contagious
                from a foster animal.
              </p>
              <Form.Label>
                I agree that I have read and understand the above
                statement.&nbsp;{" "}
              </Form.Label>
              <Form.Check
                inline
                label=""
                name="group12"
                type="checkbox"
                id={`readDisclaimer`}
                onChange={() => setReadDisclaimer(!readDisclaimer)}
              />
              <br />
              <Button
                className="themeButton"
                id="coolBtn"
                style={{ marginBottom: "10px" }}
                variant="primary"
                type="submit"
                disabled={!readDisclaimer}
              >
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      )}
    </>
  );
}
