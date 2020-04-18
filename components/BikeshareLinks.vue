<template>
  <div class="my-2 block">
    <a
      :href="csvLink(stationUrls[0].url)"
      class="mr-2 px-2 py-1 bg-blue-500 text-xs text-white rounded-full leading-none"
    >
      csv
    </a>

    <a
      :href="geojsonLink(stationUrls[0].url)"
      class="px-2 py-1 bg-blue-500 text-xs text-white rounded-full leading-none"
    >
      geojson
    </a>
  </div>
</template>

<script>
export default {
  props: {
    systemId: {
      type: String,
      required: true
    },
    stationUrls: {
      type: Array,
      required: true
    }
  },

  computed: {
    languages () {
      return this.stationUrls.map(s => s.language)
    },
    isMultilingual () {
      return this.languages.length > 1
    }
  },

  methods: {
    geojsonLink (stationsUrl) {
      return `/.netlify/functions/bikeshare-geojson?systemId=${this.systemId}&stationsUrl=${stationsUrl}`
    },
    csvLink (stationsUrl) {
      return `/.netlify/functions/bikeshare-csv?systemId=${this.systemId}&stationsUrl=${stationsUrl}`
    }
  }
}
</script>
