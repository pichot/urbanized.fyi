<template>
  <div>
    <h1 class="text-3xl">
      Download Bikeshare station data 🚲 🛴
    </h1>
    <p>
      Download a <span class="font-mono">geojson</span> or <span class="font-mono">csv</span> of bikeshare stations from systems around the world.
      Useful for quickly mapping and analyzing systems without having to parse GBFS yourself.
    </p>
    <p class="text-sm py-2 px-4 my-4 bg-yellow-100">
      The list of systems is fetched from the
      <a href="https://github.com/NABSA/gbfs">official General Bikeshare Feed Specification repo</a>.
    </p>
    <bikeshare-search />
  </div>
</template>

<script>
import BikeshareSearch from '~/components/BikeshareSearch.vue'

export default {
  components: {
    BikeshareSearch
  }
}
</script>
