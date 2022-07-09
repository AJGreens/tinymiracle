import React from "react";
import { useNavigate } from "react-router-dom";
import UserNav from "./UserNav";
import { Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function AdoptionProcess() {
  const navigate = useNavigate();
  let { token } = useParams();

  function goToAdoptionApplication() {
    navigate("/adoptionForm/" + token);
  }

  return (
    <>
    <div className = "userHtml container-fluid" id = "noPadding"> 
      <UserNav />
      
        <Container className="mt-4 themeBlue">
          <h1 style={{ textAlign: "center" }}>Adoption Process</h1>

          <ol>
            <li>Complete the online adoption application.</li>
            <br />
            <li>
              Phone Interview: We will call you to discuss your application and
              gather some additional information.
            </li>
            <br />
            <li>
              We will call the Personal and Veterinary references you listed on
              the application and contact you. Note: If you do not have a current
              / past pet - that is OK.
            </li>
            <br />
          </ol>
          <div style={{ textAlign: "center" }}>
            <Button onClick={goToAdoptionApplication}>
              Continue to Application
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AdoptionProcess;
