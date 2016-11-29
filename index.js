
var debug = require('debug')('nrel');
var fs = require('fs');
var GeoJSON = require('geojson');
var nrel = require("./lib/nrel-ev-station.js");

var evStations;
var evsTotalCount;
var evStationgeoJSON = {};

var NRELAPIKey = "";

if (process.argv.length !== 3 && NRELAPIKey === "") {
    console.log("    WARNING:");
    console.log("      No API Key provided, either specify the NREL API key on the command line,");
    console.log("      or popolate it in NRELAPIKey variable in index.js!");
    process.exit();
} else {

    if (NRELAPIKey === "") NRELAPIKey = process.argv[2];
    debug("Value of NREL API Key: " + NRELAPIKey);
    var evAPI = new nrel(NRELAPIKey);
}

// ---------------------------------------------------------------
// getAllStations
// Input: callback function cb
// Output: Callback Function returns evsTotalCount, evStations
//          evsTotalCount - Count of all Stations
//          evStations - an object containing all the stations
var getEVStationsData = function(evsTotalCount, evStations) {
    evStations = evStations;
    evsTotalCount = evsTotalCount;

    var data = GeoJSON.parse(evStations, {Point: ['latitude', 'longitude'], include: ['station_name', 'id', 'state', 'zip' ]});
    var data2write = JSON.stringify(data);
    debug("Received data from NREL, number of stations: " + evsTotalCount + " and number of objects in evstations is: " + evStations.length);
    fs.writeFileSync('./data/evstndata.json', data2write , 'utf-8'); 
};

evAPI.getAllStations(getEVStationsData);


