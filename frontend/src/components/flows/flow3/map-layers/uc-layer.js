import mapboxgl from "mapbox-gl";
import { setCoordinates, setUCName } from "../../../../redux/actions";

const UC_LAYERID = "uc-layer";
const UC_HIGHTLIGHT_LAYERID = "uc-layer-highlight";
const UC_LAYER_SRC = "mapbox://mahasajid.199pwcco";
const SRC_LAYER = "Union_Council-bi1iuv";

/**
 * Adds the uc-layer layer to the Mapbox GL Map.
 * @param { Mapbox GL Map} map The Mapbox GL Map instance.
 * @param { useDipatch object} dispatch dispatcher for sending signals to redux store
 */

let hoveredStateId = null;
const AddUCLayer = (map, dispatch) => {
	console.log("inside AddUCLayer.");
	// actual layer
	map.addLayer({
		id: UC_LAYERID,
		source: {
			type: "vector",
			url: UC_LAYER_SRC,
		},
		"source-layer": SRC_LAYER,
		type: "fill",
		paint: {
			"fill-color": "rgba(200, 100, 240, 0.4)",
			"fill-outline-color": "rgba(200, 100, 240, 1)",
			"fill-opacity": 0,
		},
		layout: {},
	});

	// layer highlight
	map.addLayer({
		id: UC_HIGHTLIGHT_LAYERID,
		source: {
			type: "vector",
			url: UC_LAYER_SRC,
		},
		"source-layer": SRC_LAYER,
		type: "line",
		// paint: {
		//   "fill-color": "#FFFFFF",
		//   "fill-outline-color": "#FFFFFF",
		//   "fill-opacity": 0,
		// },

		paint: {
			"line-color": "#000000",
			"line-width": 4,
			"line-opacity": 0,
		},
		layout: {},
		// filter: ['==', 'UC', e.features[0].properties.UC]
	});

	// layer interactivity
	map.on("click", "uc-layer", (e) => {
		console.log("lnglat", e.lngLat.toString());
		// setCoordinate(e.lngLat.toString())
		// console.log("Map" + coordinates)
		new mapboxgl.Popup()
			.setLngLat(e.lngLat)
			.setHTML(e.features[0].properties.UC)
			.addTo(map);

		map.flyTo({
			center: e.lngLat,
		});

		// if (e.features.length > 0) {
		//   if (hoveredStateId !== null) {
		//   map.setFeatureState(
		//   { source: "uc-layer-highlight", id: hoveredStateId },
		//   { hover: false }
		//   );
		//   }
		//   hoveredStateId = e.features[0].id;
		//   map.setFeatureState(
		//   { source:"uc-layer-highlight", id: hoveredStateId },
		//   { hover: true }
		//   );
		//   }

		console.log("Wrapped", e.lngLat);
		dispatch(
			setCoordinates([
				e.lngLat.wrap().lng.toString() + " , " + e.lngLat.wrap().lat.toString(),
			])
		);

		dispatch(setUCName(e.features[0].properties.UC));

		map.setPaintProperty("uc-layer-highlight", "line-opacity", 1);
		map.setFilter("uc-layer-highlight", [
			"==",
			"UC",
			e.features[0].properties.UC,
		]);
	});
	console.log("Added UC-Layer to map.");
	return map;
};

export default AddUCLayer;
