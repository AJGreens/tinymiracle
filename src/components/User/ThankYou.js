import React from "react";
import { Container } from "react-bootstrap";
import UserNav from "./UserNav";
import dog from "./DogImages/wink.png";

function ThankYou() {
  return (
    <>
    <div className="container-fluid userHtml" id="noPadding">
      <UserNav />
      <div className="container text-center themeBlue" id="extra3Padding">
        <h2>
          Thank you for your application! We will be in touch with you soon!
        </h2>
        <img src={dog} alt="Cute Puppy" style={{ width: "50%" }} />
      </div>
    </div>
    </>
  );
}

export default ThankYou;
