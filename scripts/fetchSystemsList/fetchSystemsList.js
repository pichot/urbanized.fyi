const fs = require('fs')
const csvtojson = require('csvtojson')
const axios = require('axios')

const GBFS_SYSTEMS = 'https://raw.githubusercontent.com/NABSA/gbfs/master/systems.csv'

async function fetchSystemsList () {
  try {
    const csv = await axios.get(GBFS_SYSTEMS)
    const allSystems = await csvtojson().fromString(csv.data)

    const systemsWithStations = allSystems.map(async (s) => {
      try {
        const gbfs = await axios.get(s['Auto-Discovery URL'])
        const data = gbfs.data.data

        const languages = Object.keys(data)
        const stationInformation = data[languages[0]].feeds.find(f => f.name === 'station_information')
        const hasStation = !!stationInformation

        if (hasStation) {
          const stationUrls = languages.map((language) => {
            return {
              language,
              url: data[language].feeds.find(f => f.name === 'station_information').url
            }
          })

          return {
            ...s,
            stationUrls
          }
        } else {
          return null
        }
      } catch (err) {
        return null
      }
    })

    const results = await Promise.all(systemsWithStations)

    fs.writeFileSync('data/systems.json', JSON.stringify(results.filter(x => x)))
  } catch (err) {
    console.log(err)
  }
}

fetchSystemsList()
