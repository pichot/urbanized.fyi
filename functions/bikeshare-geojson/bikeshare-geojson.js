const geojson = require('geojson')
const fetch = require('node-fetch')

exports.handler = async (event, context) => {
  const stationsUrl = event.queryStringParameters.stationsUrl
  const systemId = event.queryStringParameters.systemId

  let lastUpdated
  let stations

  try {
    const response = await fetch(stationsUrl)
    const json = await response.json()

    lastUpdated = json.last_updated || Date.now()
    stations = geojson.parse(json.data.stations, { Point: ['lat', 'lon'] })
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
      'Content-Disposition': `attachment; filename="${systemId}_${lastUpdated}.geojson"`
    },
    body: JSON.stringify({
      stations
    })
  }
}
