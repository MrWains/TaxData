import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GoogleMapReact from "google-map-react";
import Statbox from "../statbox/statbox";
import MapContext from "../../../../context/mapcontext";
import addUCLayer from "../map-layers/uc-layer";
import addSecALayer from "../map-layers/sec-a-layer";
import addSecBLayer from "../map-layers/sec-b-layer";
import addSecCLayer from "../map-layers/sec-c-layer";

//import { Marker } from 'react-map-gl';
//import * as ucdata from './Union_Council.json'
//import 'mapbox-gl/dist/mapbox-gl.css';
import { funname } from "../../../../redux/actions";

// bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Badge } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const MAPBOX_ACCESS_TOKEN =
	"pk.eyJ1IjoibWFoYXNhamlkIiwiYSI6ImNrc292bjNqbjI5MHYydXBjd28yMnFkOXEifQ.5VqjxrsXPEpQJvXD7JKkmA";

const Map = () => {
	// objects that the map needs
	const dispatcher = useDispatch();
	dispatcher(funname());
	const first_map = useRef(null);
	const second_map = useRef(null);
	const first_mapContainer = useRef(null);
	const second_mapContainer = useRef(null);

	// importing global states
	const features = useSelector((state) => state.status);

	// state variables
	const [compareRenderState, setCompareRenderState] = useState(false);
	const [compareStats, setCompareStats] = useState(null);
	const [newConstruction, setNewConstruction] = useState([]);

	// helper functions
	const initializeMap = async (map, mapContainer, mnum) => {
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
			map.current = addUCLayer(map.current, dispatcher, mnum);
			map.current = addSecALayer(map.current, dispatcher, mnum);
			map.current = addSecBLayer(map.current, dispatcher, mnum);
			map.current = addSecCLayer(map.current, dispatcher, mnum);
		});
	};

	// Hooks and state management
	useEffect(() => {
		async function setup() {
			try {
				if (first_map.current && second_map.current) return;
				await initializeMap(first_map, first_mapContainer, 1);
				await initializeMap(second_map, second_mapContainer, 2);
			} catch (err) {
				console.log(err);
			}
		}
		setup();
	});

	useEffect(() => {
		const compareStateSetter = () => {
			setCompareRenderState(false);
		};
		compareStateSetter();
	}, [
		features.uc_name_A,
		features.uc_name_B,
		features.uc_year_A,
		features.uc_year_B,
	]);

	const comparisonLoader = () => {
		setCompareRenderState(true);

		// calculate difference and direction
		let difference = null;
		let direction = null;
		let absDifference = null;
		let count = 0;
		let temp = [];

		if (features.uc_year_A > features.uc_year_B) {
			// find unique activation points
			for (let i = 0; i < features.uc_Activations_A.length; i++) {
				for (let j = 0; j < features.uc_Activations_B.length; j++) {
					if (
						(features.uc_Activations_A[i][0] !=
							features.uc_Activations_B[j][0] ||
							features.uc_Activations_A[i][1] !=
								features.uc_Activations_B[j][1]) &&
						j == features.uc_Activations_B.length - 1
					) {
						temp.push(features.uc_Activations_A[i]);
						count = count + 1;
					}
				}
			}
			setNewConstruction(temp);
			// console.log("newConstruction: ", newConstruction);

			difference = features.uc_sum_A - features.uc_sum_B;
			// absDifference = Math.abs(difference);

			if (difference < 0) {
				direction = `${count} unique units have been identified in ${features.uc_year_A} as compared to ${features.uc_year_B} hence deconstruction`;
			} else if (difference == 0) {
				direction = `${features.uc_year_A} and ${features.uc_year_B} have no idenfied differences in construction`;
			} else {
				direction = `${count} unique units have been identified in ${features.uc_year_A} as compared to ${features.uc_year_B} hence new construction`;
			}
		} else if (features.uc_year_A < features.uc_year_B) {
			// find unique activation points
			for (let i = 0; i < features.uc_Activations_B.length; i++) {
				for (let j = 0; j < features.uc_Activations_A.length; j++) {
					if (
						(features.uc_Activations_A[j][0] !=
							features.uc_Activations_B[i][0] ||
							features.uc_Activations_A[j][1] !=
								features.uc_Activations_B[i][1]) &&
						j == features.uc_Activations_A.length - 1
					) {
						temp.push(features.uc_Activations_B[i]);
						count = count + 1;
					}
				}
			}
			setNewConstruction(temp);
			// console.log("newConstruction: ", newConstruction);

			difference = features.uc_sum_B - features.uc_sum_A;
			// absDifference = Math.abs(difference);

			if (difference < 0) {
				direction = `${count} unique units have been identified in ${features.uc_year_B} as compared to ${features.uc_year_A} hence deconstruction`;
			} else if (difference == 0) {
				direction = `${features.uc_year_A} and ${features.uc_year_B} have no idenfied differences in construction`;
			} else {
				direction = `${count} unique units have been identified in ${features.uc_year_B} as compared to ${features.uc_year_A} hence new construction`;
			}
		}

		setCompareStats(direction);
	};

	return (
		<div>
			{/* <div className="top-bar">
                Improving Tax Data Collection
            </div> */}
			<div className="mapbox-div">
				<div ref={first_mapContainer} className="map-container" />
			</div>

			<div className="mapbox-div">
				<div ref={second_mapContainer} className="map-container" />
			</div>

			<div class="statandfilterbox-div">
				<MapContext.Provider value={first_map}>
					<Statbox mnum={1} />
				</MapContext.Provider>
			</div>

			{features.uc_name_A === features.uc_name_B &&
			features.uc_year_A !== features.uc_year_B ? (
				<Button
					className="compare-button"
					variant="primary"
					onClick={() => comparisonLoader()}
				>
					Compare
				</Button>
			) : (
				<Button disabled className="compare-button" variant="secondary">
					Compare
				</Button>
			)}

			<div class="statandfilterbox-div">
				<MapContext.Provider value={second_map}>
					<Statbox mnum={2} />
				</MapContext.Provider>
			</div>

			{compareRenderState == true ? (
				<Card className="comparison-card">
					<Card.Body>
						<Card.Title>{"COMPARISON"}</Card.Title>
						{`${compareStats}`}

						<ListGroup className="force-scroll">
							{newConstruction.map((nc) => (
								<ListGroup.Item key={nc}>
									{`(${nc[0].toString()}  ,   ${nc[1].toString()} ) `}

									<Button className="file-buttons" size="sm">
										View File
									</Button>

									<Button className="file-buttons" size="sm">
										Accept Proof
									</Button>
									<Button className="file-buttons" size="sm">
										Reject Proof
									</Button>

									<Button className="file-buttons" size="sm">
										Measure Height
									</Button>
								</ListGroup.Item>
							))}
						</ListGroup>
					</Card.Body>
				</Card>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default Map;
