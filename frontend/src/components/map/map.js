import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import GoogleMapReact from 'google-map-react';
import Statbox from "../statbox/statbox";
import MapContext from "../../context/mapcontext";
import addUCLayer from "../map-layers/uc-layer";
import addSecALayer from "../map-layers/sec-a-layer";
import addSecBLayer from "../map-layers/sec-b-layer";
import addSecCLayer from "../map-layers/sec-c-layer";
//import { Marker } from 'react-map-gl';
//import * as ucdata from './Union_Council.json'
//import 'mapbox-gl/dist/mapbox-gl.css';
import { funname } from "../../redux/actions";

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibWFoYXNhamlkIiwiYSI6ImNrc292bjNqbjI5MHYydXBjd28yMnFkOXEifQ.5VqjxrsXPEpQJvXD7JKkmA';

const Map = () => {
    // objects that the map needs
    const dispatcher = useDispatch();
    dispatcher(funname());
    const first_map = useRef(null);
    const second_map = useRef(null);
    const first_mapContainer = useRef(null);
    const second_mapContainer = useRef(null);

    // helper functions
    const initializeMap = async (map, mapContainer, mnum) => {
        console.log("Inside initialize map.")
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            accessToken: MAPBOX_ACCESS_TOKEN,
            style: 'mapbox://styles/mahasajid/ckst8pkjs2htk18pfy0bnj2kz/draft',
            center: [71.400, 34.00],
            zoom: 0,
            minZoom: 9,
            maxBounds: [[70.479, 33], [72.658, 35.180]]
        });
        map.current.on('load', () => {
            map.current = addUCLayer(map.current, dispatcher, mnum);
            map.current = addSecALayer(map.current, dispatcher, mnum);
            map.current = addSecBLayer(map.current, dispatcher, mnum);
            map.current = addSecCLayer(map.current, dispatcher, mnum);
        });
    }

    // Hooks and state management
    useEffect(() => {
        async function setup() {
            try {
                if (first_map.current && second_map.current)
                    return;
                await initializeMap(first_map, first_mapContainer, 1);
                await initializeMap(second_map, second_mapContainer, 2);
            }
            catch (err) {
                console.log(err);
            }
        }
        setup();
    });


    return (
        <div>
            <div className="mapbox-div">
                <div ref={first_mapContainer} className="map-container" />
            </div>

            <div className="mapbox-div">
                <div ref={second_mapContainer} className="map-container" />
            </div>

            <div class="statandfilterbox-div">
            <MapContext.Provider value={first_map}>
                <Statbox mnum={1}/>
            </MapContext.Provider>
            </div>

            <div class="statandfilterbox-div">
            <MapContext.Provider value={second_map}>
                <Statbox mnum={2}/>
            </MapContext.Provider>
            </div>

        </div>
    );

}

export default Map;
