import React from 'react'
import HomeNav from './UserNav'


function Contact(){
    return(
        <>
        <HomeNav />
        <div className="container"  style={{marginTop:40}}>

        <h3 style = {{marginLeft: "25%"}}>
        Pet Care & Day Care Contact
            </h3>

<div id = "contactOptions">           
<p>
Address:
696 New Galena Rd
Chalfont, PA 18914
</p>
<p>
Phone Number:
215-997-2844
</p>
<p>
Email:
tiny_miracles@msn.com
</p>
</div>

<h3 style = {{marginTop: 50, marginLeft: "25%"}}>
Rescue Contact
            </h3>

<div id = "contactOptions" >
<p>
Phone Number:
215-997-2844
</p>
<p>
Email:
info@tinymiraclesrescue.com
</p>

<p>
TO MEET RESCUE DOGS: Please submit an application and we will have a representative get back to you ASAP.<br/>

***Most of our rescue dogs are going/are in foster care and not at the farm.***
</p>
</div> 



        </div>
        </>
    )
}

export default Contact