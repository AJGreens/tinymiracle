import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../Firebase";
import { ref, onValue } from "firebase/database";
import { Container } from "react-bootstrap";
import AdminNav from "./AdminNav";

export default function SpecificFosterApp() {
    const { token } = useParams();

    const [info, setInfo] = useState();
  
    useEffect(() => {
      const dbRef = ref(database, "fosterApplications/" + token);
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        setInfo(data);
      });
    }, [token]);
  
    return (
      <>
        <AdminNav />
        <Container className="main">
          {info != null && (
            <div className="specificBigDiv">
              <h1 className="text-center">Applicant: {info["applicantName"]}</h1>
  
              <div className="row text-center specificRow">
                <div className="col-sm">
                  <div className="inSpecificCol leftAlignDiv">

                    <p>
                      <b>Application Date: </b> {info["date"]}
                    </p>
                    <p>
                      <b>Applicant Info:</b>&nbsp;
                      <br />
                      {info["applicantName"]}
                      {info["partnerName"] ? " and " + info["partnerName"] : ""}
                      <br />
                      {info["address"].streetAddress && (
                        <>
                          {info["address"].streetAddress} <br />
                        </>
                      )}
                      {info["address"].addressLine2 && (
                        <>
                          {info["address"].addressLine2} <br />
                        </>
                      )}
                      {info["address"].city && info["address"].city + ", "}
                      {info["address"].state && info["address"].state + " "}
                      {info["address"].zip && info["address"].zip}
                    </p>
  
                    {info["applicantAge"] && (
                      <p>
                        <b>Age:</b> {info["applicantAge"]}
                      </p>
                    )}
                    {info["phone"] && (
                      <p>
                        <b>Phone:</b> {info["phone"]}
                      </p>
                    )}
                    {info["emailAddress"] && (
                      <p>
                        <b>Email:</b> {info["emailAddress"]}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-sm">
                  <div className="inSpecificColB leftAlignDiv">

                    {info["rentOwn"] && (
                      <p>
                        <b>Rent or Own:</b> {info["rentOwn"]}
                      </p>
                    )}
                    {info["landLordName"] && (
                      <p>
                        <b>Land Lord Info:</b> {info["landLordName"]}{" "}
                        {info["landLordPhone"] &&
                          "(Phone: " + info["landLordPhone"] + ")"}
                      </p>
                    )}
                    {info["houseType"] && (
                      <p>
                        <b>House Type:</b> {info["houseType"]}
                      </p>
                    )}
                    {info["numAdults"] && (
                      <p>
                        <b>Adults in House:</b> {info["numAdults"]}
                      </p>
                    )}
                    {info["numChilds"] && (
                      <p>
                        <b>Children in House:</b> {info["numChilds"]}
                      </p>
                    )}
                    {info["childAges"] && (
                      <p>
                        <b>Ages of Children:</b> {info["childAges"]}
                      </p>
                    )}
                    {info["hasPets"] !== "" && (
                      <p>
                        <b>Currently Has Pets?:</b>{" "}
                        {info["hasPets"] ? "yes" : "no"}
                      </p>
                    )}

                    
                  </div>
                </div>
                {info["hasPets"] === false && (
                        <hr/>
                    )}
  
                <div style={{ display: "inline-block" }}>
                  {(info["currPet1"].p1Gender ||
                    info["currPet1"].p1HowLongOwned ||
                    info["currPet1"].p1Type ||
                    info["currPet1"].p1Spayed) && (
                    <p className="box">
                      <b>Current Pet #1: </b>
                      <br />
                      {info["currPet1"].p1Type && (
                        <>Type: {info["currPet1"].p1Type} </>
                      )}
                      <br />
                      {info["currPet1"].p1Gender && (
                        <>Gender: {info["currPet1"].p1Gender} </>
                      )}
                      <br />
                      {info["currPet1"].p1Spayed && (
                        <>Spayed/Neutered: {info["currPet1"].p1Spayed} </>
                      )}
                      <br />
                      {info["currPet1"].p1HowLongOwned && (
                        <>How Long Owned: {info["currPet1"].p1HowLongOwned} </>
                      )}
                      <br />
                    </p>
                  )}
  
                  {(info["currPet2"].p2Gender ||
                    info["currPet2"].p2HowLongOwned ||
                    info["currPet2"].p2Type ||
                    info["currPet2"].p2Spayed) && (
                    <p className="box">
                      <b>Current Pet #2: </b>
                      <br />
                      {info["currPet2"].p2Type && (
                        <>Type: {info["currPet2"].p2Type} </>
                      )}
                      <br />
                      {info["currPet2"].p2Gender && (
                        <>Gender: {info["currPet2"].p2Gender} </>
                      )}
                      <br />
                      {info["currPet2"].p2Spayed && (
                        <>Spayed/Neutered: {info["currPet2"].p2Spayed} </>
                      )}
                      <br />
                      {info["currPet2"].p2HowLongOwned && (
                        <>How Long Owned: {info["currPet2"].p2HowLongOwned} </>
                      )}
                      <br />
                    </p>
                  )}
  
                </div>
  
                <div className="col-sm">
                  <div className="inSpecificCol leftAlignDiv">
                  {info["morePetsOther"] && (
                      <p>
                        <b>More current pets and "other" types from above:</b> {info["morePetsOther"]}
                      </p>
                    )}
                    {info["getAlong"] && (
                      <p>
                        <b>Do your pets get along with other animals:</b> {info["getAlong"]}
                      </p>
                    )}
                    {info["aboutYourself"] && (
                      <p>
                        <b>Tell Us About Yourself:</b> {info["aboutYourself"]}
                      </p>
                    )}
                    {info["allergies"] && (
                      <p>
                        <b>Pet Allergies:</b> {info["allergies"]}
                      </p>
                    )}
                    {info["fenced"] && (
                      <p>
                        <b>Yard Fenced:</b> {info["fenced"]}
                      </p>
                    )}
                    {info["yardSize"] && (
                      <p>
                        <b>Yard Size:</b> {info["yardSize"]}
                      </p>
                    )}
                  </div>
                </div>
  
                <div className="col-sm">
                  <div className="inSpecificColB leftAlignDiv">
                    {info["hoursAlone"] && (
                      <p>
                        <b>Hours Dog Will be Left Alone:</b> {info["hoursAlone"]}
                      </p>
                    )}
                  </div>
                </div>
  
                <div style={{ display: "inline-block" }}>
                  {(info["vetName"] ||
                    info["vetPhone"] ||
                    info["vetCity"] ||
                    info["vetState"]) && (
                    <p className="box">
                      <b>Vet Info: </b>
                      <br />
                      {info["vetName"] && <>Name: {info["vetName"]} </>}
                      <br />
                      {info["vetPhone"] && <>Phone: {info["vetPhone"]} </>}
                      <br />
                      {(info["vetCity"] || info["vetState"]) && (
                        <>
                          Address:{" "}
                          {info["vetState"] && info["vetCity"]
                            ? info["vetState"] + ", " + info["vetCity"]
                            : info["vetState"] + info["vetCity"]}
                        </>
                      )}
                      <br />
                    </p>
                  )}
                </div>
  
                {info["petNamesOnFile"] && (
                  <p>
                    <b>Pet Names on File:</b> {info["petNamesOnFile"]}
                  </p>
                )}
              </div>
            </div>
          )}
        </Container>
      </>
    );
}
