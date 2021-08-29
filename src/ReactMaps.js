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

   map.current.on('load', () => {


    map.current.addLayer({
      id: 'states-layer',
      source: {
      type: 'vector',
      url: 'mapbox://mahasajid.199pwcco'
      },
      'source-layer': 'Union_Council-bi1iuv',
      type: 'fill',
      paint: {
        'fill-color': 'rgba(200, 100, 240, 0.4)',
          'fill-outline-color': 'rgba(200, 100, 240, 1)',
          'fill-opacity': 0
        

      },
      layout: {
      // Mapbox Style Specification layout properties
      }
      });
  
map.current.on('click', 'states-layer', (e) => {
  console.log('event type:', e.type);
  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(e.features[0].properties.UC)
    .addTo(map.current);
    map.current.flyTo({
      center: e.lngLat
      });
    map.current.setZoom (13);
    console.log(map.current.zoom)
    });
   

  });
});


     

  // map.current.on('load', () => {
  //   // Add a source for the state polygons.
  //   map.current.addSource('Union_Council', {
  //   type: 'geojson',
  //     data: 'mapbox://mahasajid.199pwcco'
    
  //   });
    
  //   // Add a layer showing the state polygons.
  //   map.current.addLayer({
  //   'id': 'states-layer',
  //   'type': 'line',
  //   'source': 'Union_Council',
  //   'paint': {
  //   // 'fill-color': 'rgba(200, 100, 240, 0.4)',
  //   'fill-outline-color': 'rgba(200, 100, 240, 1)'
  //   }
  //   });
     
  //   // When a click event occurs on a feature in the states layer,
  //   // open a popup at the location of the click, with description
  //   // HTML from the click event's properties.
  //   map.current.on('click', 'states-layer', (e) => {
  //   new mapboxgl.Popup()
  //   .setLngLat(e.lngLat)
  //   .setHTML(e.features[0].properties.UC)
  //   .addTo(map);
  //   });
     
  //   // Change the cursor to a pointer when
  //   // the mouse is over the states layer.
  //   map.current.on('mouseenter', 'states-layer', () => {
  //   map.current.getCanvas().style.cursor = 'pointer';
  //   });
     
  //   // Change the cursor back to a pointer
  //   // when it leaves the states layer.
  //   map.current.on('mouseleave', 'states-layer', () => {
  //   map.current.getCanvas().style.cursor = '';
  //   });
  //   });
  




 

  return (
    <div>
    <div ref={mapContainer} className="map-container" />


    </div>
    );



};

  


export default ReactMap;