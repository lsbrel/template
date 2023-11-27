<script>
import ItemPequeno from '../carousel/Item-pequeno.vue'
import ItemMedio from '../carousel/Item-medio.vue'

export default {
  components: {
    ItemPequeno,
    ItemMedio
  },
  data() {
    return {}
  }
}
</script>
<template>
  <div class="carousel d-flex flex-row w-100 p-4 gap-2 mt-2">
    <!-- ITEM MEDIO -->
    <ItemMedio />
    <!-- ITEM PEQUENO -->
    <ItemPequeno />
  </div>
</template>
<style>
.carousel {
  height: 80vh;
  transition: all 0.2s;
  overflow-x: hidden !important;
}
.carousel div:hover {
  transform: scale(1.005);
  transition: all 0.2s;
}
</style>
