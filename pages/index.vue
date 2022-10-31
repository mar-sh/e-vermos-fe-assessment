<template>
  <main class="page">
    <div class="hero">
      <h1>The Best Catalog Ever</h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        adipisci et excepturi necessitatibus cumque voluptatum, sunt possimus,
        saepe numquam quod facere dignissimos.
      </h3>

      <button><nuxt-link to="/categories">Browse Now</nuxt-link></button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss">
main {
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;

    h1 {
      margin-bottom: 1rem;
    }

    h3 {
      margin-bottom: 1rem;
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
