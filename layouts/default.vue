<template>
  <div class="container mx-auto px-16">
    <top-nav />
    <nuxt />
    <urbanized-footer />
  </div>
</template>

<script>
import UrbanizedFooter from '~/components/UrbanizedFooter'
import TopNav from '~/components/TopNav'

export default {
  components: {
    UrbanizedFooter,
    TopNav
  }
}
</script>
