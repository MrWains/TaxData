// import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { IgrShapeDataSource } from 'igniteui-react-core';
import { accessToken } from 'maplibre-gl';
// ...

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl  from 'mapbox-gl';
import { Marker } from 'react-map-gl';
import * as ucdata from './Union_Council.json' 
//import ReactMapGL from 'react-map-gl';



// TRIAL 345


mapboxgl.accessToken = 'pk.eyJ1IjoibWFoYXNhamlkIiwiYSI6ImNrc292bjNqbjI5MHYydXBjd28yMnFkOXEifQ.5VqjxrsXPEpQJvXD7JKkmA';




const ReactMap = () => {

const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState( 71.508831298  );
const [lat, setLat] = useState(33.989662708);
const [zoom, setZoom] = useState(7);



<div id= "map" >
</div>

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mahasajid/ckst8pkjs2htk18pfy0bnj2kz/draft',
  center: [lng, lat],
  zoom: zoom
  });
  });

  {ucdata.features.map(union => (
    <Marker
      key={union.properties.UC}
      latitude={union.geometry.coordinates[1]}
      longitude={union.geometry.coordinates[0]}
    >
      <button
        className="marker-btn"
      
      >
        THIS IS
        
      </button>
    </Marker>
  ))}

  // map.on('load', function() {
  //   // Add source for admin-1 Boundaries
  //   map.addSource('admin-1', {
  //     type: 'vector',
  //     url: 'mapbox://mapbox.boundaries-adm1-v3'
  //   });
  //   // Add a layer with boundary polygons
  //   map.addLayer(
  //     {
  //       id: 'admin-1-fill',
  //       type: 'fill',
  //       source: 'admin-1',
  //       'source-layer': 'boundaries_admin_1',
  //       paint: {
  //         'fill-color': '#CCCCCC'
  //       }
  //     },
  //     // This final argument indicates that we want to add the Boundaries layer
  //     // before the `waterway-label` layer that is in the map from the Mapbox
  //     // Light style. This ensures the admin polygons will be rendered on top of
  //     // the
  //     'waterway-label'
  //   );
  // });

  return (
    <div>
    <div ref={mapContainer} className="map-container" />

      


    </div>
    );








//

// Trial 4567
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// const ReactMap = () => {
// <div id = "map">
// </div>

// mapboxgl.accessToken ='pk.eyJ1IjoibWFoYXNhamlkIiwiYSI6ImNrc292bjNqbjI5MHYydXBjd28yMnFkOXEifQ.5VqjxrsXPEpQJvXD7JKkmA';

// const map = new mapboxgl.Map({
// //container: 'map', // container ID
// style: 'mapbox://styles/mapbox/streets-v11', // style URL
// center: [-74.5, 40], // starting position [lng, lat]
// zoom: 9 // starting zoom
// });


///







// mapboxgl.accessToken = 'pk.eyJ1IjoibWFoYXNhamlkIiwiYSI6ImNrc292bjNqbjI5MHYydXBjd28yMnFkOXEifQ.5VqjxrsXPEpQJvXD7JKkmA';
// var map = new mapboxgl.Map({
//   container: 'irtasam',
//   style: 'mapbox://styles/mapbox/streets-v11'
//   });


};

  

// const ReactMap = () => {
    
//     const [viewport, setViewport] = useState({
//         width: 400,
//         height: 400,
//         latitude:34.0151,
//         longitude: 71.5249,
//         zoom: 8

//       });
    
//       return (
//         <ReactMapGL
//           {...viewport}
//           onViewportChange={nextViewport => setViewport(nextViewport)}
          

//           //mapboxgl.accessToken ={process.env.REACT_APP_MAPBOX_TOKEN}
//           //mapboxAPIAccessToken= 
//         >
          
//           </ReactMapGL>
//       );

// };



export default ReactMap;