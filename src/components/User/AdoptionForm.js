import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { database } from "../Firebase";
import { ref, onValue, set, push } from "firebase/database";
import UserNav from "./UserNav";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

function AdoptionForm() {
  const current = new Date();
  const date =
    current.getMonth() +
    1 +
    "/" +
    current.getDate() +
    "/" +
    current.getFullYear();

  const navigate = useNavigate();

  const [dogName, setDogName] = useState("");
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
  const [occupation, setOccupation] = useState("");
  const [workSchedule, setWorkSchedule] = useState("");
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
  const [prevP1Type, setPrevP1Type] = useState("");
  const [prevP1HowLongOwned, setPrevP1HowLongOwned] = useState("");
  const [prevP2Type, setPrevP2Type] = useState("");
  const [prevP2HowLongOwned, setPrevP2HowLongOwned] = useState("");
  const [aboutYourself, setAboutYourself] = useState("");
  const [morePetsOther, setMorePetsOther] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [yardSize, setYardSize] = useState("");
  const [whereKeptDay, setWhereKeptDay] = useState("");
  const [whereKeptNight, setWhereKeptNight] = useState("");
  const [hoursAlone, setHoursAlone] = useState("");
  const [giveUpDog, setGiveUpDog] = useState("");
  const [ref1Name, setRef1Name] = useState("");
  const [ref1Relation, setRef1Relation] = useState("");
  const [ref1Phone, setRef1Phone] = useState("");
  const [ref2Name, setRef2Name] = useState("");
  const [ref2Relation, setRef2Relation] = useState("");
  const [ref2Phone, setRef2Phone] = useState("");
  const [vetName, setVetName] = useState("");
  const [vetPhone, setVetPhone] = useState("");
  const [vetCity, setVetCity] = useState("");
  const [vetState, setVetState] = useState("");
  const [petNamesOnFile, setPetNamesOnFile] = useState("");
  const [allergies, setAllergies] = useState("");
  const [fenced, setFenced] = useState("");
  const [crate, setCrate] = useState("");
  const [obedienceClass, setObedienceClass] = useState("");
  const [surrendered, setSurrendered] = useState("");
  const [readDisclaimer, setReadDisclaimer] = useState(false);

  const [adoptableDogs, setAdoptableDogs] = useState([]);

  const form = useRef();

  function sendEmail() {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_ADOPT_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_ADOPT_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_ADOPT_USER_ID
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
      case "animalName":
        setDogName(event.target.value);
        break;
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
      case "occupation":
        setOccupation(event.target.value);
        break;
      case "workSchedule":
        setWorkSchedule(event.target.value);
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

  let { token } = useParams();

  useEffect(() => {
    if (token !== "general") {
      const animalToken = ref(database, "animals/adoptable/" + token);
      onValue(animalToken, (snapshot) => {
        const data = snapshot.val();
        setDogName(data["name"]);
      });
    } else {
      setDogName("general");
    }

    const animals = ref(database, "animals/adoptable");
    onValue(animals, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        let adoptableDogsArr = Object.entries(data).map(([key, value]) => {
          return {
            id: key,
            name: value["name"],
            description: value["description"],
            age: value["ageGroup"],
            breed: value["primBreed"],
            gender: value["gender"],
            img: value["img"],
          };
        });
        setAdoptableDogs(adoptableDogsArr);
      } else {
        setAdoptableDogs([]);
      }
    });
  }, [token]);

  function handleSubmit(event) {
    event.preventDefault();

    const adoptionFormRef = ref(database, "adoptionForms");
    const newAdoptionFormRef = push(adoptionFormRef);

    set(newAdoptionFormRef, {
      date: date,
      name: dogName,
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
      occupation: occupation,
      workSchedule: workSchedule,
      rentOwn: rentOwn,
      landLordName: landLordName,
      landLordPhone: landLordPhone,
      houseType: houseType,
      numAdults: numAdults,
      numChilds: numChilds,
      childAges: childAges,
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
      prevPet1: {
        prevP1Type: prevP1Type,
        prevP1HowLongOwned: prevP1HowLongOwned,
      },
      prevPet2: {
        prevP2Type: prevP2Type,
        prevP2HowLongOwned: prevP2HowLongOwned,
      },
      aboutYourself: aboutYourself,
      activityLevel: activityLevel,
      allergies: allergies,
      fenced: fenced,
      yardSize: yardSize,
      whereKeptDay: whereKeptDay,
      whereKeptNight: whereKeptNight,
      crate: crate,
      hoursAlone: hoursAlone,
      obedienceClass: obedienceClass,
      giveUpDog: giveUpDog,
      surrendered: surrendered,
      reference1: {
        ref1Name: ref1Name,
        ref1Relation: ref1Relation,
        ref1Phone: ref1Phone,
      },
      reference2: {
        ref2Name: ref2Name,
        ref2Relation: ref2Relation,
        ref2Phone: ref2Phone,
      },
      vetName: vetName,
      vetPhone: vetPhone,
      vetCity: vetCity,
      vetState: vetState,
      petNamesOnFile: petNamesOnFile,
      readDisclaimer: readDisclaimer,
    });

    sendEmail();
    navigate("/thankyou");
  }

  return (
    <>
      <div className="userHtml container-fluid" id="noPadding">
        <UserNav />
        <Container className="mt-4 themeBlue">
          <h1 className="text-center mb-4">Adoption Application</h1>
          <Form ref={form} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Animal Name</Form.Label>
              <Form.Select
                required
                value={dogName}
                name="animalName"
                onChange={handleChange}
              >
                <option value="general">General (any Dog)</option>
                {adoptableDogs.map((dog, i) => (
                  <option key={i}>{dog.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
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
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                value={occupation}
                name="occupation"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Work Schedule</Form.Label>
              <Form.Control
                type="text"
                value={workSchedule}
                name="workSchedule"
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

                  <Form.Label className="mb-3">Gender &nbsp; &nbsp;</Form.Label>

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

                <Container id="fullContainer" className="mb-3 adoptionFormBox">
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

                  <Form.Label className="mb-3">Gender &nbsp; &nbsp;</Form.Label>

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
              </>
            )}
            <Form.Label>Please list any previous pets:</Form.Label>
            <br />
            <Container id="fullContainer" className="adoptionFormBox">
              <Form.Label>
                <b>Previous Pet #1</b>
              </Form.Label>
              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  value={prevP1Type}
                  onChange={(e) => setPrevP1Type(e.target.value)}
                >
                  <option>Select One</option>
                  <option>Cat</option>
                  <option>Dog</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>How long owned?</Form.Label>
                <Form.Control
                  type="text"
                  value={prevP1HowLongOwned}
                  onChange={(e) => setPrevP1HowLongOwned(e.target.value)}
                />
              </Form.Group>
            </Container>
            <br />
            <Container id="fullContainer" className="mb-3 adoptionFormBox">
              <Form.Label>
                <b>Previous Pet #2</b>
              </Form.Label>

              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  value={prevP2Type}
                  onChange={(e) => setPrevP2Type(e.target.value)}
                >
                  <option>Select One</option>
                  <option>Cat</option>
                  <option>Dog</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>How long owned?</Form.Label>
                <Form.Control
                  type="text"
                  value={prevP2HowLongOwned}
                  onChange={(e) => setPrevP2HowLongOwned(e.target.value)}
                />
              </Form.Group>
            </Container>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Please tell us a little about yourself, your past experience
                with dogs, and why you feel you could provide a good home for a
                rescue:
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={aboutYourself}
                onChange={(e) => setAboutYourself(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                What is the activity level of your household?
              </Form.Label>
              <Form.Select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
              >
                <option>Select One</option>
                <option>Very Active</option>
                <option>Active</option>
                <option>Quiet</option>
              </Form.Select>
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
            <Form.Group className="mb-3">
              <Form.Label>
                Where will the dog be kept during the day?
              </Form.Label>
              <Form.Control
                type="text"
                value={whereKeptDay}
                onChange={(e) => setWhereKeptDay(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Where will the dog be kept at night?</Form.Label>
              <Form.Control
                type="text"
                value={whereKeptNight}
                onChange={(e) => setWhereKeptNight(e.target.value)}
              />
            </Form.Group>
            <Form.Label className="mb-3">
              Will you use a crate? &nbsp;&nbsp;
            </Form.Label>
            <Form.Check
              inline
              label="yes"
              name="group8"
              type="radio"
              id={`crate`}
              onChange={() => setCrate("yes")}
            />
            <Form.Check
              inline
              label="no"
              name="group8"
              type="radio"
              id={`crate`}
              onChange={() => setCrate("no")}
            />
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
            <Form.Label className="mb-3">
              Would you enroll in obedience class if needed? &nbsp;&nbsp;
            </Form.Label>
            <Form.Check
              required
              inline
              label="yes"
              name="group9"
              type="radio"
              id={`obed`}
              onChange={() => setObedienceClass("yes")}
            />
            <Form.Check
              required
              inline
              label="no"
              name="group9"
              type="radio"
              id={`obed`}
              onChange={() => setObedienceClass("no")}
            />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                What might make you have to give up a dog?
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={giveUpDog}
                onChange={(e) => setGiveUpDog(e.target.value)}
              />
            </Form.Group>
            <Form.Label className="mb-3">
              Have you ever surrendered a pet to a shelter before? &nbsp;&nbsp;
            </Form.Label>
            <Form.Check
              required
              inline
              label="yes"
              name="group11"
              type="radio"
              id={`surrender`}
              onChange={() => setSurrendered("yes")}
            />
            <Form.Check
              required
              inline
              label="no"
              name="group11"
              type="radio"
              id={`surrender`}
              onChange={() => setSurrendered("no")}
            />{" "}
            <br />
            <Form.Label>
              Please list two personal (non-relative) references and their
              relationship to you:
            </Form.Label>
            <br />
            <Container id="fullContainer" className="mb-3 adoptionFormBox">
              <Form.Label>
                <b>Reference #1</b>
              </Form.Label>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={ref1Name}
                  onChange={(e) => setRef1Name(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Relationship</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={ref1Relation}
                  onChange={(e) => setRef1Relation(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={ref1Phone}
                  onChange={(e) => setRef1Phone(e.target.value)}
                />
              </Form.Group>
            </Container>
            <Container id="fullContainer" className="mb-3 adoptionFormBox">
              <Form.Label>
                <b>Reference #2</b>
              </Form.Label>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={ref2Name}
                  onChange={(e) => setRef2Name(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Relationship</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={ref2Relation}
                  onChange={(e) => setRef2Relation(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={ref2Phone}
                  onChange={(e) => setRef2Phone(e.target.value)}
                />
              </Form.Group>
            </Container>
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
              <b>Disclaimer:</b>
            </p>
            <p>
              Tiny Miracles reserves the right to conduct a home visit. Your vet
              and references will be contacted. Tiny Miracles reserves the right
              to determine the best placement for our dogs. <br />
              <b>
                Please Note: The application is not a guarantee of any dog
                placement, and if you are selected the adoption fee is $425.
              </b>
            </p>
            <Form.Label>
              I agree that I have read and understand the above
              disclaimer.&nbsp;{" "}
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
    </>
  );
}

export default AdoptionForm;
