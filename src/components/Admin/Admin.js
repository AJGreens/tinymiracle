import React,{useState, useEffect} from 'react'
import {Button, Card,Container} from 'react-bootstrap'
import AdminNav from './AdminNav'
import {Link} from 'react-router-dom'
import {database} from '../Firebase'
import {ref, get, update,set} from "firebase/database";


function Admin(){

    const currYear= new Date().getFullYear()
    const [allFosters,setAllFosters]= useState()

    
    useEffect(()=>{
        const lastAccessRef= ref(database,"lastAccess")
        get(lastAccessRef).then((snapshot)=>{
            const data= snapshot.val()
            if(data!==currYear||data===null){
                Object.entries(allFosters).map(([key,value])=>{
                    if(value["currFostering"]){
                        const newAllFosteredForCurrFoster= ref(database, "contacts/active/"+key+"/allFoster/"+currYear)
                        update(newAllFosteredForCurrFoster, value["currFostering"])
                    }
                })
                set(lastAccessRef,currYear)
            }
  

        })

    },[allFosters])


    useEffect(()=>{
        const allFostersRef= ref(database, "contacts/active")
        get(allFostersRef).then((snapshot)=>{
            setAllFosters(snapshot.val())
        })
    },[])



    return(
        <>
            <AdminNav/>
            <Container>
                <Card>
                    <Card.Body className="d-grid gap-3 text-center">
                        <Link to="/manageAnimals">
                            <Button size="lg">ManageAnimals</Button>
                        </Link>
                        <Link to="/manageContacts">
                            <Button size="lg">ManageContacts</Button>
                        </Link>
                        <Link to="/downloadDocs">
                            <Button size="lg">Download Docs</Button>
                        </Link>
                        <Link to="/dogWarden">
                            <Button size="lg">Dog Warden Report</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Admin