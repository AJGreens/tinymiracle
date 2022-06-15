import React from 'react'
import UserNav from './UserNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon, faPaypal } from "@fortawesome/free-brands-svg-icons"

function Donate(){
    const bullet ={
        fontSize: 25,
        marginBottom: 0,
        // paddingBottom: 0

        }

    return(
        <>
        
        <UserNav />
        <div className="container">
            <div id="centerColumn">
			    <h1 style = {{marginTop: 40}}>Many Ways To Give!</h1><br/>
				<div id="donateOptions">
                    <ul style = {{listStyle: 'none'}}>
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                            <input type="hidden" name="cmd" value="_donations"/>
                            <input type="hidden" name="business" value="tinymiraclesfarm@gmail.com"/>
                            <input type="hidden" name="item_name" value="Tiny Miracles Rescue"/>
                            <input type="hidden" name="currency_code" value="USD"/> 
                            <li>
                                <p style = {bullet}>Donate via PayPal <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif" 
                                style={{verticalAlign: 'middle'}} name="submit" alt="PayPal - The safer, easier way to pay online!"/></p>
                                <p id = "minorText"> Make a direct, tax deductible donation. </p>
                            </li>

                        </form>
                        <li>
                            <p class="txt1" style = {bullet}>Sign in with <a href="https://smile.amazon.com/charity?orig=%2F"> <input type="image" style = {{ width: 180, verticalAlign: 'middle', overflow: 'hidden', marginTop: 10, paddingBottom: -20 }} src="https://www.globaldownsyndrome.org/wp-content/uploads/2019/12/Amazon-Smile-Logo-e1457724074257-768x263.jpg" name="submit" alt="AmazonSmile"/></a></p><p id = "minorText" style = {{marginTop: -20}}> Instead of shopping with your account on amazon.com, start shopping on smile.amazon.com supporting Tiny Miracles Rescue. Each time you shop amazon sends us a donation. It doesn’t cost you anything extra.</p>
                        </li>
                        <li style = {{padding: "50px, 0px", marginTop: '30px'}}>
                            <form action="https://barkbox.com/tinymiracles" method="post">
                                <p class="txt1" style = {bullet}>Sign up for Bark Box for your pup&nbsp;&nbsp;<input type="image" style = {{height: 32, verticalAlign: 'middle'}} src="https://assets.barkbox.com/assets/logo/rebrand-product-logos/box-f3a20a5bfd39980fd458f19cc2b5714d99a72876ffce61520ed21e7ee275db89.svg"  name="submit" alt="BarkBox"/></p>
                                <p id = "minorText">Support us AND get 10% off when you use our special code: TINYMIRACLES. Help us raise some serious bones – we get a $15 donation with every order! Get started at BarkBox.com!</p>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default Donate