import React from 'react'
import HomeNav from './HomeNav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function PetCare(){

    return(
        <>
        <HomeNav />
        <div className="container"  style={{marginTop:40, textAlign: 'center'}}>
            <h2>Pet Care</h2>


            <h5>Your Pet’s Favorite Bucks County Bed & Breakfast!</h5>
            <div style = {{textAlign: "left"}}>
            <p>We know how difficult it is to leave your pet and our goal is to provide the best in care and comfort during your pet’s stay.  We treat each of our guests as if they are members of the Tiny Miracles Family.  Each day is filled with plenty of personal interaction, group playtime, love and attention.</p>
            </div><br/><br/>
            <h1>INSERT CAROUSEL OF DOG PICS HERE</h1>


            <h2 class="entry-title" itemprop="headline">Drop-off/Pick-up Hours</h2> 
            <div style = {{textAlign: 'left', margin: 'auto', width: '290px', border: 'red solid 0px'}}>
            <p style = {{marginBottom: "0"}}>Monday-Saturday:  
            <div style = {{float: 'right'}}><p style = {{marginBottom: "0"}}>8AM-10AM</p><p style = {{marginBottom: "0"}}>4PM-6PM</p></div></p>
<br/><br/>
            <p style = {{marginBottom: "0"}}>Sunday:  
            <div style = {{float: 'right', border: 'red solid 0px'}}><p>4PM-6PM <b>Only</b></p></div></p>
            <br/><p>Daycare:
            <div style = {{float: 'right', border: 'red solid 0px', overflow: 'hidden'}}>Drop-off during AM hours 
            <p style = {{paddingBottom: '0', marginBottom: '0'}}>
            Pick-up during PM hours

            </p>
            
            </div>
            </p>
            
            </div>
      

            <br/><br/><br/><br/>

            <h2 class="entry-title" itemprop="headline">Services and Rates</h2> 


<div style = {{textAlign:'left'}}><p><span ><b>Lodging and Daycare: </b>Tiny Miracles Farm is not your typical kennel.&nbsp; Our guests are treated as members of our family. </span> <span>Our accommodations include:</span></p>
<div style = {{margin: 'auto', width: '50%'}}>
<ul>
<li>
    <span >Appropriately sized accommodations</span>
<ul>
<li>Each room maintains its own heating and cooling unit</li>
</ul>
</li>
<li><span >Comfy bedding</span>
<ul>
<li>Includes yours or ours</li>
</ul>
</li>
<li><span >Maid service</span></li>
<li><span >Group and individual playtime</span></li>
<li><span>Meal service as directed</span>
<ul>
<li>Includes dispensing of minimal medications</li>
</ul>
</li>
<li><span >Individual exercise</span></li>
<li><span >Owner residing on premises</span></li>
<li><span >Highly trained staff of true animal lovers </span></li>
<li><span >Private kitty quarters</span></li>
<li><span >Plenty of TLC </span></li>
<li>Music played for all tastes</li>
</ul>
</div>

<br/><br/>

<p><span ><b>Rates:</b> </span>
Our rates and services are the same for all pets no matter the size, amount of medication, or special needs of your animal. There are no extra costs for complete care.<br/>
Effective Feb 1, 2022</p>
<ul>
<li><span >DOGS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
<ul>
<li><span >$60.00 / Overnight </span></li>
<li><span >$30.00 / Half Day</span></li>
<li><span >Daycare (Dogs Only) *updated*</span>
<ul>
<li><span >$35.00/Dog</span></li>
<li><span >Punch Cards will be provided, bring them in each day of daycare and after your 10th you get a free daycare on us!</span></li>
</ul>
</li>
</ul>
</li>
<li><span >CATS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
<ul>
<li><span >$40.00 / Overnight</span></li>
</ul>
</li>
</ul>
<br/><br/>
<div><span ><strong>Other Services Offered During Your Pups Stay:</strong></span><span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
<div><span >Bathing:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $25.00</span></div>
<div><span >Nails: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;$15.00</span></div>

<br/><br/><br/>
<div></div>
<div><span><span>We will need your pet’s license number as well as a proof of the following up to date vaccines: DOGS –&nbsp;Distemper, Parvo, Bordetella and Rabies; CATS – rabies and FVRCP (current within six months). Flea and tick prevention is greatly appreciated!</span></span></div>
<div></div>
<div>Please be on time. For every minute you’re late you will be donating a dollar to our rescue. (15 minutes late = $15 donation)</div>
<div>Cancellation fees will be charged for less than 24 hours’ notice of arrival time.<p></p>
</div>
<div>If you have any question or concerns, please contact Kim at (215) 997-2844.</div>
<div></div>
<div>Thank you.</div>
</div>

        </div>





        </>
    )
}

export default PetCare