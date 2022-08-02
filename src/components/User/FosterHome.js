import React from "react";
import { Container, Button } from "react-bootstrap";
import Footer from "./Footer";
import UserNav from "./UserNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function FosterHome() {
  const navigate = useNavigate();

  function goToFosterApp(e) {
    e.preventDefault();
    navigate("/fosterApplication");
  }

  return (
    <>
      <div className="container-fluid userHtml" id="noPadding">
        <UserNav />
        <Container id="extra3PaddingTop" className="themeBlue pb-1">
          <h1 className="text-center">Interested in Fostering?</h1>
          <p className="squishTxtMini">
            Thank you for your interest in fostering a dog. Being a foster home
            is the greatest gift you can give a dog. The number of dogs we can
            rescue is directly proportionate to the number of foster homes we
            have. We promise that fostering will be one of the most rewarding
            things you will ever do. You and your family become the bridge to a
            forever home for a once throw away dog.
          </p>
          <p className="squishTxtMini">
            Things to keep in mind. Everyone in the home should be committed and
            excited about fostering a dog. The time commitment to foster varies;
            could be a couple of nights up to 3 weeks. You let us know what fits
            your family; from puppies to active dogs to seniors. All expenses
            are taken care of by Tiny Miracles including crate, food, and vet
            care. Your most important responsibility is to prepare your foster
            for life in his forever home; meaning socialization, leash skills,
            and simple obedience.
          </p>
          <p className="squishTxtMini">
            If this experience sounds fun and rewarding to you, please click on
            this link to complete a foster application. Once received by Tiny
            Miracles, a volunteer will call you to talk about any questions you
            may have.
          </p>
          <Button
            onClick={goToFosterApp}
            id="coolBtn"
            className="d-block m-auto"
          >
            Click Here to Apply <FontAwesomeIcon icon={faHouse} />
          </Button>
        </Container>
      </div>
      <Footer />
    </>
  );
}
