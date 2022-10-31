<template>
  <div class="page-wrapper">
    <header-default></header-default>
    <nuxt></nuxt>
  </div>
</template>

<script>
import HeaderDefault from '@/components/HeaderDefault.vue'

export default {
  name: 'DefaultLayout',

  components: {
    HeaderDefault,
  },
}
</script>

<style lang="scss">

</style>
