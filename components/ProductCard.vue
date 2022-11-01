<template>
  <div class="product-card">
    <figure class="product-media">
      <nuxt-link :to="`/product/${product.id}`">
        <img
          :src="product.image"
          :alt="product.title"
          width="100%"
          height="225"
        />
      </nuxt-link>
    </figure>

    <div ref="detail" class="product-details">
      <p class="product-name">
        <nuxt-link :to="`/product/${product.id}`">{{
          `title`
        }}</nuxt-link>
      </p>

      <div class="product-price">
        <span class="product-price-text">${{ product.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
  border-radius: 16px;
  padding: 15px;

  &:hover {
    box-shadow: 0 0 12px rgb(33 33 33 / 20%);
  }

  .product-media {
    display: flex;
    flex-grow: 1;
    align-items: center;
    margin: 8px auto;
    padding: 0 0.5rem;
    height: 225px;

    > img {
      display: block;
      height: inherit;
      max-width: 100%;
      max-height: inherit;
      object-fit: contain;
    }
  }

  .product-name {
    line-height: 2rem;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid rgba(225, 225, 225, 0.75);
    margin-bottom: 0.5rem;

    > a {
      color: initial;

      &:hover {
        color: #004751;
      }
    }
  }

  .product-price {
    text-align: center;
    font-weight: bold;
  }
}
</style>
