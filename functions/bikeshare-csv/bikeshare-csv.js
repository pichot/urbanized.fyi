const fetch = require('node-fetch')
const jsonexport = require('jsonexport')

exports.handler = async (event, context) => {
  const stationsUrl = event.queryStringParameters.stationsUrl
  const systemId = event.queryStringParameters.systemId

  let lastUpdated
  let stations

  try {
    const response = await fetch(stationsUrl)
    const json = await response.json()

    lastUpdated = json.last_updated || Date.now()
    await jsonexport(json.data.stations, function (err, csv) {
      if (err) {
        return {
          statusCode: err.statusCode || 500,
          body: JSON.stringify({
            error: err.message
          })
        }
      }
      stations = csv
    })
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
      'Content-type': 'text/csv',
      'Content-Disposition': `attachment; filename="${systemId}_${lastUpdated}.csv"`
    },
    body: stations
  }
}
