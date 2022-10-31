<template>
  <div>
    Category Page

    <list-container :items="items"> </list-container>
  </div>
</template>

<script>
import ListContainer from '@/components/ListContainer.vue'

export default {
  name: 'CategoryPage',

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

  components: {
    ListContainer,
  },
}
</script>

<style></style>
