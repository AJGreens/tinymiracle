import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTractor,faPaw, faKitMedical} from '@fortawesome/free-solid-svg-icons'
import UserNav from './UserNav'
import widedog from './DogImages/widedog.jpg'

function Home(){
    return(
        
        <>
            <div className='container-fluid userHtml' id="noPadding">
                <UserNav />
                <div className = "beegDogFrame">
                    <img className ="beegDog" src = {widedog} alt ="cutedoggie"/>
                </div>
                <div id="extra3Padding">
                    <div className="container text-center">
                        {/* <h1 className="display-2 font-weight-bold">Tiny Miracles</h1> */}
                   
                        <Row className=" theme">
                            <Col>
                                <FontAwesomeIcon icon={faTractor} size="3x" />
                                <h2 className="mt-2">Farm</h2>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faPaw} size="3x" />
                                <h2 className="mt-2">Pet Care</h2>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faKitMedical} size="3x" />
                                <h2 className="mt-2">Rescue</h2>
                            </Col>
                        </Row>
                    </div>
                    <div className='container text-center homeMid'>
                        <Row>
                            <Col>
                                <h2>Our Inspiration</h2>
                                <p className="text-justify">Kim Rutherford is a lifelong animal lover, who’s caring and kindness to all creatures is well known in the community. She was able to turn her passion for animals into a business that she truly loves. Kim’s farm is an eclectic mix of furry and feathered friends, and she is always rescuing something new to add to the farm family.  Kim and her staff are committed to providing a loving home away from home for your pet!</p>
                            </Col>
                            <Col>
                                <h2>Our History</h2>
                                <p className="text-justify">Kim wanted to help animals by finding them their forever homes. She started her rescue in 2011. Every rescue becomes her child, just like her pet care kids. No matter the situation, Kim wants to save every soul possible. She wanted to save as many animals from kill shelters and puppy mills, as possible. If she could she would take in every single dog, who needs help. The dogs that are lucky enough to be saved by Kim, stay with her until they are ready to find a forever home. When the match between dog and family are perfect, Kim makes sure the rescue is going to his loving, caring, and forever home!</p>
                            </Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <h2>Follow Us</h2>
                        <Row>
                            <Col>
                                <a href="https://www.facebook.com/TinyMiraclesPetcare/"><FontAwesomeIcon icon={faFacebook} size="4x" /></a>
                            </Col>
                            <Col>
                                <a href="https://www.instagram.com/tinymiraclesrescue/"><FontAwesomeIcon icon={faInstagram} size="4x" /></a>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home