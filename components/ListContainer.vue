<template>
  <div class="row">
    <div v-for="(item, i) in items" :key="item.id || i" class="item">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListContainer',

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .item {
    width: 100%;
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
