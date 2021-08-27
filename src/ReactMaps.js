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
const bounds = [
   // Southwest coordinates
   [70.479, 32.723],
  [72.658, 35.180]
  // Northeast coordinates
  
  ];



const ReactMap = () => {

const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState( 71.400  );
const [lat, setLat] = useState(34.00);
const [zoom, setZoom] = useState(0);



<div id= "map" >
</div>

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mahasajid/ckst8pkjs2htk18pfy0bnj2kz/draft',
  center: [lng, lat],
  zoom: zoom,
  maxBounds: bounds

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


  return (
    <div>
    <div ref={mapContainer} className="map-container" />

      


    </div>
    );



};

  


export default ReactMap;