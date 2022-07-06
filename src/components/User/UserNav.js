import React from 'react'
import{Navbar,Nav, Container} from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import logo from './DogImages/weblogo.png'
import {useAuth} from "../Admin/AuthContext"

function UserNav(){

    const {user,signingOut}= useAuth()

    async function handleSignOut(){
        try{
            await signingOut()
        }
        catch{
            console.log("error signing out")
        }
    }





    return(
        <>
            <div className="container-fluid userNav text-center">
                <img src = {logo} id="logoPic"/>
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <NavLink  className={({isActive})=> "nav-link "+ (isActive? "homeNavActiveLink": "homeNavLink")}  to="/">Home</NavLink>
                                <NavLink  className={({isActive})=> "nav-link "+ (isActive? "homeNavActiveLink": "homeNavLink")} to="/adoptabledogshome">Adoptable Dogs</NavLink>
                                <NavLink  className={({isActive})=> "nav-link "+ (isActive? "homeNavActiveLink": "homeNavLink")} to="/petcare">Pet Care</NavLink>
                                <NavLink  className={({isActive})=> "nav-link "+ (isActive? "homeNavActiveLink": "homeNavLink")} to="/donate">Donate</NavLink>
                                <NavLink  className={({isActive})=> "nav-link "+ (isActive? "homeNavActiveLink": "homeNavLink")} to="/contact">Contact</NavLink>
                                {user?<NavLink  className= "nav-link homeNavLink" to="/admin">Admin</NavLink>: <NavLink className = "nav-link homeNavLink" to="/login">Login</NavLink>}
                                {user && <NavLink  className="nav-link homeNavLink" onClick={handleSignOut}>Logout</NavLink>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            
        </>
        
        
    )
    
}

export default UserNav
