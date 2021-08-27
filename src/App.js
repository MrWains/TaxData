import React, { useRef, useEffect, useState } from 'react';

// import map from './Map.js';
import reactmap from './ReactMaps.js';

import logo from './logo.svg';
import './App.css';
require('dotenv').config()
const App = () => {
  return <div>
    
{reactmap()}


</div>;
};

// let rb = new reactmap();
// const App = () => {
//   return <div>
    
 
//     {rb.render()}
  
//   </div>;
// };

export default App;
