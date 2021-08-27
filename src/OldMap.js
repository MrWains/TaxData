import React, {useState} from "react";

import highcharts from 'highcharts';
import highchartsReact from 'highcharts-react-official';




const Map = () => {


     


    // Prepare demo data
    var data = [
        ['pk-sd', 0],
        ['pk-ba', 1],
        ['pk-jk', 2],
        ['pk-na', 3],
        ['pk-nw', 4],
        ['pk-ta', 5],
        ['pk-is', 6],
        ['pk-pb', 7]
    ];

    highcharts.Series('container', {
        chart: {
            map: 'countries/pk/pk-all'
        },
    
        title: {
            text: 'Highmaps basic demo'
        },
    
        subtitle: {
            text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/pk/pk-all.js">Pakistan</a>'
        },
    
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
    
        colorAxis: {
            min: 0
        },
    
        series: [{
            data: data,
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
    
    
// var Highcharts = require('highcharts/highmaps.js');

//     //Initiate the chart
//     // var Highcharts = require('highcharts/highmaps.js'),
//     // map = require('@highcharts/map-collection/custom/world.geo.json');
    
//     // Highcharts.mapChart('container', {
//     //     chart: {
//     //     map:'custom/world'
//     //     },
//     //     // ...
//     // }); 

    // var data = [
    // {
    //     "hc-key": "aq-3638",
    //     "value": 0
    // },
    // {
    //     "hc-key": "aq-3639",
    //     "value": 1
    // }
    // ];


    //  highcharts.Series('Map', {
    //     title : {
    //         text : 'Highmaps properties demo'
    //     },
    //     subtitle: {
    //         text: 'Source map: <a href=""http://code.highcharts.com/mapdata/custom/antarctica.js"">Antartica</a>'
    //     },

    //     colorAxis: {
    //         min: 0 // enable colorAxis
    //     },
        
    //     series : [{
    //         data : data,
    //         //mapData: highcharts.maps['custom/world'],
    //         map: 'custom/antartica',
    //         joinBy: 'hc-key',
    //         name: 'Random data',
    //         dataLabels: {
    //             enabled: true,
    //             format: '{point.name}'
    //             }
    //         // data: [['aq-3638', 0], ['aq-3639', 1]]
            
    //     }]
    // });

    // var Highcharts = require('highcharts/highmaps.js'),
    // map = require('@highcharts/map-collection/custom/world.geo.json');
    

// });

    
    
};

export default Map;