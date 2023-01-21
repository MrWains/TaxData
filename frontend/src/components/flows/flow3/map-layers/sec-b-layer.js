import mapboxgl from "mapbox-gl";

const LAYERID = "sector-b-layer";
const LAYER_SRC = "mapbox://mahasajid.9f84k2y2";
const SRC_LAYER = "Sec_B_Plots";

/**
 * Adds the uc-layer layer to the Mapbox GL Map.
 * @param { Mapbox GL Map} map The Mapbox GL Map instance.
 * @param { useDipatch object} dispatch dispatcher for sending signals to redux store
 */
const addSecBLayer = (map) => {
	console.log("Inside addSecBLayer.");
	// actual layer
	map.addLayer({
		id: LAYERID,
		source: {
			type: "vector",
			url: LAYER_SRC,
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

	// layer interactivity
	map.on("click", LAYERID, (e) => {
		console.log("event type:", e.type);
		console.log(e.features[0].properties.name);

		new mapboxgl.Popup()
			.setLngLat(e.lngLat)
			.setHTML("Plot No. " + e.features[0].properties.Name)
			.addTo(map);
	});
	console.log("added Sec B layer.");

	return map;
};

export default addSecBLayer;
