import React from "react";
import UserNav from "./UserNav";
import amazonSmile from "./DonatePics/amazonSmile.png";
import barkBox from "./DonatePics/barkBox.svg";
import paybal from "./DonatePics/paybal.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

function Donate() {
  return (
    <>
      <div className="container-fluid userHtml" id="noPadding">
        <UserNav />
        <div className="container themeBlue" id="extra3Padding">
          <div>
            <h1 className="text-center">
              Many Ways To Give <FontAwesomeIcon icon={faGift} />
            </h1>
            <ul className="donateList">
              <li>
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

                    <h2 className="text-center">
                      <a
                        className="donateHeaders"
                        target="_blank"
                        href="https://www.paypal.com/donate?business=tinymiraclesfarm@gmail.com&no_recurring=0&item_name=Tiny Miracles Rescue&currency_code=USD"
                        rel="noreferrer"
                      >
                        Donate via PayPal &nbsp;
                        <img alt="Paybal" src={paybal} className="donatePics" />
                        {/* <input
                            type="image"
                            src="https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif"
                            className="donatePics"
                            name="submit"
                            alt="PayPal - The safer, easier way to pay online!"
                            /> */}
                      </a>
                    </h2>
                    <p className="donateP">
                      {" "}
                      Make a direct, tax deductible donation.{" "}
                    </p>
                  </form>
                </div>
              </li>
              <li>
                <div className="container">
                  <h2 className="text-center">
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
                  </h2>
                  <p className="donateP">
                    Instead of shopping with your account on amazon.com, start
                    shopping on smile.amazon.com supporting Tiny Miracles
                    Rescue. Each time you shop amazon sends us a donation. It
                    doesn’t cost you anything extra.
                  </p>
                </div>
              </li>
              <li>
                <div className="container">
                  <form
                    id="barkForm"
                    action="https://barkbox.com/tinymiracles"
                    method="post"
                    target="_blank"
                  >
                    <h2 className="text-center">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("barkForm").submit();
                        }}
                        href="/"
                        className="donateHeaders"
                      >
                        Sign up for Bark Box&nbsp;
                        <img
                          type="image"
                          className="donatePics"
                          src={barkBox}
                          alt="BarkBox"
                        />
                      </a>
                    </h2>
                    <p className="donateP">
                      Support us AND get 10% off when you use our special code:
                      TINYMIRACLES. Help us raise some serious bones – we get a
                      $15 donation with every order! Get started at BarkBox.com!
                    </p>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;
