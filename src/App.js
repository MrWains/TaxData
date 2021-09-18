// react imports
import React from 'react';

// importing functions
import reactmap from './ReactMaps.js';
// import {Coordinateshandler} from './ReactMaps.js';
import StatBoxLoader from './statBox.js';
import dataLoader from './dataLoader.js';

// styling imports
import logo from './logo.svg';
import './App.css';

// loading data from the local database
let dataToUse = dataLoader();
// let coordinates = Coordinateshandler();


const App = () => {
  return <body>
            <div class="mapbox-div">
              { reactmap() }
            </div>
            <div class="statandfilterbox-div">
              { StatBoxLoader(dataToUse) }
            </div> 
        </body>;
};

export default App;
