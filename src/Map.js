import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";


// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const geoUrl = "/Final_Df.geojson"
const colorScale = scaleQuantize().domain([1, 10]).range(["#ffedea", "#ffcec5", "#ffad9f", "#ff8a75", "#ff5533", "#e2492d", "#be3d26", "#9a311f", "#782618"]);


const Map = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   csv("/unemployment-by-county-2017.csv").then(counties => {
  //     // console.log(counties)
  //     setData(counties);
  //   });
  // }, []);

    useEffect(() => {
        csv("/PeshawarData.csv").then(counties => {
          // console.log(counties)
            setData(counties);
        });
    }, []);


  return (
    <>
      <ComposableMap projection="geoAlbers">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {

                console.log(geo)


              const cur = data.find(s => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(cur ? cur.unemployment_rate : "#EEE")}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};


export default Map;

