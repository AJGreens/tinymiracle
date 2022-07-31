import React from "react";
import UserNav from "./UserNav";
import amazonSmile from "./DonatePics/amazonSmile.png";
import amazonWishList from "./DonatePics/amazonWishlist.png";
import paybal from "./DonatePics/paybal.gif";
import { Row, Col } from "react-bootstrap";
import donate from "./DogImages/donateDogPic.jpg";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faAmazon, faPaypal } from "@fortawesome/free-brands-svg-icons";

function Donate() {
  return (
    <>
      <div className="container-fluid userHtml" id="noPadding">
        <UserNav />
        {/* <Row id="noMarginExtraPadding"> */}
        {/* <Col
            md={12}
            lg={6}
            className="container themeBlue d-flex align-items-center"
          > */}
        <Row id="noMarginExtraPadding">
          <Col lg={1}></Col>
          <Col lg={6} className="d-flex align-items-center">
            <div>
              <h3 className="underlineHeading themeBlue">Many Ways To Give</h3>
              <div className="donateDiv themeBlue">
                <Row className="donateRow themeBlue">
                  <Col xs={12}>
                    <div className="container">
                      <form
                        action="https://www.paypal.com/cgi-bin/webscr"
                        method="post"
                      >
                        <input type="hidden" name="cmd" value="_donations" />
                        <input
                          type="hidden"
                          name="business"
                          value="tinymiraclesfarm@gmail.com"
                        />
                        <input
                          type="hidden"
                          name="item_name"
                          value="Tiny Miracles Rescue"
                        />
                        <input type="hidden" name="currency_code" value="USD" />

                        <h4 className="text-center">
                          <FontAwesomeIcon icon={faArrowRight} />{" "}
                          <a
                            className="donateHeaders"
                            target="_blank"
                            href="https://www.paypal.com/donate?business=tinymiraclesfarm@gmail.com&no_recurring=0&item_name=Tiny Miracles Rescue&currency_code=USD"
                            rel="noreferrer"
                          >
                            Donate via PayPal{" "}
                            <FontAwesomeIcon
                              className="themeBlue"
                              icon={faPaypal}
                            />
                            {/* &nbsp;{" "}
                            <img
                              alt="Paybal"
                              src={paybal}
                              className="donatePics"
                            />
                            &nbsp;&nbsp;
                            <FontAwesomeIcon
                              className="themeBlue"
                              icon={faHandPointLeft}
                            /> */}
                            {/* <input
                              type="image"
                              src="https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif"
                              className="donatePics"
                              name="submit"
                              alt="PayPal - The safer, easier way to pay online!"
                              /> */}
                          </a>
                        </h4>
                        <p className="donateP">
                          {" "}
                          Make a direct, tax deductible donation.{" "}
                        </p>
                      </form>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="container">
                      <h4 className="text-center">
                        <FontAwesomeIcon icon={faArrowRight} />{" "}
                        <a
                          className="donateHeaders"
                          target="_blank"
                          href="https://smile.amazon.com/charity?orig=%2F"
                          rel="noreferrer"
                        >
                          Sign in with Amazon{" "}
                          <FontAwesomeIcon
                            className="themeBlue"
                            icon={faAmazon}
                          />
                          {/* &nbsp;
                          <input
                            type="image"
                            className="donatePics"
                            src={amazonSmile}
                            name="submit"
                            alt="AmazonSmile"
                          /> */}
                        </a>
                        {/* &nbsp;&nbsp;
                        <FontAwesomeIcon
                          className="themeBlue"
                          icon={faHandPointLeft}
                        /> */}
                      </h4>
                      <p className="donateP">
                        Instead of shopping with your account on amazon.com,
                        start shopping on smile.amazon.com supporting Tiny
                        Miracles Rescue. Each time you shop amazon sends us a
                        donation. It doesn’t cost you anything extra.
                      </p>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="container">
                      <form
                        id="barkForm"
                        action="https://barkbox.com/tinymiracles"
                        method="post"
                        target="_blank"
                      >
                        <h4 className="text-center">
                          <FontAwesomeIcon icon={faArrowRight} />{" "}
                          <a
                            target="_blank"
                            href="https://www.amazon.com/hz/wishlist/ls/28FVI645Q406D?ref_=abls_nvfly_yl"
                            className="donateHeaders"
                          >
                            Check our WishList{" "}
                            <FontAwesomeIcon
                              className="themeBlue"
                              icon={faGift}
                            />
                            {/* &nbsp;
                            <img
                              type="image"
                              className="donatePics"
                              src={amazonWishList}
                              alt="BarkBox"
                              style={{ marginTop: "-25px" }}
                            /> */}
                          </a>
                          {/* &nbsp;&nbsp;
                          <FontAwesomeIcon
                            className="themeBlue"
                            icon={faHandPointLeft}
                          /> */}
                        </h4>
                        <p className="donateP">
                          Purchase something for Tiny Miracles Rescue Animals
                          from our wish list. It's the most personal way to
                          give!
                        </p>
                      </form>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col md={12} lg={4} className="verticalDogPic">
            <img src={donate} />
          </Col>
          <Col lg={1}></Col>
        </Row>
        {/* </Col> */}

        {/* </Row> */}
      </div>

      <Footer />
    </>
  );
}

export default Donate;
