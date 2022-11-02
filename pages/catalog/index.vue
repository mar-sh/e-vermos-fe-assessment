<template>
  <div class="page">
    <h2 class="page-title">The Catalog</h2>

    <hr />
    <template v-if="!loading">
      <div class="row">
        <div
          v-for="(product, i) in products"
          :key="product.id || i"
          class="item"
        >
          <div class="wrapper">
            <product-card :product="product" />
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <loading-text :is-loading="loading" />
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import ProductCard from '@/components/ProductCard'
import LoadingText from '@/components/LoadingText'

export default {
  name: 'CategoryPage',

  components: {
    ProductCard,
    LoadingText,
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
      padding: 12px;
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
