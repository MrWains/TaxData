// react imports
import React from 'react';
// importing functions
import ReactMap from './ReactMaps.js';
// import {Coordinateshandler} from './ReactMaps.js';
import StatBoxLoader from './statBox.js';
import dataLoader from './dataLoader.js';
import { useState } from "react";

// styling imports
import logo from './logo.svg';
import './App.css';

// loading data from the local database
let dataToUse = dataLoader();
// let coordinates = Coordinateshandler();

const App = () => {
  const[coords,setcoords]=useState("Please Select");
  
  return <body>
            
              <ReactMap/>
            
        </body>;
};

export default App;
