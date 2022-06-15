import React, {useState, useEffect} from 'react';
import {database} from '../Firebase'
import {ref, onValue, remove} from "firebase/database";
import AdminNav from "./AdminNav"
import {Button, Table, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import filterFactory, { textFilter, selectFilter, Comparator} from 'react-bootstrap-table2-filter';


function ManageAnimals(){
        

  const [adoptableDogs, setAdoptableDogs] = useState([]);
  const [otherDogs, setOtherDogs] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [option1, setOption1] = useState(true)
  const navigate = useNavigate();

  function addAnimalFunc(){
   navigate('/addAnimal')
  }

  function deleteFunc(id, status){
    console.log(id)
    console.log(status)

    // let deleteable = ref(database, 'animals/'+id)
  let deleteable = ref(database, 'animals/other/'+id)

  if (status==='Adoptable'){
    deleteable = ref(database, 'animals/adoptable/'+id)
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
      dataField: "myId",
      text: "ID",
      sort: true
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
      filter: textFilter(),
      formatter: (cell, row) => {
        if (row.status ==="Adoptable"){
        return <Link to ={"/editAnimal/adoptable/"+row.id}>{row.name}</Link>
        }
        else {
          return <Link to ={"/editAnimal/other/"+row.id}>{row.name}</Link>
        }
      }
    },
    {
      dataField: "primBreed",
      text: "Breed",
      filter: textFilter(),
      sort: true
    },
    {
      dataField: "foster",
      text: "Foster",
      filter: textFilter(),
      sort: true
    },
    {
      dataField: "status",
      text: "Status",
      sort: true,
      formatter: cell => selectOptions[cell],
      formatter: (cell, row) => {
        return <div>{row.status + " " + row.dateAdopted}</div>;
      },
      filter: selectFilter({
        options: selectOptions,
        style: {color: option1? 'grey': 'black'},
        onFilter: (filterValue) => {if (filterValue===""){
          setOption1(true)
          console.log('yip')
        }
        else{
          setOption1(false)
        }
      },
        comparator: Comparator.LIKE 
      })
    },
    {
      dataField: "dateAdded",
      text: "Date Added",
      filter: textFilter(),
      sort: true
    },
    {
      text: "Delete",
      formatter: (cell, row) => {
        return <Button onClick = {()=> deleteFunc(row.id, row.status)}variant = "danger">Delete</Button>
      }
    },
  
  ];
  
  useEffect(()=>{
    const dogRef = ref(database, 'animals/adoptable/');
    // let allDogs=[]
    onValue(dogRef, (snapshot) => {
      const data = snapshot.val();
      let allDogs=[]
      Object.entries(data).map(([key, value]) => {
        allDogs.push({id: key, myId:value["id"], name:value["name"], status:value["status"],foster:value["foster"],primBreed:value["primBreed"], dateAdded: value["dateAdded"],
    dateAdopted: value["dateAdopted"]})
        // Pretty straightforward - use key for the key and value for the value.
        // Just to clarify: unlike object destructuring, the parameter names don't matter here.
      })
      setAdoptableDogs(allDogs)
    });
  },[])


  useEffect(()=>{
    const dogRef = ref(database, 'animals/other/');
    // let allDogs=[]
    onValue(dogRef, (snapshot) => {
      const data = snapshot.val();
      let allDogs=[]
      Object.entries(data).map(([key, value]) => {
        allDogs.push({id: key, myId:value["id"], name:value["name"], status:value["status"],foster:value["foster"],primBreed:value["primBreed"], dateAdded: value["dateAdded"],
    dateAdopted: value["dateAdopted"]})
        // Pretty straightforward - use key for the key and value for the value.
        // Just to clarify: unlike object destructuring, the parameter names don't matter here.
      })
      setOtherDogs(allDogs)
    });

  },[])











    
    return(
      <>
      <AdminNav/>
       <div className = 'container' style = {{marginTop: '40px'}}>

          <Button onClick = {addAnimalFunc}>Add animal</Button><br/><br/>

          <ToolkitProvider
            keyField="id"
            data={adoptableDogs.concat(otherDogs)}
            columns={columns}
            search
          >{
       props => (<div className="App">
         <div>
         
          <SearchBar { ...props.searchProps } /><br/><br/>
          </div>
      <BootstrapTable
      { ...props.baseProps }
      pagination={paginationFactory({ sizePerPage: 5 })}
      filter={ filterFactory() }
        // bootstrap4
        // keyField="id"
        // data={dogs}
        // columns={columns}
        // pagination={paginationFactory({ sizePerPage: 25 })}
      />

    </div>
       )

}
</ToolkitProvider>



          
          
            {/* <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Dog Name</th>
                      <th>Breed</th>
                      <th>Foster</th>
                      <th>Status</th>
                      <th>Date Added</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dogs.map(dog=>
                    <tr>
                      <td>{dog.myId}</td>
                      <td> <Link to ={"/editAnimal/"+dog.id}>{dog.name}</Link></td>
                      <td>{dog.primBreed}</td>
                      <td>{dog.foster}</td>
                      <td>{dog.status + " "+dog.dateAdopted}</td>
                      <td>{dog.dateAdded}</td>
                      <td><Button onClick = {()=> deleteFunc(dog.id)}variant = "danger">Delete</Button></td>
                  </tr>

                    )}
                   
                  </tbody>
              </Table> */}










        </div>
        
        
      </>
        
        )
    
}

export default ManageAnimals