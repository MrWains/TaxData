import React from 'react';

import reactmap from './ReactMaps.js';
import StatBoxLoader from './statBox.js';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return <body>
            <div class="mapbox-div">
              { reactmap() }
            </div>
            <div class="statandfilterbox-div">
              { StatBoxLoader() }
            </div> 
        </body>;
};

export default App;
