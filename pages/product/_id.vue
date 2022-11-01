<template>
  <div>
    Product Page: {{ $route.params.id }}

    <div style="display: flex">
      <!-- Left -->
      <div>
        <figure>
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            width="100"
            height="100"
          />
        </figure>
      </div>

      <!-- Right -->
      <div style="display: flex; flex-direction: column">
        <h1>Product Title</h1>

        <p>Product description</p>

        <p>Product Price</p>

        <div>Variant Selector</div>

        <button>Add to Cart</button>
        <p>Some notice</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
}
</script>

<style></style>
