<template>
  <div class="page">
    <div class="page-nav">
      <nuxt-link to="/catalog">⬅ <span>Back to Catalog</span></nuxt-link>
    </div>

    <template v-if="!loading">
      <div class="product-details">
        <!-- Image -->
        <figure class="product-details-image">
          <img :src="product.image" width="100%" height="100%" />
        </figure>

        <!-- Info -->
        <div class="product-details-info">
          <h1 class="product-title">{{ product.title }}</h1>

          <p class="product-description">{{ product.description }}</p>

          <b class="product-price">${{ itemPrice }}</b>

          <div style="width: 100%">
            <input-tabs
              :tabs="variants"
              :starting-index="0"
              @input="getSelectedVariant"
            />
          </div>

          <button class="button" @click="getItem">Get Product</button>
        </div>
      </div>
    </template>

    <template v-else>
      <loading-text :is-loading="loading" />
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import InputTabs from '@/components/InputTabs'
import LoadingText from '@/components/LoadingText'

export default {
  name: 'ProductPage',

  components: {
    InputTabs,
    LoadingText,
  },

  data() {
    return {
      variants: [
        { name: 'Variant 1', value: '1', multiplier: 1 },
        { name: 'Variant 2', value: '2', multiplier: 1.2 },
      ],
      selectedVariant: null,
    }
  },

  async fetch() {
    try {
      const id = this.$route.params.id

      await this.fetchProduct(id)
    } catch (error) {
      this.$nuxt.error({
        statusCode: '500',
        message: 'Something has gone wrong. Please try again later',
      })
    }
  },

  computed: {
    ...mapState('product', ['product', 'loading']),

    itemPrice() {
      return Math.round(
        this.product?.price * this.selectedVariant?.multiplier || 1,
        0
      )
    },
  },

  methods: {
    ...mapActions('product', ['fetchProduct']),

    getSelectedVariant(variant) {
      this.selectedVariant = variant
    },

    getItem() {
      alert(
        `Product: ${this.product.title} \nVariant: ${this.selectedVariant?.name}\nPrice: $${this.itemPrice}`
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.page-nav {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}

.product-details {
  display: flex;
  flex-direction: column;

  .product-details-image {
    align-items: center;
    display: flex;
    margin: 0 12px auto;
    height: 450px;
    margin-bottom: 3rem;

    > img {
      display: block;
      border-radius: 16px;
      height: inherit;
      max-width: 100%;
      object-fit: fill;
    }
  }

  .product-details-info {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 16px;
    padding: 1rem;

    h1,
    p,
    b,
    div,
    button {
      margin-bottom: 1.5rem;
    }

    .product-title {
      font-size: 40px;
    }

    .product-description {
      font-weight: 500;
      line-height: 1.2;
    }

    .product-price {
      font-weight: bold;
    }

    .button {
      padding: 0.5rem;
      font-size: 18px;
      font-weight: bold;
    }
  }
}

@media screen and (min-width: 1024px) {
  .product-details {
    flex-direction: row;
    align-items: flex-start;

    .product-details-image {
      flex-basis: 50%;
      height: 600px;
    }

    .product-details-info {
      padding: 2rem;
      flex-basis: 50%;
    }
  }
}
</style>
