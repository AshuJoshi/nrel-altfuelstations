# NREL Alternative Fuel Station Access

An application to access data on alternative fuel stations using the NREL API.

## Getting Started

1. Clone the repository
2. You will have to create a "data" subdirectory in the root of your project. This is where the application stores the received data as a json file.
3. Run "npm install" to install the required packages.
4. Get an API key (see below)
5. Populate API Key either in index.js or provide on command line
6. To run: "node index.js [API Key if not in index.js]"
7. Saves a JSON file with all the station data in the "data" subdirectory

### Prerequisites

You need to get an API Key from NREL here: https://developer.nrel.gov/signup/

### Changelog

V1.0.0: First version, pretty much hardcoded. Gets only Electric Charging stations data in JSON format.