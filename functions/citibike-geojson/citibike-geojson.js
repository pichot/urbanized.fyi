
const geojson = require('geojson');
const fetch = require('node-fetch');

const STATIONS_URL = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';

exports.handler = async (event, context) => {
  let last_updated;
  let stations;

  try {
    const response = await fetch(STATIONS_URL);
    const json = await response.json();

    last_updated = json.last_updated;
    stations = geojson.parse(json.data.stations, {Point: ['lat', 'lon']});

  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    headers: {
      'Content-type': 'application/json',
      'Content-Disposition': `attachment; filename="CitibikeStations_${last_updated}.geojson"`
    },
    body: JSON.stringify({
      stations
    }),
  }
}
