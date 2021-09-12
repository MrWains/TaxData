// react imports
import React from 'react';

// importing functions
import reactmap from './ReactMaps.js';
import StatBoxLoader from './statBox.js';
import dataLoader from './dataLoader.js';

// Styling imports
import logo from './logo.svg';
import './App.css';

let dataToUse = dataLoader();


const App = () => {
  return <body>
            <div class="mapbox-div">
              {/* { reactmap() } */}
            </div>
            <div class="statandfilterbox-div">
              { StatBoxLoader(dataToUse) }
            </div> 
        </body>;
};

export default App;
