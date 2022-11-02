<template>
  <main class="page">
    <div class="hero">
      <h1>The Best Catalog Ever</h1>
      <h3>
        High performing catalog browsers use EverCatalog to browse products.
      </h3>

      <nuxt-link class="button cta-button" to="/catalog"
        >Browse Now</nuxt-link
      >
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
main {
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;

    h1 {
      margin-bottom: 1rem;
      font-weight: bold;
      color: #004751;
    }

    h3 {
      margin-bottom: 1rem;
    }

    .cta-button {
      font-size: 1.5rem;
    }
  }
}

@media only screen and (min-width: 768px) {
  main {
    .hero {
      padding-top: 5rem;
      padding-bottom: 5rem;
      padding-left: 5rem;
      padding-right: 5rem;
    }

    h1 {
      margin-bottom: 2rem;
    }

    h3 {
      margin-bottom: 2rem;
    }
  }
}
</style>
