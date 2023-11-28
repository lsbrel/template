<script setup>
import { RouterView } from 'vue-router'
import Menu from './components/global/Menu.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <!-- MENU FIXO -->
        <Menu></Menu>
      </div>
      <!-- PAGINAS -->
      <div class="col-sm-12">
        <router-view v-slot="{ Component }">
          <transition>
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
