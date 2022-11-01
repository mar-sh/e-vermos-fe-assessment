<template>
  <div>
    <h2>The Catalog</h2>
    <p>Browse selections</p>
    <hr />
    <div class="row">
      <div v-for="(item, i) in items" :key="item.id || i" class="item">
        <div class="wrapper">
          <product-card />
        </div>
      </div>
    </div>
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

  computed: {
    ...mapState('products', ['products', 'loading']),
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    ...mapActions('product', ['fetchProduct']),
  },

  async mounted() {
    await this.fetchProduct(1)
  },
}
</script>

<style lang="scss">
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #f4f7f9;

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
