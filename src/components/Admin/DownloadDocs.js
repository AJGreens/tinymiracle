import React from 'react'
import {Button} from 'react-bootstrap'
import AdoptionContract from './DownloadedDocs/AdoptionContract.pdf'
import FosterApplication from './DownloadedDocs/FosterApplication.pdf'
import LiabilityAgreementWaiver from './DownloadedDocs/LiabilityAgreementWaiver.pdf'
import OwnerSurrender from './DownloadedDocs/OwnerSurrender.pdf'
import FosterGuidelines from './DownloadedDocs/FosterGuidelines.pdf'
import KennelLicense from './DownloadedDocs/KennelLicense.pdf'
import fiveZeroOne from './DownloadedDocs/501c3.pdf'
import AdminNav from './AdminNav'


function DownloadDocs(){


    return (
        <>
            <AdminNav />
            <div className='outerFlex'>
                
                <div className="text-center">
                    <h1>Documents</h1>
                    <a href={AdoptionContract} rel="noopener noreferrer" target="_blank">
                        <Button size="lg" className="downloadBtns">Adoption Contract</Button>
                    </a>
                    <br/>
                    <a href={FosterApplication} rel="noopener noreferrer" target="_blank">
                        <Button size="lg" className="downloadBtns">Foster Application</Button>
                    </a>    
                    <br/>
                    <a href={LiabilityAgreementWaiver} rel="noopener noreferrer" target="_blank">
                        <Button size="lg" className="downloadBtns">Foster/Volunteer Waiver</Button>
                    </a>
                    <br/>
                    <a href={OwnerSurrender} rel="noopener noreferrer" target="_blank">
                        <Button size="lg" className="downloadBtns">Owner Surrender Form</Button>
                    </a>
                    <br/>
                    <a href={FosterGuidelines} rel="noopener noreferrer" target="_blank">
                        <Button size="lg" className="downloadBtns">Foster Guidelines</Button>
                    </a>
                    <br/>
                    <a href={KennelLicense} rel="noopener noreferrer" target="_blank">
                        <Button size="lg" className="downloadBtns">Kennel License</Button>
                    </a>
                    <br/>
                    <a href={fiveZeroOne} rel="noopener noreferrer" target="_blank">
                       <Button size="lg" className="downloadBtns">5013c</Button>
                </a>
                </div>


            </div>
        </>
    )


}


export default DownloadDocs