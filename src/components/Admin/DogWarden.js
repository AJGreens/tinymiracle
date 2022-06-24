import React, {useState, useEffect} from 'react'
import AdminNav from './AdminNav'
import {Table} from 'react-bootstrap'
import {ref, onValue} from 'firebase/database'
import {database} from '../Firebase'

function DogWarden(){
    const currentYear= new Date().getFullYear();
    const lastYear= currentYear-1;
    const [adoptedDogsCurr, setAdoptedDogsCurr]= useState(0)
    const [adoptedDogsPast, setAdoptedDogsPast]= useState(0)
    const [adoptableDogs, setAdoptableDogs]= useState(0)
    const [pendingAdoptions, setPendingAdoptions]= useState(0)
    const [fosters, setFosters]= useState([])

    useEffect(()=>{
        const adoptableRef= ref(database, 'animals/adoptable')
        const otherRef= ref(database, 'animals/other')
        const fostersRef= ref(database, 'contacts/active')
        onValue(adoptableRef, (snapshot)=>{
            const data= snapshot.val()
            if(data!=null){
                setAdoptableDogs(Object.keys(data).length)
            }
        })

        onValue(otherRef, (snapshot)=>{
            const data= snapshot.val()
            if(data!=null){
                let allPending= Object.entries(data).filter((([key,val])=>val.status==="Pending")).map(([key,val])=>{
                    return val.status
                })
                setPendingAdoptions(allPending.length)

                let allAdoptedCurr= Object.entries(data).filter(([key,val])=> val.status==="Adopted"&&(parseInt(val.dateAdopted.split("-")[0],10))===currentYear).map(([key,val])=>{
                    return key
                })
                setAdoptedDogsCurr(allAdoptedCurr.length)

                let allAdoptedPast= Object.entries(data).filter(([key,val])=> val.status==="Adopted"&&(parseInt(val.dateAdopted.split("-")[0],10))===lastYear).map(([key,val])=>{
                    return key
                })
                setAdoptedDogsPast(allAdoptedPast.length)


            }
        })

        onValue(fostersRef, (snapshot)=>{
            const data= snapshot.val()
            if(data!=null){
                let allFosters= Object.entries(data).map(([key, value])=>{
                    return {id:value.id, name: value.name, address: value.address, city: value.city, state: value.state,
                        currFostering: value.currFostering? Object.keys(value.currFostering).length:0, currYearFostered: value.allFoster? value.allFoster[currentYear]?Object.keys(value.allFoster[currentYear]).length:0:0}
                })
                setFosters(allFosters)


            }
        })



    },[currentYear, lastYear])







    return(
        <div className='container text-center'>
            <AdminNav/>
            <h1>Dog Warden Report</h1>
            <hr/>
            <h4>Adoptable Dogs Currently in the Rescue: {adoptableDogs}</h4>
            <h4>Pending Adoptions: {pendingAdoptions}</h4>
            <h4>Dogs Adopted to Date ({currentYear}): {adoptedDogsCurr}</h4>
            <h4>Dogs Adopted Last Year ({lastYear}): {adoptedDogsPast}</h4>
            <br/>
            <h2>Active Fosters</h2>
            <Table bordered striped hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Current</th>
                        <th>Current Year</th>
                    </tr>
                </thead>
                <tbody>
                    {fosters.map(foster=>{
                        return(
                            <tr key={foster.id}>
                                <td>{foster.id}</td>
                                <td>{foster.name}</td>
                                <td>{foster.address}</td>
                                <td>{foster.city}</td>
                                <td>{foster.state}</td>
                                <td>{foster.currFostering}</td>
                                <td>{foster.currYearFostered}</td>
                            </tr>

                        )

                    })}

                </tbody>

            </Table>


        
        </div>
    )
}

export default DogWarden