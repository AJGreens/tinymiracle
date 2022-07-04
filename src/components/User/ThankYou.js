import React from "react";
import {Container} from 'react-bootstrap'
import UserNav from './UserNav'
import dog from './DogImages/wink.png'




function ThankYou(){





return(
    <>
    <UserNav/>
        <Container style = {{marginTop: '40px', textAlign: 'center'}}>
        
        
            <h2>Thank you for your application!  We will be in touch with you soon!</h2>
            <img src = {dog} style = {{width: "50%"}}/>
        
        </Container>
    </>







)






}




export default ThankYou