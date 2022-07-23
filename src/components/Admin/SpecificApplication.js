import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../Firebase";
import { ref, onValue } from "firebase/database";
import { Container } from "react-bootstrap";
import AdminNav from "./AdminNav";

function SpecificApplication() {
  const { token } = useParams();

  const [info, setInfo] = useState();

  useEffect(() => {
    const dbRef = ref(database, "adoptionForms/" + token);
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
                    <b>Dog Name: </b>
                    {info["name"]}
                  </p>
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
                  {info["occupation"] && (
                    <p>
                      <b>Occupation:</b> {info["occupation"]}
                    </p>
                  )}
                  {info["workSchedule"] && (
                    <p>
                      <b>Work Schedule:</b> {info["workSchedule"]}
                    </p>
                  )}
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

              {info["hasPets"] === false && info["prevPet1"].prevP1Type ==="" && info["prevPet2"].prevP2Type ==="" && info["prevPet1"].prevP1HowLongOwned ==="" && info["prevPet2"].prevP2HowLongOwned ==="" && (
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

                {(info["prevPet1"].prevP1Type ||
                  info["prevPet1"].prevP1HowLongOwned) && (
                  <p className="box">
                    <b>Previous Pet #1: </b>
                    <br />{" "}
                    {info["prevPet1"].prevP1Type && (
                      <>Type: {info["prevPet1"].prevP1Type} </>
                    )}
                    <br />
                    {info["prevPet1"].prevP1HowLongOwned && (
                      <>
                        How Long Owned: {info["prevPet1"].prevP1HowLongOwned}{" "}
                      </>
                    )}
                    <br />
                    <br />
                    <br />
                  </p>
                )}

                {(info["prevPet2"].prevP2Type ||
                  info["prevPet2"].prevP2HowLongOwned) && (
                  <p className="box">
                    <b>Previous Pet #2: </b>
                    <br />{" "}
                    {info["prevPet2"].prevP2Type && (
                      <>Type: {info["prevPet2"].prevP2Type} </>
                    )}
                    <br />
                    {info["prevPet2"].prevP2HowLongOwned && (
                      <>
                        How Long Owned: {info["prevPet2"].prevP2HowLongOwned}{" "}
                      </>
                    )}
                    <br />
                    <br />
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
                  {info["aboutYourself"] && (
                    <p>
                      <b>Tell Us About Yourself:</b> {info["aboutYourself"]}
                    </p>
                  )}
                  {info["activityLevel"] && (
                    <p>
                      <b>Activity Level of Household:</b>{" "}
                      {info["activityLevel"]}
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
                  {info["whereKeptDay"] && (
                    <p>
                      <b>Where Will Dog be Kept During Day:</b>{" "}
                      {info["whereKeptDay"]}
                    </p>
                  )}
                  {info["whereKeptNight"] && (
                    <p>
                      <b>Where Will Dog be Kept at Night:</b>{" "}
                      {info["whereKeptNight"]}
                    </p>
                  )}
                  {info["crate"] && (
                    <p>
                      <b>Will You Use a Crate:</b> {info["crate"]}
                    </p>
                  )}
                  {info["hoursAlone"] && (
                    <p>
                      <b>Hours Dog Will be Left Alone:</b> {info["hoursAlone"]}
                    </p>
                  )}
                  {info["obedienceClass"] && (
                    <p>
                      <b>Enroll in Obedience Classes if Needed:</b>{" "}
                      {info["obedienceClass"]}
                    </p>
                  )}
                  {info["giveUpDog"] && (
                    <p>
                      <b>What Might Make You Give up a Dog:</b>{" "}
                      {info["giveUpDog"]}
                    </p>
                  )}
                  {info["surrendered"] && (
                    <p>
                      <b>Ever Surrendered a Pet to a Shelter:</b>{" "}
                      {info["surrendered"]}
                    </p>
                  )}
                </div>
              </div>

              <div style={{ display: "inline-block" }}>
                <p className="box">
                  <b>Reference #1: </b>
                  <br />
                  {info["reference1"].ref1Name && (
                    <>
                      Name: {info["reference1"].ref1Name} <br />
                    </>
                  )}
                  {info["reference1"].ref1Phone && (
                    <>
                      Phone: {info["reference1"].ref1Phone} <br />
                    </>
                  )}
                  {info["reference1"].ref1Relation && (
                    <>
                      Relation: {info["reference1"].ref1Relation} <br />
                    </>
                  )}
                </p>

                <p className="box">
                  <b>Reference #2: </b>
                  <br />
                  {info["reference2"].ref2Name && (
                    <>
                      Name: {info["reference2"].ref2Name} <br />
                    </>
                  )}
                  {info["reference2"].ref2Phone && (
                    <>
                      Phone: {info["reference2"].ref2Phone} <br />
                    </>
                  )}
                  {info["reference2"].ref2Relation && (
                    <>
                      Relation: {info["reference2"].ref2Relation} <br />
                    </>
                  )}
                </p>

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

export default SpecificApplication;
