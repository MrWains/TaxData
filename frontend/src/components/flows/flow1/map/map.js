import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
// import GoogleMapReact from 'google-map-react';
import Statbox from "../statbox/statbox";
import MapContext from "../../../../context/mapcontext";
import addUCLayer from "../map-layers/uc-layer";
import addSecALayer from "../map-layers/sec-a-layer";
import addSecBLayer from "../map-layers/sec-b-layer";
import addSecCLayer from "../map-layers/sec-c-layer";

import { funname } from "../redux/actions";

const MAPBOX_ACCESS_TOKEN =
	"pk.eyJ1IjoibWFoYXNhamlkIiwiYSI6ImNrc292bjNqbjI5MHYydXBjd28yMnFkOXEifQ.5VqjxrsXPEpQJvXD7JKkmA";

const Map = () => {
	// objects that the map needs
	const dispatcher = useDispatch();
	dispatcher(funname());
	const map = useRef(null);
	const mapContainer = useRef(null);

	// helper functions
	const initializeMap = async () => {
		console.log("Inside initialize map.");
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			accessToken: MAPBOX_ACCESS_TOKEN,
			style: "mapbox://styles/mahasajid/ckst8pkjs2htk18pfy0bnj2kz/draft",
			center: [71.4, 34.0],
			zoom: 0,
			minZoom: 9,
			maxBounds: [
				[70.479, 33],
				[72.658, 35.18],
			],
		});
		map.current.on("load", () => {
			map.current = addUCLayer(map.current, dispatcher);
			map.current = addSecALayer(map.current, dispatcher);
			map.current = addSecBLayer(map.current, dispatcher);
			map.current = addSecCLayer(map.current, dispatcher);
		});
	};

	// Hooks and state management
	useEffect(() => {
		async function setup() {
			try {
				if (map.current) return;
				await initializeMap();
			} catch (err) {
				console.log(err);
			}
		}
		setup();
	});

	return (
		<div>
			<div className="mapbox-div">
				<div ref={mapContainer} className="map-container" />
			</div>

			<div class="statandfilterbox-div">
				<MapContext.Provider value={map}>
					<Statbox />
				</MapContext.Provider>
			</div>
		</div>
	);
};

export default Map;
