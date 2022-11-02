<template>
  <div>
    <div class="main">
      <div class="page">
        <div class="error-page">
          <h2>{{ error.statusCode }}</h2>
          <p>{{ error.message }}</p>
          <nuxt-link class="button" to="/">Go to Home</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',

  props: {
    error: {
      type: Object,
      default: () => ({
        statusCode: '500',
        message: 'Ooopps! Something has gone wrong. Please try again later.',
      }),
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  .error-page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2,
    p {
      margin-bottom: 2rem;
    }

    p {
      font-size: 22px;
      font-weight: bold;
    }
  }
}
</style>
