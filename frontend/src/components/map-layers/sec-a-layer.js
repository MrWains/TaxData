import mapboxgl from "mapbox-gl";

const LAYERID = 'sector-a-layer';
const LAYER_SRC = 'mapbox://mahasajid.28wemg2z';
const SRC_LAYER = 'Sec_A_Plots';

/**
 * Adds the uc-layer layer to the Mapbox GL Map.
 * @param { Mapbox GL Map} map The Mapbox GL Map instance.
 * @param { useDipatch object} dispatch dispatcher for sending signals to redux store
 */
const addSecALayer = (map, dispatch) => {
    console.log("Inside addSecALayer.");
    // actual layer
    map.addLayer({
        id: LAYERID,
        source: {
            type: 'vector',
            url: LAYER_SRC
        },
        'source-layer': SRC_LAYER,
        type: 'fill',
        paint: {
            'fill-color': 'rgba(200, 100, 240, 0.4)',
            'fill-outline-color': 'rgba(200, 100, 240, 1)',
            'fill-opacity': 0
        },
        layout: {},
    });

    // layer interactivity
    map.on('click', LAYERID, (e) => {
        console.log('event type:', e.type);
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML("Plot No. " + e.features[0].properties.Name)
            .addTo(map);
    });
    console.log("added Sec A layer.");
    return map;
};

export default addSecALayer;