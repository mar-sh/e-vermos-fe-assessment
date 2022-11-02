<template>
  <div class="page">
    <h2 class="page-title">The Catalog</h2>

    <hr />
    <div v-if="!loading" class="row">
      <div v-for="(product, i) in products" :key="product.id || i" class="item">
        <div class="wrapper">
          <product-card :product="product" />
        </div>
      </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'CategoryPage',

  components: {
    ProductCard,
  },

  data() {
    return {
      items: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
        { id: 4, name: 'D' },
        { id: 5, name: 'E' },
        { id: 6, name: 'F' },
      ],
    }
  },

  async fetch() {
    try {
      await this.fetchProducts()
    } catch (e) {
      this.$nuxt.error({
        statusCode: '500',
        message: 'Something has gone wrong',
      })
    }
  },

  computed: {
    ...mapState('products', ['products', 'loading']),
  },

  methods: {
    ...mapActions('products', ['fetchProducts']),
  },
}
</script>

<style lang="scss" scoped>
.page-title {
  line-height: 6rem;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .item {
    width: 100%;

    .wrapper {
      max-width: 100%;
      padding: 8px;
    }
  }
}

@media screen and (min-width: 576px) {
  .row {
    .item {
      width: 50%;
    }
  }
}

@media screen and (min-width: 768px) {
  .row {
    .item {
      width: 33.33%;
    }
  }
}

@media screen and (min-width: 1024px) {
  .row {
    .item {
      width: 25%;
    }
  }
}
</style>
