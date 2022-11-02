<template>
  <div v-if="isLoading">
    <p class="loader-text">{{ `${text}...` }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingText',

  props: {
    isLoading: Boolean,
    text: {
      type: String,
      default: 'Loading',
    },
  },
}
</script>

<style lang="scss" scoped>
.loader-text {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
}
</style>
