<template>
  <div>
    <input
      v-model="filterString"
      class="my-4 w-full border-b-2"
      placeholder="Search by system name or location"
    >
    <table class="table-fixed w-full">
      <thead class="text-left">
        <tr>
          <th class="px-2 py-2 w-2/5">
            System Name
          </th>
          <th class="px-2 py-2 w-2/5">
            Location
          </th>
          <th class="text-right px-2 py-2 w-1/5">
            Download
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="system in filteredSystems"
          :key="system['System ID']"
          class="even:bg-gray-200"
        >
          <td class="px-2">
            {{ system.Name }}
          </td>
          <td class="px-2">
            {{ system.Location }}
          </td>
          <td class="text-right px-2">
            <bikeshare-links
              :system-id="system['System ID']"
              :station-urls="system.stationUrls"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import systemsArray from '~/data/systems.json'
import BikeshareLinks from '~/components/BikeshareLinks'

export default {
  components: {
    BikeshareLinks
  },

  data () {
    return {
      systems: systemsArray,
      filterString: ''
    }
  },

  computed: {
    filteredSystems () {
      return this.systems.filter(
        s => RegExp(this.filterString, 'i').test(s.Name) || RegExp(this.filterString, 'i').test(s.Location)
      )
    }
  }
}
</script>
