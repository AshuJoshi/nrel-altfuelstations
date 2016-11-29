// File to get the EV Charging Stations using
// the NREL API

var rp = require('request-promise');
var debug = require('debug')('nrel-ev');
var NRELAPIKey;

const BASE_URL_JSON = "https://api.data.gov/nrel/alt-fuel-stations/v1.json";

var evstations = function(apiKey) {
    NRELAPIKey = apiKey;
};

// Call Format
// 'https://api.data.gov/nrel/alt-fuel-stations/v1.json?limit=1&api_key=YOUR_KEY_HERE'

// getAllStations
// Input: callback function cb
// Output: Callback Function returns evsTotalCount, evStations
//          evsTotalCount - Count of all Stations
//          evStations - an object containing all the stations 
evstations.prototype.getAllStations = function(cb) {
    var evStations;
    var evsTotalCount;

    var options = {  
        method: 'GET',
        uri: BASE_URL_JSON,
        qs: {
            fuel_type: 'ELEC',
            api_key: NRELAPIKey
        }
    };

    rp(options)  
        .then(function (response) {
            // Handle the response
            var tmp = JSON.parse(response);
            debug("Successfully received stations data from NREL");
            evStations = tmp.fuel_stations;
            evsTotalCount = tmp.total_results;
            cb(evsTotalCount, evStations);

        })
        .catch(function (err) {
            // Deal with the error
        });
};

module.exports = evstations;