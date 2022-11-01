<template>
  <div class="page">
    <div class="page-nav">
      <nuxt-link to="/categories">⬅ <span>Back to Catalog</span></nuxt-link>
    </div>

    <div class="product-details">
      <!-- Left -->

      <figure class="product-details-image">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          width="100%"
          height="100%"
        />
      </figure>

      <!-- Right -->
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

        <button class="button">Get product</button>
      </div>
    </div>
  </div>
</template>

<script>
import InputTabs from '@/components/InputTabs'

export default {
  name: 'ProductPage',

  components: {
    InputTabs,
  },

  data() {
    return {
      product: {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 },
      },
      variants: [
        { name: 'Variant 1', value: '1', multiplier: 1 },
        { name: 'Variant 2', value: '2', multiplier: 1.1 },
      ],
      selectedVariant: null,
    }
  },

  computed: {
    itemPrice() {
      return Math.round(this.product?.price * this.selectedVariant?.multiplier || 1, 0);
    },
  },

  methods: {
    getSelectedVariant(variant) {
      console.log(variant, 'variant')
      this.selectedVariant = variant
    },
  },
}
</script>

<style lang="scss">
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
    margin: 12px auto;
    height: 500px;
    border-radius: 12px;
    margin-bottom: 3rem;

    > img {
      display: block;
      height: inherit;
      max-width: 100%;
      max-height: inherit;
      object-fit: contain;
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
      padding: 1rem;
      text-transform: uppercase;
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
    }

    .product-details-info {
      padding: 2rem;
      flex-basis: 50%;
    }
  }
}
</style>
