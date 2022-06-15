import React, {useState, useEffect} from 'react';
import {database} from '../Firebase'
import {ref, onValue, remove} from "firebase/database";
import AdminNav from "./AdminNav"
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider,{Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import filterFactory, { textFilter,selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from "react-bootstrap-table2-paginator";

function ManageContacts(){
    
    
  const [rows, setRows] = useState([]);
  const navigate= useNavigate()
  const { SearchBar} = Search;
  

  
  useEffect(()=>{
    const contactsRef = ref(database, 'contacts');
    onValue(contactsRef, (snapshot) => {
      console.log("this called")
      const data = snapshot.val();
      if(data!=null){
        let allActive= data.active==null? []: Object.entries(data.active).map(([key, value]) => {
          return {token: key, id: value["id"], name:value["name"], address:value["address"], city: value["city"], state:value["state"], zip:value["zip"], primaryEmail:value["primaryEmail"], secondaryEmail:value["secondaryEmail"], mobilePhone:value["mobilePhone"], homePhone:value["homePhone"], username:value["username"], activeFoster:value["activeFoster"]}
        })
        let allNonActive= data.nonactive==null? []: Object.entries(data.nonactive).map(([key, value]) => {
          return {token: key, id: value["id"], name:value["name"], address:value["address"], city: value["city"], state:value["state"], zip:value["zip"], primaryEmail:value["primaryEmail"], secondaryEmail:value["secondaryEmail"], mobilePhone:value["mobilePhone"], homePhone:value["homePhone"], username:value["username"], activeFoster:value["activeFoster"]}
        })
        setRows([...allActive,...allNonActive])
      }
      else{
        setRows([])
      }
    });

    
  },[])

  const activeFosterSelections={
    true:'Yes',
    false:'No'
  }


  const columns= [
    { dataField: 'id', text: 'ID', filter: textFilter()},
    { dataField: 'name', text: 'Name', filter: textFilter(), formatter: (cell, row)=>(
      <a className="link-primary" onClick={()=>handleUpdateContact(row.activeFoster,row.token)}>{cell}</a>
    )},
    { dataField: 'mobilePhone', text: 'Mobile Phone',filter: textFilter()},
    { dataField: 'address', text: 'Address', filter: textFilter()},
    { dataField: 'city', text: 'City', filter: textFilter()},
    { dataField: 'activeFoster', text: 'Active Foster', filter: selectFilter(
      {options: activeFosterSelections}
    ), formatter: (cell,row) => (<>{cell?"Yes":"No"}</>) },
    { dataField: 'delete', text: 'Delete',formatter: (cell, row)=>(
      <Button onClick={()=>handleDeleteContact(row.activeFoster,row.token)} variant="danger">Delete</Button>
    )}
  ]

  
  const ClearSearchButton= props=>{
    const handleClick= ()=>{
      props.onSearch("")
    }

    return(
      <Button className="m-2" variant='secondary' onClick={handleClick}>
        Clear
      </Button>
    )
  }
  const ExportCSV=props=>{
    const handleClick=()=>{
      props.onExport();
    }
    return(
    <Button className="m-2" variant='success' onClick={handleClick}>
      Download List
    </Button>
    )
  }


  function handleAddContact(){
    navigate('/addContact')
  }

  function handleDeleteContact(activeFoster, token){
    if(activeFoster){
      const deleteContactRef= ref(database, "contacts/active/"+token)
      remove(deleteContactRef)
    }
    else{
      const deleteContactRef= ref(database, "contacts/nonactive/"+token)
      remove(deleteContactRef)
    }
      
  }
  function handleUpdateContact(activeFoster, token){
    if(activeFoster){
      navigate("/updateContact/active/"+token)
    }
    else{
      navigate("/updateContact/nonactive/"+token)
    }
  }


  


  return(
    <>
      <AdminNav/>
      <div className='container'>
          <div></div>
          <h2>Manage Contacts</h2>
          <Button onClick={handleAddContact} className="mb-4">Add Contact</Button>
          <ToolkitProvider
            keyField='id' 
            data={rows} 
            columns={columns} 
            search
            exportCSV ={{
              exportAll:false,
              onlyExportFiltered: true
            }}
            >
            {
              props=>(
                <>
                  <div className="mb-4 text-center">
                    <h4>General Search</h4>
                    <SearchBar {...props.searchProps}/>
                    <br/>
                    <ClearSearchButton {...props.searchProps}/>
                    <ExportCSV {...props.csvProps}/>
                  </div>
                  <BootstrapTable 
                  {...props.baseProps} 
                  filter={filterFactory()}
                  pagination={paginationFactory({ sizePerPage: 10 })}
                  noDataIndication="No Match"
                  striped 
                  hover 
                  />
                  
                </>
              )
            }
          </ToolkitProvider>

      </div>

      
        
    </>
        
  )
    
}

export default ManageContacts