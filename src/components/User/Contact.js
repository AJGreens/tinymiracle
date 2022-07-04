import React from 'react'
import UserNav from './UserNav'

function Contact(){
    return(
        <>
         <div className = "container-fluid userHtml text-center" id="noPadding">
        <UserNav />
       
        <div className="container" id="extra3Padding" >

        <h3>
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

<h3 >
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
        </div>
        </>
    )
}

export default Contact