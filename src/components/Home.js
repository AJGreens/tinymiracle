import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import HomeNav from './HomeNav'

function Home(){
    return(
        <>
        <HomeNav />
        <div className="container">
            <h2>Hello World</h2>
        </div>
        </>
    )
}

export default Home