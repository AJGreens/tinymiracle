import React, {useState, useEffect} from 'react';
import {database} from '../Firebase'
import {ref, onValue, remove} from "firebase/database";
import AdminNav from "./AdminNav"
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import filterFactory, { textFilter, selectFilter} from 'react-bootstrap-table2-filter';


function ManageAnimals(){
        
  const [dogs, setDogs]= useState([])
  const navigate = useNavigate();



  useEffect(()=>{
    const dogRef= ref(database, "animals/")
    onValue(dogRef,(snapshot)=>{
      const data= snapshot.val();
      if(data!=null){
        let adoptableDogs=data.adoptable==null? []: Object.entries(data.adoptable).map(([key, value]) => {
          return ({token: key, id:value["id"], name:value["name"], status:value["status"],fosterName:value["fosterName"],primBreed:value["primBreed"], dateAdded: value["dateAdded"],
          dateAdopted: value["dateAdopted"]})
        })
        let otherDogs= data.other==null? []: Object.entries(data.other).map(([key, value]) => {
          return ({token: key, id:value["id"], name:value["name"], status:value["status"],fosterName:value["fosterName"],primBreed:value["primBreed"], dateAdded: value["dateAdded"],
          dateAdopted: value["dateAdopted"]})
        })
        setDogs([...adoptableDogs,...otherDogs])
      }
    })

  },[])




  function addAnimalFunc(){
    navigate('/addAnimal')
   }
 
   function deleteFunc(token, status){
     let deleteable;
     if (status==='Adoptable'){
       deleteable = ref(database, 'animals/adoptable/'+token)
     }
     else{
       deleteable = ref(database, 'animals/other/'+token)
     }
     if (window.confirm('Are you sure you want to delete this item?')){
       remove(deleteable)
     }
   }
 
   const { SearchBar } = Search;
 
   const selectOptions = {
     'Adoptable': 'Adoptable',
     'Adopted': 'Adopted',
     'Crosspost': 'Crosspost',
     'Hold': 'Hold',
     'Pending': 'Pending',
     'Removed': 'Removed'
   };
 
   const columns = [
     {
       dataField: "id",
       text: "ID"
     },
     {
       dataField: "name",
       text: "Name",
       filter: textFilter(),
       formatter: (cell, row) => {
         if (row.status ==="Adoptable"){
           return <Link to ={"/editAnimal/adoptable/"+row.token}>{row.name}</Link>
         }
         else {
           return <Link to ={"/editAnimal/other/"+row.token}>{row.name}</Link>
         }
       }
     },
     {
       dataField: "primBreed",
       text: "Breed",
       filter: textFilter(),
     },
     {
       dataField: "fosterName",
       text: "Foster",
       filter: textFilter(),
     },
     {
       dataField: "status",
       text: "Status",
       formatter: cell => selectOptions[cell],
       formatter: (cell, row) => {
         return <div key={row.id}>{row.status + " " + row.dateAdopted}</div>;
       },
       filter: selectFilter({options: selectOptions})
     },
     {
       dataField: "dateAdded",
       text: "Date Added",
       filter: textFilter(),
     },
     {
       text: "Delete",
       formatter: (cell, row) => {
         return <Button onClick = {()=> deleteFunc(row.token, row.status)} variant = "danger">Delete</Button>
       }
     },
   
   ];






    
    return(
      <>
        <AdminNav/>
        <div className = 'container'>
          <h2>Manage Animals</h2>
          <Button onClick = {addAnimalFunc}>Add animal</Button><br/><br/>
          <ToolkitProvider
            keyField="id"
            data={dogs}
            columns={columns}
            search
          >
            {props => (
              <>
                <SearchBar { ...props.searchProps } className="mb-4" />
                <BootstrapTable
                  { ...props.baseProps }
                  pagination={paginationFactory({ sizePerPage: 10 })}
                  filter={ filterFactory() }
                />
              </>
            )}
          </ToolkitProvider>
        </div>    
      </>
        
    )
    
}

export default ManageAnimals