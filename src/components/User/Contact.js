import React from "react";
import UserNav from "./UserNav";
import contactUs from "./DogImages/contactUs.jpg";

function Contact() {
  return (
    <>
      <div
        className="container-fluid userHtml text-center themeBlue"
        id="noPadding"
      >
        <UserNav />
        <div className="beegDogFrame">
          <img src={contactUs} className="beegDog" />
        </div>

        <div className="container" id="extra3Padding">
          <div className="row">
            <div className="col-sm">
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <h3>Pet Care & Day Care</h3>
                <div id="contactOptions">
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
              </div>
            </div>
            <div className="col-sm">
              <div style={{ display: "inline-block", textAlign: "left" }}>
                <h3>Rescue</h3>
                <div id="contactOptions">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
