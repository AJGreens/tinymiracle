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
        const pendingRef= ref(database, 'animals/other')
        const adoptedCurrRef= ref(database, 'animals/adoptedNum'+currentYear)
        const adoptedPastRef= ref(database, 'animals/adoptedNum'+lastYear)
        const fostersRef= ref(database, 'contacts/active')
        onValue(adoptableRef, (snapshot)=>{
            const data= snapshot.val()
            if(data!=null){
                setAdoptableDogs(Object.keys(data).length)
            }
        })
        onValue(adoptedCurrRef, (snapshot)=>{
            const data= snapshot.val()
            if(data!=null){
                setAdoptedDogsCurr(data)
            }
        })
        onValue(adoptedPastRef, (snapshot)=>{
            const data= snapshot.val()
            if(data!=null){
                setAdoptedDogsPast(data)
            }
        })

        onValue(pendingRef, (snapshot)=>{
            const data= snapshot.val()
            if(data!=null){
                let allPending= Object.entries(data).filter(([key,val])=>{
                    if(val.status==="Pending"){
                        return val.status
                    }
                })

                setPendingAdoptions(allPending.length)
            }
        })


        onValue(fostersRef, (snapshot)=>{
            const data= snapshot.val()
            if(data!=null){
                let allFosters= Object.entries(data).map(([key, value])=>{
                    return {id:value.id, name: value.name, address: value.address, city: value.city, state: value.state }
                })
                setFosters(allFosters)

            }
        })






    },[])







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
                            </tr>

                        )

                    })}

                </tbody>


            </Table>


        
        </div>
    )
}

export default DogWarden