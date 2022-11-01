<template>
  <div class="product-card">
    <figure class="product-media">
      <nuxt-link :to="`/product/${product.id}`">
        <img
          :src="product.image"
          :alt="product.title"
          width="225"
          height="225"
        />
      </nuxt-link>
    </figure>

    <div ref="detail" class="product-details">
      <h3 class="product-name">
        <nuxt-link :to="`/product/${product.id}`">{{
          product.title.slice(0, 15).concat('...')
        }}</nuxt-link>
      </h3>

      <div class="product-price">
        <span class="product-price-text">${{product.price}}</span>
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

  &:hover {
    box-shadow: 0 0 12px rgb(33 33 33 / 20%);
  }

  .product-media {
    display: flex;
    flex-grow: 1;
    align-items: center;
    margin: 8px auto;
    padding: 0 1rem;
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
    text-align: center;
  }

  .product-price {
    text-align: center;
  }
}
</style>
