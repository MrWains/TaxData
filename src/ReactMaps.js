// import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { IgrShapeDataSource } from 'igniteui-react-core';
import { accessToken } from 'maplibre-gl';
// ...

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
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
  const [lng, setLng] = useState(71.400);
  const [lat, setLat] = useState(34.00);
  const [zoom, setZoom] = useState(0);



  <div id="map" >
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
        id: 'uc-layer',
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


      map.current.on('click', 'uc-layer', (e) => {
        console.log('event type:', e.type);
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(e.features[0].properties.UC)
          .addTo(map.current);
        map.current.flyTo({
          center: e.lngLat
        });

      
      });

      map.current.addLayer({
        id: 'sector-b-layer',
        source: {
          type: 'vector',
          url: 'mapbox://mahasajid.9f84k2y2'
        },
        'source-layer': 'Sec_B_Plots',
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

      map.current.addLayer({
        id: 'sector-a-layer',
        source: {
          type: 'vector',
          url: 'mapbox://mahasajid.28wemg2z'
        },
        'source-layer': 'Sec_A_Plots',
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

      map.current.addLayer({
        id: 'sector-c-layer',
        source: {
          type: 'vector',
          url: 'mapbox://mahasajid.6201r69n'
        },
        'source-layer': 'Sec_C_Plots',
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

    });



    map.current.on('click', 'sector-b-layer', (e) => {
      console.log('event type:', e.type);
      console.log(e.features[0].properties.name, "hi")
   
      
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(  "Plot No. " + e.features[0].properties.Name)
        .addTo(map.current);   
    });

    map.current.on('click', 'sector-a-layer', (e) => {
      console.log('event type:', e.type);
      
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(  "Plot No. " + e.features[0].properties.Name)
        .addTo(map.current);

    });

    map.current.on('click', 'sector-c-layer', (e) => {
      console.log('event type:', e.type);
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML("Plot No. " + e.features[0].properties.Name)
        .addTo(map.current);
   
    });    
  });


  return (
    <div>
      <div ref={mapContainer} className="map-container" />


    </div>
  );

};

export default ReactMap;