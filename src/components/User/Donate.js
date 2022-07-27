import React from "react";
import UserNav from "./UserNav";
import amazonSmile from "./DonatePics/amazonSmile.png";
import amazonWishList from "./DonatePics/amazonWishlist.png";
import paybal from "./DonatePics/paybal.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import donate from "./DogImages/donate.jpg";

function Donate() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      {loaded && (
        <div className="container-fluid userHtml" id="noPadding">
          <UserNav />
          <div className="beegDogFrame">
            <img src={donate} className="beegDog" />
          </div>
          <div className="container themeBlue mt-4">
            <div>
              <h1 className="text-center">
                Many Ways To Give <FontAwesomeIcon icon={faGift} />
              </h1>
              <div className="donateDiv">
                <Row className="donateRow">
                  <Col className="donateCol">
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

                        <h3 className="text-center">
                          <a
                            className="donateHeaders"
                            target="_blank"
                            href="https://www.paypal.com/donate?business=tinymiraclesfarm@gmail.com&no_recurring=0&item_name=Tiny Miracles Rescue&currency_code=USD"
                            rel="noreferrer"
                          >
                            Donate via PayPal &nbsp;
                            <img
                              alt="Paybal"
                              src={paybal}
                              className="donatePics"
                            />
                            {/* <input
                              type="image"
                              src="https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif"
                              className="donatePics"
                              name="submit"
                              alt="PayPal - The safer, easier way to pay online!"
                              /> */}
                          </a>
                        </h3>
                        <p className="donateP">
                          {" "}
                          Make a direct, tax deductible donation.{" "}
                        </p>
                      </form>
                    </div>
                  </Col>
                  <Col className="donateCol">
                    <div className="container">
                      <h3 className="text-center">
                        <a
                          className="donateHeaders"
                          target="_blank"
                          href="https://smile.amazon.com/charity?orig=%2F"
                          rel="noreferrer"
                        >
                          Sign in with&nbsp;
                          <input
                            type="image"
                            className="donatePics"
                            src={amazonSmile}
                            name="submit"
                            alt="AmazonSmile"
                          />
                        </a>
                      </h3>
                      <p className="donateP">
                        Instead of shopping with your account on amazon.com,
                        start shopping on smile.amazon.com supporting Tiny
                        Miracles Rescue. Each time you shop amazon sends us a
                        donation. It doesn’t cost you anything extra.
                      </p>
                    </div>
                  </Col>
                  <Col className="donateCol">
                    <div className="container">
                      <form
                        id="barkForm"
                        action="https://barkbox.com/tinymiracles"
                        method="post"
                        target="_blank"
                      >
                        <h3 className="text-center">
                          <a
                            target="_blank"
                            href="https://www.amazon.com/hz/wishlist/ls/28FVI645Q406D?ref_=abls_nvfly_yl"
                            className="donateHeaders"
                          >
                            Check our &nbsp;
                            <img
                              type="image"
                              className="donatePics"
                              src={amazonWishList}
                              alt="BarkBox"
                              style={{ marginTop: "-25px" }}
                            />
                          </a>
                        </h3>
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
          </div>
        </div>
      )}
    </>
  );
}

export default Donate;
