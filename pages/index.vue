<template>
  <div>
    <h1 class="emoji">
      🗺
    </h1>
    <h1 class="text-4xl text-gray-800 leading-none">
      urbanized.fyi
    </h1>
    <h2 class="text-base text-gray-600">
      observatory of urban complexity
    </h2>
    <div class="links mt-6">
      <n-link
        to="/data/bikeshare"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Bikeshare station data
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'front'
}
</script>

<style scoped>
.emoji {
  font-size: 6rem;
}
</style>
