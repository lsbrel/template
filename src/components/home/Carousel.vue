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
  <div class="container-fluid">
    <div class="row p-4 justify-content-lg-between">
      <div class="col-12 col-lg-6">
        <!-- ITEM MEDIO -->
        <ItemMedio />
      </div>
      <div class="col-12 col-lg-6">
        <ItemPequeno />
      </div>
      <!-- ITEM PEQUENO -->
      <!-- </div> -->
    </div>
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
