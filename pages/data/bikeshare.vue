<template>
  <div>
    <h1 class="text-3xl">
      Download Bikeshare station data 🚲 🛴
    </h1>
    <p>
      Quickly download a geojson or csv of (most) active bikeshare stations in systems around the world.
      Useful for quickly mapping systems without having to parse GBFS yourself.
    </p>
    <p class="text-sm py-2 px-4 my-4 bg-yellow-100">
      List of systems is derived from the <code class="font-mono">systems.csv</code> list in the
      <a href="https://github.com/NABSA/gbfs">NABSA's official General Bikeshare Feed Specification repo</a>.
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
