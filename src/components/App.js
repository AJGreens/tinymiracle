import React, {useState, useEffect } from 'react';
import {database} from './Firebase'
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import {Form,Button} from 'react-bootstrap'
import Admin from './Admin'

function App() {

  


  
  return (
    <div>
      <Admin/>
    </div>  
  );
}



export default App;
