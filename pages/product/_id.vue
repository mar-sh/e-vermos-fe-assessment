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

        <b class="product-price">${{ product.price }}</b>

        <div>Variant Selector</div>

        <button class="button">Get product</button>

        <p>Some notice</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',

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
    }
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
      margin-bottom: 1.2rem;
    }

    .product-title {
      font-size: 40px;
      margin-bottom: 1.2rem;
    }

    .product-description {
      font-weight: 500;
      line-height: 1.2;
    }

    .product-price {
      font-weight: bold;
    }
  }
}

@media screen and (min-width: 1024px) {
  .product-details {
    flex-direction: row;

    .product-details-image {
      flex-basis: 50%;
    }

    .product-details-info {
      flex-basis: 50%;
    }
  }
}
</style>
