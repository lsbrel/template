<script setup>
import { RouterView } from 'vue-router'
import Menu from './components/global/Menu.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <Menu></Menu>
        <RouterView />
      </div>
    </div>
  </div>
</template>
